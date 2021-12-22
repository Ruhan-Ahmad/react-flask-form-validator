from flask import Flask,request,json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/login", methods=["POST"])
def login():
    re_data = json.loads(request.data)
    email = re_data["email"]
    password = re_data["password"]
    return {"login":"login", "msg":"LOGIN SUCCESSFULLY! (This Text Send By Server)"}

@app.route("/signup", methods=["POST"])
def signup():
    req_data = json.loads(request.data)
    firstName = req_data["firstName"]
    lastName = req_data["lastName"]
    email = req_data["email"]
    password= req_data["password"]
    print(firstName, lastName,email,password)
    return {"signup":"signup", "msg" : "SIGNUP SUCCESSFULLY! (This Text Send By Server)"}
if __name__ == "__main__":
    app.run(debug=True)