import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import MainTemplate from './templates/MainTemplate'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import Step1 from './pages/Step1/Step1'
import Step2 from './pages/Step2/Step2'
import CongratsPage from './pages/Congrats/CongratsPage'
import { useState, createContext } from 'react'
import GuidePage from './pages/Guide/GuidePage'

export const GlobalContext = createContext()

function App() {
  // global states
  const [colors, setColors] = useState({
    hair: 'black',
    eyes: 'black',
    skin: '#D9D9D9',
    shirt: '#D9D9D9',
    pants: '#D9D9D9',
  })

  // save context
  const context = {
    colors, setColors,
  }

  // router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainTemplate />}>
        <Route index element={<HomePage />}></Route>
        <Route path='guide' element={<GuidePage />}></Route>
        <Route path='step1' element={<Step1 />}></Route>
        <Route path='step2' element={<Step2 />}></Route>
        <Route path='congrats' element={<CongratsPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
    )
  )

  return (
    <GlobalContext.Provider value={context}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}

export default App
