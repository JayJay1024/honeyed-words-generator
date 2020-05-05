import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import LoadingWords from './LoadingWords';

describe('component LoadingWords', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<LoadingWords visible={false} handleDone={null} />);
        });
    });

    afterEach(() => {
        if (testRenderer) {
            testRenderer.unmount();
            testRenderer = null;
        }
    });

    test('there should be some words', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType("span").length).toBeGreaterThan(0);
    });
});
