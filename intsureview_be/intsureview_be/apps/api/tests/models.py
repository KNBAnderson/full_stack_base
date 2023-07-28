from django.test import TestCase
from intsureview_be.apps.api.models import Member


class TestModels(TestCase):
    def test_model_str(self):
        member = Member.objects.create(
            email="Test@email.com",
            paid=True,
            scenarios="Alien Abduction,Mind Control",
            frequency="Never",
            brand="Kirkland Aluminum Foil",
        )
        self.assertEqual(str(member.email), "Test@email.com")
        self.assertEqual(str(member.paid), "True")
        self.assertEqual(str(member.scenarios), "Alien Abduction,Mind Control")
        self.assertEqual(str(member.frequency), "Never")
        self.assertEqual(str(member.brand), "Kirkland Aluminum Foil")
