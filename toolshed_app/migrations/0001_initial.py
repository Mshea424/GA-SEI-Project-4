# Generated by Django 3.0.7 on 2020-06-09 20:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('photo_url', models.TextField()),
                ('manufacturer', models.CharField(max_length=100)),
                ('rating', models.CharField(max_length=3)),
                ('vendor_url', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('body', models.TextField()),
                ('thumbs_count', models.CharField(max_length=15)),
                ('rating', models.CharField(max_length=3)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='toolshed_app.Item')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('bio', models.CharField(max_length=500)),
                ('photo_url', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Thumbs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='thumbs', to='toolshed_app.Review')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='thumbs', to='toolshed_app.User')),
            ],
        ),
        migrations.AddField(
            model_name='review',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='toolshed_app.User'),
        ),
    ]