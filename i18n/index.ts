// i18n/index.ts
import { reactive, computed, inject, provide } from 'vue';

type Locale = 'es' | 'en';

const messages = {
  en: {
    nav: {
      home: 'Home',
      works: 'Works',
      connect: 'Connect',
      menu: 'Menu',
    },
    ribbons: {
      left: 'BUILDING DIGITAL DESIGN',
      right: 'CREATIVE STUDIO',
    },
    // en messages.en
    hero: {
      line_1: 'We create',
      line_2: 'impactful',
      line_3: 'digital experiences',
      paragraph:
        'We combine forward-thinking design with modern technology to tell stories that transform and grow our partners’ brands.',
    },
    // EN
    intro: {
      headline_1: 'If you’re looking for a specialist to build a',
      headline_2: 'meaningful digital project you can easily',
      headline_3: 'reach us by clicking',
      headline_cta: 'here',
      years_label: 'Years of Experience',
      years_amount: '3',
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
      watch: "Watch Intro",
      why: "Why Choose Us",
      titleLines: ["Best creative & modern", "digital agency."],
      paragraph:
        "We craft brands, websites and digital products that are beautiful, fast and purposeful.",
      stats: {
        projects_value: 7,
        projects_label: ["Projects", "Completed"],
        satisfaction_value: 10,
        satisfaction_unit: "+",
        satisfaction_label: ["Customers", "Satisfaction"]
      }
    },
    services2: {
      eyebrow: "Our Specialize",
      title_a: "Comprehensive",
      title_b: "Services.",
      read_more: "Read More"
    },
    services: {
      title: 'What we do',
      list: [
        {
          name: 'Branding & Identity',
          desc: 'We build identities that connect with people and leave a mark.',
        },
        {
          name: 'Web & Digital Experiences',
          desc: 'From sleek websites to immersive platforms, we design with purpose and style.',
        },
        {
          name: 'Creative Strategy',
          desc: 'We align creativity with business goals to generate measurable results.',
        },
      ],
      cta: 'View services',
    },
    works: {
      title: 'Selected work',
      subtitle:
        'A showcase of projects that merge design, technology, and storytelling.',
      cta: 'View all projects',
    },
    contact: {
      title: 'Let’s start something great together',
      subtitle: 'Tell us about your project, and let’s make it happen.',
      cta: 'Get in touch',
      success: 'Thanks! We’ll get back to you shortly.',
    },
    footer: {
      claim: 'Magno Studio — Design, Technology & Bold Ideas.',
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
    hero: {
      line_1: 'Creamos',
      line_2: 'Experiencias',
      line_3: 'con impacto',
      paragraph:
        'Combinamos diseño de vanguardia con tecnología moderna para contar historias que transforman y hacen crecer a nuestras marcas aliadas.',
    },
    // ES
    intro: {
      headline_1: 'Si buscás un especialista para construir un',
      headline_2: 'proyecto digital con sentido, podés',
      headline_3: 'contactarnos haciendo clic',
      headline_cta: 'aquí',
      years_label: 'Años de experiencia',
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
      watch: "Ver Intro",
      why: "¿Por qué elegirnos?",
      titleLines: ["La agencia creativa y", "moderna que necesitás."],
      paragraph:
        "Diseñamos marcas, sitios web y productos digitales bellos, rápidos y con propósito.",
      stats: {
        projects_value: 7,
        projects_label: ["Proyectos", "Completados"],
        satisfaction_value: 10,
        satisfaction_unit: "+",
        satisfaction_label: ["Clientes", "Satisfechos"]
      }
    },
    services2: {
      eyebrow: "Nos especializamos en",
      title_a: "Servicios",
      title_b: "integrales.",
      read_more: "Ver más"
    },
    services: {
      title: 'Qué hacemos',
      list: [
        {
          name: 'Branding & Identidad',
          desc: 'Creamos identidades que conectan con las personas y dejan huella.',
        },
        {
          name: 'Web & Experiencias Digitales',
          desc: 'Desde sitios elegantes hasta plataformas inmersivas, diseñamos con propósito y estilo.',
        },
        {
          name: 'Estrategia Creativa',
          desc: 'Alineamos creatividad con objetivos de negocio para generar resultados medibles.',
        },
      ],
      cta: 'Ver servicios',
    },
    works: {
      title: 'Trabajos destacados',
      subtitle:
        'Una muestra de proyectos que unen diseño, tecnología y storytelling.',
      cta: 'Ver todos los proyectos',
    },
    contact: {
      title: 'Hagamos algo grande juntos',
      subtitle: 'Cuéntanos sobre tu proyecto y hagámoslo realidad.',
      cta: 'Escríbenos',
      success: '¡Gracias! Te responderemos muy pronto.',
    },
    footer: {
      claim: 'Magno Studio — Diseño, Tecnología e Ideas que inspiran.',
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
