# Generated by Django 3.2.4 on 2021-11-20 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_auto_20211120_1803'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='facebook',
            field=models.URLField(blank=True, default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='instaqram',
            field=models.URLField(blank=True, default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='linkedin',
            field=models.URLField(blank=True, default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='oxudugucalisdigi',
            field=models.CharField(default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='twitter',
            field=models.URLField(blank=True, default=None, max_length=255),
        ),
    ]
