import { atom, selector } from 'recoil';

export const currentCommissions = atom({
  key: 'currentCommissions',
  default: null,
});

export const currentCommissionId = selector({
  key: 'currentCommissionId',
  get: ({ get }) => {
    const commissionId = get(currentCommissions);
    console.log(commissionId.commissionId);
    return commissionId.commissionId;
  },
});
