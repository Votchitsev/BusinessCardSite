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


class EducationCompany(models.Model):
    name = models.CharField(max_length=50)
    logo = models.FileField(storage=upload_dir)
    period = models.CharField(max_length=11, null=True)
    lang = models.ForeignKey('Lang', on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name_plural = 'Education companies'

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=200)
    company = models.ForeignKey(EducationCompany, on_delete=models.CASCADE, null=True, related_name="skills")

    def __str__(self):
        return self.name
    

class Lang(models.Model):
    name = models.CharField(max_length=5)

    class Meta:
        verbose_name_plural = "Languages"

    def __str__(self):
        return self.name
    