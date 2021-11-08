# Generated by Django 3.2.8 on 2021-10-24 04:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('slug', models.SlugField(editable=False)),
            ],
        ),
        migrations.CreateModel(
            name='Kitab',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=250)),
                ('name', models.CharField(max_length=250)),
                ('bio', models.TextField(max_length=250)),
                ('seyfesayi', models.IntegerField(default=0)),
                ('zaman', models.CharField(max_length=250)),
                ('mehsulkodu', models.CharField(blank=True, max_length=5)),
                ('image', models.ImageField(upload_to='sekiller/')),
                ('elave_olunma_tarixi', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='kategoriyalar', to='book.category')),
            ],
        ),
    ]
