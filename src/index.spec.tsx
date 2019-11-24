import React from 'react';
import ReactDOMServer from "react-dom/server";
import { render, cleanup } from '@testing-library/react';
import NoSSR from './';

describe('NoSSR Component', () => {

    describe('on Client Side', () => {
        afterEach(() => {
            cleanup();
        });
        const MyComp = () => <div>Hello</div>;
        const wrapper = (
            <NoSSR>
                <MyComp />
            </NoSSR>
        );
        const { queryByText } = render(wrapper);

        it('should render correctly its inner component', () => {
            queryByText(/Hello/);
        });
    });

    describe('on Server Side', () => {

        const MyComp = () => <div>Hello</div>;
        const Loading = () => <div>Loading...</div>;

        it('should render correctly with custom loading', () => {
            const markup = ReactDOMServer.renderToStaticMarkup(<NoSSR onSSR={<Loading />}>
                <MyComp />
            </NoSSR>);
            expect(markup).toBe('<div>Loading...</div>')
        });

        it('should render correctly with no custom loading', () => {
            const markup = ReactDOMServer.renderToStaticMarkup(<NoSSR>
                <MyComp />
            </NoSSR>);
            expect(markup).toBe('')
        });
    });
});
