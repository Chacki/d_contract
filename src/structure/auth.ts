import { Api } from '../types/api.js';

export class Auth {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  /**
   * Регистрация пользователя
   */
  async createUser() {
    try {
      const response = await fetch(Api.registration, {
        method: 'POST',
        body: JSON.stringify({ username: this.username }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let json;
      if (response.status === 201) {
        json = await response.json();
      }
      if (response.status === 400) {
        throw new Error('Пользователь уже существует');
      }
      return json.token as string;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Авторизация пользователя
   */
  async loginUser() {
    try {
      const response = await fetch(Api.login, {
        method: 'POST',
        body: JSON.stringify({ username: this.username }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let json;
      if (response.status === 201) {
        json = await response.json();
      }
      if (response.status === 400) {
        throw new Error('Пользователь не найден');
      }
      return json.token as string;
    } catch (error) {
      throw error;
    }
  }
}
