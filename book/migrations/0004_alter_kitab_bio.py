# Generated by Django 3.2.8 on 2021-10-24 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_kitab_yazilma_tarixi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kitab',
            name='bio',
            field=models.TextField(),
        ),
    ]
