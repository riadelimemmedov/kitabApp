from django import forms
from django.db.models import fields
from .models import Post
from users.models import UserProfile

class UpdateForm(forms.ModelForm):#eger ozun sifirdan form yazacagsansa onda forms.Form dan istifade etmelisen,yox eger Databseden row cekib yazmag istesen eger onda forms.ModelForm dan istifade et
    class Meta:
        model = Post
        fields = ['title','content','image']

