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
        {"$set": {
            "name": name_receive,
            "comment": comment_receive
        }
        }
    )


def comment_delete_service(uuid_receive):
    db.comment.delete_one({"uuid": uuid_receive})
