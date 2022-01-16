import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  state: any = null;
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state && this.state.hasError) {
      // You can render any custom fallback UI
      return <h1 style={{ textAlign: "center" }}>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
