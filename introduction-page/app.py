from comment import *
import pymongo
import json
import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, jsonify, url_for
app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))

client = pymongo.MongoClient(
    os.environ['key'])
db = client.dbsparta

app.add_name


@app.route('/')
def home():
    return render_template('leo.html')


@app.route("/comment", methods=["POST"])
def comment_post():
    uuid_receive = request.form['uuid_give']
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']
    comment_post_service(uuid_receive, name_receive, comment_receive)
    return jsonify({'msg': '작성 완료!'})


@app.route("/comment", methods=["PATCH"])
def comment_update():
    uuid_receive = request.form["uuid_give"]
    name_receive = request.form["name_give"]
    comment_receive = request.form["comment_give"]
    comment_update_service(uuid_receive, name_receive, comment_receive)
    return jsonify({"msg": "수정 완료!"})


@app.route("/comment", methods=["DELETE"])
def comment_delete():
    uuid_receive = request.form["uuid_give"]
    comment_delete_service(uuid_receive)
    return jsonify({"msg": "삭제 완료!"})


@app.route("/comment", methods=["GET"])
def comment_get():
    post_list = list(db.comment.find({}, {'_id': False}))

    return jsonify({"post": post_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
