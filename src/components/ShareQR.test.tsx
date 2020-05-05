import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import ShareQR from './ShareQR';

describe('component RefreshButton', () => {
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        act(() => {
            testRenderer = create(<ShareQR />);
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
    });

    test('there should be two tips', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByProps({className: "tip"}).length).toEqual(2);
        expect(testInstance.findAllByProps({className: "tip"})[0].children[0]).toContain("想对你说的话，就在这里");
        expect(testInstance.findAllByProps({className: "tip"})[1].children[0]).toContain("分享这句话");
    })
});
