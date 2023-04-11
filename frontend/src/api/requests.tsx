import axios, {type AxiosResponse} from 'axios';
import Cookies from 'js-cookie';

const BaseUrl = 'http://127.0.0.1:8000/api/';

axios.defaults.withCredentials = true;

export const getProjects = async (): Promise<AxiosResponse> =>
	axios.get(BaseUrl + 'projects/');

export const getEducation = async (lang: string): Promise<AxiosResponse> =>
	axios.get(BaseUrl + `education/?lang=${lang}`);

export const postFeedbackMessage = async (data: Record<string, unknown>): Promise<AxiosResponse> =>
	axios.post(BaseUrl + 'feedback_bot1/', data, {
		headers: {
			'X-CSRFToken': Cookies.get('csrftoken'),
		},
	});

export const getSocials = async (): Promise<AxiosResponse> =>
	axios.get(BaseUrl + 'socials/');
