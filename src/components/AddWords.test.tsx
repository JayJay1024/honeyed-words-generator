import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import AddWords from './AddWords';

describe('component AddWords', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<AddWords />);
        });
    });

    afterEach(() => {
        if (testRenderer) {
            testRenderer.unmount();
            testRenderer = null;
        }
    });

    test('AddWords should match snapshot', () => {
        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the button
        const testInstance = testRenderer.root;
        act(() => {
            testInstance.findByType('button').props.onClick();
        });
        tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('there should have a title', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({className: "title"}).children[0]).toContain('通过以下方式贡献情话');
    });

    test('there should have a tip', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({className: "tip "}).children[0]).toContain('贡献情话');
    })

    test('there should have two way to add words', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByProps({className: "way"}).length).toEqual(2);
    });
});

