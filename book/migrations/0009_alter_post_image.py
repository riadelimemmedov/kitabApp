# Generated by Django 3.2.8 on 2021-10-31 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0008_post'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(default='media/sekiller/nosekil', upload_to='postpicture'),
        ),
    ]
