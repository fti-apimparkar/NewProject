import React from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';


const Container = styled.div`
  position: relative;
`

const IconContainer = styled.div`
  position: absolute;
  left: -45px;
  bottom: 0;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
  }
`

const Title = styled.h1`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}

  font-size: 26px;
  font-weight: 500;
  color: #5b636a;
  margin: 0 0 20px;
`

const AreaTitle = styled.a`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}
  font-size: 12px;
  font-weight: 500;
  color: #7c8793;
  margin: 0;
  line-height: 12px;
  text-decoration: none;
  position: absolute;
  top: -17px;

  &:hover {
    text-decoration: underline;
  }

`

interface IProps {
  title: string
  icon?: string
  areaTitle?: string
  areaHref?: string
}

const PageTitle : React.FC<IProps> = ({title, icon, areaTitle, areaHref}) => {
  return <Container>
    { areaTitle && areaHref ?
      <AreaTitle href={ areaHref }>{ areaTitle }</AreaTitle>
    : null }
    <Title>{title}</Title>
    { icon ?
      <IconContainer><Icon size={24} color={'dimmed'} {...{icon}} /></IconContainer>
    : null }
  </Container>;
}

export default PageTitle;