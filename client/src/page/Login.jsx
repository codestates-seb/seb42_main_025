import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 320px;
  border: 2px solid #ddba9d;
  border-radius: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 1px #f5e8dd;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddba9d;
  margin-bottom: 10px;
  width: 220px;
  height: 20px;
  position: relative;
  bottom: 50px;
  margin-bottom: 20px;
  background-color: #f5e8dd;
  box-shadow: 3px 3px 1px #ddba9d;
  color: #db9a65;

  ::placeholder {
    color: #db9a65;
  }

  &:focus {
    border-color: #ce8e5b;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #ddba9d;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  position: relative;
  top: 30px;
  width: 240px;
  height: 40px;
  box-shadow: 5px 5px 1px #f5e8dd;
  cursor: pointer;

  &:hover {
    background-color: #ce8e5b;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');

    if (email === '' || password === '') {
      alert('Please fill in all fields');
    } else {
      // Handle login submission
    }
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Label htmlFor="email"></Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />
        <Label htmlFor="password"></Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required
        />
        <Button type="submit">Log in</Button>
      </FormWrapper>
    </Container>
  );
};

export default Login;
