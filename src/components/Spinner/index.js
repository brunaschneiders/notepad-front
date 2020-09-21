import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';

const Spinner = ({ visible }) => (
  <>
    {visible && (
      <Container>
        <div>
          <FontAwesomeIcon icon={faSpinner} color="whitesmoke" spin size="4x" />
        </div>
      </Container>
    )}
  </>
);
export default Spinner;
