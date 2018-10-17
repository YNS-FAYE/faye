FAYE 3.1416:
Face recognition using AI
for YNS Employees
This project will use django rest api for backend and react js for frontend with implementation of neural network.

# How to Install

Python 3 and [Pipenv](https://docs.pipenv.org/) need to already be installed. If you need more complete local dev instructions, [see here](https://djangoforbeginners.com/initial-setup/).

Clone the repo to your computer

```
$ git clone https://github.com/YNS-FAYE/faye.git
$ cd yns-faye
```

## Backend

Install the `Pipenv` packages and start a new shell. Then `cd` into the `backend` directory and run the local server.

```
$ cd backend
$ pipenv install
$ pipenv shell
(backend) $ ./manage.py runserver
```

You can see the API now at [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api).

## Frontend

Open up a new command line console so there are now **two** open. Navigate to the `frontend` directory.

```
$ cd ~/Desktop
$ cd yns-faye
$ cd frontend
```

Make sure React is already installed globally. If not `$ npm install -g create-react-app`.

Then install necessary packages and start the React server:

```
$ npm install
$ npm start
```

Navigate to [http://localhost:3000/](http://localhost:3000/) to see a list of our DRF backend content outputted using React.
