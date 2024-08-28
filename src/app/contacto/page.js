// src/app/contact/page.js
import Header from '../../components/header';
import Footer from '../../components/footer';

const Contact = () => (
  <div>
    <Header />
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p>Formulario de contacto, información de la iglesia.</p>
    </main>
    <Footer />
  </div>
);

export default Contact;