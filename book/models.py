from django.db import models
import random
from django.contrib.auth.models import User
from django.utils.text import slugify



# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=250)
    slug = models.SlugField()#editable=False olanda yeni gorunmez olur bura amma ehtiyac yoxdur cox
    category_picture = models.ImageField(upload_to='sekiller/')
    text = models.TextField(max_length=255)
    
    def __str__(self):
        return self.title
    
    def save(self,*args,**kwargs):
        self.slug = slugify(self.title)
        #modelde return yazilmir cunki hec bir yere donmur
        super(Category, self).save(*args,**kwargs)
    


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    publishing_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='postpicture',blank=False)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
    
    

class Kitab(models.Model):
    #kitabHaqqinYazan 
    author = models.CharField(max_length=250,blank=False)
    name = models.CharField(max_length=250,blank=False)
    bio = models.TextField(blank=False)
    seyfesayi = models.IntegerField(default=0,blank=False)
    yazilma_tarixi = models.CharField(max_length=255)
    mehsulkodu = models.CharField(max_length=15,blank=True)
    image = models.ImageField(upload_to='sekiller/',blank=False)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name='kategoriyalar')
    elave_olunma_tarixi = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
    def save(self,*args,**kwargs):
        number_list = [x for x in range(1000)]
        code_items = []
        for i in range(5):#i sadece burda dovrun 5 defe tekrarlanmasi seraitini yaradir
            num = random.choice(number_list)
            code_items.append(num)
            
        code_string = ''.join(str(item) for item in code_items)#her bir item gotur bu sekilde
        self.mehsulkodu = code_string
        super().save(*args,**kwargs)
