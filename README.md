# Домашнее задание к модулю "Асинхронность, работа с сетью"

Я думаю, ты помнишь времена, когда для участия в программе лояльности предлагали заполнить анкету прямо на кассе.

К счастью, в наши дни 99% таких анкет перекочевало в интернет 🌚

Предлагаю тебе реализовать одну из них (можешь с помощью HTML и CSS задать свою уникальную тематику), а заодно потренироваться в отправке POST-запросов.

Описание доступного API ты найдешь в [README](https://github.com/CodegirlSchool/rest-tasks). Обрати внимание на раздел «авторизация» — без него код не будет работать как нужно.

Заготовка программы находится в [script.js](./script.js). Продолжай работать в ней.

После того как закончишь, опубликуй результат на GitHub Pages, а ссылку на него вставь в README

```
https://elenanikolaenya.github.io/the-questionnaire/
```

## Техническое задание

1. При клике на кнопку «Отправить» отправляй POST-запрос на адрес `http://46.21.248.81:3001/user` с данными из полей формы. Формат body в [README](https://github.com/CodegirlSchool/rest-tasks)

2. В случае успешной отправки данных показывай пользователю уведомление. Реализация на твой вкус, но лучше подойти к делу творчески и выйти за пределы обычного alert'a.

3. Если во время отправки данных на сервер произошла ошибка, также показывай пользователю сообщение об этом.

4. После **успешной** отправки очищай поля формы. Совет: присмотрись к [reset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)

5. Этот пункт по желанию: в API есть [два адреса](shorturl.at/fgjku), куда можно отправлять GET-запросы для получения всех твоих пользователей и последнего добавленного. Придумай, как их можно обыграть в интерфейсе и сделай это.

Желаю удачи! 🥰


# Homework for the module "Asynchrony, working with the network"

I think you remember the times when to participate in the loyalty program you were asked to fill out a form right at the checkout.

Fortunately, these days 99% of such forms have migrated to the Internet 🌚

I suggest you implement one of them (you can set your own theme using HTML and CSS), and at the same time practice sending POST requests.

A description of the available API you can found in [README](https://github.com/CodegirlSchool/rest-tasks). Pay attention to the “authorization” section - without it the code will not work as it should.

The program template is located in [script.js](./script.js). Continue to work in it.

Once completed, publish the result on GitHub pages and paste a link to it in the README.

```
https://elenanikolaenya.github.io/the-questionnaire/
```

## Technical requirement

1. When you click on the “Submit” button, send a POST request to the address `http://46.21.248.81:3001/user` with the data from the form fields. Body format is in [README](https://github.com/CodegirlSchool/rest-tasks)

2. If the data is sent successfully, display a notification to the user. The implementation is up to you, but it’s better to get creative and go beyond the traditional alert. 

3. If an error occurred while sending data to the server, also show the user a message about this.

4. After a **successfull** sending clear the form fields. A tip: take a closer look at [reset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)

5. This item is optional: the API has [two addresses](shorturl.at/fgjku), where you can send GET requests for receiving all  your users and the last one added. Figure out how you can use them in the interface and do it.

Good luck! 🥰