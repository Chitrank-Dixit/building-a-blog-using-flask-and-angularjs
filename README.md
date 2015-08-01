# building-a-blog-using-flask-and-angularjs
Source code of the application we are building on "Building a blog using Flask and AngularJS" tutorial series

# activate the virtualenv wrapper
$ source flask_venv/bin/activate

# setup database 
just run 

$ python db_create.py

# now run the server using 

$ python run.py

and after this run the client

$ bower install

then after installing all the bower components use

$ python -m SimpleHTTPServer 8000
