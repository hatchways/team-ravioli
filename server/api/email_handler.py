from flask import jsonify, Blueprint
from flask import Flask, request, json, jsonify, make_response
from database.models import user, receipt, picture
from config import SENDGRID_API_KEY
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

email_handler = Blueprint('email_handler', __name__)


@email_handler.route('/sendEmail', methods=['GET'])
def sendEmail():

    message = Mail(
        from_email='teamravioli6@gmail.com',
        to_emails='teamravioli6@gmail.com',
        subject='Sending test email',
        html_content='<strong>First setup test with Sendgrid email API.</strong>')
    try:
        sg = SendGridAPIClient(api_key=SENDGRID_API_KEY)
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)

    return make_response(jsonify(response.status_code)), 201
