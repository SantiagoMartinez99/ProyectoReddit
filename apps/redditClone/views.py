from rest_framework import viewsets
from .serializer import UserSerializer,PostSerializer,CommentarySerializer,RuleSerializer,CommunitySerializer
from .models import User,Post,Commentary,Rule,Community

class UserView(viewsets.ModelViewSet):
    serializer_class=UserSerializer
    queryset= User.objects.all()

class PostView(viewsets.ModelViewSet):
    serializer_class=PostSerializer
    queryset= Post.objects.all()
    
    
class CommentaryView(viewsets.ModelViewSet):
    serializer_class=CommentarySerializer
    queryset= Commentary.objects.all()
    
class RuleView(viewsets.ModelViewSet):
    serializer_class=RuleSerializer
    queryset= Rule.objects.all()

class CommunityView(viewsets.ModelViewSet):
    serializer_class=CommunitySerializer
    queryset= Community.objects.all()