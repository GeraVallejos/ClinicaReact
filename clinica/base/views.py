from rest_framework import viewsets
from .serializer import ProductoSerializer
from .models import Producto


class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
