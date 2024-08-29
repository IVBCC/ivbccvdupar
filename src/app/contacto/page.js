// src/app/contact/page.js
import Header from '../../components/header'; // Ajusta la ruta según tu estructura
import Footer from '../../components/footer'; // Ajusta la ruta según tu estructura

const Contact = () => (
  <div>
    <Header />
    <main className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Contáctanos</h1>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Contact Information Section */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Información de Contacto</h2>
            <p className="mb-4 text-black"><strong>Dirección:</strong> Cll 18 # 11-114 B/Gaitán, Valledupar,Cesar Colombia</p>
            <p className="mb-4 text-black"><strong>Teléfono:</strong> +57 300</p>
            <p className="mb-4 text-black"><strong>Email:</strong> contacto@tuiglesia.com</p>
            <p className="mb-4 text-black"><strong>Horario:</strong> Domingos, 9 AM - 11 AM</p>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Formulario de Contacto</h2>
            <form action="mailto:contacto@tuiglesia.com" method="post" encType="text/plain">
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-black" htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-semibold mb-2" htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-semibold mb-2" htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;