$.ajax({
    type: 'GET',
    url: 'https://api.telegram.org/bot5960316813:AAE-dt5FKOP1xnsMOmvsludK9AjqDfiSF00/sendMessage?chat_id=-841404134&text=hahaha',
    data: {query: 'test'},
    dataType: 'text',
    success: function(data) { console.log(data); }, // обработка ответа от сервера
    error: function(jqXHR) { console.log('Ошибка выполнения'); },
    complete: function() { console.log('Завершение выполнения'); }
});