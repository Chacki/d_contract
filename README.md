## **Установка:**
***
```
```

## **Использование:**
```javascript
import {DContract} from "./lib/esm/index.js";

const app = new DContract()

const token = await app.auth('example').createUser()
// const token = await app.auth('example').loginUser()

const getListClients = await app.getInfo(token).getStatusClients(12, 3)
const getStatusClients = await app.getInfo(token).getStatusClients([1, 3, 4])
```


