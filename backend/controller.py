
from flask import Blueprint, request
from datetime import datetime
import json

with open('searches.json', 'r') as f:
    searches = json.load(f)

searches_bp = Blueprint('searches_bp', __name__)

@searches_bp.get('/searches')
def get_searches():
    
    (offset, limit) = request.args.get(key='offset', default=0), request.args.get(key='limit', default=20)

    offset = int(offset)
    limit = int(limit)

    return list(searches)[offset:offset+limit]


@searches_bp.post('/search')
def creer_search():
    retour = {'error' : "Method not implemented"}

    return retour, 201

@searches_bp.put('/search/<string:id>')
def update_search(id):
    retour = {'error' : "Method not implemented"}

    return retour, 201

def delete_search(id):
    retour = {'error' : "Method not implemented"}

    return retour, 201

