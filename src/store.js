import * as jsonObj from '../static/photographers.json';
import { readable, writable } from 'svelte/store';

export const data = readable({ ...jsonObj });
export const userMedia = writable({ ...data.media });
export const KEYCODE = readable({ ESC: 27, LEFT_ARROW: 37, RIGHT_ARROW: 39, ENTER: 13});
