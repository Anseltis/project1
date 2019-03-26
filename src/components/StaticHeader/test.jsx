import React from 'react'
import renderer from 'react-test-renderer'

import { StaticHeader } from 'components/FilmHeader/StaticHeader/index'

test('renders StaticHeader properly', () => {
  const wrapper = renderer.create(<StaticHeader />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
