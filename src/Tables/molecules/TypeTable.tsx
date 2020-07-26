import React from 'react';
import styled, {css} from 'styled-components';

import TypeTableRow from '../atoms/TypeTableRow';

const Container = styled.div`

`

const TableContainer = styled.div`
  display: table;
  width: 100%;
`

const HeaderRow = styled.div`
  display: table-row;
  height: 50px;
`
const HeaderItem = styled.div<{fixedWidth?: number, alignment?: TypeCellAlignment}>`
  display: table-cell;
  height: inherit;

  font-family: ${p => p.theme.fontFamily.ui };
  ${p => p.theme.typography.table.header }

  ${p => p.fixedWidth && css`
    width: ${p.fixedWidth}px;
  `}

  ${({alignment}) => alignment ? css`
    text-align: ${alignment};
  ` : css`
    text-align: left;
  `}
`

interface IProps {
  columnConfig: ITableColumnConfig[]
  selectable?: boolean
  rows: ITypeTableData
  hasStatus?: boolean
  hasThumbnail?: boolean
  hasTypeIcon?: boolean
}

const TypeTable : React.FC<IProps> = ({ columnConfig, selectable, rows, hasStatus = false, hasThumbnail = false, hasTypeIcon = false }) => {
  return <Container>
    <TableContainer>

      <HeaderRow>
        { selectable ? <HeaderItem fixedWidth={40}><input type={'checkbox'} /></HeaderItem> : null }
        { hasStatus ? <HeaderItem fixedWidth={40}></HeaderItem> : null }
        { hasThumbnail ? <HeaderItem fixedWidth={40}></HeaderItem> : null }
        { hasTypeIcon ? <HeaderItem fixedWidth={40}></HeaderItem> : null }

        {columnConfig.map((column, key) => {
          const {alignment, header} = column;
          return <HeaderItem key={ key } alignment={alignment}>{header}</HeaderItem>
        })}
      </HeaderRow>

      {rows.map((rowData, key) => {
        return <TypeTableRow key={ key } {...{rowData, selectable, columnConfig, hasStatus, hasThumbnail, hasTypeIcon}} />
      })}

{/*

      <ContentRow>
        <ContentItem><input type={'checkbox'} /></ContentItem>
        <ContentItem>Break Room</ContentItem>
        <ContentItem>Shinjuku Station</ContentItem>
        <ContentItem>A, B, C, D</ContentItem>
      </ContentRow>
      <ContentRow>
        <ContentItem><input type={'checkbox'} /></ContentItem>
        <ContentItem>Break Room</ContentItem>
        <ContentItem>Shinjuku Station</ContentItem>
        <ContentItem>A, B, C, D</ContentItem>
      </ContentRow>
      <ContentRow>
        <ContentItem><input type={'checkbox'} /></ContentItem>
        <ContentItem>Break Room</ContentItem>
        <ContentItem>Shinjuku Station</ContentItem>
        <ContentItem>A, B, C, D</ContentItem>
      </ContentRow>
      <ContentRow>
        <ContentItem><input type={'checkbox'} /></ContentItem>
        <ContentItem>Break Room</ContentItem>
        <ContentItem>Shinjuku Station</ContentItem>
        <ContentItem>A, B, C, D</ContentItem>
      </ContentRow> */}
    </TableContainer>

  </Container>
}

export default TypeTable;