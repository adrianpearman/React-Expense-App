import React from 'react';
import { shallow } from 'enzyme'
import Header from '../../components/Header';
// ReactShallowRenderer used for testing components
// import ReactShallowRenderer from 'react-test-renderer/shallow';

// using the enzyme module to test the components. the scripting is then moved to package.json file
// import toJSON from 'enzyme-to-json'

//
// test('should render Header', () => {
//   const renderer = new ReactShallowRenderer()
//   renderer.render(<Header />)
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
//   // console.log(renderer.getRenderOutput());
// })

test('should render Header', () => {
  const wrapper = shallow(<Header /> )
  expect(wrapper).toMatchSnapshot()

  // using just the toJSON plugin
  // expect(toJSON(wrapper)).toMatchSnapshot()

  // Examples: using jest to find the h1 tag
  // expect(wrapper.find('h1').length).toBe(1)
  // using jest to find the text within the h1 tag
  // expect(wrapper.find('h1').text()).toBe('Expense Application')
})
