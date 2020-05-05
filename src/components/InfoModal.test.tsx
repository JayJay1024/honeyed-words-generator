// import React from 'react';
// import { create, act, ReactTestRenderer } from 'react-test-renderer';

// import InfoModal from './InfoModal';

// describe('component InfoModal', () => {
//     let testRenderer: ReactTestRenderer = null;

//     beforeEach(() => {
//         act(() => {
//             testRenderer = create(<InfoModal />);
//         });
//     });

//     afterEach(() => {
//         if (testRenderer) {
//             testRenderer.unmount();
//             testRenderer = null;
//         }
//     });

//     test('InfoModal should match snapshot', () => {
//         let tree = testRenderer.toJSON();
//         expect(tree).toMatchSnapshot();
//     });

//     test('there should be some button', () => {
//         const testInstance = testRenderer.root;
//         expect(testInstance.findAllByType("button").length).toEqual(3);
//         expect(testInstance.findAllByType("button")[0].children).toContain("Star");
//         expect(testInstance.findAllByType("button")[1].children).toContain("Fork");
//     });

//     test('there should be a image for reward', () => {
//         const testInstance = testRenderer.root;
//         expect(testInstance.findAllByType("img").length).toEqual(1);
//     });
// });

describe('component InfoModal', () => {
    test.todo('');
});
