from django.conf.urls import url, include
# from django.contrib.auth import views as auth_views
from django.contrib import admin
from JordanLawApp import views

urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^blog/$', views.blog, name='blog'),
    url(r'^blog/post/(?P<post>[0-9]+)$', views.blogpost, name='blogpost'),
    url(r'^people/susanjordan/', views.susanjordan, name='susanjordan'),
    url(r'^people/cindyvance/', views.cindyvance, name='cindyvance'),
    url(r'^people/apriljohnson/', views.apriljohnson, name='apriljohnson'),
]
