import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnchorScroll from './components/effects/AnchorScroll';
import RevealEffects from './components/effects/RevealEffects';
import Home from './pages/Home';
import DoctorsPage from './pages/Doctors';

export default function App() {
  return (
    <BrowserRouter>
      <AnchorScroll />
      <RevealEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
