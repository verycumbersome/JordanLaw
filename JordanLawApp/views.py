# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Person, BlogPost

def index(request):
    people = Person.objects.all()
    return render(request, "index.html", {'people':people})

def people(request, person):
    print person
    return render(request, "people.html", {})

def blog(request):

    posts = BlogPost.objects.order_by('created_date').reverse()
    return render(request, "blog.html", {'posts':posts})
