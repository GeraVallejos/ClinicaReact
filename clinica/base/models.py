from django.db import models
from django.contrib.auth.models import AbstractUser
import django.contrib.auth.validators

# Create your models here.

class Usuario(AbstractUser):
    
    password = models.CharField(max_length=128, blank= False, null=False, verbose_name='Password')
    first_name = models.CharField(blank=False, null=False, max_length=150, verbose_name='Nombre')
    last_name = models.CharField(blank=False, null=False, max_length=150, verbose_name='Apellido')
    email=  models.EmailField(blank=False, null=False, max_length=254, verbose_name='Correo')
    cargo = models.CharField(max_length=50, blank=False,  null=False)
    username = models.CharField(error_messages={'unique': 'Este Nombre de Usuario ya existe'}, max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='Nombre de Usuario')

    def __str__(self):
        return self.username
    
class Producto(models.Model):
    usuario = models.ForeignKey(Usuario, max_length = 50, related_name='usuario_id', on_delete=models.CASCADE)
    codigo = models.CharField(max_length = 8, null=True, blank=True)
    nombre = models.CharField(max_length = 200, null=True, blank=True)
    unidad = models.CharField(max_length = 20)
    cantidad_stock = models.IntegerField(null=True, blank=True)
    cantidad_inventario = models.IntegerField(null=True, blank=True)
    ingresado = models.DateTimeField(auto_now = True)
    costo_compra = models.IntegerField(null=True, blank=True)
    costo_venta = models.IntegerField(null=True, blank=True)
    clase1 = models.CharField(max_length = 200)
    clase2 = models.CharField(max_length = 200)
    bodega = models.CharField(max_length = 100)
    proveedor = models.CharField(max_length = 300)
    descripcion = models.CharField(max_length = 500)
    obsoleto = models.BooleanField(default=False)


    def __str__(self):
        return self.nombre
    
    class Meta:
        ordering = ['nombre']

class Inventario(models.Model):
    usuario = models.ForeignKey(Usuario, max_length = 50, related_name='usuario_id_inv', on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, max_length = 50, related_name='producto', on_delete=models.CASCADE)
    cantidad_inventario = models.IntegerField(null=True, blank=True)
    fecha_inventario = models.DateTimeField(auto_now_add=True, blank=True)
    observacion = models.CharField(max_length = 500)

    def __str__(self):
        return self.producto