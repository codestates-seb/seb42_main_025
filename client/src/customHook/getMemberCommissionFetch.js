import { getCommissionsFn } from './getCommissionFetch';

export const getMemberCommissionFn = email => {
  const commissions = getCommissionsFn();

  if (commissions) {
    return commissions.filter(el => el.memberEmail === email);
  }

  return;
};
