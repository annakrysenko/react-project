import styled from 'styled-components';
import { screenSize } from 'styles/deviceSize';
import theme from 'styles/theme';
// import { ReactComponent as BookIcon } from 'images/svg/bookIconGrey.svg';

export const StyledTable = styled.table`
  border-collapse: collapse;
  overflow: scroll;
  height: 150px;

  @media screen and (min-width: ${screenSize.tablet}) {
    width: 704px;
  }
  @media screen and (min-width: ${screenSize.desktop}) {
    width: 928px;
  }

  thead {
    height: 41px;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
    border-top: 1px solid ${theme.colors.borderColor};
    border-bottom: 1px solid ${theme.colors.borderColor};

    color: ${theme.colors.secondaryFontColor};
  }

  tbody {
    border-bottom: 1px solid ${theme.colors.borderColor};

    tr {
      height: 62px;

      td {
        position: relative;
        padding: 0;

        :nth-child(1) {
          width: 41%;
          /* padding-left: 40px; */
        }
        :nth-child(2) {
          width: 30%;
        }
        :nth-child(3) {
          width: 13%;
        }

        :nth-child(4) {
          width: 11%;
        }

        :nth-child(5) {
          width: 5%;
          position: relative;
          /* display: flex; */
          /* background-color: tomato; */
        }
      }
    }
  }
`;

export const StyledDeleteButton = styled.button`
  padding: 0;
  position: absolute;
  right: 0;
  top: 38%;
  color: ${theme.colors.placeholderFontColor};
  background: none;
  border: none;

  &:hover {
    color: ${theme.colors.accentColor};
    background: none;
  }
`;

export const StyledBookIcon = styled.span`
  margin-right: 14px;
`;
