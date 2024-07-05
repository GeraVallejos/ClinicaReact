from rest_framework import viewsets
from .serializer import ProductoSerializer, UsuarioSerializer, InventarioSerializer
from .models import Producto, Usuario, Inventario
from rest_framework import permissions
from datetime import datetime



class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(usuario_id= self.request.user.id)
        

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

    def perform_create(self, serializer):
        user = serializer.save()
        user.set_password(user.password)
        user.save()

class InventarioView(viewsets.ModelViewSet):
    serializer_class = InventarioSerializer
    queryset = Inventario.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(usuario= self.request.user)
        
    def perform_update(self, serializer):
        serializer.save(fecha_inventario = datetime.now())
        