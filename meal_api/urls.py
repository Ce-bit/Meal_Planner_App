from rest_framework import routers
from .api import MealViewSet

router = routers.DefaultRouter()
router.register('api/meal_api', MealViewSet, 'meal_api')

urlpatterns = router.urls