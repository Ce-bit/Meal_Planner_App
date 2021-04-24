from django.db import models

# Create your models here.
class Meal(models.Model):
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=100, unique = True)
    savedOn = models.DateTimeField(auto_now_add=True)