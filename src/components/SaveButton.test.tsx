import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import SaveButton from './SaveButton';

describe('component RefreshButton', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<SaveButton visible={false} />);
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

        act(() => {
            testRenderer.update(<SaveButton visible={true} />);
        });
        tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('there should be a button', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType("button").length).toEqual(1);
    });
});
