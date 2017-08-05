from django.conf.urls import url
from . import views

app_name='firstpage'
urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^algorithms/(?P<algorithm>.+)/$', views.algorithms),
    url(r'^introductions/(?P<introduction>.+)/$', views.introductions),
]
