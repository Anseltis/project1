import { actionCreator } from '../../actions'
import { fetchFilms } from '../FetchFilms'
import { getFilms } from '../../services/getFilms/getFilms'

export const FormSubmitHandler = event => async (value, searchByFilter, dispatch, sortBy) => {
  event.preventDefault()
  dispatch(actionCreator.getSearchData(value))
  await fetchFilms(
    dispatch,
    async () => await getFilms({ sortBy, value, searchByFilter })
  )
}