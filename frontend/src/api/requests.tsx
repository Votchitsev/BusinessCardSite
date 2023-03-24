import axios, {type AxiosResponse} from 'axios';

const BaseUrl = 'http://127.0.0.1:8000/api/';

export const getProjects = async (): Promise<AxiosResponse> => axios.get(BaseUrl + 'projects/');

export const getEducation = async (lang: string): Promise<AxiosResponse> => axios.get(BaseUrl + `education/?lang=${lang}`);
