from django.urls import path
from .views import *

urlpatterns = [
    path('',HomeView.as_view(),name='home'),
    path('books/',BookView.as_view(),name='books'),#js
    path('detail/<int:id>',detailView,name='detail'),
    path('booklist/',BookList.as_view(),name='booklist'),
    path('categorys/',allCategory,name='categorys'),
    path('postdetail/<int:id>',postDetail,name='postdetail'),
    path('posts/',allPost,name='posts'),
    path('categorybook/<str:slug>',categoryBook,name='categorybook'),
    path('about/',aboutView,name='about'),
]       