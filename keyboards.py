from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup
from aiogram.utils.callback_data import CallbackData

web_app_gov = WebAppInfo(url="https://earhater.github.io/")

cat = ReplyKeyboardMarkup(resize_keyboard=True)
buy = KeyboardButton("Перейти к оформлению")
cc = KeyboardButton("Нажмите для входа в магазин", web_app=web_app_gov)
crt = KeyboardButton("Koрзина")
cat.add(cc,crt)
cat.add(buy)
#keyboard = ReplyKeyboardMarkup(
#    keyboard=[
#        [KeyboardButton(text="Site", web_app=web_app)]
#    ],
#    resize_keyboard=True
#)


