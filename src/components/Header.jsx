import styled from 'styled-components';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {IoMoon, IoMoonOutline} from 'react-icons/io5';

import {useDispatch, useSelector} from "react-redux";
import {Container} from './Container';
import {setTheme} from "../store/theme/theme-actions";
import {clearControls} from "../store/controls/controls-actions";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: 24px;
  line-height: 137.5%;
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

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

export const Header = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"))
  }

  const cleanUp = () => dispatch(clearControls())

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="15px" />
            ) : (
              <IoMoon size="15px" />
            )}{' '}
            <span style={{marginLeft: '0.75rem'}}>{theme} Mode</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
