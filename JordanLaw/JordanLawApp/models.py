# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

class Person(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    photo = models.ImageField(upload_to='peopleimages/', default='/JordanLawApp/static/images/imgnotfound.png')

    def __str__(self):
        return self.title

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=2500)
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
