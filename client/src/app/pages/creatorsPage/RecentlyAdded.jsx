import React from 'react';

const RecentlyAdded = () => {
  return (
    <div className="recently-added-section mt-8 ">
      <h2 className="text-2xl font-bold mb-4 color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    lineHeight: '30px' ">Recently Added</h2>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Content for the first item */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Content for the second item */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Content for the third item */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Content for the fourth item */}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;



const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

