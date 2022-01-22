import * as jsonObj from '../static/photographers.json';
import { readable, writable } from 'svelte/store';

export const data = readable({ ...jsonObj });
export const userMedia = writable({ ...data.media });
