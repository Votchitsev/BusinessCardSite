from django.urls import path
from .views import ProjectsList, Education, Socials

urlpatterns = [
    path('projects/', ProjectsList.as_view()),
    path('education/', Education.as_view()),
    path('socials/', Socials.as_view()),
]
