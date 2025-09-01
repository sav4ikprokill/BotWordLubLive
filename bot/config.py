from os import getenv
from dotenv import load_dotenv
from aiogram import Bot


#Создали экземпляр Бота

load_dotenv()
TOKEN=getenv("TOKEN")
bot = Bot(token=TOKEN)
