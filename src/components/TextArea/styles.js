import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.h1`
  text-align: initial;
  font-size: 14px;
  color: whitesmoke;
  margin-bottom: 1%;
`;

export const TextArea = styled.textarea`
  height: 100px;
  font-size: 14px;
  font-weight: bold;
  color: #3d495c;
  padding: 0.375rem 0.75rem;
  border: 1px solid #3d495c;
  border-radius: 3px;
  width: 100%;
  resize: none;

  &:focus {
    border: 1px solid whitesmoke;
    box-shadow: 0 0 0.4em whitesmoke;
  }
`;
