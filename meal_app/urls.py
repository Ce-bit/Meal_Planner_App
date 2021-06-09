from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('meal_frontend.urls')),
    path('', include('meal_api.urls')),
    path('', include('accounts.urls')),
]
