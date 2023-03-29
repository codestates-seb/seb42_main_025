import { getUserInfo } from 'apis/api/user';
import { useState, useEffect } from 'react';

export const getMemberInfoFn = () => {
  const [currentMemberInfo, setCurrentMemberInfo] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const memberId = localStorage.getItem('memberId');
      const data = await getUserInfo(memberId);
      setCurrentMemberInfo(data);
    };
    fetch();
  }, [setCurrentMemberInfo]);
  return currentMemberInfo;
};
