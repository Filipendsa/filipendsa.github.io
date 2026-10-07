export interface FeaturedSlide {
  id: string;
  titles: {
    en: string;
    pt: string;
    es: string;
  };
  descriptions: {
    en: string;
    pt: string;
    es: string;
  };
  link: string;
  linkTextKey: 'featured_btn' | 'btn_view_live' | 'btn_read_paper';
}

export const featuredSlides: FeaturedSlide[] = [
  {
    id: 'clean-arch-net',
    titles: {
      en: 'Clean Architecture & DDD with .NET 8',
      pt: 'Clean Architecture & DDD com .NET 8',
      es: 'Clean Architecture & DDD con .NET 8'
    },
    descriptions: {
      en: 'Enterprise production boilerplate featuring CQRS, MediatR, and automated test pipelines with xUnit & FluentAssertions.',
      pt: 'Boilerplate corporativo aplicando CQRS, MediatR e pipeline automatizado de testes com xUnit & FluentAssertions.',
      es: 'Plantilla empresarial aplicando CQRS, MediatR y pruebas automatizadas con xUnit & FluentAssertions.'
    },
    link: 'https://github.com/Filipendsa',
    linkTextKey: 'featured_btn'
  },
  {
    id: 'yesode-platform',
    titles: {
      en: 'Yesode · "Architecture, not templates"',
      pt: 'Yesode · "Construímos arquitetura, não templates"',
      es: 'Yesode · "Construimos arquitectura, no plantillas"'
    },
    descriptions: {
      en: 'Bespoke enterprise software, proprietary SaaS platforms (Yesode Hub & Analytics), and modern infrastructure co-founded by Filipe.',
      pt: 'Software sob medida para operações corporativas críticas, plataformas SaaS (Yesode Hub & Analytics) e infraestrutura de ponta.',
      es: 'Software a medida para operaciones corporativas críticas, plataformas SaaS (Yesode Hub & Analytics) e infraestructura de alto rendimiento.'
    },
    link: 'https://yesode.com',
    linkTextKey: 'btn_view_live'
  },
  {
    id: 'autonomous-robotics',
    titles: {
      en: 'Autonomous Mobile Robotics (ENAIC)',
      pt: 'Robôs Autônomos para Logística (ENAIC)',
      es: 'Robots Autónomos para Logística (ENAIC)'
    },
    descriptions: {
      en: 'Published research on embedded obstacle avoidance and autonomous logistical material transport in school facilities.',
      pt: 'Pesquisa acadêmica sobre desvio autônomo de obstáculos e transporte logístico interno de materiais escolares.',
      es: 'Investigación académica sobre evasión autónoma de obstáculos y transporte logístico en entornos escolares.'
    },
    link: '#research',
    linkTextKey: 'btn_read_paper'
  }
];
