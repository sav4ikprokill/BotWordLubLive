from aiogram import Router
from aiogram.filters import CommandStart
from aiogram.types import Message, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo


router = Router()



@router.message(CommandStart())
async def calling_service_start(message: Message):

    keyboard = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(
                text="Open Mini App"
                # web_app=WebAppInfo(url="https://t.me/{mybot}/{myapp}")
            )]
        ],
        resize_keyboard=True
    )
    await message.answer("Мы запустились ути какие", reply_markup=keyboard)
