from django.contrib import admin

# Register your models here.
from .models import Algorithm, Recommend
admin.site.register(Algorithm)
admin.site.register(Recommend)
