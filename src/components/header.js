// src/components/Header.js
import Link from 'next/link';


const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className='text-2xl font-bold'>IVBCC</Link>      
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Sobre Nosotros</Link></li>
          <li><Link href="/eventos">Eventos</Link></li>
          <li><Link href="/sermones">Sermones</Link></li>
          <li><Link href="/contacto">Contáctanos</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;