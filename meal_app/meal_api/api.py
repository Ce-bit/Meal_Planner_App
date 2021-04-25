from .models import Meal 
from rest_framework import viewsets, permissions
from .serializers import MealSerializer 

#Meal ViewSet
class MealViewSet(viewsets.ModelViewSet):
<<<<<<< Updated upstream
    queryset = Meal.objects.all()
    permissions_classes = [
        permissions.AllowAny
=======
    permission_classes = [
        permissions.IsAuthenticated
>>>>>>> Stashed changes
    ]
    serializer_class = MealSerializer