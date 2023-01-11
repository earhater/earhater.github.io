from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

from aiogram.types import WebAppInfo


web_app_gov = WebAppInfo(url="https://earhater.github.io/")


cc = KeyboardButton("Нажмите для входа в магазин", web_app=web_app_gov)


mainMenu = ReplyKeyboardMarkup(resize_keyboard=True)
btnProfile = KeyboardButton("Профиль")
mainMenu.add(btnProfile, cc)