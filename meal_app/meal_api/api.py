from .models import Meal 
from rest_framework import viewsets, permissions
from .serializers import MealSerializer 

#Meal ViewSet
class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MealSerializer