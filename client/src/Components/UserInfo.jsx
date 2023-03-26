// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRecoilValue } from 'recoil';
// import { isLoggedInState } from 'page/atom';

// const UserInfo = () => {
//   const isLoggedIn = useRecoilValue(isLoggedInState);
//   const [member, setMember] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMemberInfo = async () => {
//       try {
//         const token = localStorage.getItem('authorization');
//         const response = await axios.get('http://3.37.139.165/members/me', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMember(response.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (isLoggedIn) {
//       fetchMemberInfo();
//     } else {
//       setLoading(false);
//     }
//   }, [isLoggedIn]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>User Info</h2>
//       <p>Email: {member.email}</p>
//       <p>Nickname: {member.nickname}</p>
//       <p>User Type: {member.userType}</p>
//     </div>
//   );
// };

// export default UserInfo;
