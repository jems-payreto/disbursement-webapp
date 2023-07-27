import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorrBoundary = () => {
    const error = useRouteError();
    return <div>Something went wrong</div>;
};

export default ErrorrBoundary;
