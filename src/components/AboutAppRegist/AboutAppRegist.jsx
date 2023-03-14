// import { useMatchMedia } from 'hooks';

import {
  DivStyled,
  SubtitleStyled,
  Hstyled,
  ListSlyled,
  LiStyled,
  //   ButtonsDiv,
  //   LinkStyled,
} from './AboutAppRegistStyled.js';

const AboutAppRegistr = () => {
  //   const { isMobile } = useMatchMedia();

  return (
    <DivStyled>
      <SubtitleStyled>Books Reading</SubtitleStyled>
      <Hstyled>Will help you to</Hstyled>
      <ListSlyled>
        <LiStyled>Create your goal faster and proceed to read</LiStyled>
        <LiStyled>Divide process proportionally for each day</LiStyled>
        <LiStyled>Track your success</LiStyled>
      </ListSlyled>
      <br />
      <Hstyled>You may also</Hstyled>
      <ListSlyled>
        <LiStyled>Pose your own independent point of view</LiStyled>
        <LiStyled>
          Improve your professional skills according to new knowledge
        </LiStyled>
        <LiStyled>Become an interesting interlocutor</LiStyled>
      </ListSlyled>

      {/* {isMobile && (
        <ButtonsDiv>
          <ButtonWhite to="/login">Увійти</ButtonWhite>
          <ButtonOrange to="/register">Реєстрація</ButtonOrange>
        </ButtonsDiv>
      )} */}
    </DivStyled>
  );
};

export default AboutAppRegistr;
