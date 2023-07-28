from intsureview_be.apps.api.serializers import MemberSerializer
from .models import Member
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import status


class MemberList(APIView):
    """
    List all members, or create a new member, or delete all members.
    """

    # A get endpoint might be handy for testing if I get to it
    # def get(self, request, format=None):
    #     members = Member.objects.all()
    #     serializer = MemberSerializer(members, many=True)
    #     return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        count = Member.objects.all().delete()
        return Response(count, status=status.HTTP_204_NO_CONTENT)
