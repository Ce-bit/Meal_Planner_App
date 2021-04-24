from rest_framework import serializers
from .models import Meal

#Meal Serializer
class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = '__all__'