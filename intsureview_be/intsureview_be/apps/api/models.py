from django.db import models


class Member(models.Model):
    email = models.EmailField(max_length=120, unique=True)
    paid = models.BooleanField(default=False)
    scenarios = models.CharField(max_length=100)
    frequency = models.CharField(max_length=10)
    brand = models.CharField(max_length=100)

    def _str_(self):
        return self
