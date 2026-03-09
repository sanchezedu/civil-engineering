import { useState } from 'react'

// Services data
const services = [
  {
    icon: "📐",
    title: "Diseño Estructural",
    description: "Cálculos y planos estructurales para edificaciones comerciales, industriales y residenciales de gran escala."
  },
  {
    icon: "🏗️",
    title: "Gestión y Supervisión de Obra",
    description: "Supervisión técnica completa de proyectos de construcción asegurando calidad, plazos y presupuesto."
  },
  {
    icon: "🗺️",
    title: "Estudios Geotécnicos y Topográficos",
    description: "Análisis de suelo, estudios de cimentación y levantamientos topográficos precisos para tu proyecto."
  },
  {
    icon: "📋",
    title: "Consultoría y Permisología",
    description: "Asesoría técnica para trámites permits y cumplimiento de normativas de construcción locales."
  }
]

// Portfolio projects
const projects = [
  {
    name: "Torre Corporate Plaza",
    challenge: "Edificio de 12 pisos en zona sísmica",
    solution: "Sistema estructural dual columnas-muros con aisladores sísmicos",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    name: "Centro Comercial MegaMall",
    challenge: "Gran luces libres de 25 metros",
    solution: "Estructura metálica con cerchas tipo Pratt",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
  },
  {
    name: "Puente Vehicular Río Verde",
    challenge: "Vano de 80 metros sobre río",
    solution: "Puente viga cajón preesforzado",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80"
  }
]

// Testimonials
const testimonials = [
  {
    quote: "Su equipo demostró profesionalismo excepcional en la supervisión de nuestra obra. Cumplieron con los plazos y la calidad esperada.",
    name: "Ing. Roberto Martínez",
    position: "Director de Proyectos",
    company: "Constructora ABC"
  },
  {
    quote: "El diseño estructural fue innovador y optimizó costos sin comprometer la seguridad. Recomendados 100%.",
    name: "Arq. María González",
    position: "Gerente de Desarrollo",
    company: "Inmobiliaria Sierra Norte"
  },
  {
    quote: "Profesionalismo de primer nivel. Resolvieron problemas técnicos complejos con soluciones prácticas.",
    name: "Lcdo. Carlos Mendoza",
    position: "Director de Operaciones",
    company: "Grupo Empresarial del Norte"
  }
]

// Trust logos (placeholders)
const trustLogos = [
  "ISO 9001",
  "ISO 14001",
  "OHSAS 18001",
  "CIVIL",
  "ACI",
  "AISC"
]

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    proyecto: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias! Nos contactaremos pronto.')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-orange-500 text-sm font-semibold rounded-full mb-6">
              Ingeniería Civil de Precisión
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluciones de Ingeniería Civil Estructural para Proyectos Comerciales
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8">
              Transformamos tus proyectos en realidades seguras, eficientes y cumpliendo todas las normativas de construcción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Solicitar Presupuesto
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-all duration-300">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-sm mb-6">CONSTRUCTORAS Y CERTIFICACIONES ASOCIADAS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {trustLogos.map((logo, index) => (
              <div key={index} className="text-slate-400 font-bold text-xl tracking-wider hover:text-orange-500 transition-colors cursor-default">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">NUESTROS SERVICIOS</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2">Expertos en Ingeniería Civil</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Brindamos soluciones integrales para proyectos de construcción de cualquier escala
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">¿POR QUÉ ELEGIRNOS?</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">Compromiso con la Excelencia</h2>
              <p className="text-slate-300 leading-relaxed">
                Con más de 15 años de experiencia en el sector, hemos completado más de 200 proyectos exitosos.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-slate-300">Años de Experiencia</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
                <div className="text-slate-300">Proyectos Completados</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-slate-300">Cumplimiento Normativo</div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Tecnología Avanzada</h4>
                <p className="text-slate-400 text-sm">Usamos software de última generación: BIM, AutoCAD, SAP2000, ETABS</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Garantía de Seguridad</h4>
                <p className="text-slate-400 text-sm">Cumplimiento estricto de códigos de construcción locales y normas internacionales</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Eficiencia Optimizada</h4>
                <p className="text-slate-400 text-sm">Proyectos entregados en tiempo y presupuesto acordado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">PORTAFOLIO</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2">Proyectos Destacados</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Cada proyecto representa un desafío único que transformamos en soluciones innovadoras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-orange-500 uppercase">Desafío</span>
                    <p className="text-slate-600 text-sm mt-1">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase">Solución</span>
                    <p className="text-slate-600 text-sm mt-1">{project.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">TESTIMONIOS</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2">Qué Dicen Nuestros Clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-orange-500 text-4xl mb-4">"</div>
                <p className="text-slate-600 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-800">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">CONTACTO</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">Hablemos de tu Proyecto</h2>
              <p className="text-slate-300 mb-8 text-lg">
                ¿Tienes un proyecto de construcción en mente? Contáctanos para una asesoría gratuita y descubre cómo podemos ayudarte.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Dirección</p>
                    <p className="text-white">Av. Principal 123, Guayaquil, Ecuador</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white">contacto@ingenieriaecuador.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Teléfono</p>
                    <p className="text-white">+593 99 123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Solicitar Presupuesto</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-600 text-sm mb-2">Nombre Completo *</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-sm mb-2">Empresa *</label>
                  <input 
                    type="text" 
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    placeholder="Empresa Constructora XYZ"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 text-sm mb-2">Correo Electrónico *</label>
                    <input 
                      type="email" 
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-sm mb-2">Teléfono *</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      placeholder="+593 99 123 4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-600 text-sm mb-2">Descripción del Proyecto *</label>
                  <textarea 
                    name="proyecto"
                    value={formData.proyecto}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none"
                    placeholder="Describa brevemente su proyecto..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Enviar Proyecto
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-bold text-white mb-4">Ingeniería Civil</h4>
              <p className="text-slate-400 mb-4">Soluciones estructurales de confianza para proyectos comerciales e industriales.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-slate-400 hover:text-orange-500 transition-colors">Servicios</a></li>
                <li><a href="#portafolio" className="text-slate-400 hover:text-orange-500 transition-colors">Portafolio</a></li>
                <li><a href="#contacto" className="text-slate-400 hover:text-orange-500 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-sm">© 2026 Ingeniería Civil Ecuador. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
