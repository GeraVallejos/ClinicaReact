from django.urls import path, include
from rest_framework import routers
from .views import ProductoView, UsuarioView, InventarioView



#Se usa versionado de API

router = routers.DefaultRouter()
router.register(r'producto', ProductoView, 'producto')
router.register(r'usuario', UsuarioView, 'usuario')
router.register(r'inventario', InventarioView, 'inventario')


urlpatterns = [path('api/v1/', include(router.urls))
               ]