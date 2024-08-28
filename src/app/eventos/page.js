// src/app/events/page.js
import Header from '../../components/header';
import Footer from '../../components/footer';

const Events = () => (
  <div>
    <Header />
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Eventos</h1>
      <p>Listado de todos los eventos programados.</p>
    </main>
    <Footer />
  </div>
);

export default Events;