# Generated by Django 3.2.8 on 2021-11-04 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_userprofile_oxudugucalisdigi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='oxudugucalisdigi',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]