from django.conf.urls import url, include
# from django.contrib.auth import views as auth_views
from django.contrib import admin
from JordanLawApp import views

urlpatterns = [
    url(r'^$', views.index, name='home'),
    # url(r'^timeline/', views.timeline, name='timeline'),
]
