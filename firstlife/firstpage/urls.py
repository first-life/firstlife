from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings

from . import views

app_name='firstpage'
urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^algorithms/(?P<algorithm>.+)/$', views.algorithms, name='chart'),
    url(r'^introductions/(?P<introduction>.+)/$', views.introductions),
    url(r'^chart$', views.chart),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
