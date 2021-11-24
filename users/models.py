from django.db import models
from django.http import request
from django.template.defaultfilters import slugify
from django.db.models.signals import post_save
from django.conf import settings


# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE) 
    bio = models.TextField()
    image = models.FileField(upload_to='usersekil/')
    slug = models.SlugField(unique=True,editable=False)#yeni editible=false yazanda istfiadeci terefindne deyismek mumkun olmayan tiplerdir slugda daha cox istifade olunur unique=True dan
    email = models.EmailField(max_length=255,blank=False)
    oxudugucalisdigi = models.CharField(max_length=255,blank=False)
    dogulduguil = models.CharField(max_length=255,blank=False)
    olke = models.CharField(max_length=255,blank=True)
    nomre = models.IntegerField(null=True)
    website = models.URLField(max_length=255)

    twitter = models.URLField(max_length=255,blank=True)
    facebook = models.URLField(max_length=255,blank=True)
    linkedin = models.URLField(max_length=255,blank=True)
    instaqram = models.URLField(max_length=255,blank=True)

    
    def save(self,*args,**kwargs):
        self.slug = slugify(self.user.username)
        super(UserProfile,self).save(*args,**kwargs)
        
    def __str__(self):
        return self.user.username
    
    
    
def create_user_profile(sender,instance,created,**kwargs):
    if created:#eger yaradilibsa
        UserProfile.objects.create(user=instance)
post_save.connect(create_user_profile,sender=settings.AUTH_USER_MODEL)


class Contact(models.Model):
    name = models.CharField(max_length=255,verbose_name='Adiniz')
    email = models.CharField(max_length=255,verbose_name='Email Adresiniz')
    telefon_nomresi = models.CharField(max_length=255,verbose_name='Telefon Nomresi')
    mesaj = models.TextField()
    
    def __str__(self):
        return str(self.name)
