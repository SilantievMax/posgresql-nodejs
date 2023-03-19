## Реализован маленький сервер на nodeJS, который работает с упрощенной базой данных фильмов



#### Routes

 _Основной маршрут http://127.0.0.1:3002/api_

|| create | get all | get one | update | delete |
|:---|:------:|:-----:|:----:|:-----:|:-----:|
| **genre** | /genre(POST) | /genre(GET) | /genre/:id(GET) | /genre(PUT) | /genre(DEL)
| **film** | /film(POST) | /film(GET) | /film/:id(GET) | /film(PUT) | /film(DEL)
| **unic** |  | /unic(GET) | | | 

*unic - Дополнительный роутер для получения данных из таблицы film и genre


### .env файл (данные частично заполнены)

```
PORT=3002

USER_BD=postgres
PASSWORD_DB=<ваш пароль>
HOST_BD=127.0.0.1
PORT_DB=5432
DATABASE_DB=films
```

### Clone projects

```
git clone https://github.com/SilantievMax/...
cd ...
npm install
npm run dev (для разработки)
npm start (для продакшин)
```