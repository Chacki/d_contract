## **Установка:**
***
### npm install
```
npm install @chacki/d_contract
```
### git
```
git clone https://github.com/Chacki/d_contract.git
```
***
## **Использование:**
Для авторизации с гугл используется jwt метод.
Поэтому нужен только client_email и private_key который выдаёт гугл в файле.
```javascript
import {DContract} from "@chacki/d_contract";

const app = new DContract()

const token = await app.auth('example').createUser()
// const token = await app.auth('example').loginUser()

const getListClients = await app.getInfo(token).getListClients(100)

const getStatusClients = await app.getInfo(token).getStatusClients([1, 3, 4])

// данные для авторизации в гугл
const credentials = {
    "private_key": "example",
    "client_email": "example",
}

// id excel таблицы
const id = '1lrFesv5OQZrb1oE6E212323PdxG'

// имя листа, куда выгружать данные
const list = 'Лист1'

await app.google(credentials).exportToSheets(id, list, getStatusClients)
```


