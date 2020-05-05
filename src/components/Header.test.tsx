import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

import Header from './Header';

describe('component Header', () => {
    let handleStart: jest.Mock = null;
    let testRenderer: ReactTestRenderer = null;

    beforeEach(() => {
        handleStart = jest.fn();
        act(() => {
            testRenderer = create(<Header handleStart={handleStart} />);
        });
    });

    afterEach(() => {
        if (testRenderer) {
            testRenderer.unmount();
            testRenderer = null;
        }
    });

    test('Header should match snapshot', () => {
        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('there should be some title words', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByProps({className: "pinyin"}).length).toEqual(4);
        expect(testInstance.findAllByProps({className: "pinyin"})[0].parent.children).toContain("甜");
        expect(testInstance.findAllByProps({className: "pinyin"})[1].parent.children).toContain("言");
        expect(testInstance.findAllByProps({className: "pinyin"})[2].parent.children).toContain("蜜");
        expect(testInstance.findAllByProps({className: "pinyin"})[3].parent.children).toContain("语");
    });

    test('there should be a button to start', () => {
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType("button")).toHaveLength(1);
        expect(testInstance.findByType("button").children).toContain("开始");
    })
});
