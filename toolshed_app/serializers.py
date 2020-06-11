from rest_framework import serializers

from .models import User, Item, Review, Thumbs


class ThumbsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thumbs
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    thumbs = ThumbsSerializer(many=True, read_only=True)

    class Meta:
        model = Review
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = '__all__'


class FeedSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    thumbs = ThumbsSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ('id', 'name', 'photo_url', 'rating', 'reviews', 'thumbs', 'description')
