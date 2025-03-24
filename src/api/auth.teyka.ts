import { API_URL_TEYCA } from './config';

export const AuthTeyka = {
  async getToken(apiKey: string): Promise<any> {
    try {
      const response = await fetch(`${API_URL_TEYCA}/authorization`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
        },
      });

      if (response.ok) {
        const json = await response.json();
        return json;
      }
      return response.ok;
    } catch (error) {
      return false;
    }
  },
  async createToken(apiKey: string, identifier: string): Promise<any> {
    try {
      const response = await fetch(`${API_URL_TEYCA}/authorization`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
        },
        body: JSON.stringify({ identifier }),
      });

      return response.ok;
    } catch (error) {
      return false;
    }
  },
  async deleteToken(apiKey: string, identifier: string): Promise<any> {
    try {
      const response = await fetch(`${API_URL_TEYCA}/authorization`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
        },
        body: JSON.stringify({ identifier }),
      });

      return response.ok;
    } catch (error) {
      return false;
    }
  },
};
