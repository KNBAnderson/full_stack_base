"""intsureview_be URL Configuration"""

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from intsureview_be.apps.api import views

urlpatterns = [
    path("api/members/", views.MemberList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
