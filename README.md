[![Build status](https://ci.appveyor.com/api/projects/status/oickyk7kadr48v5b/branch/master?svg=true)](https://ci.appveyor.com/project/maria-namira/hooks-context-use-json-fetch-front/branch/master)

# useJsonFetch

### Deployment: <a href="https://github.com/maria-namira/hooks_context-use_json_fetch-front.git/">Github Pages</a>

---

Реализуйте кастомный хук `useJsonFetch`, который позволяет с помощью `fetch` осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:
```javascript
const [data, loading, error] = useJsonFetch(url, opts);
```

где:
* `data` - данные, полученные после `response.json()` (не Promise, а именно данные)
* `error` - ошибка (ошибка сети, ошибка ответа - если код не 20x, ошибка парсинга - если пришёл не JSON)
* `loading` - boolean флаг, сигнализирующий о том, что загрузка идёт

Покажите использование этого хука на примере трёх компонентов, каждый из которых делает запросы на следующие адреса (backend возьмите из каталога `backend`):
* GET http://localhost:7070/data - успешное получение данных
* GET http://localhost:7070/error - получение 500 ошибки
* GET http://localhost:7070/loading - индикатор загрузки