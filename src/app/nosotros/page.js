// src/app/about/page.js
import Header from '../../components/header';
import Footer from '../../components/footer';

const About = () => (
  <div>
    <Header />
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
      <p>Información sobre la iglesia, Misión, Visión, Historia</p>
    </main>
    <Footer />
  </div>
);

export default About;