# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import BlogPost


def index(request):
    return render(request, "index.html")


def susanjordan(request):
    return render(request, "people/susanjordan.html", {})


def cindyvance(request):
    return render(request, 'people/cindyvance.html', {})


def apriljohnson(request):
    return render(request, 'people/apriljohnson.html', {})


def blog(request):
    blog_posts = BlogPost.objects.order_by('created_date').reverse()

    page = request.GET.get('page', 1)

    paginator = Paginator(blog_posts, 3)
    try:
        blog_posts = paginator.page(page)
    except PageNotAnInteger:
        blog_posts = paginator.page(1)
    except EmptyPage:
        blog_posts = paginator.page(paginator.num_pages)

    return render(request, "blog.html", {'blog_posts':blog_posts})
