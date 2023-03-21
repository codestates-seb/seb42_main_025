import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: localStorage.getItem('isLoggedIn') === 'true',
});
