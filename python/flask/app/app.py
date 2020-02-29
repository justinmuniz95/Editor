#!/usr/bin/env python
from flask import Flask, request, jsonify, render_template
from service import EditorService
from models import Schema
import os
import requests
import json

app = Flask(__name__, template_folder='../../../Html/')

app._static_folder = "../../../static/"



@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] =  "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    response.headers['Access-Control-Allow-Methods']=  "POST, GET, PUT, DELETE, OPTIONS"
    return response


@app.route("/")
def homePage():
    return render_template("onlineDocumentEditor.html")

@app.route("/editor", methods=["GET"])
def list_editor():
    return jsonify(EditorService().list())


@app.route("/editor", methods=["POST"])
def create_editor():
    return jsonify(EditorService().create(request.get_json()))


@app.route("/editor/<item_id>", methods=["PUT"])
def update_item(item_id):
    return jsonify(EditorService().update(item_id, request.get_json()))


@app.route("/editor/<item_id>", methods=["DELETE"])
def delete_item(item_id):
    return jsonify(EditorService().delete(item_id))


if __name__ == "__main__":
    Schema()
    app.run(debug=True, port=8888)
