import styled from 'styled-components';

import loginBackgroundImage from '../../assets/images/login.jpg';

export const Title = styled.h1`
  font-size: 40px;
`;

export const Subtitle = styled.h1`
  font-size: 17px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: whitesmoke;
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${loginBackgroundImage});
  background-size: cover;
  background-position: center center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 35%;
  height: 100%;
`;

export const UserData = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5%;
  margin: 3%;
  width: 100%;
  min-height: 45%;
`;

export const Row = styled.div`
  width: 100%;
  margin-bottom: 5%;
`;

export const FormButton = styled.button`
  height: 46px;
  font-size: 14px;
  font-weight: bold;
  color: whitesmoke;
  padding: 0.375rem 0.75rem;
  border-radius: 3px;
  border: none;
  width: 100%;
  background-color: #007300;

  &:hover {
    cursor: pointer;
    background-color: #015f01;
  }
`;

export const TextButton = styled.button`
  font-size: 16px;
  color: whitesmoke;
  border: none;
  width: 100%;
  background: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
