import { useState, useEffect } from 'react';
import { getTags } from 'apis/api/tags';

export const getTagsFn = () => {
  const [tags, setTags] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, status } = await getTags();
      if (status < 300) {
        setTags(data);
        setLoading(false);
      }
    };
    fetch();
  }, [setTags, setLoading]);
  return { tags, loading };
};
