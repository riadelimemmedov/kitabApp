# Generated by Django 3.2.8 on 2021-11-04 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_userprofile_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='oxudugucalisdigi',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
