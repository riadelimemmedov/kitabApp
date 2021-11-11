from django.shortcuts import render,redirect
from .models import *
from django.views.decorators.csrf import csrf_exempt#bunu yadda saxla csrf de cox komek olur
from .models import Contact
from django.contrib.auth import login,authenticate,logout
from django.contrib import messages
from django.views.generic import View
from django.core import serializers
from django.contrib.auth.models import User
from .forms import *
from django.http import JsonResponse
# from users.forms import ContactForm,ProfileData

# Create your views here.
def userProfile(request):
    profile = UserProfile.objects.get(user=request.user)
    context = {
        'profile': profile,
    }
    return render(request,'profile.html',context)

@csrf_exempt
def postAddView(request):
    pass
    


def userPicture(request,*args,**kwargs):
    istifadeci = UserProfile.objects.filter(user=request.user)#filtere sert qoyanda hemin datani cekib getirir onsuz
    data = serializers.serialize('json',istifadeci)#json formatinda donder yeni
    return JsonResponse({'data':data},safe=False)#eger seriliaze edirsense safe=False yazmalisan



def contact(request):
    return render(request,'contact.html')



@csrf_exempt#csrf qadagalarini qaldirir ele bil
def concactViewAjax(request):
    form = ContactForm(request.POST or None)
    if request.is_ajax():
        if request.method == 'POST':
            name = request.POST.get('name')
            email = request.POST.get('email')
            number = request.POST.get('number')
            message = request.POST.get('message')
            
            netice = Contact(name=name, email=email, telefon_nomresi = number, mesaj=message)
            netice.save()
            
    return JsonResponse({'data':'Ugurlu'})
    
# def changeData(request):
#     form = ProfileData(request.POST or None)
#     if request.method == 'POST':
#         if form.is_valid():
#             pass
            
#             profile = form.save(commit=False)
#             profile.user = request.user


#!Login,Register,Logout
def loginView(request):
    form = LoginForm(request.POST or None)
    if form.is_valid():
        
        #!Bu cur yazilis yeni request.POST.get('name') meselen,bu cur yazilisa gerek html seyfesinde inputda name deyeri mutleq olsun
        # username = request.POST.get('name')
        # password = request.POST.get('password')
        
        #!form.cleaned_data.get olanda ise input icinde name deyeri lazim deyil formdan ozu goturur hemin deyeri
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
    
        user = authenticate(username = username,password=password)#authenticate bele bir istifadecinn databsede olub olmamagini yoxlayir
        
        if user is not None:#eger bele bir istifadeci varsa if girsin
            if user.is_active:
                login(request,user)
                return redirect('home')
            else:
                messages.add_message(request,messages.INFO,'Bele Bir Hesab Yoxdur')
        else:
            messages.add_message(request,messages.ERROR,'Adinizi ve ya Sifrenizi yoxlayin')
    else:
        form = LoginForm()
    
    return render(request, 'users/login.html',{'form':form})


def registerView(request):
    if request.method == 'POST':
        name = request.POST['username']#eger request.POST seklinde data gelirsen o saat bilki inputdakik nameden deyeri cekib burda istifade edirik,yox eger form.cleaned_date.get seklindedirse onda formdan gelir deyer inpyutdan yox
        email = request.POST['email']
        sifre = request.POST['password']
        sifretekrar = request.POST['repassword']
        

        if sifre == sifretekrar:
            if User.objects.filter(username=name).exists():
                messages.add_message(request,messages.WARNING,'Bele Bir Istifadeci Adi Movcuddur')
                return redirect('register')
            else:
                if User.objects.filter(email=email).exists():
                    messages.add_message(request,messages.INFO,'Bele Bir Email Hesabi Movcuddur')
                    return redirect('register')
        
                else:
                    user = User.objects.create_user(username=name,email=email,password=sifre,)
                    user.save()#save yazmagi unutma,cunki yaradilan istifadeci databaseye kayd olunur
                    messages.add_message(request,messages.SUCCESS,'Ugurlu Bir Sekilde Qeydiyyatdan Kectiniz')
                    return redirect('login')
        else:
            messages.add_message(request,messages.ERROR,'Sifreler Uygun Deyil,Bir Daha Yoxlayin')
            return redirect('register')
    else:
        return render(request,'users/register.html')

def cixis_et(request):
    logout(request)
    return redirect('home')