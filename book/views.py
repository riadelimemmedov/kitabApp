from django.shortcuts import render,redirect,get_object_or_404
from django.views.generic import TemplateView,View
from django.http import JsonResponse
from django.core import serializers
from .models import *
# Create your views here.

class HomeView(TemplateView):
    template_name = 'index.html'#yeni book.html gonderilecek bu datalar asagidaki classda datalari cekirik


class BookList(TemplateView):
    template_name = 'book.html'
    
class BookView(View):
    def get(self,request):
        qs = Kitab.objects.all()
        data = serializers.serialize('json',qs)
        return JsonResponse({'data':data},safe=False)



def detailView(request,id):
    book = get_object_or_404(Kitab,id=id)

    context = {
        'book': book,
    }

    return render(request,'detail.html',context)

def allCategory(request):
    categoryList = Category.objects.all()
    
    context = {
        'categoryList': categoryList,
    }
    return render(request,'categories.html',context)

def postDetail(request,id):
    post = get_object_or_404(Post,id=id)
    
    context = {
        'post': post,
    }
    return render(request,'postdetail.html',context)

def allPost(request):
    posts = Post.objects.all()
    
    context = {
        'posts': posts,
    }
    return render(request,'posts.html',context)



def categoryBook(request,slug):
    # ctgbook = get_object_or_404(Kitab,id=id,category__slug = slug)
    ctgbook = Kitab.objects.filter(category__slug=slug)
    context = {
        'ctgbook': ctgbook,
        'uzunlukkategori':len(ctgbook)
    }
    print(ctgbook)
    print(len(ctgbook))
    return render(request,'categorybook.html',context)

def aboutView(request):
    return render(request,'about.html')