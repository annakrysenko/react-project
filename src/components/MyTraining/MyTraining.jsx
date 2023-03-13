import { useState, useEffect, useMemo } from 'react';
import TrainingForm from 'components/TrainingForm';
import PropTypes from 'prop-types';

const MyTraining = ({
  isFormVisible,
  toggleForm,
  handleStartChange,
  handleFinishChange,
  start,
  finish,
}) => {
};

MyTraining.propTypes = {
  isFormVisible: PropTypes.bool,
  toggleForm: PropTypes.func.isRequired,
  handleStartChange: PropTypes.func.isRequired,
  handleFinishChange: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  finish: PropTypes.string.isRequired,
};

export default MyTraining;
