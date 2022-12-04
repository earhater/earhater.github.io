import asyncio
from aiogram import Bot, Dispatcher, executor

from config import BOT_TOKEN
from aiogram.contrib.fsm_storage.memory import MemoryStorage

storage = MemoryStorage()
loop = asyncio.new_event_loop()
bot = Bot(BOT_TOKEN, parse_mode='HTML')
dp = Dispatcher(bot, loop, storage=storage)

if __name__ == '__main__':
    from handlers import dp
    executor.start_polling(dp)
