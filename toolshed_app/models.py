from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    bio = models.CharField(max_length=500)
    photo_url = models.TextField(default='https://png.pngitem.com/pimgs/s/214-2145309_blank-profile-picture-circle-hd-png-download.png')

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.TextField()
    manufacturer = models.CharField(max_length=100)
    description = models.TextField(default = '')
    rating = models.CharField(max_length=3)
    vendor_url = models.TextField()

    def __str__(self):
        return self.name


class Review(models.Model):
    name = models.CharField(max_length=255)
    body = models.TextField()
    rating = models.CharField(max_length=3)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='reviews')

    def __str__(self):
        return self.name


class Thumbs(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='thumbs')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='thumbs')
