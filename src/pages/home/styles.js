import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 15%;
`;

export const Subtitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5%;
`;

export const Text = styled.p`
  font-size: 17px;
  margin-bottom: 10%;
  &:last-child {
    font-weight: bold;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: whitesmoke;
  display: flex;
  background: #121214;
  background-size: cover;
  background-position: center center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 45%;
  height: 40%;
  text-align: center;
`;

export const CardRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #212025;
  padding: 3%;
  margin: 3%;
  width: 50%;
  border-radius: 10px;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
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
  background-color: #615f69;

  &:hover {
    cursor: pointer;
    background-color: #4e4c55;
  }
`;
