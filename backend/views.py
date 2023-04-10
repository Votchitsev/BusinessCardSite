from rest_framework.response import Response
from rest_framework import mixins, generics
from .models import Project, EducationCompany, Skill
from .serializers import ProjectSerializer, EducationSerializer


class ProjectsList(mixins.ListModelMixin, generics.GenericAPIView):
	queryset = Project.objects.prefetch_related('tools').all()
	serializer_class = ProjectSerializer
	
	def get(self, request):
		return self.list(request)


class Education(generics.GenericAPIView):

	def get_queryset(self, lang):
		companies = EducationCompany.objects.filter(
			lang__name=lang,
		).prefetch_related(
			'skills',
		).all()
		
		return companies

	def list(self, request):
		queryset = self.get_queryset(request.GET['lang'])
		serializer = EducationSerializer(queryset, many=True)
		return Response(serializer.data) 

	def get(self, request):
		return self.list(request)
	