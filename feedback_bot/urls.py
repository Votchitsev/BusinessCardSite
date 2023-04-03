from django.urls import path

from .views import FeedbackMessageView


urlpatterns = [
    path('', FeedbackMessageView.as_view()),
]
