# Generated by Django 3.2.8 on 2021-11-03 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Adiniz')),
                ('username', models.CharField(max_length=255, verbose_name='Soyadiniz')),
                ('telefon_nomresi', models.CharField(max_length=255, verbose_name='Telefon Nomresi')),
                ('mesaj', models.TextField()),
            ],
        ),
    ]
