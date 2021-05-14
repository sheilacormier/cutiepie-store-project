from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Define association tables to create a many to many for the wishlist
wishlist_productDetails = db.Table('user_productDetails', db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('productDetails_id', db.Integer, db.ForeignKey('productDetails.id'), primary_key=True)
)


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    photo_url = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    productDetails = db.relationship("productDetails", secondary=wishlist_productDetails)
    customer_id = db.Column(db.Integer, db.ForeignKey('productDetails.id'))    

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "wishlist_users": list(map(lambda x: x.serialize(), self.users)),
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    __tablename__ = 'productDetails'
    # Here we define columns for the Products  
    id = db.Column(db.Integer, primary_key=True)
    # relationship for the product for user
    user = db.relationship("Users", backref='customer', lazy=True)
    brand = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120))
    price = db.Column(db.String(50))
    color = db.Column(db.String(50))
    size = db.Column(db.String(50))
    img = db.Column(db.String(50))
    description = db.Column(db.String(800))       
    url = db.Column(db.String(800))     

    def __repr__(self):
        return '<Product %r>' % self.name
    
    def serialize(self):
        return {
            "id": self.id,
            "brand": self.brand,
            "title": self.title,
            "price": self.price,
            "color": self.color,
            "size": self.size,                    
            "img": self.img,
            "description": self.description,
            "url": self.url,
        } 
