from aiogram import Bot, Dispatcher, executor, types
from aiogram.types import WebAppInfo



import config as cfg
import markups
import markups as nav
import pyqrcode as qr
from db import Database
import png
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
        await bot.send_message(message.from_user.id, f"ID: {message.from_user.id} \nhttps://t.me/{cfg.BOT_NICKNAME}?start={message.from_user.id} рефералы:0\n Ниже находится ваш персоальный qr код")
        qrcode = qr.create(f"https://t.me/{cfg.BOT_NICKNAME}?start={message.from_user.id}")
        qrcode.png("1.png", scale=6)


        with open('1.png', 'rb') as photo:
            await bot.send_photo(message.chat.id, photo)

@dp.message_handler(content_types='web_app_data')
async def buy_process(web_app_message):

    mess = web_app_message.web_app_data.data
    await bot.send_message(web_app_message.chat.id, mess)
    requests.post(f"https://api.telegram.org/bot5960316813:AAE-dt5FKOP1xnsMOmvsludK9AjqDfiSF00/sendMessage?chat_id=-841404134&text={mess}")




if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)