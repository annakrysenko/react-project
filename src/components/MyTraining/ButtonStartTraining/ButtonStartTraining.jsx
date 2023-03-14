
import PropTypes from 'prop-types';
import { ButtonStartStyled } from './ButtonStartTraining.styled';


export const StartTrainingButton = ({ onClick, disabled }) => {
    return (
        <ButtonStartStyled htmlType="button" onClick={onClick} disabled={disabled}>
            Почати тренування
        </ButtonStartStyled>
    );
};

StartTrainingButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

