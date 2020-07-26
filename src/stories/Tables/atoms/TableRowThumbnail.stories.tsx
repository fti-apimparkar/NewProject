import React from 'react';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import styled from 'styled-components';

import photo from '../../assets/placeholder.jpg';
import TableRowThumbnail from '../../../Tables/atoms/TableRowThumbnail';

export default {
  title: 'Tables/atoms',
  component: TableRowThumbnail,
  decorators: [withKnobs]
};

const Container = styled.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerInner = styled.div`
  flex: 0;
  height: 35px;
`


export const _RowThumbnail = () => {

  const hoverZoom = boolean("Zoom On Hover", true);
  const image = text("Image Src", photo);

  return <Container>
    <ContainerInner>
      <TableRowThumbnail {...{hoverZoom, image}} />
    </ContainerInner>
  </Container>
}