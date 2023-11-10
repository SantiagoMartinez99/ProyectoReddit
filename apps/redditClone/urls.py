from django.urls import path, include
from rest_framework import routers
from apps.redditClone.views import CommentaryView ,RuleView 

router=routers.DefaultRouter()
router.register(r'commentary',CommentaryView,'Commentary')
urlpatterns = [
    path("api/v1/",include(router.urls)),

]

