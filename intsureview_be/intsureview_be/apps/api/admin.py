from django.contrib import admin
from .models import Member

class MemberAdmin(admin.ModelAdmin):
    list_display = ('email', 'paid', 'scenarios', 'frequency', 'brand')

# Register your models here.

admin.site.register(Member, MemberAdmin)