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

export const getMemberRoleFn = () => {
  const [currentMemberRole, setCurrentMemberRole] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const memberId = localStorage.getItem('memberId');
      const data = await getUserInfo(memberId);
      setCurrentMemberRole(data.roles);
    };
    fetch();
  }, [setCurrentMemberRole]);
  return currentMemberRole;
};
