from flask import jsonify, Blueprint
from flask import Flask, request, json, jsonify, make_response
from database.models import user, receipt, picture
import datetime

topCategories_handler = Blueprint('topCategories_handler', __name__)


@topCategories_handler.route('/topCategories', methods=['GET'])
def topCategories():

    auth_token = request.headers.get("auth_token")
    token = user.decode_auth_token(auth_token)
    userid = token['user_id']

    if not receipt.objects(user_id=userid):
        responseObject = {
            'status': 'success',
            'topCategory': [{'name': 'Food and Drinks', 'total': 0}, {'name': 'Shopping', 'total': 0}, {'name': 'Grocery', 'total': 0}]
        }
        return make_response(jsonify(responseObject)), 201
    else:
        data = receipt.objects(user_id=userid)
        current_year = datetime.date.today().year
        # filtering receipts by current year
        filtered_yearly = filter(
            lambda item: item.receipt_date.year == current_year, data)

        food_drinks_amt = 0
        food_count = 0
        travel_amt = 0
        travel_count = 0
        shopping_amt = 0
        shopping_count = 0
        services_amt = 0
        services_count = 0
        other_amt = 0
        other_count = 0
        grocery_amt = 0
        grocery_count = 0
        business_amt = 0
        business_count = 0

        for doc in filtered_yearly:

            if doc.category == "Food and Drinks":
                food_count += 1
                food_drinks_amt += doc.amount
            elif doc.category == "Travel":
                travel_count += 1
                travel_amt += doc.amount
            elif doc.category == "Shopping":
                shopping_count += 1
                shopping_amt += doc.amount
            elif doc.category == "Services":
                services_count += 1
                services_amt += doc.amount
            elif doc.category == "Other":
                other_count += 1
                other_amt += doc.amount
            elif doc.category == "Grocery":
                grocery_count += 1
                grocery_amt += doc.amount
            elif doc.category == "Business":
                business_count += 1
                business_amt += doc.amount
            else:
                pass

        class Category:
            def __init__(self, name, total, count):
                self.name = name
                self.total = total
                self.count = count

            def asdict(self):
                return {'name': self.name, 'total': self.total}

        c1 = Category('Food and Drinks', food_drinks_amt, food_count)
        c2 = Category('Travel', travel_amt, travel_count)
        c3 = Category('Shopping', shopping_amt, shopping_count)
        c4 = Category('Services', services_amt, services_count)
        c5 = Category('Other', other_amt, other_count)
        c6 = Category('Grocery', grocery_amt, grocery_count)
        c7 = Category('Business', business_amt, business_count)

        li = [c1, c2, c3, c4, c5, c6, c7]

        # key to sort the top three categories by most choosed category
        def e_sort(cat):
            return cat.count
        s_li = sorted(li, key=e_sort, reverse=True)
        top_3 = s_li[0:3]
        top_categories = [top_3[0].asdict(), top_3[1].asdict(),
                          top_3[2].asdict()]

        responseObject = {
            'status': 'success',
            'topCategory': top_categories
        }
        return make_response(jsonify(responseObject)), 201
