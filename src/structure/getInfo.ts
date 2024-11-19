import {
  Api,
  ResponseListClients,
  ResponseStatusClients,
} from '../types/api.js';

export class GetInfo {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  /**
   * Получение списка клиентов
   * @param limit {number}
   * @param offset {number}
   */
  async getListClients(limit?: number, offset?: number) {
    try {
      const queryParams = new URLSearchParams();
      if (limit !== undefined) queryParams.append('limit', String(limit));
      if (offset !== undefined) queryParams.append('offset', String(offset));

      const url = `${Api.apiClients}?${queryParams.toString()}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: this.token,
        },
      });
      let json;
      if (response.status === 200) {
        json = (await response.json()) as ResponseListClients;
      }
      if (response.status === 401) {
        throw new Error('Пользователь не авторизован');
      }
      return json;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Получение статусов клиентов
   * @param arrUserId {Array<number>}
   */
  async getStatusClients(arrUserId: Array<number>) {
    try {
      const response = await fetch(Api.apiClients, {
        method: 'POST',
        body: JSON.stringify({ userIds: arrUserId }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
      });
      let json;
      if (response.status === 201) {
        json = (await response.json()) as ResponseStatusClients;
      }
      if (response.status === 401) {
        throw new Error('Пользователь не авторизован');
      }
      return json;
    } catch (error) {
      throw error;
    }
  }
}
