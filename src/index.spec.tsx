import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NoSSR from './';

// not good tests for ssr state...
describe('NoSSR Component', () => {
    describe('without loading state', () => {
        afterEach(() => {
            cleanup();
        });
        const MyComp = () => <div>Hello</div>;
        const wrapper = (
            <NoSSR>
                <MyComp />
            </NoSSR>
        );
        const { queryAllByText } = render(wrapper);

        it('should render correctly', () => {
            // TODO: add ssr state of default empty span
            expect(queryAllByText(/Hello/)).toBeDefined();
        });
    });

    describe('with loading state', () => {
        afterEach(() => {
            cleanup();
        });
        const MyComp = () => <div>Hello</div>;
        const Loading = () => <div>Loading...</div>;
        const wrapper = (
            <NoSSR onSSR={<Loading />}>
                <MyComp />
            </NoSSR>
        );
        const { queryByText, unmount, rerender } = render(wrapper);

        it('Should render correctly', () => {
            unmount();
            expect(queryByText(/Hello/)).toBeNull();
            expect(queryByText(/Loading/)).toBeDefined();

            rerender(wrapper);
            expect(queryByText(/Hello/)).toBeDefined();
            expect(queryByText(/Loading/)).toBeNull();
        });
    });
});
