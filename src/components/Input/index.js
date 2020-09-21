import React from 'react';
import { Container, Label, Control } from './styles';

function Input({ label, ...props }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Control {...props} />
    </Container>
  );
}

export default Input;
