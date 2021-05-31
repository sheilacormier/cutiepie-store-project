"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from cloudinary.uploader import upload
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import smtplib, ssl, os, random, string
from email.mime.text import MIMEText
from werkzeug.security import check_password_hash, generate_password_hash

api = Blueprint('api', __name__)



#################### Handle/serialize errors like a JSON object ####################

@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


#################### generate sitemap with all your endpoints ####################

@api.route('/')
def sitemap():
    return generate_sitemap(app)


#################### Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT. ####################

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


#################### PROTECT a route with jwt_required, which will kick out 
# requests without a valid JWT present. ####################

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


#################### PROTECT a route with jwt_required ####################

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify({
        "logged_in_as": current_user,
        "msg": "Access Granted to Private route"
    }), 200


#################### Endpoint to RETRIEVE one user by ID ####################

@api.route('/user/<int:id>', methods=['GET'])
def get_one_user(id):
    users = User.query.get(id)
    users = user.serialize()
    # users = users.serialize()
    return jsonify(users), 200


#################### Endpoint UPDATES the user's information by ID ####################

@api.route('/user', methods=['PUT']) 
def update_user():

    # if params are empty, return a 400
    if 'email' not in request.form:
        return jsonify({"msg": "Missing email parameter"}), 400
        
    email = request.form['email']
    user = User.query.filter_by(email=email).first()

    if 'password' in request.form:
        password = request.form['password']
        user.password = password

    if 'newEmail' in request.form:
        new_email = request.form['newEmail']
        user.email = new_email
    
    if 'photo' in request.files:
        photo = request.files['photo']
        result = upload(photo)
        user.photo_url = result["secure_url"]
        
    payload = {
        'msg': 'Profile successfully updated.',
        'user': user.serialize()
    }
    db.session.commit()
    return jsonify(payload),200

#################### Reset Password ####################

@api.route("/reset", methods=["POST"])
def update_password():
    if request.method == "POST":
        # new_password = request.json.get("password")
        email = request.json.get("email")

        if not email:
            return jsonify({"msg": "Missing email in request."}), 400
        
        user = User.query.filter_by(email=email).first()
        
        # Create and set new password
        result_str = ''.join(random.choice(string.ascii_letters) for i in range(12))
        # new_password_hashed = generate_password_hash(result_str)

        user.password = result_str
        db.session.commit()        

        payload = {
            "msg": "Success. An email will be sent to your account with your temporary password."
        }

        try:
            message = '''\
A reset request was sent to our system. Please use the following password to login:
{0}

Thanks,
Cutie Pie
            '''.format(result_str)

            msg = MIMEText(message, 'plain')
            msg['Subject'] = "Password Reset Request"
            msg['From'] = "Cutie Pie"
            msg['To'] = email


            send_email(msg,email)
        except Exception as e:
            print(e)
            return jsonify({"msg": "Unable to send reset email."}), 400

        return jsonify(payload), 200


#################### Send Password Reset Email  ####################

def send_email(msg,email):
    port = 465  # For SSL
    password = os.environ.get('EMAIL_PASSWORD')
    email_account = os.environ.get('EMAIL_ACCOUNT')

    try:
        server=smtplib.SMTP('smtp.gmail.com:587')
        server.starttls()
        server.login(email_account,password)
        server.sendmail(msg['From'], msg['To'], msg.as_string())
        
    except Exception as e:
        # Print any error messages to stdout
        print(e)

    server.quit()            


#################### Endpoint UPDATES the user's wishlist by ID ####################

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


#################### Endpoint to ADD users ####################

@api.route('/user', methods=['POST'])
def create_person():
        body = request.json # get the request body content
        email = request.json.get('email')
        password = request.json.get('password')

        if body is None:
            return "The request body is null", 400
        if not email:
            return 'You need to specify the email',400
        if not password:
            return 'You need to enter a password', 400

        user = User(email=email,password=password,is_active=True)

        db.session.add(user)
        db.session.commit()
        payload = {
            'msg': 'Thank you for registering. Your account has been added successfully.',
            'user': user.serialize()
        }

        return jsonify(payload), 200



#################### PRODUCT ROUTES START ####################


#################### Endpoint to RETRIEVE products ####################

@api.route('/product', methods=['GET'])
def select_product():
    product = Product.query.all()
    response_body = {
        "products": list(map(lambda x: x.serialize(), product))
    }
    return jsonify(response_body), 200 


#################### Endpoint to add products ####################

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


#################### Endpoint to delete products ####################

@api.route("/product/<int:id>", methods=["DELETE"])
def product_delete(id):
    product = Product.query.get(id)
    db.session.delete(product)
    db.session.commit()

    return "Product was successfully deleted"






