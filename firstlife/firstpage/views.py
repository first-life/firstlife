from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Algorithm

def index(request):
    supervised_algorithms = Algorithm.objects.filter(algorithm_type="supervised")
    unsupervised_algorithms = Algorithm.objects.filter(algorithm_type="unsupervised")
    context = {'supervised_algorithms':supervised_algorithms, 'unsupervised_algorithms':unsupervised_algorithms}

    return render(request, 'firstpage/index.html', context)

def algorithms(request, algorithm):
    algorithms = Algorithm.objects.filter(name=algorithm)

    algorithm = algorithms[0]

    context = {'algorithms':algorithms}

    return render(request, 'firstpage/algorithm.html', context)

def introductions(request, introduction):
    algorithms = Algorithm.objects.filter(name=introduction)
    context = {'algorithms':algorithms}
    # s += introduction
    return render(request, 'firstpage/introduction.html', context)
    # return HttpResponse(s)

def chart(request):

    return render(request, 'firstpage/chart.html')
