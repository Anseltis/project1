import React from 'react'
import renderer from 'react-test-renderer'

import { SearchForm } from './index'

test('renders Input properly', () => {
    const wrapper = renderer
        .create(<SearchForm/>)
        .toJSON()
    expect(wrapper).toMatchSnapshot()

})