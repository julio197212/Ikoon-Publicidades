const logoBeige = { url: "assets/logo-beige.webp" };
const logoBlack = { url: "assets/logo-black.webp" };
const pBranding = "assets/p-branding.jpg";
const pPackaging = "assets/p-packaging.jpg";
const pPoster = "assets/p-poster.jpg";
const pEditorial = "assets/p-editorial.jpg";
const site = {
  brand: "Ikoon Publicidad",
  logos: { onDark: logoBeige.url, onLight: logoBlack.url },
  whatsapp: "",
  email: "contacto@ikoonpublicidad.com",
  tagline: "Diseño, creatividad e innovación para construir marcas que dejan huella",
  hero: {
    title: "Transformamos ideas en experiencias visuales extraordinarias",
    subtitle: "Diseño, creatividad e innovación para construir marcas que dejan huella."
  },
  about: {
    text: "Creemos que cada marca tiene una historia que contar. Nuestra misión es convertir ideas en diseños visuales únicos, combinando creatividad, estrategia y tecnología para crear experiencias que conectan con las personas.",
    values: [
      { title: "Estrategia", text: "Cada pieza responde a un objetivo de negocio claro." },
      { title: "Creatividad", text: "Ideas originales que diferencian tu marca." },
      { title: "Compromiso", text: "Acompañamiento cercano de principio a fin." }
    ],
    stats: [
      { value: "+10", label: "Años de experiencia" },
      { value: "+300", label: "Proyectos entregados" },
      { value: "+150", label: "Marcas acompañadas" }
    ]
  },
  social: [
    { name: "Instagram", url: "https://instagram.com/" },
    { name: "Facebook", url: "https://facebook.com/" },
    { name: "TikTok", url: "https://tiktok.com/" },
    { name: "Behance", url: "https://behance.net/" },
    { name: "Pinterest", url: "https://pinterest.com/" },
    { name: "YouTube", url: "https://youtube.com/" },
    { name: "LinkedIn", url: "https://linkedin.com/" }
  ],
  services: [
    { icon: "PenTool", name: "Logotipos e identidad corporativa", desc: "Símbolos memorables y sistemas visuales coherentes." },
    { icon: "Gem", name: "Branding y construcción de marca", desc: "Estrategia, personalidad y voz para tu marca." },
    { icon: "Megaphone", name: "Diseño publicitario", desc: "Campañas que captan atención y generan resultados." },
    { icon: "Instagram", name: "Piezas para redes sociales", desc: "Contenido visual que conecta y convierte." },
    { icon: "FileImage", name: "Volantes, afiches y brochures", desc: "Impresos con impacto y excelente acabado." },
    { icon: "IdCard", name: "Tarjetas de presentación", desc: "Tu primera impresión, cuidada al detalle." },
    { icon: "BookOpen", name: "Diseño editorial", desc: "Revistas, catálogos y libros con ritmo visual." },
    { icon: "Camera", name: "Edición y retoque fotográfico", desc: "Imágenes pulidas con calidad profesional." },
    { icon: "Package", name: "Diseño de empaques", desc: "Packaging que vende desde el estante." },
    { icon: "Clapperboard", name: "Animación y contenido audiovisual", desc: "Motion graphics y video que cuentan historias." },
    { icon: "MonitorPlay", name: "Banners y publicidad digital", desc: "Formatos digitales optimizados para cada plataforma." }
  ],
  categories: ["Logotipos", "Branding", "Publicidad", "Redes sociales", "Fotografía", "Diseño editorial", "Animación y video"],
  portfolio: [
    { title: "Identidad Norton", category: "Branding", image: pBranding, desc: "Sistema de identidad y papelería corporativa." },
    { title: "Campaña Equilibrio", category: "Publicidad", image: pPoster, desc: "Afiche para exposición de arte contemporáneo." },
    { title: "Packaging Lumora", category: "Branding", image: pPackaging, desc: "Empaques para línea de velas aromáticas." },
    { title: "Revista The Journal", category: "Diseño editorial", image: pEditorial, desc: "Diagramación editorial de estilo de vida." },
    { title: "Logotipo Norton", category: "Logotipos", image: pBranding, desc: "Monograma y versiones de marca." },
    { title: "Retoque de producto", category: "Fotografía", image: pPackaging, desc: "Fotografía y postproducción de producto." },
    { title: "Contenido social", category: "Redes sociales", image: pPoster, desc: "Serie de piezas para Instagram." }
  ]
};
function waLink(message) {
  const base = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

window.IKOON_SITE = site;
