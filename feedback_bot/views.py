from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import FeedbackMessageSerializer
from .bot import send_message


@method_decorator(csrf_exempt, name='dispatch')
class FeedbackMessageView(APIView):
    
    def post(self, request):

        serializer = FeedbackMessageSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            send_message(
                serializer.validated_data['name'],
                serializer.validated_data['email'],
                serializer.validated_data['text'],
            )

            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
