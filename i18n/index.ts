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
    // en messages.en
    heroSlides: {
      h2: 'WE CREATE EXPERIENCES',
      h1: { prefix: 'Digital experiences with ' },
      words: ['impact', 'real results', 'growth'],
      sub: 'At Magno Studio we blend creativity, strategy and technology to design brands and experiences that drive real results.',
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
      eyebrow: 'Know About',
      title: 'Our Services',
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
      title: 'Our Works',
      tab_a: 'Home',
      tab_b: 'Works',
    },
    works: {
      one_title: 'Beru AI',
      one_subtitle: 'MVP PRODUCT DEVELOPMENT',

      two_title: 'Urban Code',
      two_subtitle: 'BRANDING DESIGN',

      three_title: 'Beru AI',
      three_subtitle: 'UI DESIGN',

      four_title: 'Pacho Café',
      four_subtitle: 'BRANDING DESIGN',

      five_title: 'Esteña Consultores',
      five_subtitle: 'BRANDING DESIGN',

      prev: 'Prev Slide',
      next: 'Next Slide',
    },
    team: {
      kicker: 'Our Team',
      title_a: 'Meet our',
      title_b: 'founders',
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
    tab_works: {},
    tab_contact: {
      header: {
        title: 'Contact Us',
        tab_a: 'Home',
        tab_b: 'Contact',
      },
      address_info: {
        address: 'address',
        info_address: 'Miami Boulevard 2 Punta del Este, Uruguay',
        email: 'Email',
        info_email: 'contact@magnocreative.com',
      },
      send_message_info: {
        sub_title: 'LET´S CHAT',
        title: 'SEND A MESSAGE',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        cta: 'Let´s Talk',
      },
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
      s1: {
        h2: 'Diseño que convierte',
        h1_prefix: '',
        h1_suffix: ' en resultados reales',
        parrafo_1: 'En Magno Studio creemos en crear con propósito.',
        parrafo_2: 'Trabajamos con visión estratégica y creatividad para que cada marca logre crecer y destacarse.',
        parrafo_3: 'Tu éxito es parte de nuestra historia'
      },
      s2: { h2: 'Creamos experiencias', h1: 'Digitales con impacto' },
      s3: { h2: 'Elevá tu', h1: 'Marca y acelera el crecimiento' },
      prev: 'Anterior',
      next: 'Siguiente',
    },
    // ES
    intro: {
      headline_1: 'Diseñamos',
      headline_2: 'lo que tu marca necesita para crecer',
      headline_cta: 'Evaluá tu identidad en 15 min',
      headline_micro: 'Sin costo · Respondemos en 30 min',

      paragraph:
        'Desde landings que convierten hasta webs a medida, pasando por branding, apps y rediseños completos. Si sos una agencia, startup o empresa que quiere dar el próximo paso, en Magno Studio estamos listos para hacerlo realidad junto a vos',
    },
    services2: {
      eyebrow: 'Así te ayudamos',
      tittle: 'Identidad, Web & Growth',
    },
    servicesTabs: {
      eyebrow: '¿Quiénes somos?',
      title: 'Un equipo creativo con visión integral y compromiso',
      intro:
        'Cada servicio que ofrecemos está pensado para impulsar resultados reales. En Magno Studio trabajamos con estrategia, creatividad y compromiso, involucrandonos en cada proyecto como si fuera propio, apostando siempre a resultados que trascienden lo estético.',
      cta: 'Ver más',
      tabs: [
        {
          num: '01',
          label: 'Sobre nosotros',
          img: '/dark/assets/imgs/about-us/about_us_image.png',
          icon: '/dark/assets/imgs/serv-icons/0.png',
          text: 'Somos un estudio creativo que combina diseño, desarrollo y estrategia para construir experiencias digitales con propósito. Creemos en trabajar con compromiso real, porque tu crecimiento también impulsa el nuestro.',
        },
        {
          num: '02',
          label: 'Nuestra misión',
          img: '/dark/assets/imgs/intro/02.jpg',
          icon: '/dark/assets/imgs/serv-icons/1.png',
          text: 'Potenciar marcas y negocios a través de soluciones digitales únicas. No diseñamos solo por estética ni desarrollamos por cumplir: lo hacemos para generar impacto real, diferenciación y resultados medibles.',
        },
        {
          num: '03',
          label: 'Nuestra visión',
          img: '/dark/assets/imgs/intro/03.jpg',
          icon: '/dark/assets/imgs/serv-icons/2.png',
          text: 'Ser un referente creativo en la región, reconocido por transformar ideas en proyectos digitales que inspiran, conectan y hacen crecer a las marcas con autenticidad y valor.',
        },
        {
          num: '04',
          label: 'Logros',
          img: '/dark/assets/imgs/intro/03.jpg',
          icon: '/dark/assets/imgs/serv-icons/0.png',
          text: 'Hemos colaborado con empresas de diversos rubros, desde startups hasta agencias consolidadas, llevando adelante proyectos de branding, desarrollo web y estrategias digitales que impulsaron su presencia y resultados. Cada logro refleja nuestra convicción: crecer junto a quienes confían en nosotros.',
        },
      ],
    },
    servicesBoxes: {
      eyebrow: 'Nos especializamos en',
      title_a: 'Qué',
      title_b: 'Ofrecemos',
      read_more: 'Ver más',
      list: [
        {
          titleA: 'Branding',
          titleB: '& Identidad',
          img: '/dark/assets/imgs/serv-icons/5.png',
          desc: 'Construimos identidades sólidas y memorables que transmiten quién sos y qué te hace diferente.',
          link: '/dark/page-services-details',
        },
        {
          titleA: 'Diseño Gráfico',
          titleB: '& Social Media',
          img: '/dark/assets/imgs/serv-icons/3.png',
          desc: 'Creamos contenido visual estratégico para que tu marca comunique con impacto en cada canal.',
          link: '/dark/page-services-details',
        },
        {
          titleA: 'Desarrollo',
          titleB: 'de MVP',
          img: '/dark/assets/imgs/serv-icons/5.png',
          desc: 'Validamos tu idea con un producto mínimo funcional que te permite lanzarte al mercado rápido y con solidez.',
          link: '/dark/page-services-details',
        },
        {
          titleA: 'Desarrollo',
          titleB: '& Diseño Web',
          img: '/dark/assets/imgs/serv-icons/4.png',
          desc: 'Diseñamos y desarrollamos sitios web a medida, optimizados para cautivar, convertir y escalar.',
          link: '/dark/page-services-details',
        },
      ],
    },
    portfolio: {
      title: 'Nuestro Catálogo',
      tab_a: 'Inicio',
      tab_b: 'Proyectos',
    },
    slider: {
      eyebrow: 'Lo que hacemos',
      tittle: 'Diseños que venden & Webs que convierten',
      subcopy: 'Una muestra de cómo trabajamos',
    },
    works: {
      one_title: 'Beru AI',
      one_subtitle: 'DESARROLLO DE PRODUCTO MVP',

      two_title: 'Urban Code',
      two_subtitle: 'DISEÑO DE MARCA',

      three_title: 'Beru AI',
      three_subtitle: 'DISEÑO UI',

      four_title: 'Pachu Café',
      four_subtitle: 'DISEÑO DE MARCA',

      five_title: 'Esteña Consultores',
      five_subtitle: 'DISEÑO DE MARCA',

      prev: 'Anterior',
      next: 'Siguiente',
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
      cta_subtitle: 'Hablemos hoy',
      cta_title: 'Contáctenos',
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
    tab_works: {},
    tab_contact: {
      header: {
        title: 'Agende su reunion',
        tab_a: 'Inicio',
        tab_b: 'Contacto',
      },
      address_info: {
        address: 'Direccion',
        info_address: 'Miami Boulevard 2 Punta del Este, Uruguay',
        email: 'correo',
        info_email: 'hello@magnocreative.es',
      },
      send_message_info: {
        sub_title: 'Vamos a charlar',
        title_a: 'Enviar un',
        title_b: 'Mensaje',
        name: 'Nombre',
        email: 'Correo',
        subject: 'Motivo de contacto',
        message: 'Mensaje que desea comunicarnos',
        cta: 'Conversemos',
      },
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
