from django.urls import path
from .views import *
from .models import *

urlpatterns = [
    path('contact/',contact,name='contact'),
    path('ajaxcontact/',concactViewAjax,name='ajaxContact'),
    path('myprofile/',userProfile,name='myProfile'),
    path('addpost/',postAddView,name='addPost'),
    # path('profile/',changeData,name='profile')
    path('login/',loginView,name='login'),
    path('userpicture/',userPicture,name='userpicture'),
    path('register/',registerView,name='register'),
    path('logout/',cixis_et,name='logout'),
]