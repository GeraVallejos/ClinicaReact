from django.urls import path, include
from rest_framework import routers
from .views import ProductoView



#Se usa versionado de API

router = routers.DefaultRouter()
router.register(r'producto', ProductoView, 'producto')

urlpatterns = [path('api/v1/', include(router.urls))
               
               ]