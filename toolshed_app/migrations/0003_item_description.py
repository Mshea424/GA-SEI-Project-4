# Generated by Django 3.0.7 on 2020-06-11 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toolshed_app', '0002_remove_review_thumbs_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.TextField(default=''),
        ),
    ]
