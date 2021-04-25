from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Meal(models.Model):
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=100, unique=True)
    owner = models.ForeignKey(
        User, related_name="meals", on_delete=models.CASCADE, null=True)
    savedOn = models.DateTimeField(auto_now_add=True)
