// src/app/sermons/page.js
import Header from '../../components/header';
import Footer from '../../components/footer';

const Sermons = () => (
  <div>
    <Header />
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sermones</h1>
      <p>Listado de sermones recientes y grabaciones.</p>
    </main>
    <Footer />
  </div>
);

export default Sermons;