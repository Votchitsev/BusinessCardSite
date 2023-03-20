from rest_framework import serializers
from .models import Project, Tool


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    tools = ToolSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'link', 'background', 'tools']
    