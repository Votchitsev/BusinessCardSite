import os
import environ
from pathlib import Path
import telebot


class Bot:
    def __init__(self):
        self._env = self._env_init()
        self._bot = telebot.TeleBot(self._env('BOT_TOKEN'))

    def send_message(self, name, email, text):
        message = 'Новое сообщение от {name} ({email}) \n\n{text}' \
            .format(
                name=name,
                email=email,
                text=text,
            )

        self._bot.send_message(self._env('BOT_USER_CHAT_ID'), message)

    def _env_init(self):
        env = environ.Env(
            DEBUG=(bool, False)
        )

        environ.Env.read_env(
            os.path.join(
                Path(__file__).resolve().parent.parent,
                '.env'
            )
        )

        return env
