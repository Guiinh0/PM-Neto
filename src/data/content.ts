/**
 * CONTEÚDO CENTRALIZADO DO SITE PM NETO (VERSÃO MINIMALISTA PREMIUM)
 */

export interface ServiceItem {
  number: string;
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  badge?: string;
  quote?: string;
  fullDescription: string;
  image: string;
  icon: string;
  benefits: string[];
  targetAudience: string[];
  operationalDetails: string[];
}

export interface StepMinimal {
  number: string;
  title: string;
  description: string;
}

export interface FaqMinimal {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  segment: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const siteContent = {
  company: {
    legalName: "Pietro Maria Neto Segurança e Vigilância LTDA",
    tradeName: "PM Neto - Vigilância e Segurança",
    shortName: "PM Neto",
    slogan: "Segurança é necessidade. Não luxo.",

    // Contatos Oficiais
    phone: "(13) 99786-7173",
    whatsappNumber: "5513997867173",
    whatsappFormatted: "(13) 99786-7173",
    whatsappDefaultMessage: "Olá! Vim pelo site da PM Neto e gostaria de solicitar uma proposta técnica de segurança.",
    email: "contato@pmnetoserv.com.br",
    secondaryEmail: "advogadodoutorxavier@gmail.com",
    instagram: "@pmneto.serv",
    instagramUrl: "https://www.instagram.com/pmneto.serv/",
    cnpj: "56.161.248/0001-99",
    address: "Rua Manoel Gajo, 892 - Centro, Bertioga - SP, CEP 11250-462",
    addressDetails: {
      street: "Rua Manoel Gajo, 892",
      neighborhood: "Centro",
      city: "Bertioga",
      state: "SP",
      zip: "11250-462",
      full: "Rua Manoel Gajo, 892 - Centro, Bertioga - SP, CEP 11250-462",
    },
    cityRegion: "Bertioga, Guarujá, Santos, São Vicente e região",
    coverage: ["Bertioga", "Guarujá", "Santos", "São Vicente", "Riviera de São Lourenço", "Litoral Paulista"],
    operatingHours: "Plantão Operacional 24h",
  },

