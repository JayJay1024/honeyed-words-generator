import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import RefreshButton from './RefreshButton';

describe('component RefreshButton', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<RefreshButton visible={false} handleUpdate={null} />);
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
            testRenderer.update(<RefreshButton visible={true} handleUpdate={null} />);
        });
        tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('there should be a button', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType("button").length).toEqual(1);
    });
});
