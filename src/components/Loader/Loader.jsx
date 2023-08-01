import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#b53fab"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
