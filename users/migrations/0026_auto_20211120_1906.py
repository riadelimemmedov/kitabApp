# Generated by Django 3.2.4 on 2021-11-20 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0025_auto_20211120_1905'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='nomre',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='olke',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]