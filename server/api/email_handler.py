from flask import jsonify, Blueprint
from flask import Flask, request, json, jsonify, make_response
from database.models import user, receipt, picture
from config import SENDGRID_API_KEY, SENDER_EMAIL
import base64
import csv
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import (
    Mail, Attachment, FileContent, FileName,
    FileType, Disposition, ContentId)

email_handler = Blueprint('email_handler', __name__)


@email_handler.route('/sendEmail', methods=['GET'])
def sendEmail():
    month = int(request.args.get('month'))
    year = int(request.args.get('year'))
    if month == None and year == None:
        responseObject = {
            'status': 'fail',
            'message': 'Please enter required parameters'
        }
        return make_response(jsonify(responseObject)), 400
    else:
        auth_token = request.headers.get("auth_token")
        auth = user.decode_auth_token(auth_token)
        userid = auth['user_id']
        user_email = auth['email']
    data = receipt.objects(user_id=userid)
    response = filter(lambda item: item.receipt_date.month ==
                      month and item.receipt_date.year == year, data)
    new_data = []
    total = 0
    for doc in response:
        date_str = str(doc.receipt_date.year) + '-' + \
            str(doc.receipt_date.month) + \
            '-'+str(doc.receipt_date.day)
        total += doc.amount
        dic = {
            'receipt_date': date_str,
            'picture_url': doc.picture_url,
            'title': doc.title,
            'amount': doc.amount,
            'category': doc.category,
        }
        new_data.append(dic)
    headers = new_data[0].keys()
    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=user_email,
        subject='Report from Receipt Tracker',
        html_content='<p>Dear User,<br/><br/>This email has attached report for the requested month and year.<br/>We really appreciate your bussiness and always looking for your feedback to improove our service.<br/><br/>Have a great day!</p>'
    )
    with open('myFile.csv', 'w', newline="") as f:
        dict_writer = csv.DictWriter(f, headers)
        dict_writer.writeheader()
        for dic in new_data:
            dict_writer.writerow(dic)
        dict_writer.writerow(
            {'receipt_date': '', 'picture_url': '', 'title': '', 'amount': '', 'category': ''})
        dict_writer.writerow(
            {'receipt_date': '', 'picture_url': '', 'title': 'Total', 'amount': total, 'category': ''})
    with open('myFile.csv', 'r') as fi:
        generated_file = fi.read()
        x = generated_file.encode()
        fi.close()

    encoded = base64.b64encode(x).decode()
    attachment = Attachment()
    attachment.file_content = FileContent(encoded)
    attachment.file_type = FileType('text/csv')
    attachment.file_name = FileName('myFile.csv')
    attachment.disposition = Disposition('attachment')
    attachment.content_id = ContentId('Content ID')
    message.attachment = attachment

    try:
        sg = SendGridAPIClient(api_key=SENDGRID_API_KEY)
        response = sg.send(message)
        os.remove('myFile.csv')
        print(response.status_code)
        responseobj = {
            "status": "success",
            "message": "Email successfully sent"}
        return make_response(jsonify(responseobj)), 201
    except Exception as e:
        print(e)
        errResponse = {
            "status": "fail",
            "message": "Something went wrong, unable to send email"}
        return make_response(jsonify(errResponse)), 500
