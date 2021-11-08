from django import template
from django.http import request
from users.models import UserProfile
from book.models import Category,Post

register = template.Library()

#!Butun Categoriyalari almag ucun

@register.simple_tag(name='categories')
def all_categories():
    return Category.objects.order_by('-id')[0:3]

@register.simple_tag(name='posts')
def all_posts():
    return Post.objects.all().order_by('-id')[0:2]

