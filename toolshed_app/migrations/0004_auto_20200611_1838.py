# Generated by Django 3.0.7 on 2020-06-11 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toolshed_app', '0003_item_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo_url',
            field=models.TextField(default='https://png.pngitem.com/pimgs/s/214-2145309_blank-profile-picture-circle-hd-png-download.png'),
        ),
    ]
