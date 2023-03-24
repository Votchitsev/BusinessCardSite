# Generated by Django 4.1.7 on 2023-03-21 13:28

import django.core.files.storage
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_tool_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='EducationOrganization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('logo', models.FileField(storage=django.core.files.storage.FileSystemStorage(), upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.educationorganization')),
            ],
        ),
    ]
