from django.urls import reverse
from intsureview_be.apps.api.models import Member
from rest_framework.test import APITestCase
from rest_framework import status


class TestMemberAPI(APITestCase):
    def test_post_request_can_create_new_entity(self):
        data = {
            "email": "Test@email.com",
            "paid": True,
            "scenarios": "Alien AbductionMind Control",
            "frequency": "Never",
            "brand": "Kirkland Aluminum Foil",
        }
        response = self.client.post("/api/members/", data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Member.objects.count(), 1)

    def test_post_request_wont_use_duplicated_email(self):
        data1 = {
            "email": "Test@email.com",
            "paid": True,
            "scenarios": "Alien AbductionMind Control",
            "frequency": "Never",
            "brand": "Kirkland Aluminum Foil",
        }
        data2 = {
            "email": "Test@email.com",
            "paid": False,
            "scenarios": "Government Surveillance",
            "frequency": "Always",
            "brand": "Safeway Select Aluminum Foil",
        }
        self.client.post("/api/members/", data=data1)
        response = self.client.post("/api/members/", data=data2)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Member.objects.count(), 1)

    def test_delete_request_will_delete_all_members(self):
        data1 = {
            "email": "Test@email.com",
            "paid": True,
            "scenarios": "Alien AbductionMind Control",
            "frequency": "Never",
            "brand": "Kirkland Aluminum Foil",
        }
        data2 = {
            "email": "Test2@email.com",
            "paid": False,
            "scenarios": "Government Surveillance",
            "frequency": "Always",
            "brand": "Safeway Select Aluminum Foil",
        }
        self.client.post("/api/members/", data=data1)
        self.client.post("/api/members/", data=data2)
        self.assertEqual(Member.objects.count(), 2)
        response = self.client.delete("/api/members/")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Member.objects.count(), 0)
