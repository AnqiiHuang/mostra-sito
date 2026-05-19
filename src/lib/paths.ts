import { resolve } from '$app/paths';

/** Link a una sezione della homepage (funziona da qualsiasi route, es. `/demo`). */
export function homeSection(hash: string): string {
	const h = hash.startsWith('#') ? hash : `#${hash}`;
	const root = resolve('/').replace(/\/$/, '');
	return `${root}${h}`;
}
