FAYE 3.1416:
Face recognition using AI
for YNS Employees

This project will use django rest api for backend and react js for frontend with implementation of neural network.

# How to Install

Python 3 https://www.python.org/downloads/windows/ check for x86-64 executable installer for 64 bit and for 32 bit x86

Note: if not in your environmental variables, Locate your python path for example: C:\Users\YNS\AppData\Local\Programs\Python\Python37 and also C:\Users\YNS\AppData\Local\Programs\Python\Python37\Scripts

Clone the repo to your computer

```
$ git clone https://github.com/YNS-FAYE/faye.git
$ cd faye
```

## Backend
```
$ cd django
$ pip3 install pipenv
$ pipenv install
Note: if problem in pipenv install your python 3 is not configure well try running  pipenv --python <your python path> install
example: pipenv --python C:\Users\YNS\AppData\Local\Programs\Python\Python37\python.exe install
$ pipenv shell
(django-xxx) $ ./manage.py runserver or python manage.py runserver
```

You can see the API now at [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api).

## Frontend

Open up a new command line console so there are now **two** open. Navigate to the `reactjs` directory.

```
$ cd faye
$ cd reactjs
```

Make sure React is already installed globally. If not `$ npm install -g create-react-app`.

Then install necessary packages and start the React server:

```
$ npm install
$ npm start
```

Navigate to [http://localhost:3000/](http://localhost:3000/) to see a list of our DRF backend content outputted using React.
