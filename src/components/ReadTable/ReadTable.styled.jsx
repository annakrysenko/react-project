import styled from 'styled-components';
import theme from 'styles/theme';
// import { ReactComponent as BookIcon } from 'images/svg/bookIconGrey.svg';

export const StyledTable = styled.table`
  width: 704px;

  @media screen and (min-width: ${theme.desktop}) {
    width: 928px;
  }

  thead {
    height: 41px;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
    /* border: 1px; */
    border-top: 1px solid ${theme.colors.borderColor};
    border-bottom: 1px solid ${theme.colors.borderColor};

    color: ${theme.colors.secondaryFontColor};
  }

  tbody {
    tr {
      height: 62px;
      border-bottom: 1px solid ${theme.colors.borderColor};

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
        }
      }
    }
  }
`;

// export const StyledDeleteButton = styled(Button)`
//   padding: 0;

//   color: ${p => p.theme.colors.placeholderFontColor};
//   background: none;
//   border: none;

//   &:hover {
//     color: ${p => p.theme.colors.accentColor};
//     background: none;
//   }
// `;

// export const StyledBookIcon = styled(BookIcon)`
//   position: absolute;
//   z-index: 10;
//   top: 21px;
//   left: 0;
// `;
