from rest_framework import serializers
from .models import Project, Tool, EducationCompany, Skill


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    tools = ToolSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'link', 'background', 'tools']


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = EducationCompany
        fields = ['id', 'name', 'logo', 'skills']
