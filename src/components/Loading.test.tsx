import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import Loading from './Loading';

describe('component Loading', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<Loading />);
        });
    });

    afterEach(() => {
        if (testRenderer) {
            testRenderer.unmount();
            testRenderer = null;
        }
    });

    test('Loading should match snapshot', () => {
        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
