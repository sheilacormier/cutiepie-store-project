from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Define association tables to create a many to many for the wishlist
wishlist_productDetails = db.Table('user_product', db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('product_id', db.Integer, db.ForeignKey('product.id'), primary_key=True)
)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    photo_url = db.Column(db.String(200), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    wishlist = db.relationship("Product", secondary=wishlist_productDetails)
        

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "wishlist": list(map(lambda x: x.serialize(), self.wishlist)),
            "photo_url": self.photo_url
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    # Here we define columns for the Products  
    id = db.Column(db.Integer, primary_key=True)
    # relationship for the product for user
    brand = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120))
    price = db.Column(db.String(50))
    color = db.Column(db.String(50))
    size = db.Column(db.String(50))
    img = db.Column(db.String(250))
    variants = db.relationship("Variant", backref='product',lazy=True)
    description = db.Column(db.String(250))       
    url = db.Column(db.String(250))     

    def __repr__(self):
        return '<Product %r>' % self.title
    
    def serialize(self):
        return {
            "id": self.id,
            "brand": self.brand,
            "title": self.title,
            "price": self.price,
            "variants": list(map(lambda x: x.serialize(), self.variants)),
            "color": self.color,
            "size": self.size,                    
            "img": self.img,
            "description": self.description,
            "url": self.url
        } 

class Variant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    color = db.Column(db.String(50), nullable=False)
    size = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String(250), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'),
        nullable=False)

    def __repr__(self):
        return '<Variant %r>' % self.id
    
    def serialize(self):
        return {
            "id": self.id,
            "color": self.color,
            "size": self.size,
            "img": self.img
        }