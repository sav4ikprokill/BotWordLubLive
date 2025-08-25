import asyncio
import logging
from dotenv import load_dotenv
from os import getenv

from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message

# Configure logging
logging.basicConfig(level=logging.INFO)


load_dotenv()
TOKEN = getenv("BOT_TOKEN") 
print(TOKEN)
bot = Bot(token=TOKEN)


# Initialize Dispatcher
dp = Dispatcher()

# Command handler for the /start command
@dp.message(Command("start"))
async def command_start_handler(message: Message) -> None:
    """
    This handler receives messages with the /start command.
    """
    await message.answer("Hello! I'm your aiogram bot. How can I help you?")

# Main function to run the bot
async def main() -> None:
    # Initialize Bot instance
    # Start long polling to receive updates
    await dp.start_polling(bot)

if __name__ == "__main__":
    # Run the main asynchronous function
    asyncio.run(main())