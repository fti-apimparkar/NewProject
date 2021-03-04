import React from 'react';
import styled, { css } from 'styled-components';
import {format } from 'date-fns';

import Icon from '../../Icons/Icon';

const Container = styled.div<{hide:boolean}>`
  display: flex;
  flex-direction: column;

  ${({hide}) => hide && css`
    display: none;
  `}
`;

const Label = styled.label`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
    ${({theme})=> theme.typography.filters.datepicker.metaHeader.default};
  `}
  padding: 12px;
  border-bottom: ${({theme}) => theme.colors.divider} 1px solid;

  // ${({theme})=> theme.typography.filters.datepicker.metaHeader.active};

`;

const Item = styled.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`;

const IconWrap = styled.div`
  flex: 0 0 40px;
  padding-top: 2px;
`;

const Input = styled.input<{ readOnly? : boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  ${({theme})=> theme.typography.filters.value};

  width: 100%;
  border: none;
  border: transparent 1px solid;
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {
    border-color: blue;
  }

  ${({readOnly}) => readOnly && css`
    border-color: transparent;
  `}
`;

const TimeColon = styled.div`
  flex: 0 0 20px;
`;

const InputWrap = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {

    background: ${({theme}) => theme.colors.menu.passive};
    box-shadow: 0px 0px 0px 5px ${({theme}) => theme.colors.menu.passive};

    ${Input} {
      border-color: ${({theme}) => theme.colors.divider};
    }

    ${TimeColon}{
      color: ${({theme}) => theme.colors.pureTop};
      text-align: center;
    }
  }
`;



interface IProps {
  title: string
  hasDate: boolean
  hasTime: boolean
  date?: number | Date
  time?: any
  setDateCallback?: any
  setTimeCallback?: any
  allowAfterMidnight?: boolean
}

const DateTimeBlock : React.FC<IProps> = ({ allowAfterMidnight = false, title, hasDate, hasTime, date, time, setTimeCallback, setDateCallback }) => {
  return (
    <Container hide={!hasDate && !hasTime}>
      <Label>{title}</Label>

      {hasDate && (
        <Item>
          <IconWrap>
            <Icon icon='Date' color='dimmed' size={14} weight='regular' />
          </IconWrap>
          <InputWrap>
            <Input type='text' readOnly value={format(date || new Date(), "yyyy/MM/dd")} onChange={({target: _}) => setDateCallback()} />
          </InputWrap>
        </Item>
      )}

      {hasTime && (
        <Item>
          <IconWrap>
            <Icon icon='Time' color='dimmed' size={14} weight='regular' />
          </IconWrap>
          <InputWrap>
            <Input type='number' min='0' max={allowAfterMidnight ? 24: 23} value={clockFormatNumber(time.hours || 0)} onChange={({target}) => setTimeCallback( 'hours', parseInt(target.value))} />
            <TimeColon>:</TimeColon>
            <Input type='number' min='0' max='59' value={clockFormatNumber(time.minutes || 0)} onChange={({target}) => setTimeCallback( 'minutes', parseInt(target.value))} />
          </InputWrap>
        </Item>
      )}

    </Container>
  );
};

/**
 * Puts a 0 in front of single digit digits to keep it 24H format.
 * @param value The hour or minute value
 */
const clockFormatNumber = (value : number) => {
  const valAsString = value.toString();

  return (valAsString.length === 1) ? '0' + value : value;
};

export default DateTimeBlock;