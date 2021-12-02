from django.core.checks import messages
from django.shortcuts import render,redirect,get_object_or_404,reverse
from django.views.generic import TemplateView,View
from django.http import JsonResponse
from django.core import serializers
from users.models import UserProfile
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView
import json
from .forms import *
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
    comments = post.comment_set.all()#yeni her bir posta atilan kommentleri goster
    
    context = {
        'post': post,
        'comments':comments
    }
    return render(request,'postdetail.html',context)

def allPost(request):
    posts = Post.objects.all()
    user = UserProfile.objects.get(user=request.user)
    
    context = {
        'posts': posts,
        'user':user
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


def updatePost(request,id):
    post = Post.objects.get(id=id)
    form = UpdateForm(request.POST or None,request.FILES or None,instance=post)
    if form.is_valid():
        nowupdatepost = form.save(commit=False)
        nowupdatepost.user = request.user
        nowupdatepost.save()
        
        messages.add_message(request,messages.SUCCESS,'Ugurlu Bir Sekilde Post Yenilendi')
        return redirect(reverse('postdetail',kwargs={'id':id}))#yeni hemin id li posta geri don
    return render(request,'updatepost.html',{'form':form})

def deletePost(request,id):
    post = get_object_or_404(Post,id=id)
    post.delete()
    messages.add_message(request,messages.SUCCESS,'Post Ugurlu Bir Sekilde Silindi')
    return redirect('posts')


#!Comment List
def addComment(request,id):
    post = get_object_or_404(Post,id=id)
    user = UserProfile.objects.get(user=request.user)
    
    if request.method == 'POST':
        comment_content = request.POST.get('metn')

        newComment = Comment(comment_author=user,comment_content=comment_content)
        newComment.article = post #yeni hemin posta yorum yazilmalidir
        newComment.save()
        return redirect(reverse('postdetail',kwargs={'id':id}))#yeni hemin id li posta geri don
    
#!Update Comment
@csrf_exempt    
def updateComment(request,id):
    comment = Comment.objects.get(id=id)
    if request.is_ajax():
        if request.method == 'POST':
            comment.comment_content = request.POST.get('updatedComment')
            comment.save()
        else:
            print('Xeta')
    return JsonResponse({'data':True,'comment':request.POST.get('updatedComment')})


@csrf_exempt
def delete_comment(request,id):
    deleteComment = Comment.objects.get(id=id)
    #eger atilan requestim ajax dirsa bunu yoxla mutleq yeni mutleq sekilde is_ajax() sertini qoy
    if request.is_ajax():
        deleteComment.delete()
        return JsonResponse({'delete_comment_id':id})#cunki geri donderilecek bir deyer yoxdur
    
    
#!Search Blog
#Gelen datani json cevirmek ucun json.dumps dan istifade olunur
class BookListView(ListView):
    model = Kitab
    template_name = 'base.html'
    context_object_name = 'books'
    
    #Eger biz html terefine bir contetext yeni dictonary bir deyer donderikse onda get_context_funksiyalarindan istifade etmeliyik class based viewlerde
    def get_context_data(self,**kwargs):#kwargs yazilmasindaki sebeb,Pythnda **kwargslar geriye bir dictionary donderir
        context = super(BookListView,self).get_context_data(**kwargs)
        context['qs_json'] = json.dumps(list(Kitab.objects.all().values()))
        return context #neceki funksiyalarda return render yazirsansa burdada bele tek return ile context deyerini geri donderib html de istifade edir