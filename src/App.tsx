import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import QuickCheck from './pages/quick-check'
import TakeTest from './pages/take-test'
import SurveyComponent from './layout/survey'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/quick-check' element={<QuickCheck />}></Route>
            <Route path='/quick-check/take-test' element={<TakeTest></TakeTest>}></Route>
            <Route path='/quick-check/take-test/survey1' element={<SurveyComponent></SurveyComponent>}></Route>
        </Routes>
    )
}

export default App
