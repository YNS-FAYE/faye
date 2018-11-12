from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from django.http import JsonResponse
# Create your views here.
def index(request):
    data = [
        {
        'id': 1,
        'title': 'Dave'
        },
        {
        'id': 2,
        'title': 'Pogi'
        },
    ]
    return JsonResponse(data, safe=False)