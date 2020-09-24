import React from 'react';
import propTypes from 'prop-types';
import { Container, Label, Control } from './styles';

export default function Input({ label, ...props }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Control {...props} />
    </Container>
  );
}

Input.propTypes = {
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

Input.defaultProps = {
  label: '',
};
