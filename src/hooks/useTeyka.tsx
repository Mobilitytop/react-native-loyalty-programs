import { useCallback, useEffect, useState } from 'react';
import { AuthTeyka } from '../api/auth.teyka';
import { PassesTeyka } from '../api/passes.teyka';
import type { getTokenProps, PassesTeycaProps } from '../interface';

export const useTeyka = (apiKey: string, identifier: string) => {
  const { getToken } = AuthTeyka;
  const { createPasses } = PassesTeyka;

  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const getAuthToken = useCallback(async () => {
    if (apiKey) {
      try {
        const response = await getToken(apiKey);

        if (response) {
          const filterTokens = response.tokens.find(
            (item: getTokenProps) => item.identifier === identifier
          );
          if (filterTokens) {
            setToken(filterTokens.token);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [apiKey, getToken, identifier]);

  const handleCreatePasses = async (body: PassesTeycaProps) => {
    if (token && apiKey) {
      try {
        setLoading(true);
        const response = await createPasses(apiKey, token, body);

        if (response) {
          console.log('response', response);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getAuthToken();
  }, [getAuthToken]);

  return {
    handleCreatePasses,
    loading,
  };
};
