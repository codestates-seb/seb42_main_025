import { getUserInfo } from 'apis/api/user';
import { getCommission } from 'apis/api/commission';
import { useState, useEffect } from 'react';

export const getTradeSubInfoFn = infos => {
  const [filteredInfos, setFilteredInfos] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      for (let i = 0; i < infos.length; i++) {
        const member = await getUserInfo(infos[i].memberId);
        const commission = await getCommission(infos[i].commissionId);
        if (member) {
          infos[i].member = member;
        }
        if (commission) {
          infos[i].commission = commission;
        }
      }
      setFilteredInfos(infos);
    };
    fetch();
  }, [setFilteredInfos]);
  return filteredInfos;
};
