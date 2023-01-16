import React from "react";
import { Alert, Space, Spin } from 'antd'
const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <Spin size="large"></Spin>
      <h1 style={{color : "#fff"}}>Loading..</h1>
    </div>
  );
};

export default LoadingAnimation;
