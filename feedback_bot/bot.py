import os
import environ
from pathlib import Path
import telebot

env = environ.Env(
     DEBUG=(bool, False)
)

environ.Env.read_env(
    os.path.join(
        Path(__file__).resolve().parent.parent,
        '.env'
    )
)

token = env('BOT_TOKEN')

bot = telebot.TeleBot(token)


def send_message(name, email, text):

    message = 'Новое сообщение от {name} ({email}) \n\n{text}' \
        .format(
            name=name,
            email=email,
            text=text,
        )

    bot.send_message(env('BOT_USER_CHAT_ID'), message)
