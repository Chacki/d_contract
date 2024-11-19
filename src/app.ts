import { Auth } from './structure/auth.js';
import { GetInfo } from './structure/getInfo.js';

export class DContract {
  auth(username: string) {
    return new Auth(username);
  }

  getInfo(token: string) {
    return new GetInfo(token);
  }
}
