import * as React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <p>Error occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};
