import { getUserInfo } from 'apis/api/user';
import { useState, useEffect } from 'react';

export const getMemberInfoFn = id => {
  const [currentMemberInfo, setCurrentMemberInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, status } = await getUserInfo(id);
      if (status < 300) {
        setCurrentMemberInfo(data);
        setLoading(false);
      }
    };
    fetch();
  }, [setCurrentMemberInfo, id, setLoading]);
  return { currentMemberInfo, loading };
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
