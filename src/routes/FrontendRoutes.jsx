import { Route } from 'react-router-dom';
import Home from '../pages/frontend/Home';
import About from '../pages/frontend/About';
import Contact from '../pages/frontend/Contact';
import Listing from '../pages/frontend/Listing';

export const FrontendRoutes = [
    <Route path="/" element={<Home />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path='/listing' element={<Listing />} />
]
