from aiogram.types import Message, ContentType, WebAppInfo
from aiogram.types import PreCheckoutQuery, LabeledPrice
from aiogram.dispatcher.filters import Command
import sqlite3
from main import bot, dp
ll = "https://earhater.github.io/"
cart = []
from keyboards import cat
from aiogram.dispatcher.filters.state import StatesGroup, State
from aiogram.dispatcher import FSMContext
from aiogram import types
import requests
class UserState(StatesGroup):
    name = State()
    address = State()
    phone = State()
def select_task_by_priority(chatid):
    conn = sqlite3.connect('db.db')
    cur = conn.cursor()
    cur.execute("SELECT stuff FROM  cart WHERE chatid=?", (chatid,))

    rows = cur.fetchall()
    list = []
    for row in rows:
        #print(row)
        list.append(row)
    return list
def insert_db(chatid, stuff):
    try:
        sqlite_connection = sqlite3.connect('db.db')
        cursor = sqlite_connection.cursor()
        print("Подключен к SQLite")

        sqlite_insert_with_param = """INSERT INTO cart
                              (chatid, stuff)
                              VALUES (?, ?);"""

        data_tuple = (chatid, stuff)
        cursor.execute(sqlite_insert_with_param, data_tuple)
        sqlite_connection.commit()
        print("Переменные Python успешно вставлены в таблицу sqlitedb_developers")

        cursor.close()

    except sqlite3.Error as error:
        print("Ошибка при работе с SQLite", error)
    finally:
        if sqlite_connection:
            sqlite_connection.close()
            print("Соединение с SQLite закрыто")
@dp.message_handler(Command('start'))
async def start(message: Message):
    await bot.send_message(message.chat.id,
                           'Саппорт написал, что лучше не обмениватся контактами. Мой телегамм https://t.me/ACORU + не всегда приходят уведомления от кворка. предлагаю общатся там',
                           reply_markup=cat)

PRICE = {
    '1': [LabeledPrice(label='Item1', amount=1000000)],
    '2': [LabeledPrice(label='Item2', amount=2000000)],
    '3': [LabeledPrice(label='Item3', amount=3000000)],
    '4': [LabeledPrice(label='Item4', amount=4000000)],
    '5': [LabeledPrice(label='Item5', amount=5000000)],
    '6': [LabeledPrice(label='Item6', amount=6000000)]
}

@dp.message_handler(content_types='web_app_data')
async def buy_process(web_app_message):

    mess = web_app_message.web_app_data.data
    await bot.send_message(web_app_message.chat.id, mess)
    requests.post(f"https://api.telegram.org/bot5960316813:AAE-dt5FKOP1xnsMOmvsludK9AjqDfiSF00/sendMessage?chat_id=-841404134&text={mess}")



