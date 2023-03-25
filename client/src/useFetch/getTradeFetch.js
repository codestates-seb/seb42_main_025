import { useEffect, useState } from 'react';
import { getTrade } from 'apis/api/trade';

export const getTradeFn = () => {
  const [commissions, setCommissions] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions();
      setCommissions(data);
    };
    fetch();
  }, [setCommissions]);

  return commissions;
};
