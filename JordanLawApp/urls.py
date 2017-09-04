from django.conf.urls import url, include
# from django.contrib.auth import views as auth_views
from django.contrib import admin
from JordanLawApp import views

urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^blog/', views.blog, name='blog'),
    url(r'^people/(?P<person>)$', views.people, name='people'),
    # url(r'^people/cindyvance', views.timeline, name='timeline'),
]
