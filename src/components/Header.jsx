// src/components/Header.jsx
import logo from '../assets/logoIcon.png';

export default function Header() {
  return (
    <div className="absolute top-0 left-0 w-full z-40 flex items-center p-3">
      <img src={logo} alt="Logo" className="w-auto h-24" />
    </div>
  );
}
