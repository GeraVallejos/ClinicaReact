from rest_framework import serializers
from .models import Producto, Usuario, Inventario
from datetime import datetime

class ProductoSerializer(serializers.ModelSerializer):
    
    usuario_id = serializers.ReadOnlyField(source = 'usuario.username')

    class Meta():
        model = Producto
        fields = ['id','usuario_id', 'codigo', 'nombre', 'unidad', 'cantidad_stock', 'cantidad_inventario', 
                  'ingresado', 'costo_compra', 'costo_venta', 'clase1', 'clase2', 'bodega', 'proveedor', 
                  'descripcion', 'obsoleto']
        

class UsuarioSerializer(serializers.ModelSerializer):
    
    class Meta():
        model = Usuario
        fields = '__all__'
        

class InventarioSerializer(serializers.ModelSerializer):
    
    usuario_id_inv = serializers.ReadOnlyField(source = 'usuario.username')
    
    class Meta():
        model = Inventario
        fields = ['id','usuario_id_inv', 'producto', 'cantidad_inventario', 
                'fecha_inventario', 'observacion']
        
