import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import QuickCheck from './pages/quick-check'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/quick-check' element={<QuickCheck />}></Route>
        </Routes>
    )
}

export default App
