from .models import Meal
from rest_framework import viewsets, permissions
from .serializers import MealSerializer

# Meal ViewSet


class MealViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = MealSerializer

    def get_queryset(self):
        return self.request.user.meals.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
