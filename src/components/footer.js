// src/components/Footer.js
const Footer = () => (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} IVBCC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
  
export default Footer;