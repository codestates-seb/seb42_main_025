import { useEffect, useState } from 'react';
import { getCommissions } from 'apis/api/commissions';
import { getCommission } from 'apis/api/commission';
import { getTags, getTagsSearch } from 'apis/api/tags';

export const getCommissionsFn = filter => {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions(filter);
      setCommissions(data);
    };
    fetch();
  }, [setCommissions]);

  return commissions;
};

export const getTagsCommissionsFn = () => {
  const [tag, setTag] = useState('그림');
  const [tagsCommissions, setTagsCommissions] = useState(null);
  const [loading, setLoading] = useState(true);

  const randomNum = Math.floor(Math.random() * 10 + 1);

  useEffect(() => {
    const fetch = async () => {
      const { data, status } = await getTags();
      if (status < 300) {
        const tagName = data.data[randomNum].tagName;
        setTag(tagName);
      }
    };
    fetch();
  }, [setTag]);

  useEffect(() => {
    const fetch = async () => {
      const { data, status } = await getTagsSearch(tag);
      if (status < 300) {
        setTagsCommissions(data.data);
        setLoading(false);
      }
    };
    fetch();
  }, [setTagsCommissions, setLoading, setTag, tag]);
  return { tagsCommissions, loading };
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
  }, [setCommission, setLoading]);

  return { commission, loading };
};
