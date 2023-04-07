import axios, {type AxiosResponse} from 'axios';

const BaseUrl = 'http://127.0.0.1:8000/api/';

// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

export const getProjects = async (): Promise<AxiosResponse> =>
	axios.get(BaseUrl + 'projects/');

export const getEducation = async (lang: string): Promise<AxiosResponse> =>
	axios.get(BaseUrl + `education/?lang=${lang}`);

export const postFeedbackMessage = async (data: Record<string, unknown>): Promise<AxiosResponse> =>
	axios.post(BaseUrl + 'feedback_bot/', data, {
		headers: {
			'X-CSRFToken': 'H3QNUZ4FB1v5zRixWRFRiFt9TzCmAqGW',
		},
	});
