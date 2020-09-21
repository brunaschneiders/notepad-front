import React from 'react';
import { Container, Label, TextArea } from './styles';

function TextAreaInput({ label, ...props }) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextArea {...props} />
    </Container>
  );
}

export default TextAreaInput;
