# Generated by Django 3.2.8 on 2021-11-04 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_alter_userprofile_oxudugucalisdigi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='oxudugucalisdigi',
            field=models.CharField(max_length=255),
        ),
    ]
