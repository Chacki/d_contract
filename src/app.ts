import { Auth } from './structure/auth.js';
import { GetInfo } from './structure/getInfo.js';
import {GoogleApi} from "./structure/googleApi.js";
import {Credentials, ResponseListClients} from "./types/types.js";

export class DContract {

    /**
     * авторизация в гугле
     * @param username
     */
  auth(username: string) {
    return new Auth(username);
  }

    /**
     * получение данных по api
     * @param token
     */
  getInfo(token: string) {
    return new GetInfo(token);
  }

  google(credentials: Credentials) {
      const googleAuth = new GoogleApi(credentials)
      return {
          /**
           * экспорт данных в гугл таблицу
           * @param sheetID id - excel таблицы
           * @param listName - имя листа, куда экспортировать
           * @param data - данные для экспорта
           */
          exportToSheets: async (sheetID: string, listName: string, data: ResponseListClients) => {
              await googleAuth.exportToSheets(sheetID, listName, data);
          }
      }
  }

}
