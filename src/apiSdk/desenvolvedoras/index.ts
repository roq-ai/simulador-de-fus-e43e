import axios from 'axios';
import queryString from 'query-string';
import { DesenvolvedoraInterface, DesenvolvedoraGetQueryInterface } from 'interfaces/desenvolvedora';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDesenvolvedoras = async (
  query?: DesenvolvedoraGetQueryInterface,
): Promise<PaginatedInterface<DesenvolvedoraInterface>> => {
  const response = await axios.get('/api/desenvolvedoras', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDesenvolvedora = async (desenvolvedora: DesenvolvedoraInterface) => {
  const response = await axios.post('/api/desenvolvedoras', desenvolvedora);
  return response.data;
};

export const updateDesenvolvedoraById = async (id: string, desenvolvedora: DesenvolvedoraInterface) => {
  const response = await axios.put(`/api/desenvolvedoras/${id}`, desenvolvedora);
  return response.data;
};

export const getDesenvolvedoraById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/desenvolvedoras/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDesenvolvedoraById = async (id: string) => {
  const response = await axios.delete(`/api/desenvolvedoras/${id}`);
  return response.data;
};
