import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'Recently Added',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;