import { atom } from "nanostores";

export const AppInputStore = atom([
    { Note: '', id: 1, per: '' },
    { Note: '', id: 2, per: '' },
    { Note: '', id: 3, per: '' },
    { Note: '', id: 4, per: '' }
]);

export const NoPerStore = atom(25);