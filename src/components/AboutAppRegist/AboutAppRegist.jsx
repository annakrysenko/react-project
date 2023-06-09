import Media from 'react-media';
import {
  DivStyled,
  SubtitleStyled,
  Hstyled,
  ListSlyled,
  LiStyled,
  ButtonsBox,
  BtnAboutApp,
} from './AboutAppRegistStyled.js';

const AboutAppRegistr = () => {
  return (
    <>
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
        <Media
          query="(max-width: 767px)"
          render={() => (
            <ButtonsBox>
              <BtnAboutApp to="/login">Log in</BtnAboutApp>
              <BtnAboutApp to="/register">Register</BtnAboutApp>
            </ButtonsBox>
          )}
        />
      </DivStyled>
    </>
  );
};

export default AboutAppRegistr;
