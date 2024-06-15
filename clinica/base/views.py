from rest_framework import viewsets
from .serializer import ProductoSerializer, UsuarioSerializer
from .models import Producto, Usuario


class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
