import * as React from 'react';

interface Props {
    children: any; // React.ReactNode
    fallback?: any; // JSX.Element
}

const NoSSR = ({ children, fallback = null }: Props) => {
    const [render, setRender] = React.useState(false);

    React.useEffect(() => setRender(true), []);

    if (!render) {
        return fallback;
    }

    return children;
};

export default NoSSR;
