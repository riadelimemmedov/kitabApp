from django import forms
from django.forms import fields
from django.template.defaultfilters import pluralize
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from book.models import Post
from .models import Contact,UserProfile

class ContactForm(forms.ModelForm):#modelForm yazilanda modeldeki datani cekir
    class Meta:
        model = Contact
        fields = '__all__'

class ProfileData(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = '__all__'
    
    
class PostForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',#cunki 70%-80% faiz Pyhodandaki dictionarylerdeki hem key hem value deyelreri eyni olu,js ise key deyeri string icinde olmur cox vaxt,
    }),label='Baslig')
    
    content = forms.CharField(widget=forms.Textarea(attrs={
        'class':'form-control',
        'rows':'3'
    }),label='Metn')
    
    image = forms.ImageField(label='Sekil')
    class Meta:
        model = Post
        fields = ['title','content','image']
        
#!LoginForm
class LoginForm(forms.Form):#Form yazilmasindaki sebeb ozumu form yaradirig eger databaseden cekseydik onda forms.ModelForm dan istifade edecekdik
    username = forms.CharField(widget=forms.TextInput(attrs={#attrs vasitesile css codlarini yaza bilirsen amma widget icinde yaz attrsni 
        #burda hem key,hem value string icinde yazilmalidir,Pythonda 70%-80% bele olur,Js de ise key teref string icinde yazilmir demek olarki,amma value teref mutleq string icinde yazilmalidir,Pythonda ise cox vaxt her iki teref yeni hem key,hem value,string icinde yazilmalidir 
        'type':'text',
        'class':'form-control ml-2',
        'placeholder':'Adiniz',
        'name':'ad',
        'id':'adiniz'
    }))
    
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'type':'password',
        'class':'form-control ml-2',
        'placeholder':'Sifreniz',
        'name':'sifre',
        'id':'sifreniz'
    }))
    






