# Generated by Django 3.2.4 on 2021-11-20 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_auto_20211120_1814'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='dogulduguil',
            field=models.CharField(blank=True, default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='nomre',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='olke',
            field=models.CharField(blank=True, default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='oxudugucalisdigi',
            field=models.CharField(blank=True, default=None, max_length=255),
        ),
    ]