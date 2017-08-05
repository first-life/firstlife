from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Algorithm

def index(request):
    algorithms = Algorithm.objects.all()
    context = {'algorithms':algorithms}

    return render(request, 'firstpage/index.html', context)

def algorithms(request, algorithm):
    algorithms = Algorithm.objects.filter(name=algorithm)
    context = {'algorithms':algorithms}

    return render(request, 'firstpage/algorithm.html', context)

def introductions(request, introduction):
    algorithms = Algorithm.objects.filter(name=introduction)
    context = {'algorithms':algorithms}
    # s += introduction
    return render(request, 'firstpage/introduction.html', context)
    # return HttpResponse(s)
