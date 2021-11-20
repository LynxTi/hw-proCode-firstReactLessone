import { Routes, Route, NavLink } from 'react-router-dom';

import AboutPage from '../../conteiners/AboutPage';
import CatsWorld from '../../conteiners/CatsWorld';
import Gallery from '../../conteiners/Gallery';


// import AboutPage from '../../conteiners/AboutPage';

function Header() {
  return (
    <div>
<div><NavLink to='/about'>О нас</NavLink></div>
<div><NavLink to='/catsWorld'>Мир кошек</NavLink></div>
<div><NavLink to='/gallery'>Фотки</NavLink></div>

<div> 
            {/* <Routes>
                <Route exact path='/about' element={<AboutPage />} />
                <Route exact path='/catsWorld' element={<CatsWorld />} />
                <Route exact path='/gallery' element={<Gallery />} />
            </Routes> */}
</div>
    </div>
);
}

export default Header;
