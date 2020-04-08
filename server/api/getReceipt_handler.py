# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture


getReceipt_handler = Blueprint('getReceipt_handler',__name__)