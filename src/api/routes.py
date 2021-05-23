"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from cloudinary.uploader import upload
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)

# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


# generate sitemap with all your endpoints
@api.route('/')
def sitemap():
    return generate_sitemap(app)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    if user is None or password != user.password:
        return jsonify({"msg": "Incorrect username or password"}), 401

    access_token = create_access_token(identity=email)
    payload = {
        'token': access_token,
        'user': user.serialize()
    }
    return jsonify(payload), 200


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/validate", methods=["GET"])
@jwt_required()
def validate_token():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    payload = {
        'logged_in_as': current_user,
        'msg': 'The token is valid.',
        'user': user.serialize()
    }
    return jsonify(payload), 200


# Protect a route with jwt_required
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify({
        "logged_in_as": current_user,
        "msg": "Access Granted to Private route"
    }), 200


#Endpoint to retrieve one user by ID
@api.route('/user/<int:id>', methods=['GET'])
def get_one_user(id):
    users = User.query.get(id)
    users = user.serialize()
    # users = users.serialize()
    return jsonify(users), 200


#Endpoint updates the user's information by ID
@api.route('/user', methods=['PUT']) 
def update_user():
        
    # user = User.query.get(id)
    email = request.form.get('email', None)
    password = request.form.get('password', None)
    photo = request.files['photo']

    # if params are empty, return a 400
    if not email:
        return jsonify({"msg": "Missing email parameter"}), 400
    # if not password:
    #     return jsonify({"msg": "Missing password parameter"}), 400
    

    user = User.query.filter_by(email=email).first()
    user.email = email

    if password is not None:
        user.password = password
    
    # if there is no photo, just create update 
    if photo is not None:
        result = upload(photo)
        user.photo_url = result["secure_url"]
        
    db.session.commit()
    payload = {
        'msg': 'Profile successfully updated.',
        'user': user.serialize()
    }

    return jsonify(payload),200

#Endpoint updates the user's wishlist by ID
@api.route('/user/wishlist/<int:user_id>', methods=['PUT']) 
@jwt_required()
def update_user_wishlist(user_id):
    # CHECK IF RESP IS JSON
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400 

    user = User.query.get(user_id)
    products = Product.query.all()
    wishlist = request.json.get('wishlist', None)

    # if params are empty, return a 400
    if wishlist is None:
        return jsonify({"msg": "Missing wishlist parameter"}), 400

    try:
        user.wishlist = []

        for product in wishlist:
            current = Product.query.get(product['id'])
            user.wishlist.append(current)
        
    except Exception as e:
        return jsonify({
            "msg": "Couldn't update wishlist",
            "error": e
            }), 409

    db.session.commit()

    payload = {
        'msg': 'Wishlist successfully updated.',
        'user': user.serialize()
    }

    return jsonify(payload),200


#Endpoint to add users
@api.route('/user', methods=['POST'])
def create_person():
        body = request.get_json() # get the request body content
        if body is None:
            return "The request body is null", 400
        if 'email' not in body:
            return 'You need to specify the email',400
        if 'password' not in body:
            return 'You need to enter a password', 400

        return "ok", 200



# --------------Product Routes---------------


#Endpoint to retrieve products
@api.route('/product', methods=['GET'])
def select_product():
    product = Product.query.all()
    response_body = {
        "products": list(map(lambda x: x.serialize(), product))
    }
    return jsonify(response_body), 200 


#Endpoint to add products
@api.route('/product', methods=['POST'])
def create_product():
        body = request.get_json() # get the request body content
        if body is None:
            return "The request body is null", 400
        if 'brand' not in body:
            return 'You need to specify the brand',400
        if 'title' not in body:
            return 'You need to enter a title', 400  

        return "ok", 200


#Endpoint to delete products
@api.route("/product/<int:id>", methods=["DELETE"])
def product_delete(id):
    product = Product.query.get(id)
    db.session.delete(product)
    db.session.commit()

    return "Product was successfully deleted"




