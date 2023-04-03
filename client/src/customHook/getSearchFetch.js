import { getTagsSearch } from 'apis/api/tags';
import { useEffect, useState } from 'react';

export const getSearchFn = tag => {
  const [tagSearchCommissions, setTagSearchCommissions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, status } = await getTagsSearch(tag);
      if (status < 300) {
        setTagSearchCommissions(data);
        setLoading(false);
      }
    };
    fetch();
  }, [setTagSearchCommissions, setLoading]);
  return { tagSearchCommissions, loading };
};
