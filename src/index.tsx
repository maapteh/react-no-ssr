import React, { useState, useEffect } from 'react';

const DefaultOnSSR = () => <span />;

interface Props {
    children: any; // React.ReactNode,
    onSSR?: any; // JSX.Element,
}

const NoSSR = ({ children, onSSR = <DefaultOnSSR /> }: Props) => {
    const [render, setRender] = useState(false);

    useEffect(() => setRender(true), []);

    if (!render) {
        return onSSR;
    }

    return children;
};

export default NoSSR;
