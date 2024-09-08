import React from "react";
import { Button, Result } from "antd";

const Fallback500: React.FC = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button onClick={() => window.location.reload()} type="primary">
          Refresh
        </Button>
      }
    />
  );
};

export default Fallback500;
