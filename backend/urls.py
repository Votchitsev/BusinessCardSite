from django.urls import path
from .views import ProjectsList

urlpatterns = [
    path('projects/', ProjectsList.as_view()),
]
