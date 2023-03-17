import { Button } from 'antd';
import styled from 'styled-components';
import device from 'styles/deviceSize';

export const StyledTable = styled.table`
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  width: 100%;
  border-spacing: 0 8px;
  border-collapse: separate;
  thead {
    th {
      color: #898f9f;
      text-align: left;
    }
  }
  tbody {
    tr {
      height: 62px;
      background-color: #fff;
      box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
      td {
        :nth-child(1) {
          width: 30%;
        }
        :nth-child(2) {
          width: 20%;
        }
        :nth-child(3) {
          width: 8%;
        }
        :nth-child(4) {
          width: 8%;
        }
        :nth-child(5) {
          width: 20%;
        }
        :nth-child(6) {
          width: 14%;
        }
        @media ${device.tablet} {
          :nth-child(5) {
            width: 17%;
          }
          :nth-child(6) {
            width: 17%;
          }
        }
      }
    }
  }
`;

export const StyledBookTitle = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

export const StyledIconBox = styled.div`
  margin-right: 10px;
`;

export const StyledTitle = styled.h3`
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 19px;
  line-height: 1.2;
`;

export const StyledBtn = styled(Button)`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  min-height: 40px;
  min-width: 80px;
  border: none;
  border-radius: 0;
  background-color: #6D7A8D;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  :hover,
  :focus {
    background-color: #898f9f;
  }
  @media ${device.desktop} {
    min-width: 130px;
  }
`;

export const Wrapper = styled.div`
  :not(:last-child) {
    @media ${device.tablet} {
      margin-bottom: 40px;
    }
    @media ${device.desktop} {
      margin-bottom: 32px;
    }
  }
`;


export const ButtonModal = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ff6b08;
	color: #fff;
	width: 130px;
	height: 40px;
	font-family: 'Montserrat';
	font-weight: 500;
	line-height: 1.2;
	font-size: 14px;
	align-items: center;
	justify-content: center;
	// margin-right: 16px;
	cursor: pointer;
	border: 1px solid #ff6b08;

	:hover {
		color: #242a37;
		background-color: #fff;
		border: 1px solid #242a37;
	}

	@media screen and (max-width: 767px) {
		width: 97px;
	}
`;






// import React from 'react';
// import styled from 'styled-components';

// const SectionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `;

// const SectionTitle = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const BooksContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: flex-start;
// `;

// const BookCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   width: 200px;
//   margin: 10px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
// `;

// const BookCover = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   margin-bottom: 10px;
// `;

// const BookTitle = styled.h3`
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 5px;
// `;

// const BookAuthor = styled.p`
//   font-size: 14px;
//   font-weight: normal;
//   text-align: center;
//   margin-bottom: 10px;
// `;

// const BookActions = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: auto;
// `;

// const Section = ({ title, books }) => {
//   return (
//     <SectionContainer>
//       <SectionTitle>{title}</SectionTitle>
//       <BooksContainer>
//         {books.map((book) => (
//           <BookCard key={book.id}>
//             <BookCover src={book.cover} alt={book.title} />
//             <BookTitle>{book.title}</BookTitle>
//             <BookAuthor>{book.author}</BookAuthor>
//             <BookActions>{/* Add book action buttons here */}</BookActions>
//           </BookCard>
//         ))}
//       </BooksContainer>
//     </SectionContainer>
//   );
// };

// export default Section;