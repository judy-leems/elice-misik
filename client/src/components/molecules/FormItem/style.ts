import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-bottom: 16px;
  & + div {
    margin-top: 10px;
  }
`;
