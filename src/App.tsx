import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import QuickCheck from './pages/quick-check'
import TakeTest from './pages/take-test'
import SurveyComponent from './pages/survey'
import About from './pages/about'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/quick-check' element={<QuickCheck />}></Route>
            <Route path={'/quick-check/take-test'} element={<TakeTest />}></Route>
            <Route path={'/about'} element={<About />}></Route>
            <Route path={'/ef-set-50/take-test'} element={<TakeTest />}></Route>
            <Route path='/quick-check/take-test/survey1' element={<SurveyComponent />}></Route>
        </Routes>
    )
}

export default App
