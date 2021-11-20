import {Routes, Route} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import AboutPage from '../conteiners/AboutPage';
import Gallery from '../conteiners/Gallery';
import CatsWorld from '../conteiners/CatsWorld';

function App () {
    return (
        <div>
            <Header />
        <div> 
        <Routes>
                <Route exact path='/about' element={<AboutPage />} />
                <Route exact path='/catsWorld' element={<CatsWorld />} />
                <Route exact path='/gallery' element={<Gallery />} />
            </Routes>
        </div>
            <Footer />
        </div>
    )
}

export default App;