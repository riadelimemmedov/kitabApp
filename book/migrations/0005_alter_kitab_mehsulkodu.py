# Generated by Django 3.2.8 on 2021-10-24 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0004_alter_kitab_bio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kitab',
            name='mehsulkodu',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]
