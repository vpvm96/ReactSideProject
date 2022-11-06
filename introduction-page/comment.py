import json
from flask import Flask, render_template, request, jsonify, url_for
app = Flask(__name__)

import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

import pymongo

client = pymongo.MongoClient(os.getenv('key'))

db = client.dbsparta

def comment_post_service(uuid_receive, name_receive, comment_receive):
    doc = {
        "uuid": uuid_receive,
        "name": name_receive,
        "comment": comment_receive,
    }
    db.comment.insert_one(doc)
    return doc

def comment_update_service(uuid_receive, name_receive, comment_receive):
    db.comment.update_one(
        {"uuid": uuid_receive}, 
        {"$set":{
            "name": name_receive, 
            "comment": comment_receive
            } 
        }
    )

def comment_delete_service(uuid_receive):
    db.comment.delete_one({"uuid": uuid_receive})