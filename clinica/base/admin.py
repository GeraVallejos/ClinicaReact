from django.contrib import admin
from .models import Usuario, Producto, Inventario

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Producto)
admin.site.register(Inventario)