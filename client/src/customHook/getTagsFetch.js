import { useState, useEffect } from 'react';
import { getTags } from 'apis/api/tags';

export const getTagsFn = () => {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTags(tags);
      setTags(data);
    };
    fetch();
  }, [setTags]);
  return tags;
};
