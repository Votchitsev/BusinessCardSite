from rest_framework.response import Response
from rest_framework import mixins, generics
from .models import Project, EducationCompany, Social, Contact
from .serializers import ProjectSerializer, EducationSerializer, SocialSerializer, ContactSerializer


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


class Socials(mixins.ListModelMixin, generics.GenericAPIView):

    queryset = Social.objects.all()
    serializer_class = SocialSerializer

    def get(self, request):
	    return self.list(request)
    

class ContactView(mixins.ListModelMixin, generics.GenericAPIView):

    def get_queryset(self, lang):
        contacts = Contact.objects.filter(
		lang__name = lang,
    )
        return contacts

    def list(self, request):
        queryset = self.get_queryset(request.GET['lang'])
        serializer = ContactSerializer(queryset, many=True)
        return Response(serializer.data)

    def get(self, request):
	    return self.list(request)
