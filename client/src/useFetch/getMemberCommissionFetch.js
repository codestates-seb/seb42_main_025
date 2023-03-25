import { getCommissionsFn } from './getCommissionFetch';
import { getMemberInfoFn } from './getMemberInfoFetch';

export const getMemberCommissionFn = () => {
  const commissions = getCommissionsFn();
  const memberInfo = getMemberInfoFn();

  if (commissions && memberInfo) {
    return commissions.filter(el => el.memberEmail === memberInfo.email);
  }

  return;
};
