## **Установка:**
***
### npm install
```
npm install @chacki/d_contract
```
### git
```
git clone https://github.com/Chacki/d_contract
```
***
## **Использование:**
```javascript
import {DContract} from "@chacki/d_contract";

const app = new DContract()

const token = await app.auth('example').createUser()
// const token = await app.auth('example').loginUser()

const getListClients = await app.getInfo(token).getStatusClients(12, 3)
const getStatusClients = await app.getInfo(token).getStatusClients([1, 3, 4])
```


