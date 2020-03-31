const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const https = require('https');

const TOKEN = '996463033:AAEX502RCoUE3pi8M0BSUyCijBW7moLSm-U';

const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

http.createServer().listen(process.env.PORT || 4000).on('request', function (req, res) {
    res.end('')
});
setInterval(function () {
    https.get('https://test-cool1-bot.herokuapp.com')
}, 300000);

try {
    bot.on('message',  async msg => {
        const chadid = msg.chat.id;
        const buttons =  {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: [
                        ['📔Пакеты', '💰Цены', '🏇Сроки',],
                        ['🎥Вы снимате в 2 камеры?', '🎀Что означает свадебный сайт'],
                        ['📝Есть ли у вас договр?', '🗺Где проходит сьемка?'],
                        ['Какое оборудование используете?', 'Примеры свадебных сайтов'],
                        ['Нужна ли предоплата?', 'Отдаете ли исходный материал?'],
                        ['📞Как связатся с нами?'],
                            ]
                }
            };
        if (msg.text === '/start') {
            await bot.sendMessage(chadid, `💐Приветсвуем в чате самых часто задаваемых вопросов👍🏽`, buttons);
        }
        //await bot.sendMessage(chadid, `${msg.from.first_name }, выберайте вариант ниже 👇🏽`, buttons);




        if (msg.text === '📔Пакеты') {
           await bot.sendMessage(chadid, 'Есть 3 пакета. Основное отличие: 8 часов работы, 10 часов и 12 часов работы. ' +
               'В каждый пакет входи - сьемка 2-мя операторами основных событый, монтаж клипа, предварительная встреча, ' +
               'онлайн пригласительный, ', buttons);
        } else if (msg.text === '💰Цены') {
            await bot.sendMessage(chadid, 'Стоимость от 10000 грн до 15000грн в зависимости от выбраного пакета', buttons);
        } else if (msg.text === '🏇Сроки') {
            await bot.sendMessage(chadid, 'Процесс сложный и творческий 🙏🏻, по времени стараемся от 2х недель , ' +
                'но бывает и 3 месяца☺️ . Поверьте , результат того стоит  🔥', buttons);
        }else if (msg.text === '🎥Вы снимате в 2 камеры?') {
            await bot.sendMessage(chadid, 'Сьемка происходит двумя операторами , таким образом позволяет снять ' +
                'разыне планы одного события. ', buttons);
        }else if (msg.text === '🎀Что означает свадебный сайт') {
            await bot.sendMessage(chadid, 'Свадебный сайт, это онлайн приглашение на свадьбу. Онлайн приглашение, ' +
                'размещенное на сайте, это одновременно и Ваша уникальная история и созданное лично Вами обращение к ' +
                'гостям. Возможность быстро отправить и проинформировать гостей о деталях мероприятия, каких либо ' +
                'изменений или дополений. Приглашение всегда доступно по ссылке котрую вы отправите им, одинаково ' +
                'красиво выглядит в компьютере или телефоне гостя, которого Вы пригласили на свадьбу.', buttons);
        }else if (msg.text === '💰Цены') {
            await bot.sendMessage(chadid, '120000', buttons);
        } else if (msg.text === '💰Цены') {
            await bot.sendMessage(chadid, '120000', buttons);
        } else if (msg.text === '💰Цены') {
            await bot.sendMessage(chadid, '120000', buttons);
        } else if (msg.text === '💰Цены') {
            await bot.sendMessage(chadid, '120000', buttons);
        } else if (msg.text === '💰Цены') {
            await bot.sendMessage(chadid, '120000', buttons);
        } else if (msg.text === '💰Цены') {
            await bot.sendMessage(chadid, '120000', buttons);
        } else if (msg.text === 'Отдаете ли исходный материал?') {
            await bot.sendMessage(chadid, 'Исходный материал по желанию можем отдать, как серее ссылку с нашего ' +
                'файлообменника, так и на вашем жестком диске. В среднем обьем зависит от насыщенности событий и ' +
                'составляет 200-300 гб . ', buttons);
        } else if (msg.text === '📞Как связатся с нами?') {
            await bot.sendMessage(chadid, 'Позвонить по телефону +380633592121, и мы ответим вам на ' +
                'оставшиеся вопросы', buttons);
        }

       // await bot.sendMessage(chadid, 'Получили твой интерес! Спасибо!' + msg.from.first_name, buttons);
    });
} catch (err) {
    console.warn(err.message);
}

//bot.on('message', function (msg) {//при получении сообщения
    //var text=msg.text;//получаем текст сообщения
    //if( text.indexOf('СЛОВО') >= 0){//проверяем на наличие слова
     //   var chatId = msg.chat.id;//получаем ChatId группы
     //   var msgId = msg.message_id;//получаем Id сообщения
       // bot.deleteMessage(chatId,msgId);//удаляем сообщение
  //  }
//});