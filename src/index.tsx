import * as React from 'react';

interface Props {
    children: any; // React.ReactNode
    onSSR?: any; // JSX.Element
}

const NoSSR = ({ children, onSSR = null }: Props) => {
    const [render, setRender] = React.useState(false);

    React.useEffect(() => setRender(true), []);

    if (!render) {
        return onSSR;
    }

    return children;
};

export default NoSSR;
