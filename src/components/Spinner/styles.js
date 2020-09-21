import styled from "styled-components";

export const Container = styled.div`
  /* Absolute Center Spinner */
  position: fixed;
  z-index: 1000000;
  height: 6em;
  width: 6em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  /* Transparent Overlay */
  &::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
