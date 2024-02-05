import {Suspense} from 'react';
import './styles/index.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}></Route>
                    <Route path={'/about'} element={<AboutPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;