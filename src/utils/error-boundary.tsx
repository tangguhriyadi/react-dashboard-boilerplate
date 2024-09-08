import React from "react";

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}
interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      this.props.fallback;
    }

    const { children } = this.props;

    return children;
  }
}
