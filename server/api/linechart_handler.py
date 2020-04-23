# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json , make_response
from database.models import user,receipt,picture
import datetime
import pandas as pd
import calendar
from collections import OrderedDict

linechart_handler = Blueprint('linechart_handler',__name__)

def find_missing(lst):      
    return [x for x in range(1,13) if x not in lst]

# Create a route for '/getReceipts/<duration>'
@linechart_handler.route('/lineChart',methods=['GET'])
def linechart():
    auth_token=request.headers.get("auth_token")
    
    if not auth_token:    
        #data=receipt.objects(user_id=userid)
        responseObject = {
                'status': 'fail',
                'message': 'Something is wrong.'
            }
        return make_response(jsonify(responseObject)), 400
    else:
        auth=user.decode_auth_token(auth_token)
        userid=auth['user_id']
        data=receipt.objects(user_id=userid)
        data_len=len(list(data))
        
        if data_len==0:
            responseObject = {
            'status': 'success',
            'response':{'month':['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','DEC'],'amount':[0,0,0,0,0,0,0,0,0,0,0,0],'total':0}
            }
            return make_response(jsonify(responseObject)), 200

        else:
            now = datetime.datetime.now()
            amount=[]
            month=[]
            total=0

            for doc in data:

                if doc.receipt_date.year== now.year :
                    total=total+doc.amount
                    amount.append(doc.amount)
                    month.append(doc.receipt_date.month)
                    dictionary={'amount':amount,'month':month}
                    #print(dictionary)
            
            df=pd.DataFrame(dictionary)
            anc=df.groupby('month').amount.sum()
            df1=pd.DataFrame(anc)
            df1.reset_index(level=0, inplace=True)
            month_list=df1['month'].tolist()
            amount_list=df1['amount'].tolist()
            month_list1=[calendar.month_abbr[i] for i in month_list]
            mapping_dict=dict(zip(month_list1,amount_list))
            monthList=[calendar.month_abbr[i] for i in range(1,13)]
            result=OrderedDict()

            for month in monthList:
                if month in mapping_dict:
                    result[month]=mapping_dict[month]
                else:
                    result[month]=0
            print(total)
            response={'month':list(result.keys()),'amount':list(result.values()),'total':total}
            
            responseObject = {
                'status': 'success',
                'response':response
                }
            return make_response(jsonify(responseObject)), 200


