// Test away!
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Display from './Display';
// import {
//   render
// } from '@testing-library/react';

// describe('<Display /> Components tests', () => {
//       it('renders without crashing', () => {
//         render( < Display / > )
//       })

//       it('renders closed false and locked false by default', () => {
//         const {
//           queryByText
//         } = render( < Display / > );
//         expect(queryByText(/open/i)).toBeTruthy();
//         expect(queryByText(/unlocked/i)).toBeTruthy();
//       })

//       it('displays closed if the closed prop is true', () => {
//             const {
//               queryByText
//             } = render( < Display closed = {
//                 true
//               }
//               locked = {
//                 true
//               }
//               />)
//               expect(queryByText(/closed/i))
//             })

//           it(' displays lock if the lock prop is true', () => {
//               const {
//                 getByTest,
//                 queryByText
//               } = render( < Display closed = {
//                   true
//                 }
//                 locked = {
//                   true
//                 }
//                 />) 
//                 expect(queryByText(/locked/i))
//               })

//             it(' displays open if the closed prop is false', () => {
//                 const {
//                   queryByText
//                 } = render( < Display closed = {
//                     false
//                   }
//                   locked = {
//                     true
//                   }
//                   />)
//                   expect(queryByText(/open/i))
//                 })

//               it('displays unlocked if the locked prop is false', () => {
//                   const {
//                     queryByText
//                   } = render( < Display closed = {
//                       false
//                     }
//                     locked = {
//                       false
//                     }
//                     />) 
//                     expect(queryByText(/unlocked/i))
//                   })

//                 it('uses green-led class if locked or closed is false', () => {
//                     const wrapper = render( < Display closed = {
//                         false
//                       }
//                       locked = {
//                         false
//                       }
//                       />)
//                       const buttonList = wrapper.getAllByTestId('led green-led'); expect(buttonList.length).toBe(2);
//                     })

//                   it('uses red-led class if locked or closed is true', () => {
//                       const wrapper = render( < Display closed = {
//                           true
//                         }
//                         locked = {
//                           true
//                         }
//                         />)
//                         const buttonList = wrapper.getAllByTestId('led red-led'); expect(buttonList.length).toBe(2);
//                       })
//                   })