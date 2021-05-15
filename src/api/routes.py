"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from cloudinary.uploader import upload
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


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
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username).first()
    if user is None or password != user.password:
        return jsonify({"msg": "Incorrect username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

#Endpoint to retrieve all users
@api.route('/user', methods=['GET'])
def handle_users():
    users = User.query.all()
    response_body = {
        "msg": "These are all users",
        "users": list(map(lambda x:x.serialize(),users))
    }
    return jsonify(response_body), 200

#Endpoint to post users
@api.route('/user', methods=['POST'])
def post_users():
    users = User.query.all()
    response_body = {
        "msg": "new user",
        "users": list(map(lambda x:x.serialize(),users))
    }
    return jsonify(response_body), 200


#Endpoint to add to wishlist
@api.route('/user', methods=['PUT']) 
def update_user_wishlist():
    email = request.json.get("email", None)
    resource_id = email = request.json.get("email", None)
    resource_type = email = request.json.get("type", None)

# Test presence of variables
    if user_email is None:
        return jsonify({"msg": "Missing required user_email"}), 401
    if resource_id is None:
        return jsonify({"msg": "Missing required resource id"}), 401
    if resource_type is None:
        return jsonify({"msg": "Missing required resource type"}), 401

# Use of variables
    user = User.query.get(user_email)

    if user is None:
        return jsonify({"msg": "Could not find specified user"}), 404

    if resource_type == "product":
        resource = Product.query.get(resource_id)
        user.product.append(resource) 

    db.session.commit()                   
    
    response_body = {
        "msg": "Resource added successfully",
        "user": user.serialize()
    }

# --------------Product Routes---------------

#Endpoint to fetch products
@api.route('/product', methods=['GET'])
def get_product():
    product = Product.query.all()
    response_body = {
        "products": list(map(lambda x: x.serialize(), product))
    }
    return jsonify(response_body), 200 


#Endpoint to add products
@api.route('/product', methods=['POST'])
def add_product():
    product = Product.query.all()
    response_body = {
        "products": list(map(lambda x: x.serialize(), product))
    }
    return jsonify(response_body), 200


#Endpoint to delete products
@api.route('/product', methods=['DELETE'])
def delete_product():
    product = Product.query.all()
    response_body = {
        "products": list(map(lambda x: x.serialize(), product))
    }
    return jsonify(response_body), 200 