  navigation: [
    { label: "Serviços", href: "/#servicos" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Liderança", href: "/#lideranca" },
    { label: "Dúvidas", href: "/#duvidas" },
    { label: "Contato", href: "/#contato" },
  ],

  hero: {
    titlePrimary: "Segurança é necessidade.",
    titleHighlight: "Não luxo.",
    subtitle: "Vigilância privada e proteção patrimonial no Litoral de São Paulo.",
    ctaPrimary: "Falar no WhatsApp",
    metrics: [
      { value: "2+ anos", label: "de atuação" },
      { value: "Até 6h", label: "tempo de resposta" },
    ],
  },

  // 4 Serviços Essenciais (01 a 04)
  services: [
    {
      number: "01",
      id: "seguranca-privada-patrimonial",
      slug: "seguranca-privada-patrimonial",
      title: "Segurança Patrimonial e Residencial",
      description: "Proteção preventiva e ostensiva para condomínios, empresas e residências de alto padrão.",
      shortDescription: "Proteção patrimonial preventiva e ostensiva para blindar sua estrutura contra invasões e sinistros.",
      badge: "Proteção de Ativos",
      quote: "Presença tática que transmite autoridade e assegura a tranquilidade dos seus negócios.",
      fullDescription: "A vigilância patrimonial da PM Neto combina planejamento estratégico de perímetro, rondas táticas periódicas e profissionais com postura exemplar para coibir ocorrências em condomínios residenciais, centros de distribuição e centros corporativos.",
      image: "/images/servico-patrimonial.jpg",
      icon: "ShieldAlert",
      benefits: [
        "Rondas com bastão eletrônico e geolocalização",
        "Profissionais uniformizados com reciclagem periódica",
        "Manual de procedimentos específico para o posto",
        "Supervisão tática presencial e fiscalização diária",
      ],
      targetAudience: [
        "Condomínios residenciais de alto padrão",
        "Centros empresariais e sedes corporativas",
        "Empresas e galpões industriais",
        "Residências particulares e veraneio",
      ],
      operationalDetails: [
        "Análise prévia de vulnerabilidades físicas",
        "Comunicação direta com a central de suporte",
      ],
    },
    {
      number: "02",
      id: "portaria-controle-acesso",
      slug: "portaria-controle-acesso",
      title: "Portaria e Controle de Acesso",
      description: "Gestão criteriosa de entrada, triagem rigorosa de prestadores e disciplina de procedimentos.",
      shortDescription: "Controle de acessos rigoroso, triagem de visitantes e primeira linha de proteção.",
      badge: "Primeira Linha de Proteção",
      quote: "Portaria não é só recepção. É controle, organização e blindagem de acesso.",
      fullDescription: "Nossos porteiros e controladores de acesso passam por rigorosa checagem cadastral e treinamento comportamental, dominando softwares de gestão de entrada, identificação e atendimento cordial com postura firme.",
      image: "/images/servico-portaria.jpg",
      icon: "DoorClosed",
      benefits: [
        "Triagem estrita de entregadores e visitantes",
        "Registro detalhado de veículos e encomendas",
        "Postura austera e cordialidade profissional",
        "Protocolos claros para situações atípicas",
      ],
      targetAudience: [
        "Condomínios verticais e horizontais",
        "Edifícios empresariais e centros comerciais",
        "Clubes e associações no Litoral",
      ],
      operationalDetails: [
        "Substituição ágil de postos em eventuais ausências",
        "Uniformes alinhados e crachás padronizados",
      ],
    },
    {
      number: "03",
      id: "monitoramento",
      slug: "monitoramento",
      title: "Monitoramento 24h",
      description: "Central de vigilância dedicada, integração perimétrica e apoio tático ininterrupto.",
      shortDescription: "Câmeras inteligentes, sensores perimetrais e central 24/7 com pronta resposta.",
      badge: "Prontidão e Tecnologia",
      quote: "Olhos atentos em tempo real. Resposta rápida no menor sinal de anomalia.",
      fullDescription: "Nossa central monitora 24 horas por dia os sinais de alarme, cercas perimétricas e câmeras inteligentes. Em qualquer acionamento, viaturas de apoio tático realizam a verificação presencial imediata.",
      image: "/images/servico-monitoramento.jpg",
      icon: "Cctv",
      benefits: [
        "Central com redundância de energia e internet",
        "Apoio tático no Litoral Paulista",
        "Acesso e acompanhamento de ocorrências",
        "Armazenamento e preservação de registros",
      ],
      targetAudience: [
        "Condomínios e residências",
        "Comércios e escritórios",
        "Instalações logísticas",
      ],
      operationalDetails: [
        "Testes automáticos diários de comunicação",
        "Relatórios periódicos de eventos",
      ],
    },
    {
      number: "04",
      id: "seguranca-maritima",
      slug: "seguranca-maritima",
      title: "Segurança Marítima e Escolta",
      description: "Proteção em marinas, berços de atracação, travessias náuticas e comboios terrestres.",
      shortDescription: "Segurança especializada em marinas, atracação, travessias náuticas e comboios terrestres.",
      badge: "Operações Especializadas",
      quote: "Onde muitos não chegam, nós protegemos.",
      fullDescription: "A PM Neto oferece proteção marítima e escolta especializada para embarcações, marinas e travessias náuticas no Litoral de São Paulo, além de acompanhamento tático rodoviário de ativos valiosos.",
      image: "/images/servico-maritimo.jpg",
      icon: "Anchor",
      benefits: [
        "Vigilância tática de costado e fundeio",
        "Embarcações e viaturas de apoio tático",
        "Agentes habilitados e certificados",
        "Mapeamento de rotas e prevenção ativa",
      ],
      targetAudience: [
        "Marinas, iates e embarcações de serviço",
        "Operações retroportuárias e terminais",
        "Transporte de cargas e ativos sensíveis",
      ],
      operationalDetails: [
        "Briefing operacional prévio a cada missão",
        "Comunicação direta contínua com a base",
      ],
    },
  ] as ServiceItem[],

  // 3 Passos Lineares
  comoFunciona: {
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description: "Mapeamento presencial de pontos sensíveis e análise de vulnerabilidades no local.",
      },
      {
        number: "02",
        title: "Proposta",
        description: "Dimensionamento sob medida de efetivo, escala e diretrizes operacionais de proteção.",
      },
      {
        number: "03",
        title: "Operação",
        description: "Equipe em campo, relatórios e suporte contínuo com supervisão ativa.",
      },
    ] as StepMinimal[],
    segments: "Condomínios, empresas, marinas e residências.",
  },

