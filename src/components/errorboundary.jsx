import React from "react";
// Error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex items-center h-screen bg-gray-900 text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h1 className="flex font-bold text-4xl">
                Something really went wrong here.
              </h1>
              <p className="pt-4 text-gray-400">
                {" "}
                Cross check your code and try again. If the problem persists,
                use{" "}
                <a
                  className="underline italic text-yellow-400"
                  href="https://stackoverflow.com/"
                >
                  Stack Overflow
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
