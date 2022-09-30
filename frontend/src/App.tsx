//Import Tools
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import Pages
import Layout from './layout/Layout';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import WebsitePage from './pages/WebsitePage';
import NotFoundPage from './pages/NotFoundPage';
import AplicationsPage from './pages/AplicationsPage';
import MarketingPage from './pages/MarketingPage';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/paginas-web' element={<WebsitePage />} />
                    <Route path='/aplicaciones' element={<AplicationsPage />} />
                    <Route path='/marketing-digital' element={<MarketingPage />} />
                    <Route path='/sobre-nosotros' element={<AboutPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App
