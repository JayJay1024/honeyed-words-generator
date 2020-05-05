import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import StartButton from './StartButton';

describe('component RefreshButton', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<StartButton>testStart</StartButton>);
        });
    });

    afterEach(() => {
        if (testRenderer) {
            testRenderer.unmount();
            testRenderer = null;
        }
    });

    test('RefreshButton should match snapshot', () => {
        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('there should be a button', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType("button").length).toEqual(1);
        expect(testInstance.findByType("button").children[0]).toBe("testStart");
    });

    test('there should be six images', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType("img").length).toEqual(6);
    })
});
