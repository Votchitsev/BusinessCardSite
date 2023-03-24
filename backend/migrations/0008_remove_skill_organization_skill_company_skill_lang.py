# Generated by Django 4.1.7 on 2023-03-24 14:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_educationcompany_period'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='organization',
        ),
        migrations.AddField(
            model_name='skill',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='company', to='backend.educationcompany'),
        ),
        migrations.AddField(
            model_name='skill',
            name='lang',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.lang'),
        ),
    ]
