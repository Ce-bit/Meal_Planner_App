from .models import Meal
from rest_framework import viewsets, permissions
from .serializers import MealSerializer

# Meal ViewSets


class MealViewSet(viewsets.ModelViewSet):
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = MealSerializer

    def get_queryset(self):
        return self.request.user.meals.all()  # maybe error

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
