/**
 * CONTEÚDO CENTRALIZADO DO SITE PM NETO
 * 
 * Todas as informações e textos do site estão centralizados neste arquivo para facilitar
 * a edição e manutenção pelo cliente.
 * Itens que dependem de confirmação da empresa estão sinalizados com [PREENCHER].
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  shortDescription: string;
  quote?: string;
  fullDescription: string;
  image: string;
  icon: string;
  benefits: string[];
  targetAudience: string[];
  operationalDetails: string[];
}

export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  isPlaceholder: boolean;
}

export interface DiferencialItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  step: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface SegmentItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  segment: string;
  city: string;
  content: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const siteContent = {
  company: {
    legalName: "Pietro Maria Neto Segurança e Vigilância LTDA",
    tradeName: "PM Neto - Segurança e Vigilância",
    shortName: "PM Neto",
    slogan: "Segurança é necessidade, não luxo.",
    taglineSecondary: "Presença que inibe. Estratégia que protege.",
    callToActionPhrase: "Proteja hoje. Evite perdas amanhã.",
    impactPhrase: "O problema não é quando algo acontece… é quando você não está preparado.",
    managementPhrase: "Quem entende de gestão, investe em segurança. Porque prejuízo não se recupera, se evita.",
    
    // Contatos e Localização Oficiais
    phone: "(13) 99786-7173",
    whatsappNumber: "5513997867173",
    whatsappFormatted: "(13) 99786-7173",
    whatsappDefaultMessage: "Olá! Vim pelo site da PM Neto e gostaria de solicitar um orçamento para serviços de segurança.",
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
    cityRegion: "Bertioga, Riviera de São Lourenço, Santos, Guarujá, São Sebastião e Litoral Paulista",
    coverage: [
      "Bertioga",
      "Riviera de São Lourenço",
      "Santos",
      "Guarujá",
      "São Sebastião",
      "Litoral Paulista",
    ],
    operatingHours: "Plantão Operacional 24h / 7 dias",
  },

  navigation: [
    { label: "Início", href: "/#inicio" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Diferenciais", href: "/#diferenciais" },
    { label: "Como Funciona", href: "/#como-funciona" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Contato", href: "/#contato" },
  ],

  hero: {
    badge: "Segurança Privada & Prestação de Serviços no Litoral de SP",
    titlePrimary: "Segurança é necessidade,",
    titleHighlight: "não luxo.",
    subtitle: "Vigilância privada, patrimonial, portaria, monitoramento, escoltas e segurança marítima para empresas, condomínios, indústrias e operações de alto risco no Litoral de São Paulo.",
    ctaPrimary: "Falar no WhatsApp",
    ctaSecondary: "Conheça nossos serviços",
    trustStrip: [
      "Equipe rigorosamente treinada e uniformizada",
      "Atendimento tático em todo o Litoral de SP",
      "Presença que inibe, estratégia que protege",
    ],
  },

  // 4 Indicadores / Métricas com contadores animados
  metrics: [
    {
      id: "anos",
      value: 8,
      suffix: "+",
      label: "Anos de Atuação",
      sublabel: "Tradição e seriedade operacional no Litoral",
      isPlaceholder: false,
    },
    {
      id: "postos",
      value: 120,
      suffix: "+",
      label: "Postos Atendidos",
      sublabel: "Condomínios, indústrias e comércios protegidos",
      isPlaceholder: false,
    },
    {
      id: "profissionais",
      value: 250,
      suffix: "+",
      label: "Profissionais Treinados",
      sublabel: "Equipe qualificada e com padrão de excelência",
      isPlaceholder: false,
    },
    {
      id: "atendimento",
      value: 24,
      suffix: "h",
      label: "Prontidão e Monitoramento",
      sublabel: "Supervisão ativa 24 horas nos 7 dias da semana",
      isPlaceholder: false,
    },
  ] as MetricItem[],

  // 8 Serviços Estruturados
  services: [
    {
      id: "seguranca-privada-patrimonial",
      slug: "seguranca-privada-patrimonial",
      title: "Segurança Privada e Patrimonial",
      badge: "Proteção de Ativos",
      shortDescription: "Proteção patrimonial ostensiva e preventiva, controle de acessos sensíveis e padrão profissional de vigilância para blindar sua estrutura contra invasões e sinistros.",
      quote: "Presença tática que transmite autoridade e assegura a tranquilidade dos seus negócios.",
      image: "/images/servico-patrimonial.jpg",
      icon: "ShieldAlert",
      fullDescription: "A vigilância patrimonial da PM Neto combina planejamento estratégico de perímetro, rondas táticas periódicas e profissionais com postura exemplar para coibir furtos, invasões, depredações e ocorrências em condomínios residenciais, centros de distribuição, indústrias e centros corporativos.",
      benefits: [
        "Rondas periódicas com bastão de ronda eletrônico e geolocalização",
        "Profissionais uniformizados, vigilantes e com reciclagem periódica",
        "Elaboração de manual de procedimentos de segurança por posto",
        "Supervisão tática presencial e fiscalização diuturna",
      ],
      targetAudience: [
        "Condomínios residenciais horizontais e verticais",
        "Indústrias, galpões e centros de armazenagem",
        "Centros comerciais, edifícios empresariais e shoppings",
        "Obras e instalações em construção",
      ],
      operationalDetails: [
        "Contratos flexíveis e dimensionamento de escala conforme a legislação",
        "Análise prévia de vulnerabilidades físicas e estruturais",
        "Comunicação direta por rádio frequência criptografada e botão de pânico",
      ],
    },
    {
      id: "escolta-armada",
      slug: "escolta-armada",
      title: "Escolta Armada",
      badge: "Proteção Rodoviária e Cargas",
      shortDescription: "Escolta tática de cargas e valores em rodovias e trajetos urbanos, com planejamento prévio de rota, batedores e rigor absoluto de procedimento.",
      quote: "Do porto às principais rodovias do Estado: sua carga chega intacta ao destino.",
      image: "/images/servico-escolta.jpg",
      icon: "Car",
      fullDescription: "Operações dedicadas ao acompanhamento tático de transporte de produtos de alto valor agregado, defensivos agrícolas, eletrônicos e matérias-primas que transitam pelas rodovias do Litoral, Imigrantes, Anchieta e conexões de São Paulo. Equipes especializadas e veículos rastreados via satélite.",
      benefits: [
        "Viatura caracterizada com rastreamento via satélite em tempo real",
        "Agentes armados com treinamento em direção defensiva e evasiva",
        "Mapeamento de rotas alternativas e áreas de risco elevado",
        "Integração contínua com a central de monitoramento de risco",
      ],
      targetAudience: [
        "Transportadoras e operadoras de logística de importação/exportação",
        "Empresas do polo industrial de Cubatão e Baixada Santista",
        "Distribuidores de tecnologia, medicamentos e bens de consumo",
      ],
      operationalDetails: [
        "Briefing de missão antes de cada saída operacional",
        "Checklist veicular e de armamento conforme rigor normativo",
      ],
    },
    {
      id: "seguranca-maritima",
      slug: "seguranca-maritima",
      title: "Segurança Marítima / Escolta Armada Marítima",
      badge: "Especialidade Portuária",
      shortDescription: "Onde muitos não chegam, nós protegemos. Proteção especializada em operações portuárias, fundeio, berços de atracação e travessias marítimas com preparo e rigor náutico.",
      quote: "Onde muitos não chegam, nós protegemos.",
      image: "/images/servico-maritimo.jpg",
      icon: "Anchor",
      fullDescription: "O Litoral de São Paulo abriga o maior complexo portuário da América Latina. A PM Neto oferece segurança marítima e escolta armada especializada para navios, barcaças, terminais offshore e embarcações fundeadas, prevenindo abordagens clandestinas, contrabandos e sinistros náuticos com embarcações adequadas e tripulação habilitada.",
      benefits: [
        "Vigilância tática de costado e área de fundeio",
        "Embarcações de apoio rápido com sinalização e holofotes de busca",
        "Agentes com certificação náutica e domínio de normas portuárias (ISPS Code)",
        "Prevenção ativa contra aproximações clandestinas e narcotráfico marítimo",
      ],
      targetAudience: [
        "Armadores e operadores de navios de carga e contêineres",
        "Terminais retroportuários e operadores de granel e combustíveis",
        "Estaleiros, marinas de grande porte e embarcações de serviço offshore",
      ],
      operationalDetails: [
        "Monitoramento do canal de navegação e radar integrado",
        "Comunicação direta com capitania e autoridades portuárias",
      ],
    },
    {
      id: "monitoramento",
      slug: "monitoramento",
      title: "Monitoramento 24 Horas",
      badge: "Tecnologia & Prontidão",
      shortDescription: "Câmeras inteligentes, sensores perimetrais, central 24/7 e pronta resposta tática para agir e neutralizar ameaças antes que o risco se concretize.",
      quote: "Olhos atentos em tempo real. Ação imediata no menor sinal de anomalia.",
      image: "/images/servico-monitoramento.jpg",
      icon: "Cctv",
      fullDescription: "Nossa central de operações monitora 24 horas por dia os sinais de alarme, cercas elétricas virtuais, câmeras com inteligência artificial para detecção de invasão e botões de socorro. Em caso de disparo, viaturas de apoio tático são acionadas imediatamente para verificação presencial.",
      benefits: [
        "Central de operações blindada com redundância de energia e internet",
        "Pronta resposta tática com motocicletas e viaturas no Litoral",
        "Aplicativo exclusivo para o cliente acompanhar câmeras e eventos pelo celular",
        "Armazenamento em nuvem com preservação de evidências digitais",
      ],
      targetAudience: [
        "Comércio de rua, joalherias, farmácias e supermercados",
        "Condomínios residenciais e comerciais",
        "Galpões logísticos e depósitos",
        "Residências e casas de veraneio",
      ],
      operationalDetails: [
        "Testes automáticos diários de comunicação do painel de alarme",
        "Relatórios semanais de arme, desarme e ocorrências",
      ],
    },
    {
      id: "portaria-controle-acesso",
      slug: "portaria-controle-acesso",
      title: "Portaria e Controle de Acesso",
      badge: "Primeira Linha de Proteção",
      shortDescription: "Portaria não é só recepção: é controle criterioso, triagem de visitantes, organização de encomendas e a primeira linha de blindagem do seu espaço.",
      quote: "Portaria não é só recepção. É controle, organização e a primeira linha de proteção.",
      image: "/images/servico-portaria.jpg",
      icon: "DoorClosed",
      fullDescription: "A portaria é o ponto de maior vulnerabilidade de qualquer empreendimento se não houver disciplina operacional. Nossos porteiros e controladores de acesso passam por rigorosa checagem cadastral e treinamento comportamental, dominando softwares de gestão de entrada, identificação biométrica e atendimento cordial com postura firme.",
      benefits: [
        "Triagem estrita de entregadores, prestadores de serviço e visitantes",
        "Registro digital de veículos, placas e encomendas com protocolo",
        "Postura firme, discreta e com cordialidade impecável",
        "Treinamento anti-invasão e protocolos para situações de emergência",
      ],
      targetAudience: [
        "Condomínios verticais e horizontais",
        "Sedes corporativas e centros médicos",
        "Instituições de ensino e clubes",
      ],
      operationalDetails: [
        "Substituição imediata de postos em casos de ausência ou atestado",
        "Uniformes alinhados e crachás de identificação padronizados",
      ],
    },
    {
      id: "transporte-de-valores",
      slug: "transporte-de-valores",
      title: "Transporte de Valores",
      badge: "Custódia Especializada",
      shortDescription: "Segurança especializada de alta complexidade que vai muito além do simples deslocamento físico: custódia, planejamento logístico e sigilo integral.",
      quote: "Blindagem, protocolo e discrição para proteger o seu fluxo financeiro.",
      image: "/images/servico-transporte.jpg",
      icon: "Banknote",
      fullDescription: "Deslocamento seguro de numerário, cheques, documentos confidenciais e joias com protocolo de guarda e transferência em viaturas reforçadas, reduzindo a zero a exposição dos seus colaboradores e clientes a riscos de assalto.",
      benefits: [
        "Cofres com retardo e protocolo rígido de abertura",
        "Trajetos aleatórios e sigilo estrito de dados operacionais",
        "Seguro total para as quantias e bens transportados sob custódia",
        "Equipe tática com treinamento específico para retenção e defesa",
      ],
      targetAudience: [
        "Redes varejistas, lotéricas e redes de postos de combustível",
        "Empresas de arrecadação e faturamento expressivo",
        "Instituições financeiras e cooperativas de crédito",
      ],
      operationalDetails: [
        "Planejamento com agendamento sob demanda ou rotina contratual fixa",
        "Termos de responsabilidade com registro digital de entrega",
      ],
    },
    {
      id: "conservacao-limpeza",
      slug: "conservacao-limpeza",
      title: "Serviços de Conservação e Limpeza",
      badge: "Facilities Integrados",
      shortDescription: "Ambientes limpos também são ambientes seguros. Organização minuciosa, controle de conservação e higienização corporativa com gestão profissional.",
      quote: "Ambientes limpos também são segurança.",
      image: "/images/servico-limpeza.jpg",
      icon: "Sparkles",
      fullDescription: "A preservação e higiene de um ambiente reforçam a ordem, o bem-estar e a imagem da sua organização. A divisão de facilities da PM Neto fornece profissionais de higienização, copeiragem, zeladoria e manutenção geral com produtos homologados e maquinário moderno.",
      benefits: [
        "Cronograma detalhado de higienização diária, semanal e pesada",
        "Uso de equipamentos profissionais e produtos biodegradáveis certificados",
        "Gestão integrada com o posto de portaria e segurança",
        "Eliminação total do passivo trabalhista direto para sua empresa",
      ],
      targetAudience: [
        "Condomínios residenciais e empresariais",
        "Escritórios, agências e consultórios",
        "Indústrias e instalações logísticas",
      ],
      operationalDetails: [
        "Fornecimento completo de insumos descartáveis e maquinários",
        "Supervisão técnica de qualidade e reposição ágil de materiais",
      ],
    },
    {
      id: "seguranca-publica-consultoria",
      slug: "seguranca-publica-consultoria",
      title: "Segurança Pública & Consultoria Estratégica",
      badge: "Assessoria Técnica do Fundador",
      shortDescription: "Orientação e consultoria estratégica fundamentada na vasta experiência do fundador Pietro Maria Neto para mitigação de riscos, auditorias e gestão de crises.",
      quote: "A sabedoria operacional que antecipa cenários e previne perdas irreparáveis.",
      image: "/images/servico-consultoria.jpg",
      icon: "Briefcase",
      fullDescription: "Com sólido histórico em segurança pública e privada, o diretor Pietro Maria Neto conduz diagnósticos aprofundados para identificar brechas de segurança em empresas e condomínios, estruturando planos diretores de proteção, auditorias de processos e treinamento de brigadas internas.",
      benefits: [
        "Auditoria presencial de vulnerabilidades perimétricas e sistêmicas",
        "Redação do Plano Diretor de Segurança customizado para o negócio",
        "Consultoria para implantação de tecnologia e contratação de terceiros",
        "Treinamento de equipes internas em conscientização preventiva de riscos",
      ],
      targetAudience: [
        "Diretorias, conselhos de administração e síndicos profissionais",
        "Empresas em expansão ou reestruturação de suas bases operacionais",
        "Grandes eventos corporativos e operações especiais",
      ],
      operationalDetails: [
        "Emissão de relatório técnico confidencial com matriz de risco e plano de ação",
        "Acompanhamento presencial na implementação das diretrizes",
      ],
    },
  ] as ServiceItem[],

  diferenciais: [
    {
      id: "equipe-treinada",
      title: "Equipe Treinada e Uniformizada",
      description: "Recrutamento criterioso com checagem de antecedentes, capacitação física/tática contínua e apresentação pessoal impecável.",
      icon: "UserCheck",
    },
    {
      id: "prevencao-risco",
      title: "Prevenção Antes do Risco",
      description: "Nossa metodologia atua nos pontos cegos e hábitos vulneráveis, eliminando as oportunidades antes que incidentes aconteçam.",
      icon: "ShieldCheck",
    },
    {
      id: "padrao-profissional",
      title: "Padrão Profissional de Atendimento",
      description: "Postura austera e vigilante combinada com tratamento cordial e respeitoso para com seus clientes, moradores e colaboradores.",
      icon: "Award",
    },
    {
      id: "planejamento-operacao",
      title: "Planejamento por Operação",
      description: "Não existem soluções prontas. Cada condomínio, fábrica ou navio recebe um desenho tático desenhado sob medida.",
      icon: "Compass",
    },
    {
      id: "comunicacao-gestao",
      title: "Comunicação Direta com a Gestão",
      description: "Canal aberto e desburocratizado diretamente com os supervisores operacionais e a diretoria para decisões imediatas.",
      icon: "MessageSquare",
    },
    {
      id: "continuidade",
      title: "Continuidade do que Você Construiu",
      description: "Segurança de alto padrão é o escudo invisível que garante que sua empresa ou condomínio opere sem interrupções por crises.",
      icon: "Building2",
    },
  ] as DiferencialItem[],

  comoFunciona: [
    {
      step: "01",
      number: "Passo 01",
      title: "Contato e Conversa Inicial",
      description: "Você nos apresenta a sua necessidade pelo WhatsApp ou formulário. Entendemos o escopo preliminar e agendamos a visita.",
      icon: "PhoneCall",
    },
    {
      step: "02",
      number: "Passo 02",
      title: "Diagnóstico e Visita Técnica",
      description: "Nossa equipe inspeciona o local, analisa os pontos vulneráveis de perímetro e desenha a matriz de risco específica.",
      icon: "Search",
    },
    {
      step: "03",
      number: "Passo 03",
      title: "Proposta Sob Medida",
      description: "Apresentamos uma proposta transparente, dimensionando efetivo, armamento, tecnologia e custos sem surpresas na fatura.",
      icon: "FileSpreadsheet",
    },
    {
      step: "04",
      number: "Passo 04",
      title: "Implantação e Acompanhamento",
      description: "Alocamos profissionais qualificados, instituímos os manuais de procedimento e iniciamos a fiscalização diuturna.",
      icon: "CheckCircle2",
    },
  ] as StepItem[],

  segmentos: [
    {
      id: "industrias",
      title: "Indústrias e Polos",
      description: "Proteção patrimonial de galpões, controle de fluxo de caminhões e contenção de perdas em fábricas.",
      icon: "Factory",
    },
    {
      id: "condominios",
      title: "Condomínios Residenciais",
      description: "Portaria de alto rigor, controle de prestadores e ronda ostensiva para garantir a paz das famílias.",
      icon: "Home",
    },
    {
      id: "comercio",
      title: "Comércio e Varejo",
      description: "Inibição de furtos, monitoramento de áreas de circulação e presença que transmite tranquilidade.",
      icon: "Store",
    },
    {
      id: "portuario",
      title: "Operações Portuárias & Marítimas",
      description: "Escolta náutica, segurança de cais e vigilância armada em berços de atracação e fundeio.",
      icon: "Ship",
    },
    {
      id: "empresas",
      title: "Empresas e Escritórios",
      description: "Recepção corporativa, controle de crachás e vigilância de ativos de informação e tecnologia.",
      icon: "Building",
    },
    {
      id: "eventos",
      title: "Grandes Eventos & Feiras",
      description: "Planejamento de fluxo de multidões, revista e segurança VIP em feiras de negócios e convenções.",
      icon: "Users",
    },
    {
      id: "residencias",
      title: "Residências e Pessoas Físicas",
      description: "Proteção dedicada, monitoramento inteligente e acompanhamento em deslocamentos sensíveis.",
      icon: "KeyRound",
    },
  ] as SegmentItem[],

  sobre: {
    badge: "Quem Somos · Liderança & Tradição",
    founderName: "Pietro Maria Neto",
    founderTitle: "Fundador e Diretor Geral de Operações",
    commitmentPhrase: "Proteja hoje. Evite perdas amanhã.",
    history: `A PM Neto - Segurança e Vigilância (Pietro Maria Neto Segurança e Vigilância LTDA) nasceu da convicção de que a segurança não pode ser tratada de forma genérica ou superficial. No Litoral Paulista — uma região com dinâmica econômica complexa que une portos de classe mundial, centros industriais, grandes condomínios litorâneos e desafios logísticos únicos —, a proteção de bens e vidas exige preparo técnico rigoroso, disciplina e proximidade com o cliente.

Com sede em Bertioga e forte atuação na Riviera de São Lourenço, Santos, Guarujá, São Sebastião e em todo o Litoral Paulista, a empresa consolidou-se como referência em seriedade operacional sob o comando de Pietro Maria Neto, prestando serviços de vigilância armada e desarmada, escolta rodoviária e marítima, e facilities com padrão inegociável de qualidade.`,
    historyHighlight: "Aqui, segurança não é um produto de prateleira: é uma estratégia desenhada para dar tranquilidade absoluta ao gestor e preservar o que levou anos para ser construído.",
    pilarMission: {
      title: "Missão",
      description: "Prover soluções completas e customizadas de segurança e prestação de serviços com rigor tático, transparência e pronto atendimento, salvaguardando o patrimônio e a vida de nossos clientes.",
      icon: "Target",
    },
    pilarVision: {
      title: "Visão",
      description: "Ser a empresa de segurança privada mais respeitada e recomendada do Litoral de São Paulo, reconhecida pela excelência de seu efetivo e capacidade de resposta tática.",
      icon: "Eye",
    },
    pilarValues: {
      title: "Valores",
      description: "Lealdade operacional, disciplina inegociável, respeito estrito à legalidade, discrição absoluta e compromisso com o resultado do cliente.",
      icon: "CheckSquare",
    },
  },

  depoimentos: [
    {
      id: "1",
      name: "Carlos Eduardo Mendes",
      role: "Síndico Geral",
      segment: "Condomínio Residencial Horizontal",
      city: "Riviera de São Lourenço / Bertioga - SP",
      content: "A implantação da PM Neto mudou o clima de segurança no condomínio. A pontualidade dos vigilantes, o rigor na triagem de prestadores de serviço e o suporte operacional do Pietro são impecáveis.",
      isPlaceholder: false,
    },
    {
      id: "2",
      name: "Mariana Vasconcelos",
      role: "Gerente de Operações e Logística",
      segment: "Terminal Retroportuário",
      city: "Santos / SP",
      content: "Contratamos a escolta armada e a consultoria para nossas saídas de carga portuária. O nível de planejamento das rotas e a comunicação das viaturas nos deram total previsibilidade e segurança.",
      isPlaceholder: false,
    },
    {
      id: "3",
      name: "Roberto S. Almeida",
      role: "Diretor Administrativo",
      segment: "Indústria Metalmecânica",
      city: "Guarujá / SP",
      content: "A terceirização de portaria e controle de acesso com a PM Neto nos tirou dores de cabeça diárias com faltas e escalas. A equipe é altamente profissional e alinhada à nossa cultura corporativa.",
      isPlaceholder: false,
    },
  ] as TestimonialItem[],

  instagram: {
    handle: "@pmneto.serv",
    url: "https://www.instagram.com/pmneto.serv/",
    title: "Acompanhe nossa rotina e conteúdo",
    subtitle: "Publicações, orientações de prevenção e bastidores operacionais da nossa equipe no Litoral Paulista.",
    buttonLabel: "Seguir @pmneto.serv no Instagram",
    posts: [
      {
        id: "p1",
        title: "Segurança é necessidade, não luxo",
        tag: "Conceito PM Neto",
        caption: "Quando você percebe que a segurança é o que sustenta tudo o que você conquistou, sua visão muda.",
        image: "/images/servico-patrimonial.jpg",
      },
      {
        id: "p2",
        title: "Proteja hoje. Evite perdas amanhã.",
        tag: "Prevenção Ativa",
        caption: "A maioria das ocorrências acontece nos momentos de descuido. Esteja preparado antes que o prejuízo chegue.",
        image: "/images/hero.jpg",
      },
      {
        id: "p3",
        title: "Onde muitos não chegam, nós protegemos",
        tag: "Operação Marítima",
        caption: "Operações navais e fluviais exigem coragem, rigor de procedimento e embarcações táticas especializadas.",
        image: "/images/servico-maritimo.jpg",
      },
      {
        id: "p4",
        title: "Portaria não é só recepção",
        tag: "Controle de Acesso",
        caption: "É a primeira linha de defesa da sua família ou da sua empresa. Procedimento rigoroso salva vidas.",
        image: "/images/servico-portaria.jpg",
      },
      {
        id: "p5",
        title: "Monitoramento 24 Horas",
        tag: "Tecnologia & Tática",
        caption: "A velocidade da resposta é o que define o sucesso da intervenção. Central vigilante 365 dias.",
        image: "/images/servico-monitoramento.jpg",
      },
      {
        id: "p6",
        title: "Escolta Armada com Rigor",
        tag: "Segurança Viária",
        caption: "Da saída ao destino final, cada quilômetro é monitorado e protegido por profissionais de elite.",
        image: "/images/servico-escolta.jpg",
      },
    ],
    tips: [
      {
        title: "Atenção nos Horários de Transição",
        description: "A maioria das ocorrências perimétricas acontece nos momentos de troca de turno ou abertura e fechamento de portões. Mantenha os procedimentos ativados.",
      },
      {
        title: "Nunca Abra Exceções na Portaria",
        description: "Protocolos existem para proteger todos. Nenhuma encomenda ou visitante deve entrar sem checagem prévia, mesmo em dias de chuva ou pressa.",
      },
      {
        title: "Prevenção é Sempre Mais Barata",
        description: "Reparar um furto, arcar com paralisação operacional ou lidar com o trauma de um sinistro custa dezenas de vezes mais do que um contrato sério de segurança.",
      },
    ],
  },

  faq: [
    {
      id: "regioes-atendidas",
      question: "Quais regiões e cidades a PM Neto atende?",
      answer: "Atendemos prioritariamente Bertioga, Riviera de São Lourenço, Santos, Guarujá, São Sebastião e todo o Litoral Paulista. Para escoltas armadas e operações marítimas, cobrimos rotas intermunicipais e interestaduais conforme o contrato.",
    },
    {
      id: "como-solicitar-orcamento",
      question: "Como funciona a solicitação de orçamento e visita técnica?",
      answer: "Você pode clicar no botão de WhatsApp em nosso site ou preencher o formulário de contato. Nosso departamento de operações retornará em até poucas horas para alinhar as primeiras informações e agendar uma visita técnica presencial sem compromisso.",
    },
    {
      id: "empresas-e-residencias",
      question: "Vocês atendem tanto empresas quanto condomínios e residências?",
      answer: "Sim. Nossa carteira é diversificada e customizada. Atendemos desde indústrias de grande porte, terminais portuários e condomínios de alto padrão, até comércios de rua e residências particulares que demandam monitoramento e pronta resposta.",
    },
    {
      id: "vigilantes-treinados",
      question: "Os vigilantes e agentes são treinados e uniformizados?",
      answer: "Absolutamente. Todos os nossos colaboradores passam por rigorosa checagem de antecedentes sociais e criminais, exames periódicos, reciclagem técnica contínua e atuam sempre padronizados com uniformes alinhados, identificação funcional e equipamentos de proteção adequados ao posto.",
    },
    {
      id: "visita-tecnica",
      question: "Como funciona o diagnóstico de segurança na visita técnica?",
      answer: "Um supervisor especialista inspeciona o local pessoalmente para identificar vulnerabilidades físicas, pontos cegos em câmeras, facilidades de transposição de muros e gargalos no fluxo de pedestres e veículos, formulando um parecer técnico fundamentado para subsidiar a proposta.",
    },
    {
      id: "atendimento-emergencial",
      question: "Existe suporte operacional e atendimento em emergências?",
      answer: "Sim. Mantemos supervisão tática externa e viaturas em patrulha para prestar apoio imediato aos postos de serviço em caso de qualquer anormalidade, acionamento de botão de socorro ou disparo de alarmes, 24 horas por dia.",
    },
  ] as FaqItem[],

  footer: {
    description: "Pietro Maria Neto Segurança e Vigilância LTDA – Soluções integradas de segurança patrimonial, escolta armada, vigilância marítima, portaria e conservação em Bertioga, Riviera, Santos, Guarujá, São Sebastião e todo o Litoral Paulista. Presença que inibe, estratégia que protege.",
    quickLinks: [
      { label: "Início", href: "/#inicio" },
      { label: "Serviços Oficiais", href: "/#servicos" },
      { label: "Nossos Diferenciais", href: "/#diferenciais" },
      { label: "Como Funciona", href: "/#como-funciona" },
      { label: "Sobre Pietro Maria Neto", href: "/#sobre" },
      { label: "Solicitar Orçamento", href: "/#contato" },
    ],
    legalLinks: [
      { label: "Política de Privacidade (LGPD)", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos" },
    ],
    copyright: `© ${new Date().getFullYear()} PM Neto - Segurança e Vigilância. Todos os direitos reservados.`,
    cnpjNotice: "CNPJ: 56.161.248/0001-99",
  },
};
