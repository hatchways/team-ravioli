# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture


getReceipts_handler = Blueprint('getReceipts_handler',__name__)