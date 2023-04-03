from django.db import models


class Message(models.Model):
    received_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    text = models.TextField()

    class Meta:
        verbose_name = 'Сообщение от работодателя'
        verbose_name_plural = 'Сообщения от работодателей'

    def __str__(self):
        return '{time} {email}'.format(
            time=self.received_at,
            email=self.email,
        )
    