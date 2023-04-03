import { instance } from 'apis/utils';

export const postTrade = async data => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await instance.post(`/trade`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAuthorTrades = async data => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await instance.get(
      `/trade/author?page=${data.page}&size=20&sort=trade_id,desc&authorEmail=${data.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMemberTrades = async data => {
  try {
    const res = await instance.get(
      `/trade?page=${data.page}&size=20&sort=trade_id,asc&memberId=${data.memberId}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const patchTradeStatus = async (data, id) => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await instance.patch(`/trade/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
