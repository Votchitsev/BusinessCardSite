from django.urls import path
from .views import ProjectsList, Education

urlpatterns = [
    path('projects/', ProjectsList.as_view()),
    path('education/', Education.as_view()),
]
