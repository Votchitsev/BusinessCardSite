from rest_framework import serializers
from .models import Project, Tool, EducationCompany, Skill, Social, Contact, User


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
        fields = ['id', 'name']


class EducationSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = EducationCompany
        fields = ['id', 'name', 'logo', 'period', 'skills']


class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):   
    class Meta:
        model = Contact
        fields = [
            'first_name',
            'last_name',
            'birthdate',
            'city',
            'phone',
            'position',
            'email',
            'about_me',
        ]
