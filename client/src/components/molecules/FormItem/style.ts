import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  & + div {
    margin-top: 10px;
  }
`;
