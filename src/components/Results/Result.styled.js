import styled from 'styled-components';

// Style for the main container
export const StatPagesContainer = styled.div display: flex; flex-direction: column; align-items: center; margin-top: 30px;;

// Style for the text "Results"
export const StatTextResolt = styled.h2 font-size: 24px; font-weight: bold; margin-bottom: 20px;;

// Style for the sub container table
export const StatSubContainerTable = styled.div width: 100%; margin-bottom: 30px;;

// Style for the common container
export const StatCommonContainer = styled.div display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;;

// Style for the sub container
export const StatSubContainer = styled.div display: flex; flex-direction: column; width: 30%;;

// Style for the label
export const StatLabel = styled.label font-size: 16px; font-weight: bold; margin-bottom: 10px;;

// Style for the input
export const StatInput = styled.input height: 40 px; font-size: 16px; padding: 5px; border: none; border-radius: 5px; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);;

// Style for the button "Add result"
export const StatBtnAdd = styled.button`
height: 40px;
font-size: 16px;
font-weight: bold;
color: white;
background-color: #4caf50;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
background-color: #388e3c;
}
`;

// Style for the table
export const StatTable = styled.table width: 100%; border-collapse: collapse;;

// Style for the table header row
export const StatTableHeaderRow = styled.tr background-color: #f2f2f2; font-size: 16px; font-weight: bold; text-align: left;;

// Style for the table header cell
export const StatTableHeaderCell = styled.th padding: 10px; border: 1px solid #ddd;;

// Style for the table body row
export const StatTableBodyRow = styled.tr`
font-size: 14px;
text-align: left;

&:nth-child(even) {
background-color: #f2f2f2;
}
`;

// Style for the table body cell
export const StatTableBodyCell = styled.td padding: 10 px; border: 1px solid #ddd;;