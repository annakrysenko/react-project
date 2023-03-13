const BooksListEmptyMobile = () => {
  return (
    <StyledWrapper>
      <StyledIcon>
        <BookIconGrey />
      </StyledIcon>
      <StyledTable>
        <tbody>
          <tr>
            <td>...</td>
          </tr>
          <tr>
            <td>Автор:</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Рік</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Стор.:</td>
            <td>...</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledWrapper>
  );
};

export default BooksListEmptyMobile;
