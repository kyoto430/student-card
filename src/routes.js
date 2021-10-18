import StudentCard from './components/StudentCard'
import StudentCardForm from './components/StudentCardForm'

import { MAIN_ROUTE, FORM_ROUTE } from './utils/const'

export const routes = [
  { path: MAIN_ROUTE, Component: StudentCard },
  { path: FORM_ROUTE, Component: StudentCardForm },
]
