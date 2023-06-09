from django.db import models
from django.contrib.auth.models import User
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
    company = models.ForeignKey(
        EducationCompany,
        on_delete=models.CASCADE,
        null=True,
        related_name="skills",
    )

    def __str__(self):
        return self.name
    

class Lang(models.Model):
    name = models.CharField(max_length=5)

    class Meta:
        verbose_name_plural = "Languages"

    def __str__(self):
        return self.name


class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthdate = models.DateField()
    city = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    email = models.EmailField(default='dmitry.votchitsev@gmail.com')
    position = models.CharField(max_length=20)
    about_me = models.TextField(max_length=600, default='Text about me...')

    lang = models.ForeignKey(Lang, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0)

    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'

    def __str__(self):
        return self.lang.name


class Social(models.Model):
    name = models.CharField(max_length=20)
    link = models.URLField()
    logo = models.FileField(storage=upload_dir)

    contact = models.ForeignKey(Contact, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Социальная сеть'
        verbose_name_plural = 'Социальные сети'


    def __str__(self):
        return '{contact} ({name})'.format(
            contact=self.contact.first_name,
            name=self.name,
        )
    