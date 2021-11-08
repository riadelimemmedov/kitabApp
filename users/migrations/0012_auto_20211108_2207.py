# Generated by Django 3.2.8 on 2021-11-08 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_auto_20211108_2206'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='nomre',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='dogulduguil',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='facebook',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='instaqram',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='linkedin',
            field=models.URLField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='twitter',
            field=models.URLField(blank=True, max_length=255),
        ),
    ]
