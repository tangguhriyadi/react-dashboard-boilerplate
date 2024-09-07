import { Input, InputProps } from "antd";
import React from "react";

interface CoreInputProps extends InputProps {}

const CoreInput: React.FC<CoreInputProps> = (props) => {
  return <Input {...props} />;
};

export default CoreInput;