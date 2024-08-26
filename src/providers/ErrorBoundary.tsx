"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CustomErrorBoundaryProps {
  children: React.ReactNode;
}

const CustomErrorBoundary: React.FC<CustomErrorBoundaryProps> = (props) => {
  const { children } = props;
  return (
    <ErrorBoundary fallbackRender={(err) => <div>{err.error.message}</div>}>
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
