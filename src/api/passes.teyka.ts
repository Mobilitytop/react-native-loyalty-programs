import type { PassesTeycaProps } from '../interface';
import { API_URL_TEYCA } from './config';

export const PassesTeyka = {
  async createPasses(
    apiKey: string,
    token: string,
    body: PassesTeycaProps
  ): Promise<any> {
    try {
      const response = await fetch(`${API_URL_TEYCA}/${token}/passes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
        },
        body: JSON.stringify(body),
      });

      console.log('response createPasses', response);

      if (response.ok) {
        const json = await response.json();
        return json;
      }
      return response.ok;
    } catch (error) {
      return error;
    }
  },
};
