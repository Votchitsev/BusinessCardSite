from django.db import models
from django.core.files.storage import FileSystemStorage

upload_dir = FileSystemStorage()


class Project(models.Model):
    title = models.CharField(max_length=30)
    link = models.URLField()
    background = models.FileField()
    tools = models.ManyToManyField('Tool')

    def __str__(self):
        return self.title


class Tool(models.Model):
    name = models.CharField(max_length=20)
    img = models.FileField(storage=upload_dir)

    def __str__(self):
        return self.name
