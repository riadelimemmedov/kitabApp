from django.urls import path
from .views import *

urlpatterns = [
    path('',HomeView.as_view(),name='home'),
    path('books/',BookView.as_view(),name='books'),#js
    path('detail/<int:id>',detailView,name='detail'),
    path('booklist/',BookList.as_view(),name='booklist'),
    path('categorys',allCategory,name='categorys'),
    path('postdetail/<int:id>',postDetail,name='postdetail'),
    path('posts/',allPost,name='posts'),
    path('categorybook/<str:slug>',categoryBook,name='categorybook'),
    path('about/',aboutView,name='about'),
    path('updatepost/<int:id>/',updatePost,name='updatepost'),
    path('deletepost/<int:id>/',deletePost,name='deletepost'),
    path('addComment/<int:id>/',addComment,name='addComment'),
    
    path('postdetail/updateComment/<int:id>',updateComment,name='updatecomment'),
    path('postdetail/deleteComment/<int:id>',delete_comment,name='deletecomment'),
    
    path('search/',searh_result,name='search'),
    
    path('category-json/<int:category_id>',CategoryListView.as_view(),name='category-json'),
]

handler404 = 'kitabxana.views.handle_not_found'