from django.contrib import admin
from .models import User, Item, Review, Thumbs

admin.site.register([User, Item, Review, Thumbs])
