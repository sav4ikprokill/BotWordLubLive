from aiogram import Dispatcher
from config import bot
from handlers.calling_service import router as call_router
import logging
import asyncio


logging.basicConfig(level=logging.INFO)
dp = Dispatcher()

# Роутеры добавлять сюда

dp.include_router(call_router)



async def main():
    await dp.start_polling(bot)



if __name__ == "__main__":
    asyncio.run(main())