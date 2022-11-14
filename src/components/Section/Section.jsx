import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
