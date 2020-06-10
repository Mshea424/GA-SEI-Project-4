from rest_framework import viewsets

from .serializers import FeedSerializer, ItemSerializer, UserSerializer, ReviewSerializer, ThumbsSerializer
from .models import Item, User, Review, Thumbs


class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class ThumbsView(viewsets.ModelViewSet):
    queryset = Thumbs.objects.all()
    serializer_class = ThumbsSerializer


class FeedView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = FeedSerializer
