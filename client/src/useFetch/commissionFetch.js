import { useEffect, useState } from 'react';
import { getCommissions } from 'apis/api/commissions';

export const getCommissionsFn = () => {
  const [commissions, setCommissions] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions();
      setCommissions(data);
    };
    fetch();
  }, []);

  return commissions;
};
