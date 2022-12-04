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
    #await bot.send_message(web_app_message.chat.id, web_app_message["data"])
    mess = "Вы выбрали Tовар " + web_app_message.web_app_data.data + ", Он будет добавлен в Корзину"
    await bot.send_message(web_app_message.chat.id, mess)

    data = web_app_message.web_app_data.data
    sj = ''.join(data)
    s = [int(s) for s in str.split(data) if s.isdigit()]
    insert_db(web_app_message.chat.id, sj)

    cart = select_task_by_priority(web_app_message.chat.id)
    print(type(web_app_message.web_app_data.data))
    print(''.join(data))
@dp.message_handler(content_types='text')
async def message(message):
    if message.text == "Koрзина":
        cart = select_task_by_priority(message.chat.id)
        print(type(cart))
        #cartj = ''.join(cart)
        await bot.send_message(message.chat.id, cart)
    elif message.text == "Перейти к оформлению":

        await message.answer("Введите своё имя")
        await UserState.name.set()

@dp.message_handler(state=UserState.name)
async def get_username(message: types.Message, state: FSMContext):
    await state.update_data(username=message.text)
    await message.answer("Отлично! Теперь введите ваш адрес.")
    await UserState.next() # либо же UserState.address.set()

@dp.message_handler(state=UserState.address)
async def get_address(message: types.Message, state: FSMContext):
    await state.update_data(address=message.text)
    await message.answer("Отлично! Теперь введите ваш номер телефона (Вам позвонит менеджер для уточнения заказа)")
    await UserState.next() # либо же UserState.address.set()

@dp.message_handler(state=UserState.phone)
async def get_address(message: types.Message, state: FSMContext):
    await state.update_data(phone=message.text)
    data = await state.get_data()
    await message.answer(f"Имя: {data['username']}\n"
                         f"Адрес: {data['address']}\n"
                         f"Телефон: {data['phone']}\n"
                         f"Ваш заказ принят. Ожидайте звонка от менеджера"

                         )


    await state.finish()
@dp.pre_checkout_query_handler(lambda q: True)
async def checkout_process(pre_checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)


