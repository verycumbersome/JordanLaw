# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    photo = models.ImageField(upload_to='peopleimages/', default='/JordanLawApp/static/images/imgnotfound.png')
