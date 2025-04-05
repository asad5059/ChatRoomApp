from django.db import models
from django.db.models import IntegerField, CharField

class UsersData(models.Model):
    id = IntegerField(primary_key=True, auto_created=True)
    username = CharField(unique=True, null=False, max_length=15)
    password = CharField(null=False, max_length=20)
