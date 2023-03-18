from django.contrib import admin
from .models import Project, Tool


class ToolInline(admin.TabularInline):
    model = Project.tools.through


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    inlines = [
        ToolInline,
    ]


@admin.register(Tool)
class ToolAdmin(admin.ModelAdmin):
    pass
