from os import name
from random import vonmisesvariate
from tabnanny import verbose
from tokenize import Comment
from unicodedata import category
from django.db import models
from django.utils.translation import gettext as _

# Create your models here.

class Community(models.Model):
    class Meta:
        db_table='Community'
        verbose_name='Comunidad'
        verbose_name_plural='Comunidades'
        ordering = ['id']  
    
    community_name=models.CharField(max_length=50,null=False,unique=False,verbose_name='community_name')


class Rule(models.Model):
    class Meta:
        db_table='Rule'
        verbose_name=_('Regla')  
        verbose_name_plural=_('Reglas') 
        ordering = ['id'] 

    rule_title=models.CharField(max_length=100,verbose_name=_('rule_title'))
    rule_content=models.TextField(null=False,verbose_name=_('rule_content'))
    rule_community=models.ForeignKey(Community, verbose_name=_("rule_community"), on_delete=models.CASCADE ,default=0)



class User(models.Model):
    class Meta:
        db_table='User'
        verbose_name='Usuario'
        verbose_name_plural='Usuarios'
        ordering = ['id'] 
        
        
        
    user_name=models.CharField(max_length=50,null=False,unique=True,verbose_name='user_name')
    user_image=models.ImageField(upload_to='posts/%Y/%m/%d',null=True,blank=True,verbose_name='user_image')
    
    
    

    

class Post(models.Model):
    class Meta:
        db_table='Post'
        verbose_name='Post'
        verbose_name_plural='Posts'
        ordering = ['id'] 
        
    post_title=models.TextField(max_length=100,null=False,unique=False,verbose_name='post_title')
    post_content=models.TextField(null=False, verbose_name='post_content')
    post_date=models.DateTimeField(null=False, verbose_name='post_date')
    post_author = models.ForeignKey(User, verbose_name='post_author', on_delete=models.CASCADE)
    post_votes=models.IntegerField(null=False, verbose_name=('post_votes'), default=0)
    

class Commentary(models.Model):
    class Meta:
        db_table='Commentary'
        verbose_name='Comentario'
        verbose_name_plural='Comentarios'
        ordering = ['id'] 

    commentary_content=models.TextField(null=False)
    commentary_date=models.DateTimeField(null=False)
    commentary_author=models.ForeignKey(User, verbose_name='commentary_author', on_delete=models.CASCADE)
    commentary_response_id=models.PositiveBigIntegerField(null=True)    
    commentary_votes=models.IntegerField(null=False, verbose_name=('commentary_votes'), default=0)
 
        
    
    

