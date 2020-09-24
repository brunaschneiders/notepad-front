import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import { Container } from './styles';

export default function Spinner({ visible }) {
  return (
    <>
      {visible && (
        <Container>
          <div>
            <FontAwesomeIcon
              icon={faSpinner}
              color="whitesmoke"
              spin
              size="4x"
            />
          </div>
        </Container>
      )}
    </>
  );
}

Spinner.propTypes = {
  visible: propTypes.bool.isRequired,
};
