from aiogram import Bot, Dispatcher, executor, types
import config as cfg
import markups
import markups as nav
from db import Database

bot = Bot(token=cfg.TOKEN)
dp = Dispatcher(bot)
db = Database("database")

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    if not db.user_exists(message.from_user.id):
        start_command = message.text
        rfid = str(start_command[7:])
        print("rfid" + rfid)
        if str(rfid) != '':
            print("if")
            if str(rfid) != str(message.from_user.id):
                print("checked for rfid")
                db.add_user(message.from_user.id, rfid)
                try:
                    await bot.send_message(rfid, "новый реферал")
                    print("sent")
                except:
                    print("unsent")
                    pass
            else:
                print("else1")

                await bot.send_message(message.from_user.id, " по своей ссылке нельзя")
        else:
            print("else2")
            db.add_user(message.from_user.id)
            print("New User")

    await bot.send_message(message.from_user.id, f'Добро пожаловать', reply_markup=nav.mainMenu)
@dp.message_handler()
async def bot_message(message: types.Message):
    if message.text == "Профиль":
        await bot.send_message(message.from_user.id, f"ID: {message.from_user.id} \nhttps://t.me/{cfg.BOT_NICKNAME}?start={message.from_user.id} рефералы:0")

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)