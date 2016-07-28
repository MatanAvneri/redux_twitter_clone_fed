import React, { Component } from 'react';

//this is a presentational componenet

const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="spinner">
      Loading ...
    </div>
  );
}

export default Loading;
