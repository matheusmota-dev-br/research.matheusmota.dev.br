import { NavLink } from 'react-router-dom';
import {
  Container,
  HeaderBar,
  HeaderLinks,
  HeaderBarLinks,
  BarButton,
  ThemeToggleButton,
} from './styled';
import { useState } from 'react';
import { SITE } from '../../config';
import { useTheme } from '../../contexts/ThemeContext';

import BarIcon from '../../assets/bars.svg';
import CloseIcon from '../../assets/close.svg';
import { Logo } from '../Logo';
import { MoonIcon, SunIcon } from './ThemeIcons';

interface RouteItem {
  route: string;
  title: string;
  default?: boolean;
}
interface HeaderProps {
  routes?: RouteItem[];
  groupLinks?: boolean;
}

export function Header({ routes, groupLinks = false }: HeaderProps) {

  const [click, setClick] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    setClick(!click);
  };

  const renderLinks = () => {
    return routes?.map((route) => (
      <NavLink to={route.route} key={route.title} title={route.title}>
        {route.title}
      </NavLink>
    ));
  };

  let defaultRoute = routes?.find(route => route.default);

  if(!defaultRoute){
    defaultRoute = {
      route: '/',
      title: 'Home'
    }
  }

  return (
    <Container>
      <NavLink to={defaultRoute?.route} title={defaultRoute?.title}>
        <Logo
          title={SITE.title}
          subtitle={SITE.subtitle}
        />
      </NavLink>
      
      <HeaderLinks>{renderLinks()}</HeaderLinks>

      <ThemeToggleButton onClick={toggleTheme} title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}>
        {theme === 'light' ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )}
      </ThemeToggleButton>

      <HeaderBar>
        <BarButton onClick={handleClick}>
          <img src={click ? CloseIcon : BarIcon} alt="" />
        </BarButton>
        {click && <HeaderBarLinks>{renderLinks()}</HeaderBarLinks>}
      </HeaderBar>
    </Container>
  );
}
