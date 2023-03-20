from django.db import models
from django.core.files.storage import FileSystemStorage

upload_dir = FileSystemStorage()


class Project(models.Model):
    title = models.CharField(max_length=30)
    link = models.URLField()
    background = models.FileField()
    tools = models.ManyToManyField('Tool')


class Tool(models.Model):
    name = models.CharField(max_length=20)
    img = models.FileField(storage=upload_dir)
