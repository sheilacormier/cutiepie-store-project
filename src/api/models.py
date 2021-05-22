from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Define association tables to create a many to many for the wishlist
wishlist_productDetails = db.Table('user_product', db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('product_id', db.Integer, db.ForeignKey('product.id'), primary_key=True)
)

product_sizes = db.Table('sizes', db.Model.metadata,
    db.Column('product_id', db.Integer, db.ForeignKey('product.id'), primary_key=True),
    db.Column('size_id', db.Integer, db.ForeignKey('size.id'), primary_key=True)
)

product_colors = db.Table('colors', db.Model.metadata,
    db.Column('product_id', db.Integer, db.ForeignKey('product.id'), primary_key=True),
    db.Column('color_id', db.Integer, db.ForeignKey('color.id'), primary_key=True)
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
    img = db.Column(db.String(250))
    description = db.Column(db.String(250))       
    url = db.Column(db.String(250))
    colors = db.relationship("Color", backref="product", secondary=product_colors) 
    sizes = db.relationship("Size", secondary=product_sizes) 

    def __repr__(self):
        return '<Product %r>' % self.title
    
    def serialize(self):
        return {
            "id": self.id,
            "brand": self.brand,
            "title": self.title,
            "price": self.price,
            "colors": list(map(lambda x: x.serialize(), self.colors)),
            "sizes": list(map(lambda x: x.serialize(), self.sizes)),
            "img": self.img,
            "description": self.description,
            "url": self.url
        } 

class Size(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return '<Size %r>' % self.size
    
    def serialize(self):
        return {
            "id": self.id,
            "size": self.size,
        }

class Color(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    color = db.Column(db.String(25), nullable=False)
    img = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return '<Color %r>' % self.color
    
    def serialize(self):
        return {
            "id": self.id,
            "color": self.color,
            "img": self.img
        }