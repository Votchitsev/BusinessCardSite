from django.contrib import admin
from .models import Project, Tool, EducationCompany, Skill, Lang, Contact, Social


class ToolInline(admin.TabularInline):
    model = Project.tools.through


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    fields = ('title', 'link', 'background')

    inlines = [
        ToolInline,
    ]


@admin.register(Tool)
class ToolAdmin(admin.ModelAdmin):
    pass


class SkillInline(admin.TabularInline):
    model = Skill


class SocialInline(admin.TabularInline):
    model = Social


@admin.register(EducationCompany)
class EducationCompanyAdmin(admin.ModelAdmin):
    fields = ('name', 'logo', 'period', 'lang')

    inlines = [
        SkillInline,
    ]


@admin.register(Lang)
class LangAdmin(admin.ModelAdmin):
    pass


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):

    inlines = [
        SocialInline,
    ]
