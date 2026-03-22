import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px 32px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  font-size: 16px;
  font-weight: var(--fw-light);
  cursor: pointer;
`;
