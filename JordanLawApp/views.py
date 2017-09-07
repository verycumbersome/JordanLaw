# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import BlogPost


def index(request):
    return render(request, "index.html")


def susanjordan(request):
    return render(request, "people/susanjordan.html", {})


def cindyvance(request):
    return render(request, 'people/cindyvance.html', {})


def blog(request):

    posts = BlogPost.objects.order_by('created_date').reverse()
    return render(request, "blog.html", {'posts':posts})
