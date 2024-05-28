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