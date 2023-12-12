class LocalStorageUtil {
	set(key: string, value: any): void {
		if (!isClient) return;
		window.localStorage.setItem(key, JSON.stringify(value));
	}

	get(key: string): any {
		if (!isClient) return;
		let value = window.localStorage.getItem(key);
		try {
			return JSON.parse(value as string);
		} catch (e) {
			return null;
		}
	}

	remove(key: string): void {
		if (!isClient) return;
		window.localStorage.removeItem(key);
	}
}

export const localStorageUtil = new LocalStorageUtil();
