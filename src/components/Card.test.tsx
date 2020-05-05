import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import Card from './Card';

jest.mock('../utils', () => {
    return {
        __esModule: true,
        shuffle: jest.fn((array: string[]) => array),
        getQueryValue: jest.fn((key: any) => ''),
    };
});

describe('component Card', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<Card visible={false} />);
        });
    });

    afterEach(() => {
        if (testRenderer) {
            testRenderer.unmount();
            testRenderer = null;
        }
    });

    test('Card should match snapshot', () => {
        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

        // update renderer
        act(() => {
            testRenderer.update(<Card visible={true} />);
        });
        tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
