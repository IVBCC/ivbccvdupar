// src/app/page.js
import Header from '../components/header';
import Footer from '../components/footer';
import HeroSection from '../components/herosection';
import EventCard from '../components/eventcard';
import SermonCard from '../components/sermoncard';

const events = [
  { id: 1, title: 'Servicio de Adoración', date: '2024-09-01', description: 'Un servicio especial de adoración.' },
  { id: 2, title: 'Estudio Bíblico', date: '2024-09-08', description: 'Estudio de la Biblia para todos.' },
];

const sermons = [
  { id: 1, title: 'La Fe en la Adversidad', preacher: 'Pastor Juan', date: '2024-08-25' },
  { id: 2, title: 'El Amor de Dios', preacher: 'Pastora Ana', date: '2024-08-18' },
];

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <main className="container mx-auto p-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Sermones Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sermons.map(sermon => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Home;