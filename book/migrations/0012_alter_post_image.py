# Generated by Django 3.2.8 on 2021-10-31 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0011_alter_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(upload_to='postpicture'),
        ),
    ]