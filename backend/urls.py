from django.urls import path
from .views import ProjectsList, Education, Socials, ContactView

urlpatterns = [
    path('projects/', ProjectsList.as_view()),
    path('education/', Education.as_view()),
    path('socials/', Socials.as_view()),
    path('contact/', ContactView.as_view()),
]
