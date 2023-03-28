import { useEffect, useState } from 'react';
import { getCommissions } from 'apis/api/commissions';
import { getCommission } from 'apis/api/commission';

export const getCommissionsFn = () => {
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

export const getCommissionFn = id => {
  const [commission, setCommission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, status } = await getCommission(id);
      if (status < 300) {
        setCommission(data);
        setLoading(false);
      }
    };
    fetch();
  }, [setCommission, setLoading, id, getCommission]);

  return { commission, loading };
};
