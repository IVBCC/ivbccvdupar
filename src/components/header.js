// src/components/Header.js
import Link from 'next/link';
import Image from 'next/image';
//import logo from './public/Logo-Cruzada-Cristiana-Negro-1-2048x876.png'; // Asumiendo que tienes un logo en public

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* <Link href="/">
        <a>
          <Image src={'https://www.cruzadacristiana.org/wp-content/uploads/2024/03/Logo-Cruzada-Cristiana-Negro-1.png'} alt="Iglesia Logo" width={150} height={50} />
        </a>
      </Link> */}
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Sobre Nosotros</Link></li>
          <li><Link href="/eventos">Eventos</Link></li>
          <li><Link href="/sermones">Sermones</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;