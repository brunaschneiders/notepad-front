import React from 'react';
import propTypes from 'prop-types';
import { Container, Label, TextArea } from './styles';

export default function TextAreaInput({ label, ...props }) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextArea {...props} />
    </Container>
  );
}

TextAreaInput.propTypes = {
  label: propTypes.string,
};

TextAreaInput.defaultProps = {
  label: '',
};
