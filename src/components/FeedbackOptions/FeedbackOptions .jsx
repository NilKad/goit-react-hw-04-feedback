import PropTypes from 'prop-types';

const FeedbackOption = ({ onLeaveFeedback, options }) => {
  // console.log('options: ', options);
  return (
    <>
      {Object.keys(options).map((b, index) => (
        <button key={index} type="button" name={b} onClick={onLeaveFeedback}>
          {b[0].toUpperCase() + b.slice(1)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
