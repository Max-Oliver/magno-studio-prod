// i18n/index.ts
import { reactive, computed, inject, provide } from 'vue';

type Locale = 'es' | 'en';

const messages = {
  en: {
    nav: {
      home: 'Home',
      works: 'Works',
      connect: 'Contact Us',
      menu: 'Menu',
      address: 'Address',
      social: 'Social Media',
    },
    ribbons: {
      left: 'BUILDING DIGITAL DESIGN',
      right: 'CREATIVE STUDIO',
    },
    // en messages.en
    heroSlides: {
      s1: { h2: 'We Create', h1: 'Awesome Design' }, // (corregí "Awoseme" -> Awesome)
      s2: { h2: 'We Create Impactful', h1: 'Digital Experiences' },
      s3: { h2: 'Elevate your', h1: 'Brand & Fuel Growth' },
      prev: 'Prev',
      next: 'Next',
    },
    // EN
    intro: {
      headline_1: 'If you’re looking for a specialist to build a',
      headline_2: 'meaningful digital project you can easily',
      headline_3: 'reach us by clicking',
      headline_cta: 'here',
      //  years_label: 'Years of Experience',
      // years_amount: '3',
      paragraph:
        'Whether you are a development agency looking to outsource design work, a company in search of a Product Designer or Product Team, a marketing agency that needs a landing page, a startup that wants to launch an app, or an enterprise that plans to rebrand or redesign its website, we welcome any challenge with our arms wide open.',
      marquee: [
        'UI-UX Design',
        'Web Development',
        'Digital Marketing',
        'Digital Product',
        'Branding Design',
      ],
    },
    servicesIntro: {
      watch: 'Watch Intro',
      why: 'Why Choose Us',
      titleLines: ['Best creative & modern', 'digital agency.'],
      paragraph:
        'We craft brands, websites and digital products that are beautiful, fast and purposeful.',
      stats: {
        projects_value: 7,
        projects_label: ['Projects', 'Completed'],
        satisfaction_value: 10,
        satisfaction_unit: '+',
        satisfaction_label: ['Customers', 'Satisfaction'],
      },
    },
    services2: {
      eyebrow: 'Our Specialize',
      title_a: 'Comprehensive',
      title_b: 'Services.',
      read_more: 'Read More',
    },
    servicesTabs: {
      eyebrow: 'Who we are?',
      title: 'The ultimate guide to marketing success.',
      intro:
        'We shifted our talents to frontier science because we wanted our work to have tangible impact. We get front row seats to the future.',
      cta: 'Read More',
      tabs: [
        {
          num: '01',
          label: 'About Us',
          img: '/dark/assets/imgs/intro/03.jpg',
          icon: '/dark/assets/imgs/serv-icons/0.png',
          text: 'We are a creative studio specializing in design, development and strategy across multiple disciplines to build exceptional digital experiences.',
        },
        {
          num: '02',
          label: 'Our Mission',
          img: '/dark/assets/imgs/intro/02.jpg',
          icon: '/dark/assets/imgs/serv-icons/1.png',
          text: 'We partner with brands to craft useful, beautiful and fast products that move the business forward with measurable outcomes.',
        },
        {
          num: '03',
          label: 'Our Vision',
          img: '/dark/assets/imgs/intro/03.jpg',
          icon: '/dark/assets/imgs/serv-icons/2.png',
          text: 'Design and technology working together to create memorable, accessible and scalable solutions that people love to use.',
        },
        {
          num: '04',
          label: 'Achievements',
          img: '/dark/assets/imgs/intro/03.jpg',
          icon: '/dark/assets/imgs/serv-icons/0.png',
          text: 'Selected projects, awards and case studies that reflect our commitment to quality, performance and brand impact.',
        },
      ],
    },
    // EN
    servicesBoxes: {
      eyebrow: 'Our Specialize',
      title_a: 'What We',
      title_b: 'Offer',
      read_more: 'Read More',
      list: [
        {
          titleA: 'Branding',
          titleB: 'Design',
          img: '/dark/assets/imgs/serv-icons/5.png',
          desc: 'Live workshop where we define the main problems and challenges before building a strategic plan moving forward.',
          link: '/dark/page-services-details',
        },
        {
          titleA: 'Graphic Design',
          titleB: '& Social Media',
          img: '/dark/assets/imgs/serv-icons/3.png',
          desc: 'Live workshop where we define the main problems and challenges before building a strategic plan moving forward.',
          link: '/dark/page-services-details',
        },
        {
          titleA: 'MVP Product',
          titleB: 'Development',
          img: '/dark/assets/imgs/serv-icons/5.png',
          desc: 'Live workshop where we define the main problems and challenges before building a strategic plan moving forward.',
          link: '/dark/page-services-details',
        },
        {
          titleA: 'Web',
          titleB: 'Development',
          img: '/dark/assets/imgs/serv-icons/4.png',
          desc: 'Live workshop where we define the main problems and challenges before building a strategic plan moving forward.',
          link: '/dark/page-services-details',
        },
      ],
    },
    portfolio: {
      kicker: 'Our Portfolio',
      title_a: 'What we',
      title_b: 'offer',
      read_more: 'Read more',
    },
    works: {
      title: 'Selected work',
      subtitle:
        'A showcase of projects that merge design, technology, and storytelling.',
      cta: 'View all projects',
    },
    marquee: {
      item_mvp: 'MVP Product Design',
      item_amazing: 'Amazing Design',
      item_visual_identity: 'Visual Identity',
      item_branding: 'Branding Strategy',
      item_saas: 'SaaS Products',
      item_web_dev: 'Web Development',
      item_ai: 'AI Powered Design',
      item_ai_agents: 'AI Agents',
      item_ai_automation: 'AI Automations',
    },
    team: {
      kicker: 'Our Team',
      title_a: 'Meet our',
      title_b: 'legends',
      cta: 'Join us',
    },
    contact: {
      title: 'Let’s start something great together',
      subtitle: 'Tell us about your project, and let’s make it happen.',
      cta: 'Get in touch',
      success: 'Thanks! We’ll get back to you shortly.',
    },
    footer: {
      // cta_title ya lo podrías tener de antes; si no, añadilo:
      cta_title: "Let's talk",
      address_label: 'Address',
      address_line1: 'Miami Boulevard 2',
      address_line2: 'Punta del Este, Uruguay',
      aria_primary: 'Primary navigation',
      aria_social: 'Social links',
    },
    links: {
      home: 'Home',
      work: 'Work',
      contact: 'Contact Us',
    },
    social: {
      instagram: 'Instagram',
      behance: 'Behance',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      works: 'Proyectos',
      connect: 'Contacto',
      menu: 'Menú',
    },
    ribbons: {
      left: 'DISEÑO DIGITAL EN ACCIÓN',
      right: 'ESTUDIO CREATIVO',
    },

    // en messages.es
    heroSlides: {
      s1: { h2: 'Creamos', h1: 'Diseños Asombrosos' },
      s2: { h2: 'Creamos experiencias', h1: 'Digitales con impacto' },
      s3: { h2: 'Elevá tu', h1: 'Marca y acelera el crecimiento' },
      prev: 'Anterior',
      next: 'Siguiente',
    },
    // ES
    intro: {
      headline_1: 'Si buscás un especialista para construir un',
      headline_2: 'proyecto digital con sentido, podés',
      headline_3: 'contactarnos haciendo clic',
      headline_cta: 'aquí',
      // years_label: 'Años de experiencia',
      // years_amount: '3',
      paragraph:
        'Ya seas una agencia de desarrollo que quiere tercerizar diseño, una empresa en busca de un Product Designer o un equipo de Producto, una agencia de marketing que necesita una landing, una startup que quiere lanzar una app o una compañía que planea rebranding o rediseño web, recibimos cada desafío con los brazos abiertos.',
      marquee: [
        'Diseño UI-UX',
        'Desarrollo Web',
        'Marketing Digital',
        'Producto Digital',
        'Branding',
      ],
    },
    servicesIntro: {
      watch: 'Ver Intro',
      why: '¿Por qué elegirnos?',
      titleLines: ['La agencia creativa y', 'moderna que necesitás.'],
      paragraph:
        'Diseñamos marcas, sitios web y productos digitales bellos, rápidos y con propósito.',
      stats: {
        projects_value: 7,
        projects_label: ['Proyectos', 'Completados'],
        satisfaction_value: 10,
        satisfaction_unit: '+',
        satisfaction_label: ['Clientes', 'Satisfechos'],
      },
    },
    services2: {
      eyebrow: 'Nos especializamos en',
      title_a: 'Servicios',
      title_b: 'integrales.',
      read_more: 'Ver más',
    },
    servicesTabs: {
      eyebrow: '¿Quiénes somos?',
      title: 'La guía definitiva para el éxito en marketing.',
      intro:
        'Llevamos nuestros talentos a la frontera de la tecnología para generar impacto real. Así, vivimos en primera fila el futuro.',
      cta: 'Ver más',
      tabs: [
        {
          num: '01',
          label: 'Sobre nosotros',
          img: '/dark/assets/imgs/about-us/about_us_image.png',
          icon: '/dark/assets/imgs/serv-icons/0.png',
          text: 'Somos un estudio creativo especializado en diseño, desarrollo y estrategia para construir experiencias digitales excepcionales.',
        },
        {
          num: '02',
          label: 'Nuestra misión',
          img: '/dark/assets/imgs/intro/02.jpg',
          icon: '/dark/assets/imgs/serv-icons/1.png',
          text: 'Trabajamos junto a marcas para crear productos útiles, bellos y rápidos que impulsen el negocio con resultados medibles.',
        },
        {
          num: '03',
          label: 'Nuestra visión',
          img: '/dark/assets/imgs/intro/03.jpg',
          icon: '/dark/assets/imgs/serv-icons/2.png',
          text: 'Diseño y tecnología en conjunto para crear soluciones memorables, accesibles y escalables que la gente ame usar.',
        },
        {
          num: '04',
          label: 'Logros',
          img: '/dark/assets/imgs/intro/03.jpg',
          icon: '/dark/assets/imgs/serv-icons/0.png',
          text: 'Proyectos, reconocimientos y casos de éxito que reflejan nuestro compromiso con la calidad, el performance y el impacto de marca.',
        },
      ],
    },
    servicesBoxes: {
      eyebrow: "Nos especializamos en",
      title_a: "Qué",
      title_b: "Ofrecemos",
      read_more: "Ver más",
      list: [
        {
          titleA: "Branding",
          titleB: "& Identidad",
          img: "/dark/assets/imgs/serv-icons/5.png",
          desc: "Taller en vivo para definir problemas y oportunidades antes de construir un plan estratégico claro.",
          link: "/dark/page-services-details"
        },
        {
          titleA: "Diseño Gráfico",
          titleB: "y Social Media",
          img: "/dark/assets/imgs/serv-icons/3.png",
          desc: "Taller en vivo para definir problemas y oportunidades antes de construir un plan estratégico claro.",
          link: "/dark/page-services-details"
        },
        {
          titleA: "Desarrollo",
          titleB: "de MVP",
          img: "/dark/assets/imgs/serv-icons/5.png",
          desc: "Taller en vivo para definir problemas y oportunidades antes de construir un plan estratégico claro.",
          link: "/dark/page-services-details"
        },
        {
          titleA: "Desarrollo",
          titleB: "Web",
          img: "/dark/assets/imgs/serv-icons/4.png",
          desc: "Taller en vivo para definir problemas y oportunidades antes de construir un plan estratégico claro.",
          link: "/dark/page-services-details"
        }
      ]
    },
    portfolio: {
      kicker: 'Nuestro portafolio',
      title_a: 'Qué',
      title_b: 'ofrecemos',
      read_more: 'Leer más',
    },
    works: {
      title: 'Trabajos destacados',
      subtitle:
        'Una muestra de proyectos que unen diseño, tecnología y storytelling.',
      cta: 'Ver todos los proyectos',
    },
    marquee: {
      item_mvp: 'Diseño de MVP',
      item_amazing: 'Diseño increíble',
      item_visual_identity: 'Identidad visual',
      item_branding: 'Estrategia de marca',
      item_saas: 'Productos SaaS',
      item_web_dev: 'Desarrollo web',
      item_ai: 'Diseño potenciado por IA',
      item_ai_agents: 'Agentes de IA',
      item_ai_automation: 'Automatizaciones con IA',
    },
    team: {
      kicker: 'Nuestro equipo',
      title_a: 'Conocé a nuestros',
      title_b: 'Founders',
      cta: 'Súmate',
    },
    contact: {
      title: 'Hagamos algo grande juntos',
      subtitle: 'Cuéntanos sobre tu proyecto y hagámoslo realidad.',
      cta: 'Escríbenos',
      success: '¡Gracias! Te responderemos muy pronto.',
    },
    footer: {
      cta_title: 'Contactenos',
      address_label: 'Dirección',
      address_line1: 'Miami Boulevard 2',
      address_line2: 'Punta del Este, Uruguay',
      aria_primary: 'Navegación principal',
      aria_social: 'Redes sociales',
    },
    links: {
      home: 'Inicio',
      work: 'Trabajos',
      contact: 'Contacto',
    },
    social: {
      instagram: 'Instagram',
      behance: 'Behance',
    },
  },
} as const;

const I18N_KEY = Symbol('i18n');

export function createI18n(initial: Locale = 'es') {
  const state = reactive({
    locale: initial as Locale,
  });

  const t = (path: string) =>
    path
      .split('.')
      .reduce<any>((acc, key) => acc?.[key], messages[state.locale]);

  const current = computed(() => state.locale);
  const setLocale = (l: Locale) => (state.locale = l);

  return { t, current, setLocale };
}

export function provideI18n(initial: Locale = 'es') {
  const i18n = createI18n(initial);
  provide(I18N_KEY, i18n);
  return i18n;
}

export function useI18n() {
  const i18n = inject<ReturnType<typeof createI18n>>(I18N_KEY);
  if (!i18n) throw new Error('i18n not provided');
  return i18n;
}
