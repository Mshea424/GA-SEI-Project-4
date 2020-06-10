from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register('user', views.UserView)
router.register('item', views.ItemView)
router.register('review', views.ReviewView)
router.register('thumbs', views.ThumbsView)
router.register('feed', views.FeedView)

urlpatterns = [
    path('', include(router.urls))
]
