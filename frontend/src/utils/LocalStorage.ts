export function getFromLocalStorage(key: string) {
	const localStorageData = localStorage.getItem(key);

	if (localStorageData && key === 'lang') {
		return localStorageData as 'ru' | 'en';
	}
}

export function setToLocalStorage(key: string, value: string) {
	localStorage.setItem(key, value);
}