  // Depoimento Principal (compatibilidade) e Lista Editorial por Segmento
  depoimento: {
    quote:
      "A implantação da PM Neto mudou o padrão de segurança do nosso condomínio. A pontualidade dos vigilantes, o rigor na triagem de prestadores de serviço e o suporte operacional do Pietro são impecáveis.",
    author: "Carlos Eduardo Mendes",
    role: "Síndico Geral",
    location: "Riviera de São Lourenço, Bertioga",
  },

  depoimentos: [
    {
      id: "condominio",
      segment: "Condomínio Alto Padrão",
      quote:
        "A implantação da PM Neto mudou o padrão de segurança do nosso condomínio. A pontualidade dos vigilantes, o rigor na triagem de prestadores de serviço e o suporte operacional do Pietro são impecáveis.",
      author: "Carlos Eduardo Mendes",
      role: "Síndico Geral",
      location: "Riviera de São Lourenço, Bertioga",
    },
    {
      id: "marina",
      segment: "Operação Náutica & Marina",
      quote:
        "Precisávamos de uma equipe que compreendesse a dinâmica de berços de atracação e controle de acesso noturno. A supervisão tática da PM Neto trouxe disciplina imediata e zero ocorrências na temporada.",
      author: "Roberto Vianna",
      role: "Diretor de Operações Náuticas",
      location: "Guarujá, SP",
    },
    {
      id: "corporativo",
      segment: "Patrimonial & Logística",
      quote:
        "O diferencial da PM Neto é a resposta direta da liderança. Relatórios de ronda precisos, postura impecável na portaria e pronta resposta real quando acionamos o plantão.",
      author: "Fernanda Alencar",
      role: "Gerente de Operações e Facilities",
      location: "Santos, SP",
    },
  ] as TestimonialItem[],

  // 5 Perguntas Essenciais no FAQ
  faq: [
    {
      id: "regioes",
      question: "Quais regiões a PM Neto atende?",
      answer:
        "Atuamos com base central em Bertioga e atendimento contínuo em Guarujá, Santos, São Vicente, Riviera de São Lourenço, São Sebastião e todo o Litoral Paulista.",
    },
    {
      id: "orcamento",
      question: "Como funciona a solicitação de proposta e diagnóstico?",
      answer:
        "O atendimento é iniciado pelo WhatsApp ou formulário técnico. Alinhamos os objetivos iniciais e realizamos uma vistoria presencial no posto em até 6 horas para dimensionar efetivo, vulnerabilidades e orçamento exato.",
    },
    {
      id: "efetivo",
      question: "Qual o padrão de preparo e supervisão da equipe?",
      answer:
        "Todos os profissionais passam por checagem criteriosa de antecedentes, reciclagem periódica, treinamento comportamental de abordagem e contam com supervisão tática presencial diária e reserva técnica para cobertura imediata.",
    },
    {
      id: "maritima",
      question: "Como opera a Segurança Marítima e Escolta?",
      answer:
        "Oferecemos proteção dedicada para marinas, iates, berços de atracação e travessias náuticas, além de acompanhamento tático terrestre no Litoral de SP, sempre com briefing prévio e comunicação ininterrupta com a base.",
    },
    {
      id: "monitoramento",
      question: "O monitoramento 24h inclui apoio tático presencial?",
      answer:
        "Sim. Nossa central acompanha câmeras, alarmes e sensores perimetrais 24/7 com redundância de energia e link. Ao menor sinal de anomalia, deslocamos viatura de apoio tático para verificação imediata no local.",
    },
  ] as FaqMinimal[],

  footer: {
    copyright: `© ${new Date().getFullYear()} PM Neto - Vigilância e Segurança. Todos os direitos reservados.`,
    cnpjNotice: "CNPJ 56.161.248/0001-99",
  },
};
