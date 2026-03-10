import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { category: 'Infraestructura', title: 'Puente Victoria', desc: 'Puente vehicular de 500m.', img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400' },
  { category: 'Edificación', title: 'Torre Pacific', desc: 'Edificio de 30 pisos.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400' },
  { category: 'Vialidad', title: 'Autopista Costa', desc: 'Carretera de 4 carriles.', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400' },
]

const services = [
  { icon: 'fa-drafting-compass', title: 'Diseño Estructural', desc: 'Cálculos y modelado de estructuras.' },
  { icon: 'fa-building', title: 'Construcción', desc: 'Ejecución de obras civiles.' },
  { icon: 'fa-search', title: 'Consultoría', desc: 'Asesoría técnica.' },
  { icon: 'fa-hard-hat', title: 'Gerencia de Obras', desc: 'Administración integral.' },
]

function App() {
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.hero-content > *', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 }
    )
    gsap.fromTo('.hero-image img',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    )

    gsap.fromTo('.project-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        scrollTrigger: { trigger: projectsRef.current, start: 'top 80%' }
      }
    )

    gsap.fromTo('.service-card',
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1,
        scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' }
      }
    )
  }, [])

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-white text-2xl font-extrabold no-underline">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#fbbf24] rounded flex items-center justify-center">
              <i className="fas fa-hard-hat text-white"></i>
            </div>
            <span className="bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">CIVIL</span>ENG
          </a>
          <nav className="flex items-center gap-6">
            <a href="#proyectos" className="text-white no-underline font-medium hover:text-[#f97316] transition">Proyectos</a>
            <a href="#contacto" className="bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-6 py-2 rounded font-semibold no-underline hover:opacity-90 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-12">
          <div className="hero-content flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Construimos el<br /><span className="bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">Futuro</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">Proyectos de ingeniería civil de clase mundial.</p>
            <a href="#contacto" className="inline-block bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-8 py-3 rounded font-bold no-underline hover:opacity-90 transition mb-8">
              Contactar
            </a>
            <div className="grid grid-cols-4 gap-6">
              <div><div className="text-3xl font-extrabold text-[#f97316]">250+</div><div className="text-xs text-gray-500 uppercase">Proyectos</div></div>
              <div><div className="text-3xl font-extrabold text-[#f97316]">20+</div><div className="text-xs text-gray-500 uppercase">Años</div></div>
              <div><div className="text-3xl font-extrabold text-[#f97316]">500+</div><div className="text-xs text-gray-500 uppercase">Clientes</div></div>
              <div><div className="text-3xl font-extrabold text-[#f97316]">98%</div><div className="text-xs text-gray-500 uppercase">satisfacción</div></div>
            </div>
          </div>
          <div className="hero-image flex-1 hidden md:block">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600" alt="Construction" className="w-full max-w-lg rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} id="proyectos" className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos <span className="text-[#f97316]">Destacados</span></h2>
          <p className="text-gray-400 mb-12">Algunas de nuestras obras más importantes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="project-card bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#f97316]/50 transition">
                <img src={project.img} alt={project.title} className="w-full h-44 object-cover" loading="lazy" />
                <div className="p-5">
                  <div className="text-xs text-[#f97316] uppercase font-semibold tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-[#f97316]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <div key={i} className="service-card p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f97316] to-transparent rounded flex items-center justify-center text-[#f97316] text-xl mb-4">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Tienes un Proyecto?</h2>
          <p className="mb-8 opacity-90">Hablemos sobre cómo construirlo juntos</p>
          <a href="#" className="inline-block bg-white text-[#f97316] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            Contactar
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060912] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <a href="#" className="flex items-center gap-2 text-xl font-extrabold no-underline mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#fbbf24] rounded flex items-center justify-center">
                  <i className="fas fa-hard-hat text-white"></i>
                </div>
                <span className="bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">CIVIL</span>ENG
              </a>
              <p className="text-gray-500 text-sm">Ingeniería civil de excelencia.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition">Diseño</a></li>
                <li><a href="#" className="hover:text-white transition">Construcción</a></li>
                <li><a href="#" className="hover:text-white transition">Consultoría</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Proyectos</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition">Infraestructura</a></li>
                <li><a href="#" className="hover:text-white transition">Edificación</a></li>
                <li><a href="#" className="hover:text-white transition">Vialidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><i className="fas fa-map-marker-alt mr-2"></i> Guayaquil</li>
                <li><i className="fas fa-phone mr-2"></i> +593 99 999 9999</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600 text-sm">
            © 2026 CIVILENG. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Contactar por WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  )
}

export default App
