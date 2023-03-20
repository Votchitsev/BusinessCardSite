from django.shortcuts import render
from rest_framework import mixins, generics
from .models import Project, Tool
from .serializers import ProjectSerializer


class ProjectsList(mixins.ListModelMixin, generics.GenericAPIView):
	queryset = Project.objects.prefetch_related('tools').all()
	serializer_class = ProjectSerializer
	
	def get(self, request):
		return self.list(request)
