import React from 'react'
import { shallow } from 'enzyme'

import { HeaderContainerUnwrapped } from './index'
import { SearchStatus } from '../../constants'
import { SubHeader } from '../../components/SubHeader'

describe('HeaderContainerUnwrapped renders FilmHeader depending on props', () => {
  test('HeaderContainerUnwrapped renders FilmHeader for movie info', () => {
    const wrapper = shallow(<HeaderContainerUnwrapped />)
    wrapper.setProps({ mainScreen: SearchStatus.showMovieInfo })
    expect(wrapper.containsMatchingElement(<SubHeader />)).toEqual(true)
  })

  test('HeaderContainerUnwrapped renders FilmHeader for search request', () => {
    const wrapper = shallow(<HeaderContainerUnwrapped />)
    wrapper.setProps({ mainScreen: SearchStatus.showRequested })
    expect(wrapper.containsMatchingElement(<SubHeader />)).toEqual(false)
  })
})