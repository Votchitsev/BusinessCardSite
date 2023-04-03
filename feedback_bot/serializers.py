from datetime import datetime

from rest_framework import serializers
from .models import Message


class FeedbackMessageSerializer(serializers.ModelSerializer):

    received_at = datetime.now()

    class Meta:
        model = Message
        fields = ['id', 'received_at', 'name', 'email', 'text']
