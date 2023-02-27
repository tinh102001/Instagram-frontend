import React, { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";

import AppRouter from "./router/AppRouter";

import { refreshToken } from "./redux/actions/authActions";

import SpinLoader from "./components/loading/SpinLoader";

import ErrorApp from "./pages/ErrorApp/ErrorApp";
import HomePage from "./pages/HomePage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <ErrorBoundary FallbackComponent={<ErrorApp></ErrorApp>}>
      <Suspense fallback={<SpinLoader />}>
        {/* <AppRouter></AppRouter> */}
        <HomePage />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
