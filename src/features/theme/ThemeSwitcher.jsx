import styled from "styled-components";
import {IoMoon, IoMoonOutline} from 'react-icons/io5';
import {useTheme} from "./use-theme";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: 16px;
  line-height: 2;
  cursor: pointer;
  font-weight: var(--fw-normal);
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

export const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (<ModeSwitcher onClick={toggleTheme}>
    {theme === 'light' ? (
      <IoMoonOutline size="15px" />
    ) : (
      <IoMoon size="15px" />
    )}{' '}
    <span style={{marginLeft: '0.75rem'}}>{theme} Mode</span>
  </ModeSwitcher>)
}