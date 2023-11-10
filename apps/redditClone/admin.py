from django.contrib import admin
from .models import User,Post,Commentary,Community
from .models import Rule
# Register your models here.
admin.site.register(Rule)
admin.site.register(Community)
admin.site.register(User)
admin.site.register(Post)
admin.site.register(Commentary)




