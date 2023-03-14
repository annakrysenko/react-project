// import styled from "styled-components";

// export const TableStyled = styled.table`
//  font-family: 'Montserrat';
//   font-size: 14px;
//   line-height: 1.2;
//   font-weight: 500;
//   width: 100%;`;

// export const TitleStyled = styled.div``;

// export const ButtonStyled = styled.button``;


import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const BookCover = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const BookTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

const BookAuthor = styled.p`
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 10px;
`;

const BookActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const Section = ({ title, books }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <BooksContainer>
        {books.map((book) => (
          <BookCard key={book.id}>
            <BookCover src={book.cover} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
            <BookActions>{/* Add book action buttons here */}</BookActions>
          </BookCard>
        ))}
      </BooksContainer>
    </SectionContainer>
  );
};

export default Section;