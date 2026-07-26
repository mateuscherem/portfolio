/* ============ I18N DICTIONARY ============ */
const translations = {
  pt: {
    sectionTagCases: "cases",
    casesHeading: "Projetos que sustentam essa fala",
    casesNote: "Software de terminal para a Ger7, a mesma base sob duas marcas, e as plataformas internas de adquirência do Sicoob.",
    labelProblem: "Problema",
    labelAction: "Minha atuação",
    labelResult: "Resultado",
    c1Id: "CASE · GER7-01",
    c1Title: "Ger7 — o launcher e a loja de aplicativos que rodam dentro do terminal",
    c1Sub: "Ger7 Sistemas · Android POS · software de terminal",
    c1Tag1: "Design System",
    c1Tag2: "Android POS",
    c1Tag3: "Launcher &amp; Store",
    c1Problem: "O terminal chega ao lojista como hardware genérico rodando Android puro. Sem uma camada própria, a maquininha se comporta como um tablet: o lojista se perde entre configurações de sistema que não são dele, e cada aplicativo do ecossistema depende de um técnico com o aparelho em mãos para ser instalado.",
    c1Action: "Desenhei a camada de software que fica entre o Android e o lojista — o launcher e a loja de aplicativos do terminal — tratando o aparelho como um produto, não como um dispositivo genérico com apps soltos.",
    c1Li1: "Launcher com widgets, central de controle e configurações do aparelho",
    c1Li2: "Modo técnico protegido por autenticação, separado do uso do lojista",
    c1Li3: "Ger7 Store com catálogo, busca, ficha de aplicativo e atualização no próprio terminal",
    c1Li4: "Componentes, ícones e tipografia compartilhados entre launcher e loja",
    c1Result: "O terminal ganha cara própria e um caminho claro: o lojista encontra pagamento, aplicativos e ajustes no mesmo lugar, e o time de campo tem uma porta técnica separada — sem depender de acesso físico ao aparelho para instalar ou atualizar um aplicativo.",
    c1Caption: "Nove telas do launcher e da Ger7 Store. Clique em qualquer uma para navegar pela galeria completa.",
    c2Id: "CASE · MULTI-02",
    c2Title: "POS7 e Sipag — a mesma base de produto sob duas marcas",
    c2Sub: "Ger7 e Sicoob · white-label · mesma linha de terminais",
    c2Tag1: "White-label",
    c2Tag2: "Multi-marca",
    c2Tag3: "Reskin controlado",
    c2Problem: "O mesmo software de captura precisava ser lançado sob a identidade de instituições diferentes — cada uma com marca, cor, bandeiras aceitas e posicionamento próprios — sem recriar a interface do zero a cada novo parceiro.",
    c2Action: "Mantive numa base única o que não deveria variar: a estrutura da tela, a hierarquia da informação e o caminho até concluir uma venda. Isolei numa camada de marca tudo o que muda entre parceiros — cor, logo, tipografia e o conjunto de bandeiras.",
    c2Result: "POS7 e Sipag são o mesmo produto sob duas marcas. Quem opera um consegue operar o outro, porque o que troca é a pele e não o caminho — e lançar mais uma marca deixa de ser um projeto do zero.",
    c2Caption: "A mesma tela inicial, dois donos. À esquerda o POS7 na identidade Ger7; à direita o Sipag, do Sicoob. Estrutura, hierarquia e fluxo são os mesmos.",
    c3Id: "CASE · SICOOB-03",
    c3Title: "Sicoob — logística de terminais e ciclo de vida do estabelecimento",
    c3Sub: "Sicoob Confederação · Sisbr · plataformas internas de adquirência",
    c3Tag1: "Plataforma B2B",
    c3Tag2: "Fluxo de aprovação",
    c3Tag3: "Pesquisa &amp; Teste",
    c3Problem: "A rede de cooperativas precisava planejar, distribuir e aprovar terminais de pagamento, e também enxergar quais estabelecimentos pararam de transacionar. Os dois processos viviam fragmentados entre planilhas, alçadas manuais e times diferentes.",
    c3Action: "Liderei o desenho de ponta a ponta de dois módulos dentro do Sisbr, cobrindo tanto o ciclo do terminal quanto o ciclo do estabelecimento:",
    c3Li1: "Planejamento de consumo e estoque por cooperativa e ponto de atendimento",
    c3Li2: "Fluxo de alçada de aprovação entre times, com rastreabilidade do pedido",
    c3Li3: "Painel de inatividade por faixa de dias, para agir antes de perder o estabelecimento",
    c3Li4: "Configuração de parâmetros, ordens de serviço e apuração",
    c3Result: "Dois fluxos únicos, testados com os usuários operacionais, que substituem etapas manuais por decisões guiadas dentro do produto — com rastreabilidade do pedido até a aprovação final e visibilidade da inatividade enquanto ainda dá tempo de reagir.",
    c3Caption: "Duas plataformas internas do Sisbr. Clique para ver em tamanho real.",
    grpLauncher: "Launcher do terminal",
    grpStore: "Ger7 Store",
    grpMarcas: "Mesma tela, duas marcas",
    grpSisbr: "Sisbr · módulos internos",
    sgWidgets: "Widgets",
    sgControles: "Central de controle",
    sgTecnico: "Acesso técnico",
    sgConfig: "Configurações",
    sgStoreHome: "Store · home",
    sgBusca: "Busca",
    sgApp: "Ficha do app",
    sgMenu: "Menu",
    sgSobre: "Sobre",
    sgPos7: "POS7 · Ger7",
    sgSipag: "Sipag · Sicoob",
    sgLogistica: "Logística · painel",
    sgCiclo: "Ciclo de vida · inatividade",
    sgWidgetsAlt: "Home do launcher Ger7 com widgets de relógio, clima, umidade e previsão do dia sobre o papel de parede do terminal.",
    sgControlesAlt: "Central de controle do launcher Ger7: Wi-Fi, Bluetooth, tempo de tela, brilho e volume em acesso rápido.",
    sgTecnicoAlt: "Modal de autenticação técnica sobre a central de controle, separando o acesso do técnico do acesso do lojista.",
    sgConfigAlt: "Lista de configurações do aparelho no launcher Ger7: rede, dados, VPN, launcher padrão, barra de status, tela e impressora.",
    sgStoreHomeAlt: "Home da Ger7 Store com o catálogo de aplicativos do terminal e os estados instalar, atualizar e desinstalar.",
    sgBuscaAlt: "Busca de aplicativos na Ger7 Store, com o teclado do terminal e o estado vazio orientando a digitação.",
    sgAppAlt: "Ficha de aplicativo na Ger7 Store: versão, tamanho, data de atualização, prévia de telas e descrição.",
    sgMenuAlt: "Menu da Ger7 Store com modo escuro, seleção de idioma e acesso a sobre e perguntas frequentes.",
    sgSobreAlt: "Tela Sobre da Ger7 Store, com informações do aplicativo, canais de suporte e o acesso do técnico.",
    sgPos7Alt: "Tela inicial do POS7 na identidade Ger7, em laranja: bandeiras aceitas, atalhos de pagamento e menu, Pix, reimpressão e ajustes.",
    sgSipagAlt: "A mesma tela inicial sob a marca Sipag, do Sicoob, em verde e azul: teclado de valor, bandeiras da instituição e pós-venda.",
    sgLogisticaAlt: "Painel de Controle da Gestão de Logística no Sisbr: filtros por central e cooperativa, indicadores de estoque e tabela por ponto de atendimento.",
    sgCicloAlt: "Painel de Inatividade da Gestão de Ciclo de Vida no Sisbr: faixas de inatividade por período e lista de estabelecimentos sem transacionar.",
    minorLabel: "Outras frentes no mesmo ecossistema",
    minor1K: "Mobbuy",
    minor1H: "Terminais móveis de captura",
    minor1P: "Identidade visual e telas de terminal portátil, aplicadas a uma nova linha de hardware.",
    minor2K: "Ger7 Lib",
    minor2H: "Biblioteca de componentes",
    minor2P: "Base compartilhada usada pelo launcher, pela loja e pela frente de pagamento.",
    minor3K: "Tap2Pay",
    minor3H: "Pagamento por aproximação",
    minor3P: "Frente de captura por aproximação sobre a mesma base de componentes dos terminais.",
    lightboxLabel: "Galeria de telas do projeto",
    lightboxOpen: "Abrir a imagem original em nova aba",
    lightboxClose: "Fechar a galeria",
    lightboxPrev: "Tela anterior",
    lightboxNext: "Próxima tela",
    lightboxOf: "Tela {c} de {t}.",
    wordmark: "Mateus Cherem — Senior Product Designer",
    navImpact: "impacto", navCases: "cases", navAbout: "sobre", navContact: "contato",
    heroH1: 'Design que precisa <span class="accent">funcionar em produção</span>, não só na apresentação.',
    heroLede: "31 anos, São Paulo. Há mais de 6 anos desenhando sistemas de pagamento e logística de terminais — do wireframe ao componente em produção, sempre perto de quem decide o roadmap.",
    ctaPrimary: "Falar comigo", ctaSecondary: "Ver os cases →",
    terminalLabel: "sessão · perfil.log",
    tLine0: "&gt; carregando perfil...",
    tLine5: 'atual   <span class="hl">Sicoob</span> — Sist. de Pagamentos',
    tLine6: "desde   nov/2024 (4a5m na conta)",
    tLine9: "formação  MBA USP/Esalq — Gestão &",
    tLine10: "          IA · Design, IMT Mauá",
    tLine12: 'foco    <span class="hl">design systems</span>, produtos',
    tLine13: "        multi-plataforma, liderança",
    tLine14: "        de squads de design",
    tLine17: 'fim do registro <span class="cursor"></span>',
    sectionTagImpact: "impacto",
    highlightsHeading: "O que eu levo para uma squad quando entro",
    highlightsNote: "Áreas onde minha atuação muda o resultado do produto, não só a tela.",
    h1Tag: "ponta a ponta", h1Title: "Do problema ao componente em produção",
    h1Text: "Conduzo pesquisa, mapeamento e jornada até protótipos navegáveis de alta fidelidade — e acompanho a implementação para o resultado não se perder na entrega ao time de desenvolvimento.",
    h2Tag: "design systems", h2Title: "Consistência que escala entre squads",
    h2Text: "Estruturei e curei design systems e style guides usados por múltiplos times e produtos ao mesmo tempo — inclusive uma base multimarca reaproveitada por diferentes parceiros comerciais.",
    h3Tag: "negócio", h3Title: "Perto de quem decide o roadmap",
    h3Text: "Trabalho lado a lado com POs e PMs para equilibrar viabilidade técnica, estratégia de produto e experiência — traduzindo posicionamento de marca em decisões de interface.",
    sectionTagAbout: "sobre", aboutHeading: "Como eu penso design, times e produto",
    aboutP1: "Comecei em branding, na <strong>Neurona Marcas Inteligentes</strong>, entendendo como uma marca se traduz em experiência antes mesmo de virar interface. Isso ainda molda como eu penso produto hoje: toda decisão de UI carrega um posicionamento por trás, mesmo quando ninguém está olhando para isso diretamente.",
    aboutP2: "Passei pela <strong>4BIO Medicamentos Especiais</strong>, dentro do Grupo Raia Drogasil, ajudando a expandir novos negócios digitais junto com times de tecnologia. Hoje, no <strong>Sicoob</strong>, lidero projetos de ponta a ponta na área de Sistemas de Pagamentos e Ecossistemas Digitais — de pesquisa a protótipo validado, sempre em contato direto com PMs e POs.",
    aboutP3: "Estou cursando o <strong>MBA USP/Esalq em Gestão de Negócios Digitais e Inteligência Artificial</strong>, porque acho que o próximo salto de senioridade em design não vem só de UI mais refinada — vem de entender melhor o negócio e as ferramentas que estão mudando como produtos são construídos.",
    principle1H: "Design é decisão de negócio, não só de tela",
    principle1P: "Uma interface bonita que não resolve a alçada de aprovação certa, ou não se encaixa na estratégia da marca, não é um bom design — é um mockup caro.",
    principle2H: "Sistema antes de tela",
    principle2P: "Prefiro resolver o componente que se repete cem vezes do que a tela única e bonita. É onde a consistência — e a velocidade do time — realmente se ganha.",
    principle3H: "Perto de quem decide",
    principle3P: "Prototipar rápido só importa se a decisão certa acontecer com a pessoa certa na sala. Cultivo esse acesso deliberadamente, não como sorte de projeto.",
    principle4H: "Curadoria é liderança",
    principle4P: "Manter um design system vivo é um trabalho de liderança silenciosa: dizer não a exceções, para que a exceção certa, quando chegar, ainda faça sentido.",
    tl1H: "MBA USP/Esalq — Gestão de Negócios Digitais e IA", tl1P: "Em andamento",
    tl2H: "Sicoob Confederação — Senior Product Designer", tl2P: "Adquirência, Sistemas de Pagamentos e Logística de Terminais",
    tl3H: "4BIO Medicamentos Especiais (Grupo Raia Drogasil) — Product Designer Pleno", tl3P: "Branding e expansão de novos negócios digitais",
    tl4H: "Neurona Marcas Inteligentes — Designer Jr.", tl4P: "São Paulo e região",
    tl5H: "IMT Mauá — Bacharelado em Design", tl5P: "Instituto Mauá de Tecnologia",
    footerHeading: "Um recorte do trabalho que venho fazendo em pagamentos, terminais e design systems.",
    footerResume: "baixar currículo (pdf)",
    footerCopyright: "© 2026 Mateus Cherem", footerLocation: "São Paulo, Brasil",
    a11ySkipLink: "Pular para o conteúdo principal",
    a11yContrastOn: "Ativar alto contraste", a11yContrastOff: "Desativar alto contraste",
    a11yNarrateStart: "Ouvir o conteúdo da página", a11yNarrateStop: "Parar narração",
    a11yNarrateUnsupported: "Seu navegador não tem suporte para narração de voz.",
    navMentorias: "mentorias",
    sectionTagMentorias: "mentorias",
    mentoriasHeading: "E-books curtos sobre o ofício",
    mentoriasNote: "Passo a passo do que aprendi na prática, do básico ao avançado. Leia na tela ou ouça em áudio.",
    trackExperience: "Experiência profissional", trackEducation: "Formação",
    tl6H: "Ohio University — Strategic Marketing Management", tl6P: "Certificação internacional",
    tl7H: "Ohio University — Business English", tl7P: "Certificação internacional",
    levelBasic: "Básico", levelIntermediate: "Intermediário", levelAdvanced: "Avançado",
    bookChapters: "capítulos", bookMinutes: "min de leitura",
    readerClose: "Fechar o leitor", readerToc: "Capítulos",
    readerPrev: "Anterior", readerNext: "Próximo",
    readerPrevAria: "Capítulo anterior", readerNextAria: "Próximo capítulo",
    readerAudioPlay: "Ouvir", readerAudioPause: "Pausar", readerAudioResume: "Retomar", readerAudioStop: "Parar o áudio",
    readerProgress: "Capítulo {c} de {t}",
    readerLangNote: "Os e-books estão disponíveis apenas em português. O áudio também é narrado em português.",
    annBookOpen: "Leitor aberto:", annChapter: "Capítulo:",
    annAudioStart: "Audiobook iniciado.", annAudioStop: "Audiobook encerrado.", annBookEnd: "Fim do e-book.",
    notFoundHeading: "Essa página não existe.",
    notFoundText: "O endereço pode ter mudado. Os cases, a seção sobre e as mentorias continuam no menu acima.",
    notFoundCta: "Voltar ao início",
    a11yLangGroup: "Seletor de idioma", a11yMainNav: "Navegação principal", a11yHero: "Introdução",
    a11yToolbar: "Ferramentas de acessibilidade",
    a11yTextSizeOn: "Aumentar o tamanho do texto", a11yTextSizeOff: "Voltar ao tamanho normal do texto",
    a11yNarratePause: "Pausar narração", a11yNarrateResume: "Retomar narração",
    a11yMenuOpen: "Abrir menu de navegação", a11yMenuClose: "Fechar menu de navegação",
    copyLabel: "copiar", copyDone: "copiado",
    annContrastOn: "Alto contraste ativado.", annContrastOff: "Alto contraste desativado.",
    annTextOn: "Texto ampliado.", annTextOff: "Texto no tamanho normal.",
    annNarrateStart: "Narração iniciada.", annNarrateStop: "Narração encerrada.",
    annNarratePause: "Narração pausada.", annNarrateResume: "Narração retomada.",
    annNarrateEnd: "Fim da narração.",
    annCopied: "E-mail copiado para a área de transferência.",
    annCopyFail: "Não foi possível copiar. Selecione o e-mail manualmente.",
    annLang: "Idioma alterado para Português.",
    annSection: "Lendo:"
  },
  en: {
    sectionTagCases: "case studies",
    casesHeading: "Projects that back this up",
    casesNote: "Terminal software for Ger7, the same base under two brands, and Sicoob's internal acquiring platforms.",
    labelProblem: "Problem",
    labelAction: "My role",
    labelResult: "Outcome",
    c1Id: "CASE · GER7-01",
    c1Title: "Ger7 — the launcher and app store that run inside the terminal",
    c1Sub: "Ger7 Sistemas · Android POS · terminal software",
    c1Tag1: "Design System",
    c1Tag2: "Android POS",
    c1Tag3: "Launcher &amp; Store",
    c1Problem: "The terminal reaches the merchant as generic hardware running plain Android. Without a layer of its own, the device behaves like a tablet: the merchant gets lost in system settings that aren't theirs, and every app in the ecosystem needs a technician holding the device to be installed.",
    c1Action: "I designed the software layer that sits between Android and the merchant — the terminal's launcher and app store — treating the device as a product rather than a generic box with loose apps on it.",
    c1Li1: "Launcher with widgets, control centre and device settings",
    c1Li2: "Technician mode behind authentication, separated from the merchant's use",
    c1Li3: "Ger7 Store with catalogue, search, app detail and updates on the terminal itself",
    c1Li4: "Components, icons and typography shared between launcher and store",
    c1Result: "The terminal gets a face of its own and a clear path: the merchant finds payments, apps and settings in the same place, and the field team has a separate technical door — without needing physical access to install or update an app.",
    c1Caption: "Nine screens from the launcher and the Ger7 Store. Click any of them to browse the full gallery.",
    c2Id: "CASE · MULTI-02",
    c2Title: "POS7 and Sipag — one product base under two brands",
    c2Sub: "Ger7 and Sicoob · white-label · same terminal line",
    c2Tag1: "White-label",
    c2Tag2: "Multi-brand",
    c2Tag3: "Controlled reskin",
    c2Problem: "The same capture software had to launch under the identity of different institutions — each with its own brand, colour, accepted card schemes and positioning — without rebuilding the interface from scratch for every new partner.",
    c2Action: "I kept in a single base what should not vary: the screen structure, the information hierarchy and the path to completing a sale. Everything that changes between partners — colour, logo, typography and the set of card schemes — went into a brand layer.",
    c2Result: "POS7 and Sipag are the same product under two brands. Whoever operates one can operate the other, because what changes is the skin, not the path — and launching one more brand stops being a project from zero.",
    c2Caption: "The same home screen, two owners. On the left POS7 in the Ger7 identity; on the right Sipag, from Sicoob. Structure, hierarchy and flow are identical.",
    c3Id: "CASE · SICOOB-03",
    c3Title: "Sicoob — terminal logistics and merchant lifecycle",
    c3Sub: "Sicoob Confederação · Sisbr · internal acquiring platforms",
    c3Tag1: "B2B Platform",
    c3Tag2: "Approval flow",
    c3Tag3: "Research &amp; Testing",
    c3Problem: "The network of credit cooperatives needed to plan, distribute and approve payment terminals, and also to see which merchants had stopped transacting. Both processes were fragmented across spreadsheets, manual approvals and separate teams.",
    c3Action: "I led the end-to-end design of two modules inside Sisbr, covering both the terminal's cycle and the merchant's cycle:",
    c3Li1: "Consumption planning and stock per cooperative and service point",
    c3Li2: "Cross-team approval workflow, with traceability of the request",
    c3Li3: "Inactivity panel banded by number of days, to act before losing the merchant",
    c3Li4: "Parameter configuration, service orders and reporting",
    c3Result: "Two single flows, tested with operational users, that replace manual steps with guided in-product decisions — with traceability from request to final approval and visibility of inactivity while there is still time to react.",
    c3Caption: "Two internal Sisbr platforms. Click to view them full size.",
    grpLauncher: "Terminal launcher",
    grpStore: "Ger7 Store",
    grpMarcas: "Same screen, two brands",
    grpSisbr: "Sisbr · internal modules",
    sgWidgets: "Widgets",
    sgControles: "Control centre",
    sgTecnico: "Technician access",
    sgConfig: "Settings",
    sgStoreHome: "Store · home",
    sgBusca: "Search",
    sgApp: "App detail",
    sgMenu: "Menu",
    sgSobre: "About",
    sgPos7: "POS7 · Ger7",
    sgSipag: "Sipag · Sicoob",
    sgLogistica: "Logistics · panel",
    sgCiclo: "Lifecycle · inactivity",
    sgWidgetsAlt: "Ger7 launcher home with clock, weather, humidity and daily forecast widgets over the terminal wallpaper.",
    sgControlesAlt: "Ger7 launcher control centre: Wi-Fi, Bluetooth, screen timeout, brightness and volume in quick reach.",
    sgTecnicoAlt: "Technician authentication modal over the control centre, separating technician access from merchant access.",
    sgConfigAlt: "Device settings list in the Ger7 launcher: network, data, VPN, default launcher, status bar, display and printer.",
    sgStoreHomeAlt: "Ger7 Store home with the terminal app catalogue and the install, update and uninstall states.",
    sgBuscaAlt: "App search in the Ger7 Store, with the terminal keyboard and an empty state prompting the user to type.",
    sgAppAlt: "App detail in the Ger7 Store: version, size, update date, screen previews and description.",
    sgMenuAlt: "Ger7 Store menu with dark mode, language selection and access to about and frequently asked questions.",
    sgSobreAlt: "Ger7 Store About screen, with app information, support channels and the technician entry point.",
    sgPos7Alt: "POS7 home screen in the Ger7 identity, in orange: accepted card schemes, payment and menu shortcuts, Pix, reprint and settings.",
    sgSipagAlt: "The same home screen under Sicoob's Sipag brand, in green and blue: amount keypad, the institution's card schemes and after-sales.",
    sgLogisticaAlt: "Logistics Management control panel in Sisbr: filters by central and cooperative, stock indicators and a table per service point.",
    sgCicloAlt: "Lifecycle Management inactivity panel in Sisbr: inactivity bands by period and a list of merchants that stopped transacting.",
    minorLabel: "Other work in the same ecosystem",
    minor1K: "Mobbuy",
    minor1H: "Mobile capture terminals",
    minor1P: "Visual identity and screens for a portable terminal, applied to a new hardware line.",
    minor2K: "Ger7 Lib",
    minor2H: "Component library",
    minor2P: "Shared base used by the launcher, the store and the payment front end.",
    minor3K: "Tap2Pay",
    minor3H: "Contactless payment",
    minor3P: "Contactless capture front end built on the same component base as the terminals.",
    lightboxLabel: "Project screen gallery",
    lightboxOpen: "Open the original image in a new tab",
    lightboxClose: "Close the gallery",
    lightboxPrev: "Previous screen",
    lightboxNext: "Next screen",
    lightboxOf: "Screen {c} of {t}.",
    wordmark: "Mateus Cherem — Senior Product Designer",
    navImpact: "impact", navCases: "case studies", navAbout: "about", navContact: "contact",
    heroH1: 'Design that has to <span class="accent">hold up in production</span>, not just in the deck.',
    heroLede: "31 years old, based in São Paulo. For 6+ years I've designed payment systems and terminal logistics platforms — from wireframe to shipped component, always close to whoever owns the roadmap.",
    ctaPrimary: "Get in touch", ctaSecondary: "See the case studies →",
    terminalLabel: "session · profile.log",
    tLine0: "&gt; loading profile...",
    tLine5: 'current   <span class="hl">Sicoob</span> — Payment Systems',
    tLine6: "since   nov/2024 (4y5m on file)",
    tLine9: "education  MBA USP/Esalq — Management &",
    tLine10: "           AI · Design, IMT Mauá",
    tLine12: 'focus    <span class="hl">design systems</span>, products',
    tLine13: "         multi-platform, leadership",
    tLine14: "         of design squads",
    tLine17: 'end of record <span class="cursor"></span>',
    sectionTagImpact: "impact",
    highlightsHeading: "What I bring into a squad on day one",
    highlightsNote: "Areas where my work changes the outcome of the product, not just the screen.",
    h1Tag: "end to end", h1Title: "From the problem to the shipped component",
    h1Text: "I run research, mapping and journeys through to high-fidelity, navigable prototypes — and I stay close to implementation so the result doesn't get lost on the way to engineering.",
    h2Tag: "design systems", h2Title: "Consistency that scales across squads",
    h2Text: "I've built and curated design systems and style guides used by multiple teams and products at once — including a multi-brand foundation reused across different commercial partners.",
    h3Tag: "business", h3Title: "Close to whoever owns the roadmap",
    h3Text: "I work side by side with POs and PMs to balance technical feasibility, product strategy and experience — translating brand positioning into interface decisions.",
    sectionTagAbout: "about", aboutHeading: "How I think about design, teams and product",
    aboutP1: "I started in branding, at <strong>Neurona Marcas Inteligentes</strong>, learning how a brand translates into experience before it ever becomes an interface. That still shapes how I think about product today: every UI decision carries a positioning behind it, even when no one is looking at it directly.",
    aboutP2: "I spent time at <strong>4BIO Medicamentos Especiais</strong>, part of Grupo Raia Drogasil, helping expand new digital businesses alongside technology teams. Today, at <strong>Sicoob</strong>, I lead end-to-end projects in Payment Systems and Digital Ecosystems — from research to validated prototype, always in direct contact with PMs and POs.",
    aboutP3: "I'm currently pursuing an <strong>MBA in Digital Business and AI Management at USP/Esalq</strong>, because I believe the next step up in design seniority doesn't come from more polished UI alone — it comes from understanding the business, and the tools that are changing how products get built.",
    principle1H: "Design is a business decision, not just a screen",
    principle1P: "A beautiful interface that doesn't solve the right approval workflow, or doesn't fit the brand's strategy, isn't good design — it's an expensive mockup.",
    principle2H: "System before screen",
    principle2P: "I'd rather solve the component that repeats a hundred times than the one beautiful unique screen. That's where consistency — and team speed — is actually won.",
    principle3H: "Close to whoever decides",
    principle3P: "Fast prototyping only matters if the right decision happens with the right person in the room. I build that access deliberately, not as a matter of project luck.",
    principle4H: "Curation is leadership",
    principle4P: "Keeping a design system alive is quiet leadership work: saying no to exceptions, so that the right exception, when it comes, still makes sense.",
    tl1H: "MBA USP/Esalq — Digital Business &amp; AI Management", tl1P: "In progress",
    tl2H: "Sicoob Confederação — Senior Product Designer", tl2P: "Acquiring, Payment Systems and Terminal Logistics",
    tl3H: "4BIO Medicamentos Especiais (Grupo Raia Drogasil) — Mid-level Product Designer", tl3P: "Branding and new digital business expansion",
    tl4H: "Neurona Marcas Inteligentes — Jr. Designer", tl4P: "São Paulo and region",
    tl5H: "IMT Mauá — BA in Design", tl5P: "Instituto Mauá de Tecnologia",
    footerHeading: "A selection of the work I've been doing in payments, terminals and design systems.",
    footerResume: "download résumé (pdf)",
    footerCopyright: "© 2026 Mateus Cherem", footerLocation: "São Paulo, Brazil",
    a11ySkipLink: "Skip to main content",
    a11yContrastOn: "Turn on high contrast", a11yContrastOff: "Turn off high contrast",
    a11yNarrateStart: "Listen to the page content", a11yNarrateStop: "Stop narration",
    a11yNarrateUnsupported: "Your browser doesn't support voice narration.",
    navMentorias: "mentoring",
    sectionTagMentorias: "mentoring",
    mentoriasHeading: "Short e-books about the craft",
    mentoriasNote: "Step by step from what I learned in practice, from basics to advanced. Read on screen or listen to it.",
    trackExperience: "Professional experience", trackEducation: "Education",
    tl6H: "Ohio University — Strategic Marketing Management", tl6P: "International certificate",
    tl7H: "Ohio University — Business English", tl7P: "International certificate",
    levelBasic: "Beginner", levelIntermediate: "Intermediate", levelAdvanced: "Advanced",
    bookChapters: "chapters", bookMinutes: "min read",
    readerClose: "Close the reader", readerToc: "Chapters",
    readerPrev: "Previous", readerNext: "Next",
    readerPrevAria: "Previous chapter", readerNextAria: "Next chapter",
    readerAudioPlay: "Listen", readerAudioPause: "Pause", readerAudioResume: "Resume", readerAudioStop: "Stop the audio",
    readerProgress: "Chapter {c} of {t}",
    readerLangNote: "The e-books are available in Portuguese only. The audio is narrated in Portuguese as well.",
    annBookOpen: "Reader opened:", annChapter: "Chapter:",
    annAudioStart: "Audiobook started.", annAudioStop: "Audiobook stopped.", annBookEnd: "End of the e-book.",
    notFoundHeading: "This page does not exist.",
    notFoundText: "The address may have changed. Case studies, about and mentoring are still in the menu above.",
    notFoundCta: "Back to the start",
    a11yLangGroup: "Language selector", a11yMainNav: "Main navigation", a11yHero: "Introduction",
    a11yToolbar: "Accessibility tools",
    a11yTextSizeOn: "Increase text size", a11yTextSizeOff: "Reset text to normal size",
    a11yNarratePause: "Pause narration", a11yNarrateResume: "Resume narration",
    a11yMenuOpen: "Open navigation menu", a11yMenuClose: "Close navigation menu",
    copyLabel: "copy", copyDone: "copied",
    annContrastOn: "High contrast on.", annContrastOff: "High contrast off.",
    annTextOn: "Text enlarged.", annTextOff: "Text back to normal size.",
    annNarrateStart: "Narration started.", annNarrateStop: "Narration stopped.",
    annNarratePause: "Narration paused.", annNarrateResume: "Narration resumed.",
    annNarrateEnd: "End of narration.",
    annCopied: "Email copied to clipboard.",
    annCopyFail: "Copy failed. Please select the email manually.",
    annLang: "Language changed to English.",
    annSection: "Now reading:"
  },
  es: {
    sectionTagCases: "casos",
    casesHeading: "Proyectos que sostienen esto",
    casesNote: "Software de terminal para Ger7, la misma base bajo dos marcas y las plataformas internas de adquirencia del Sicoob.",
    labelProblem: "Problema",
    labelAction: "Mi rol",
    labelResult: "Resultado",
    c1Id: "CASE · GER7-01",
    c1Title: "Ger7 — el launcher y la tienda de aplicaciones que corren dentro de la terminal",
    c1Sub: "Ger7 Sistemas · Android POS · software de terminal",
    c1Tag1: "Design System",
    c1Tag2: "Android POS",
    c1Tag3: "Launcher &amp; Store",
    c1Problem: "La terminal llega al comercio como hardware genérico con Android puro. Sin una capa propia, el aparato se comporta como una tableta: el comerciante se pierde entre ajustes de sistema que no son suyos, y cada aplicación del ecosistema depende de un técnico con el equipo en la mano para instalarse.",
    c1Action: "Diseñé la capa de software que está entre Android y el comerciante — el launcher y la tienda de aplicaciones de la terminal — tratando el aparato como un producto y no como un dispositivo genérico con apps sueltas.",
    c1Li1: "Launcher con widgets, centro de control y ajustes del aparato",
    c1Li2: "Modo técnico protegido por autenticación, separado del uso del comerciante",
    c1Li3: "Ger7 Store con catálogo, búsqueda, ficha de aplicación y actualización en la propia terminal",
    c1Li4: "Componentes, iconos y tipografía compartidos entre launcher y tienda",
    c1Result: "La terminal gana cara propia y un camino claro: el comerciante encuentra pago, aplicaciones y ajustes en el mismo lugar, y el equipo de campo tiene una puerta técnica aparte — sin depender de acceso físico para instalar o actualizar una aplicación.",
    c1Caption: "Nueve pantallas del launcher y de la Ger7 Store. Haz clic en cualquiera para recorrer la galería completa.",
    c2Id: "CASE · MULTI-02",
    c2Title: "POS7 y Sipag — la misma base de producto bajo dos marcas",
    c2Sub: "Ger7 y Sicoob · white-label · misma línea de terminales",
    c2Tag1: "White-label",
    c2Tag2: "Multimarca",
    c2Tag3: "Reskin controlado",
    c2Problem: "El mismo software de captura debía lanzarse bajo la identidad de instituciones distintas — cada una con marca, color, tarjetas aceptadas y posicionamiento propios — sin rehacer la interfaz desde cero con cada socio.",
    c2Action: "Mantuve en una base única lo que no debía variar: la estructura de la pantalla, la jerarquía de la información y el camino hasta cerrar una venta. Todo lo que cambia entre socios — color, logo, tipografía y el conjunto de tarjetas — quedó en una capa de marca.",
    c2Result: "POS7 y Sipag son el mismo producto bajo dos marcas. Quien opera uno puede operar el otro, porque lo que cambia es la piel y no el camino — y lanzar una marca más deja de ser un proyecto desde cero.",
    c2Caption: "La misma pantalla de inicio, dos dueños. A la izquierda POS7 con la identidad Ger7; a la derecha Sipag, del Sicoob. Estructura, jerarquía y flujo son idénticos.",
    c3Id: "CASE · SICOOB-03",
    c3Title: "Sicoob — logística de terminales y ciclo de vida del establecimiento",
    c3Sub: "Sicoob Confederação · Sisbr · plataformas internas de adquirencia",
    c3Tag1: "Plataforma B2B",
    c3Tag2: "Flujo de aprobación",
    c3Tag3: "Investigación &amp; Test",
    c3Problem: "La red de cooperativas necesitaba planificar, distribuir y aprobar terminales de pago, y también ver qué establecimientos dejaron de transaccionar. Ambos procesos vivían fragmentados entre hojas de cálculo, aprobaciones manuales y equipos distintos.",
    c3Action: "Lideré el diseño de punta a punta de dos módulos dentro del Sisbr, cubriendo tanto el ciclo de la terminal como el del establecimiento:",
    c3Li1: "Planificación de consumo y stock por cooperativa y punto de atención",
    c3Li2: "Flujo de aprobación entre equipos, con trazabilidad del pedido",
    c3Li3: "Panel de inactividad por franjas de días, para actuar antes de perder el establecimiento",
    c3Li4: "Configuración de parámetros, órdenes de servicio y reporte",
    c3Result: "Dos flujos únicos, probados con los usuarios operativos, que sustituyen pasos manuales por decisiones guiadas dentro del producto — con trazabilidad del pedido hasta la aprobación final y visibilidad de la inactividad mientras aún hay tiempo de reaccionar.",
    c3Caption: "Dos plataformas internas del Sisbr. Haz clic para verlas a tamaño real.",
    grpLauncher: "Launcher de la terminal",
    grpStore: "Ger7 Store",
    grpMarcas: "Misma pantalla, dos marcas",
    grpSisbr: "Sisbr · módulos internos",
    sgWidgets: "Widgets",
    sgControles: "Centro de control",
    sgTecnico: "Acceso técnico",
    sgConfig: "Ajustes",
    sgStoreHome: "Store · inicio",
    sgBusca: "Búsqueda",
    sgApp: "Ficha de la app",
    sgMenu: "Menú",
    sgSobre: "Acerca de",
    sgPos7: "POS7 · Ger7",
    sgSipag: "Sipag · Sicoob",
    sgLogistica: "Logística · panel",
    sgCiclo: "Ciclo de vida · inactividad",
    sgWidgetsAlt: "Inicio del launcher Ger7 con widgets de reloj, clima, humedad y pronóstico del día sobre el fondo de la terminal.",
    sgControlesAlt: "Centro de control del launcher Ger7: Wi-Fi, Bluetooth, tiempo de pantalla, brillo y volumen en acceso rápido.",
    sgTecnicoAlt: "Modal de autenticación técnica sobre el centro de control, separando el acceso del técnico del acceso del comerciante.",
    sgConfigAlt: "Lista de ajustes del aparato en el launcher Ger7: red, datos, VPN, launcher por defecto, barra de estado, pantalla e impresora.",
    sgStoreHomeAlt: "Inicio de la Ger7 Store con el catálogo de aplicaciones de la terminal y los estados instalar, actualizar y desinstalar.",
    sgBuscaAlt: "Búsqueda de aplicaciones en la Ger7 Store, con el teclado de la terminal y el estado vacío invitando a escribir.",
    sgAppAlt: "Ficha de aplicación en la Ger7 Store: versión, tamaño, fecha de actualización, vista previa y descripción.",
    sgMenuAlt: "Menú de la Ger7 Store con modo oscuro, selección de idioma y acceso a acerca de y preguntas frecuentes.",
    sgSobreAlt: "Pantalla Acerca de de la Ger7 Store, con información de la aplicación, canales de soporte y el acceso del técnico.",
    sgPos7Alt: "Pantalla de inicio del POS7 con la identidad Ger7, en naranja: tarjetas aceptadas, accesos de pago y menú, Pix, reimpresión y ajustes.",
    sgSipagAlt: "La misma pantalla de inicio bajo la marca Sipag, del Sicoob, en verde y azul: teclado de importe, tarjetas de la institución y posventa.",
    sgLogisticaAlt: "Panel de Control de la Gestión de Logística en Sisbr: filtros por central y cooperativa, indicadores de stock y tabla por punto de atención.",
    sgCicloAlt: "Panel de Inactividad de la Gestión de Ciclo de Vida en Sisbr: franjas de inactividad por período y lista de establecimientos sin transaccionar.",
    minorLabel: "Otros frentes en el mismo ecosistema",
    minor1K: "Mobbuy",
    minor1H: "Terminales móviles de captura",
    minor1P: "Identidad visual y pantallas de terminal portátil, aplicadas a una nueva línea de hardware.",
    minor2K: "Ger7 Lib",
    minor2H: "Biblioteca de componentes",
    minor2P: "Base compartida usada por el launcher, la tienda y el frente de pago.",
    minor3K: "Tap2Pay",
    minor3H: "Pago sin contacto",
    minor3P: "Frente de captura sin contacto sobre la misma base de componentes de las terminales.",
    lightboxLabel: "Galería de pantallas del proyecto",
    lightboxOpen: "Abrir la imagen original en una pestaña nueva",
    lightboxClose: "Cerrar la galería",
    lightboxPrev: "Pantalla anterior",
    lightboxNext: "Pantalla siguiente",
    lightboxOf: "Pantalla {c} de {t}.",
    wordmark: "Mateus Cherem — Senior Product Designer",
    navImpact: "impacto", navCases: "casos", navAbout: "sobre mí", navContact: "contacto",
    heroH1: 'Diseño que tiene que <span class="accent">funcionar en producción</span>, no solo en la presentación.',
    heroLede: "31 años, São Paulo. Hace más de 6 años diseño sistemas de pago y logística de terminales — del wireframe al componente en producción, siempre cerca de quien decide el roadmap.",
    ctaPrimary: "Hablemos", ctaSecondary: "Ver los casos →",
    terminalLabel: "sesión · perfil.log",
    tLine0: "&gt; cargando perfil...",
    tLine5: 'actual   <span class="hl">Sicoob</span> — Sist. de Pagos',
    tLine6: "desde   nov/2024 (4a5m en el registro)",
    tLine9: "formación  MBA USP/Esalq — Gestión &",
    tLine10: "           IA · Diseño, IMT Mauá",
    tLine12: 'foco    <span class="hl">design systems</span>, productos',
    tLine13: "        multiplataforma, liderazgo",
    tLine14: "        de equipos de diseño",
    tLine17: 'fin del registro <span class="cursor"></span>',
    sectionTagImpact: "impacto",
    highlightsHeading: "Lo que aporto a un equipo desde el primer día",
    highlightsNote: "Áreas donde mi trabajo cambia el resultado del producto, no solo la pantalla.",
    h1Tag: "de punta a punta", h1Title: "Del problema al componente en producción",
    h1Text: "Llevo la investigación, el mapeo y el journey hasta prototipos navegables de alta fidelidad — y acompaño la implementación para que el resultado no se pierda en la entrega al equipo de desarrollo.",
    h2Tag: "design systems", h2Title: "Consistencia que escala entre equipos",
    h2Text: "Estructuré y curé design systems y guías de estilo usados por múltiples equipos y productos a la vez — incluyendo una base multimarca reutilizada por distintos socios comerciales.",
    h3Tag: "negocio", h3Title: "Cerca de quien decide el roadmap",
    h3Text: "Trabajo codo a codo con POs y PMs para equilibrar viabilidad técnica, estrategia de producto y experiencia — traduciendo el posicionamiento de marca en decisiones de interfaz.",
    sectionTagAbout: "sobre mí", aboutHeading: "Cómo pienso el diseño, los equipos y el producto",
    aboutP1: "Empecé en branding, en <strong>Neurona Marcas Inteligentes</strong>, entendiendo cómo una marca se traduce en experiencia antes incluso de convertirse en interfaz. Eso todavía moldea cómo pienso el producto hoy: toda decisión de UI carga un posicionamiento detrás, aunque nadie lo esté mirando directamente.",
    aboutP2: "Pasé por <strong>4BIO Medicamentos Especiais</strong>, dentro del Grupo Raia Drogasil, ayudando a expandir nuevos negocios digitales junto a equipos de tecnología. Hoy, en <strong>Sicoob</strong>, lidero proyectos de punta a punta en Sistemas de Pago y Ecosistemas Digitales — de la investigación al prototipo validado, siempre en contacto directo con PMs y POs.",
    aboutP3: "Estoy cursando el <strong>MBA USP/Esalq en Gestión de Negocios Digitales e Inteligencia Artificial</strong>, porque creo que el próximo salto de seniority en diseño no viene solo de una UI más refinada — viene de entender mejor el negocio y las herramientas que están cambiando cómo se construyen los productos.",
    principle1H: "El diseño es una decisión de negocio, no solo de pantalla",
    principle1P: "Una interfaz bonita que no resuelve la aprobación correcta, o que no encaja en la estrategia de marca, no es buen diseño — es un mockup caro.",
    principle2H: "Sistema antes que pantalla",
    principle2P: "Prefiero resolver el componente que se repite cien veces antes que la pantalla única y bonita. Ahí es donde realmente se gana consistencia — y velocidad de equipo.",
    principle3H: "Cerca de quien decide",
    principle3P: "Prototipar rápido solo importa si la decisión correcta ocurre con la persona correcta en la sala. Cultivo ese acceso de forma deliberada, no como suerte de proyecto.",
    principle4H: "Curar es liderar",
    principle4P: "Mantener vivo un design system es un trabajo de liderazgo silencioso: decir que no a las excepciones, para que la excepción correcta, cuando llegue, todavía tenga sentido.",
    tl1H: "MBA USP/Esalq — Gestión de Negocios Digitales e IA", tl1P: "En curso",
    tl2H: "Sicoob Confederação — Senior Product Designer", tl2P: "Adquirencia, Sistemas de Pago y Logística de Terminales",
    tl3H: "4BIO Medicamentos Especiais (Grupo Raia Drogasil) — Product Designer Semisenior", tl3P: "Branding y expansión de nuevos negocios digitales",
    tl4H: "Neurona Marcas Inteligentes — Diseñador Jr.", tl4P: "São Paulo y alrededores",
    tl5H: "IMT Mauá — Licenciatura en Diseño", tl5P: "Instituto Mauá de Tecnologia",
    footerHeading: "Una selección del trabajo que vengo haciendo en pagos, terminales y design systems.",
    footerResume: "descargar CV (pdf)",
    footerCopyright: "© 2026 Mateus Cherem", footerLocation: "São Paulo, Brasil",
    a11ySkipLink: "Saltar al contenido principal",
    a11yContrastOn: "Activar alto contraste", a11yContrastOff: "Desactivar alto contraste",
    a11yNarrateStart: "Escuchar el contenido de la página", a11yNarrateStop: "Detener narración",
    a11yNarrateUnsupported: "Tu navegador no admite narración por voz.",
    navMentorias: "mentorías",
    sectionTagMentorias: "mentorías",
    mentoriasHeading: "E-books cortos sobre el oficio",
    mentoriasNote: "Paso a paso de lo que aprendí en la práctica, de lo básico a lo avanzado. Lee en pantalla o escúchalo.",
    trackExperience: "Experiencia profesional", trackEducation: "Formación",
    tl6H: "Ohio University — Strategic Marketing Management", tl6P: "Certificación internacional",
    tl7H: "Ohio University — Business English", tl7P: "Certificación internacional",
    levelBasic: "Básico", levelIntermediate: "Intermedio", levelAdvanced: "Avanzado",
    bookChapters: "capítulos", bookMinutes: "min de lectura",
    readerClose: "Cerrar el lector", readerToc: "Capítulos",
    readerPrev: "Anterior", readerNext: "Siguiente",
    readerPrevAria: "Capítulo anterior", readerNextAria: "Capítulo siguiente",
    readerAudioPlay: "Escuchar", readerAudioPause: "Pausar", readerAudioResume: "Reanudar", readerAudioStop: "Detener el audio",
    readerProgress: "Capítulo {c} de {t}",
    readerLangNote: "Los e-books están disponibles solo en portugués. El audio también se narra en portugués.",
    annBookOpen: "Lector abierto:", annChapter: "Capítulo:",
    annAudioStart: "Audiolibro iniciado.", annAudioStop: "Audiolibro detenido.", annBookEnd: "Fin del e-book.",
    notFoundHeading: "Esta página no existe.",
    notFoundText: "La dirección puede haber cambiado. Los casos, sobre mí y las mentorías siguen en el menú de arriba.",
    notFoundCta: "Volver al inicio",
    a11yLangGroup: "Selector de idioma", a11yMainNav: "Navegación principal", a11yHero: "Introducción",
    a11yToolbar: "Herramientas de accesibilidad",
    a11yTextSizeOn: "Aumentar el tamaño del texto", a11yTextSizeOff: "Volver al tamaño normal del texto",
    a11yNarratePause: "Pausar narración", a11yNarrateResume: "Reanudar narración",
    a11yMenuOpen: "Abrir menú de navegación", a11yMenuClose: "Cerrar menú de navegación",
    copyLabel: "copiar", copyDone: "copiado",
    annContrastOn: "Alto contraste activado.", annContrastOff: "Alto contraste desactivado.",
    annTextOn: "Texto ampliado.", annTextOff: "Texto en tamaño normal.",
    annNarrateStart: "Narración iniciada.", annNarrateStop: "Narración detenida.",
    annNarratePause: "Narración pausada.", annNarrateResume: "Narración reanudada.",
    annNarrateEnd: "Fin de la narración.",
    annCopied: "Correo copiado al portapapeles.",
    annCopyFail: "No se pudo copiar. Selecciona el correo manualmente.",
    annLang: "Idioma cambiado a Español.",
    annSection: "Leyendo:"
  }
};
/* ============ APP STATE ============ */
const STORAGE_KEY   = "mc_portfolio_lang";
const CONTRAST_KEY  = "mc_portfolio_contrast";
const TEXTSIZE_KEY  = "mc_portfolio_textsize";
const supportedLangs = ["pt","en","es"];
const langNames = { pt: "Português", en: "English", es: "Español" };
const speechLangCodes = { pt: "pt-BR", en: "en-US", es: "es-ES" };
let currentLang = "pt";
let highContrastOn = false;
let largeTextOn = false;
const $ = (sel) => document.querySelector(sel);
const dict = () => translations[currentLang];
/* ============ LIVE REGION ============
   Toggles are useless to a screen-reader user if nothing confirms
   they fired. Every state change routes through here. */
const liveRegion = $("#a11y-status");
let liveTimer = null;
function announce(message){
  if(!liveRegion) return;
  clearTimeout(liveTimer);
  liveRegion.textContent = "";
  // a beat of empty content forces re-announcement of repeated strings
  liveTimer = setTimeout(() => { liveRegion.textContent = message; }, 60);
}
/* ============ LANGUAGE ENGINE ============ */
function applyLanguage(lang, opts = {}){
  if(!supportedLangs.includes(lang)) lang = "pt";
  const changed = lang !== currentLang;
  currentLang = lang;
  const d = dict();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(d[key] === undefined) return;
    // innerHTML on an SVG node parses as SVG markup — use text there instead.
    if(el.namespaceURI === "http://www.w3.org/2000/svg") el.textContent = d[key];
    else el.innerHTML = d[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if(d[key] !== undefined) el.setAttribute("aria-label", d[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if(d[key] !== undefined) el.setAttribute("alt", d[key]);
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const btnLang = btn.getAttribute("data-lang");
    const isActive = btnLang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    btn.setAttribute("tabindex", isActive ? "0" : "-1");
    btn.setAttribute("aria-label", isActive
      ? `${langNames[btnLang]} (${d.a11yLangGroup})`
      : (btnLang === "pt" ? "Mudar para Português"
        : btnLang === "en" ? "Switch to English"
        : "Cambiar a Español"));
  });
  const set = (sel, attr, val) => { const el = $(sel); if(el) el.setAttribute(attr, val); };
  set(".status-nav", "aria-label", d.a11yMainNav);
  set(".mobile-nav", "aria-label", d.a11yMainNav);
  set(".lang-switch", "aria-label", d.a11yLangGroup);
  set(".hero", "aria-label", d.a11yHero);
  set("#a11y-toolbar", "aria-label", d.a11yToolbar);
  document.querySelectorAll(".copy-btn").forEach(btn => {
    if(!btn.classList.contains("done")) btn.textContent = d.copyLabel;
  });
  syncContrastButton();
  syncTextSizeButton();
  syncNarrateButtons();
  syncMenuButton();
  renderLibrary();
  if(reader.book){
    readerEls.level.textContent = d[reader.book.levelKey];
    renderChapter(reader.chapter, { silent: true });
    syncBookAudioButtons();
  }
  document.documentElement.lang = lang === "pt" ? "pt-BR" : (lang === "en" ? "en-US" : "es-ES");
  localStorage.setItem(STORAGE_KEY, lang);
  restartTerminalTypewriter();
  // A voice mid-sentence in the old language would be nonsense — reset it.
  if(narration.state !== "idle") stopNarration({ silent: true });
  if(changed && !opts.silent) announce(d.annLang);
}
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});
/* Roving arrow-key navigation inside the language group (WAI-ARIA toolbar pattern) */
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
langButtons.forEach((btn, idx) => {
  btn.addEventListener("keydown", (e) => {
    let next = null;
    if(e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % langButtons.length;
    else if(e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + langButtons.length) % langButtons.length;
    else if(e.key === "Home") next = 0;
    else if(e.key === "End") next = langButtons.length - 1;
    if(next === null) return;
    e.preventDefault();
    langButtons[next].focus();
  });
});
/* ============ HIGH CONTRAST MODE ============ */
function syncContrastButton(){
  const btn = $("#contrast-btn");
  if(!btn) return;
  const label = highContrastOn ? dict().a11yContrastOff : dict().a11yContrastOn;
  btn.setAttribute("aria-label", label);
  btn.setAttribute("title", label);
  btn.setAttribute("aria-pressed", highContrastOn ? "true" : "false");
}
function setHighContrast(on, opts = {}){
  highContrastOn = on;
  document.documentElement.classList.toggle("high-contrast", on);
  document.documentElement.classList.add("contrast-user-set");
  localStorage.setItem(CONTRAST_KEY, on ? "1" : "0");
  syncContrastButton();
  if(!opts.silent) announce(on ? dict().annContrastOn : dict().annContrastOff);
}
$("#contrast-btn").addEventListener("click", () => setHighContrast(!highContrastOn));
/* ============ TEXT SIZE ============ */
function syncTextSizeButton(){
  const btn = $("#textsize-btn");
  if(!btn) return;
  const label = largeTextOn ? dict().a11yTextSizeOff : dict().a11yTextSizeOn;
  btn.setAttribute("aria-label", label);
  btn.setAttribute("title", label);
  btn.setAttribute("aria-pressed", largeTextOn ? "true" : "false");
  const glyph = btn.querySelector(".glyph");
  if(glyph) glyph.textContent = largeTextOn ? "A-" : "A+";
}
function setLargeText(on, opts = {}){
  largeTextOn = on;
  document.documentElement.style.setProperty("--font-scale", on ? "1.25" : "1");
  localStorage.setItem(TEXTSIZE_KEY, on ? "1" : "0");
  syncTextSizeButton();
  if(!opts.silent) announce(on ? dict().annTextOn : dict().annTextOff);
}
$("#textsize-btn").addEventListener("click", () => setLargeText(!largeTextOn));
/* ============ NARRATION (TEXT-TO-SPEECH) ============
   Read section by section in short utterances. One long utterance
   is cut off by Chrome after roughly 15 seconds, and it gives the
   listener no way to tell where they are on the page. */
const narration = {
  state: "idle",      // idle | playing | paused
  queue: [],          // [{ el, text }]
  index: 0,
  utterance: null,
  keepAlive: null
};
const supportsSpeech = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
function chunkText(text, max = 180){
  // Split on sentence ends, then regroup so each utterance stays short.
  // Sentinel split instead of a lookbehind: lookbehind throws a parse-time
  // SyntaxError on older Safari, which would take the entire script down.
  const parts = text.replace(/([.!?:;])\s+/g, "$1\u0001").split("\u0001");
  const chunks = [];
  let buffer = "";
  // A single sentence can still be longer than the budget — break it at
  // word boundaries so no utterance ever runs long enough to be cut off.
  const hardSplit = (sentence) => {
    const out = [];
    let line = "";
    sentence.split(/\s+/).forEach(word => {
      if((line + " " + word).trim().length > max && line){
        out.push(line.trim());
        line = word;
      } else {
        line = (line + " " + word).trim();
      }
    });
    if(line.trim()) out.push(line.trim());
    return out;
  };
  parts.forEach(part => {
    hardSplit(part).forEach(piece => {
      if((buffer + " " + piece).trim().length > max && buffer){
        chunks.push(buffer.trim());
        buffer = piece;
      } else {
        buffer = (buffer + " " + piece).trim();
      }
    });
  });
  if(buffer.trim()) chunks.push(buffer.trim());
  return chunks.filter(Boolean);
}
function buildNarrationQueue(){
  const blocks = document.querySelectorAll("#main-content > section, footer#contact");
  const queue = [];
  blocks.forEach(block => {
    const clone = block.cloneNode(true);
    // Terminal chrome and UI affordances are noise when spoken aloud.
    clone.querySelectorAll(".terminal-head, .terminal-foot, .copy-btn, .sr-only, .section-tag, svg")
         .forEach(node => node.remove());
    const raw = clone.textContent
      .replace(/[-–—_=]{3,}/g, " ")   // ASCII rules in the terminal are not words
      .replace(/\s+/g, " ")
      .trim();
    if(!raw) return;
    const heading = block.querySelector("h1, h2");
    const label = heading ? heading.textContent.replace(/\s+/g, " ").trim() : "";
    chunkText(raw).forEach((text, i) => {
      queue.push({ el: block, text, label, isFirstOfBlock: i === 0 });
    });
  });
  return queue;
}
/* Voice quality varies wildly per platform. The old code preferred
   `voice.default`, which on Windows/Chrome resolves to a robotic legacy
   English voice. English now goes through an explicit preference list;
   Portuguese and Spanish keep the previous behaviour, which sounded fine. */
const preferredVoices = {
  "en-us": [
    "Google US English",
    "Microsoft Aria Online (Natural)",
    "Microsoft Jenny Online (Natural)",
    "Microsoft Emma Online (Natural)",
    "Microsoft Ava",
    "Samantha",
    "Ava",
    "Allison",
    "Alex"
  ]
};
function pickVoice(langCode){
  const voices = window.speechSynthesis.getVoices();
  if(!voices.length) return null;
  const norm = v => v.lang.replace("_", "-").toLowerCase();
  const target = langCode.toLowerCase();
  const base = target.split("-")[0];
  const exact = voices.filter(v => norm(v) === target);
  const loose = voices.filter(v => norm(v).startsWith(base));
  const pool = exact.length ? exact : loose;
  if(!pool.length) return null;
  const wanted = preferredVoices[target];
  if(wanted){
    for(const name of wanted){
      const hit = pool.find(v => v.name.toLowerCase().includes(name.toLowerCase()));
      if(hit) return hit;
    }
    // Nothing from the list is installed: neural/remote voices still beat
    // the bundled legacy ones, so reach for those before falling back.
    return pool.find(v => /natural|neural|google/i.test(v.name))
        || pool.find(v => !v.localService)
        || pool[0];
  }
  return pool.find(v => v.default) || pool.find(v => v.localService) || pool[0];
}
function highlightBlock(el){
  document.querySelectorAll(".is-narrating").forEach(n => n.classList.remove("is-narrating"));
  if(!el) return;
  el.classList.add("is-narrating");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
function speakCurrent(){
  if(narration.index >= narration.queue.length){ finishNarration(); return; }
  const item = narration.queue[narration.index];
  const utterance = new SpeechSynthesisUtterance(item.text);
  const langCode = speechLangCodes[currentLang] || "pt-BR";
  utterance.lang = langCode;
  const voice = pickVoice(langCode);
  if(voice) utterance.voice = voice;
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.onend = () => {
    if(narration.state !== "playing") return;
    narration.index += 1;
    speakCurrent();
  };
  utterance.onerror = (e) => {
    if(e.error === "interrupted" || e.error === "canceled") return;
    stopNarration();
  };
  narration.utterance = utterance;
  if(item.isFirstOfBlock){
    highlightBlock(item.el);
    if(item.label) announce(`${dict().annSection} ${item.label}`);
  }
  window.speechSynthesis.speak(utterance);
}
function startNarration(){
  if(reader.audio.state !== "idle") stopBookAudio({ silent: true });
  narration.queue = buildNarrationQueue();
  narration.index = 0;
  if(!narration.queue.length) return;
  narration.state = "playing";
  window.speechSynthesis.cancel();
  speakCurrent();
  startKeepAlive();
  syncNarrateButtons();
  announce(dict().annNarrateStart);
}
function pauseNarration(){
  window.speechSynthesis.pause();
  narration.state = "paused";
  syncNarrateButtons();
  announce(dict().annNarratePause);
}
function resumeNarration(){
  narration.state = "playing";
  window.speechSynthesis.resume();
  syncNarrateButtons();
  announce(dict().annNarrateResume);
}
function stopNarration(opts = {}){
  const wasActive = narration.state !== "idle";
  narration.state = "idle";
  narration.index = 0;
  narration.queue = [];
  stopKeepAlive();
  if(supportsSpeech) window.speechSynthesis.cancel();
  highlightBlock(null);
  syncNarrateButtons();
  if(wasActive && !opts.silent) announce(dict().annNarrateStop);
}
function finishNarration(){
  narration.state = "idle";
  narration.index = 0;
  stopKeepAlive();
  highlightBlock(null);
  syncNarrateButtons();
  announce(dict().annNarrateEnd);
}
/* Chrome suspends synthesis on long reads; a periodic nudge keeps it alive. */
function startKeepAlive(){
  stopKeepAlive();
  narration.keepAlive = setInterval(() => {
    if(narration.state !== "playing") return;
    if(window.speechSynthesis.speaking && !window.speechSynthesis.paused){
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 9000);
}
function stopKeepAlive(){
  if(narration.keepAlive){ clearInterval(narration.keepAlive); narration.keepAlive = null; }
}
function syncNarrateButtons(){
  const playBtn = $("#narrate-btn");
  const stopBtn = $("#narrate-stop-btn");
  if(!playBtn || !stopBtn) return;
  const d = dict();
  const playing = narration.state === "playing";
  const active = narration.state !== "idle";
  const label = playing ? d.a11yNarratePause : (active ? d.a11yNarrateResume : d.a11yNarrateStart);
  playBtn.setAttribute("aria-label", label);
  playBtn.setAttribute("title", label);
  playBtn.setAttribute("aria-pressed", active ? "true" : "false");
  playBtn.classList.toggle("speaking", playing);
  stopBtn.hidden = !active;
  stopBtn.setAttribute("aria-label", d.a11yNarrateStop);
  stopBtn.setAttribute("title", d.a11yNarrateStop);
}
$("#narrate-btn").addEventListener("click", () => {
  if(!supportsSpeech){ announce(dict().a11yNarrateUnsupported); alert(dict().a11yNarrateUnsupported); return; }
  if(narration.state === "playing") pauseNarration();
  else if(narration.state === "paused") resumeNarration();
  else startNarration();
});
$("#narrate-stop-btn").addEventListener("click", () => stopNarration());
if(supportsSpeech && typeof window.speechSynthesis.onvoiceschanged !== "undefined"){
  // Voices load asynchronously; nothing to do but let the next utterance use them.
  window.speechSynthesis.onvoiceschanged = () => {};
}
/* ============ MOBILE NAV ============ */
const menuBtn = $("#menu-btn");
const mobileNav = $("#mobile-nav");
let menuOpen = false;
function syncMenuButton(){
  if(!menuBtn) return;
  const label = menuOpen ? dict().a11yMenuClose : dict().a11yMenuOpen;
  menuBtn.setAttribute("aria-label", label);
  menuBtn.setAttribute("title", label);
  menuBtn.setAttribute("aria-expanded", menuOpen ? "true" : "false");
}
function setMenu(open){
  menuOpen = open;
  mobileNav.classList.toggle("open", open);
  syncMenuButton();
}
menuBtn.addEventListener("click", () => setMenu(!menuOpen));
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
/* ============ GLOBAL KEYBOARD ============ */
document.addEventListener("keydown", (e) => {
  if(e.key !== "Escape") return;
  if(menuOpen){ setMenu(false); menuBtn.focus(); return; }
  if(narration.state !== "idle"){ stopNarration(); $("#narrate-btn").focus(); }
});
/* Moving focus (not just the viewport) is what makes a skip link work. */
const skipLink = document.querySelector(".skip-link");
if(skipLink){
  skipLink.addEventListener("click", () => {
    const main = $("#main-content");
    if(main) setTimeout(() => main.focus(), 0);
  });
}
/* ============ COPY EMAIL ============ */
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const value = btn.getAttribute("data-copy");
    try{
      await navigator.clipboard.writeText(value);
      btn.textContent = dict().copyDone;
      btn.classList.add("done");
      announce(dict().annCopied);
      setTimeout(() => { btn.textContent = dict().copyLabel; btn.classList.remove("done"); }, 2200);
    }catch(err){
      announce(dict().annCopyFail);
    }
  });
});
/* ============ LEITOR DE E-BOOKS + AUDIOBOOK ============ */
const reader = {
  book: null,
  chapter: 0,
  opener: null,
  audio: { state: "idle", queue: [], index: 0, keepAlive: null }
};
const readerEls = {
  overlay: $("#reader-overlay"),
  dialog: $("#reader-dialog"),
  level: $("#reader-level"),
  title: $("#reader-title"),
  toc: $("#reader-toc-list"),
  content: $("#reader-content"),
  progress: $("#reader-progress"),
  prev: $("#reader-prev"),
  next: $("#reader-next"),
  audio: $("#reader-audio"),
  audioStop: $("#reader-audio-stop"),
  close: $("#reader-close")
};
/* ---- library grid ---- */
function renderLibrary(){
  const grid = $("#books-grid");
  if(!grid || typeof library === "undefined") return;
  const d = dict();
  grid.innerHTML = "";
  library.forEach(book => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "book-card";
    card.setAttribute("data-book", book.id);
    card.setAttribute("aria-label", `${book.title} — ${d[book.levelKey]}, ${book.chapters.length} ${d.bookChapters}, ${book.minutes} ${d.bookMinutes}`);
    card.innerHTML = `
      <span class="book-cover" aria-hidden="true"><span>${d[book.levelKey]}</span></span>
      <span class="book-level mono">${d[book.levelKey]}</span>
      <h3>${book.title}</h3>
      <p>${book.blurb}</p>
      <span class="book-meta mono">${book.chapters.length} ${d.bookChapters} · ${book.minutes} ${d.bookMinutes}</span>`;
    card.addEventListener("click", () => openReader(book.id, card));
    grid.appendChild(card);
  });
}
/* ---- open / close ---- */
function openReader(bookId, opener){
  const book = library.find(b => b.id === bookId);
  if(!book) return;
  if(narration.state !== "idle") stopNarration({ silent: true });
  reader.book = book;
  reader.chapter = 0;
  reader.opener = opener || document.activeElement;
  readerEls.level.textContent = dict()[book.levelKey];
  readerEls.title.textContent = book.title;
  renderTOC();
  renderChapter(0, { silent: true });
  readerEls.overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  readerEls.close.focus();
  announce(`${dict().annBookOpen} ${book.title}.`);
}
function closeReader(){
  stopBookAudio({ silent: true });
  readerEls.overlay.classList.remove("open");
  document.body.style.overflow = "";
  if(reader.opener && document.contains(reader.opener)) reader.opener.focus();
  reader.book = null;
}
/* ---- chapters ---- */
function renderTOC(){
  const list = readerEls.toc;
  list.innerHTML = "";
  reader.book.chapters.forEach((ch, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = ch.title;
    btn.setAttribute("aria-current", i === reader.chapter ? "true" : "false");
    btn.addEventListener("click", () => renderChapter(i));
    li.appendChild(btn);
    list.appendChild(li);
  });
}
function renderChapter(index, opts = {}){
  const book = reader.book;
  if(!book || index < 0 || index >= book.chapters.length) return;
  const wasPlaying = reader.audio.state === "playing";
  if(reader.audio.state !== "idle" && !opts.keepAudio) stopBookAudio({ silent: true });
  reader.chapter = index;
  const ch = book.chapters[index];
  const d = dict();
  readerEls.content.innerHTML = "";
  const h = document.createElement("h3");
  h.textContent = ch.title;
  readerEls.content.appendChild(h);
  // The books are written in Portuguese only — say so instead of pretending.
  if(currentLang !== "pt"){
    const note = document.createElement("p");
    note.className = "reader-note";
    note.textContent = d.readerLangNote;
    readerEls.content.appendChild(note);
  }
  ch.body.forEach((text, i) => {
    const para = document.createElement("p");
    para.textContent = text;
    para.setAttribute("data-p", i);
    readerEls.content.appendChild(para);
  });
  readerEls.content.scrollTop = 0;
  readerEls.toc.querySelectorAll("button").forEach((b, i) =>
    b.setAttribute("aria-current", i === index ? "true" : "false"));
  readerEls.progress.textContent = d.readerProgress
    .replace("{c}", index + 1).replace("{t}", book.chapters.length);
  readerEls.prev.disabled = index === 0;
  readerEls.next.disabled = index === book.chapters.length - 1;
  if(!opts.silent) announce(`${d.annChapter} ${ch.title}.`);
  if(wasPlaying && opts.keepAudio) startBookAudio({ silent: true });
}
if(readerEls.overlay){
  readerEls.prev.addEventListener("click", () => renderChapter(reader.chapter - 1));
  readerEls.next.addEventListener("click", () => renderChapter(reader.chapter + 1));
  readerEls.close.addEventListener("click", closeReader);
  readerEls.overlay.addEventListener("mousedown", (e) => {
    if(e.target === readerEls.overlay) closeReader();
  });
}
/* ---- audiobook ---- */
function buildBookQueue(){
  const ch = reader.book.chapters[reader.chapter];
  const queue = [];
  queue.push({ p: -1, text: ch.title });
  ch.body.forEach((text, i) => {
    chunkText(text).forEach(piece => queue.push({ p: i, text: piece }));
  });
  return queue;
}
function highlightParagraph(pIndex){
  readerEls.content.querySelectorAll("p.reading").forEach(n => n.classList.remove("reading"));
  if(pIndex < 0) return;
  const el = readerEls.content.querySelector(`p[data-p="${pIndex}"]`);
  if(!el) return;
  el.classList.add("reading");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
}
function speakBookChunk(){
  const a = reader.audio;
  if(a.index >= a.queue.length){
    // End of chapter: an audiobook should roll into the next one.
    if(reader.chapter < reader.book.chapters.length - 1){
      renderChapter(reader.chapter + 1, { silent: true, keepAudio: true });
      a.queue = buildBookQueue();
      a.index = 0;
      speakBookChunk();
    } else {
      stopBookAudio();
      announce(dict().annBookEnd);
    }
    return;
  }
  const item = a.queue[a.index];
  const u = new SpeechSynthesisUtterance(item.text);
  u.lang = bookLang;                       // content language, not UI language
  const v = pickVoice(bookLang);
  if(v) u.voice = v;
  u.rate = 1;
  u.onend = () => {
    if(reader.audio.state !== "playing") return;
    reader.audio.index += 1;
    speakBookChunk();
  };
  u.onerror = (e) => {
    if(e.error === "interrupted" || e.error === "canceled") return;
    stopBookAudio();
  };
  highlightParagraph(item.p);
  window.speechSynthesis.speak(u);
}
function startBookAudio(opts = {}){
  if(!supportsSpeech){ alert(dict().a11yNarrateUnsupported); return; }
  reader.audio.queue = buildBookQueue();
  reader.audio.index = 0;
  reader.audio.state = "playing";
  window.speechSynthesis.cancel();
  speakBookChunk();
  startBookKeepAlive();
  syncBookAudioButtons();
  if(!opts.silent) announce(dict().annAudioStart);
}
function pauseBookAudio(){
  window.speechSynthesis.pause();
  reader.audio.state = "paused";
  syncBookAudioButtons();
  announce(dict().annNarratePause);
}
function resumeBookAudio(){
  reader.audio.state = "playing";
  window.speechSynthesis.resume();
  syncBookAudioButtons();
  announce(dict().annNarrateResume);
}
function stopBookAudio(opts = {}){
  const was = reader.audio.state !== "idle";
  reader.audio.state = "idle";
  reader.audio.index = 0;
  reader.audio.queue = [];
  stopBookKeepAlive();
  if(supportsSpeech) window.speechSynthesis.cancel();
  highlightParagraph(-1);
  syncBookAudioButtons();
  if(was && !opts.silent) announce(dict().annAudioStop);
}
function startBookKeepAlive(){
  stopBookKeepAlive();
  reader.audio.keepAlive = setInterval(() => {
    if(reader.audio.state !== "playing") return;
    if(window.speechSynthesis.speaking && !window.speechSynthesis.paused){
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 9000);
}
function stopBookKeepAlive(){
  if(reader.audio.keepAlive){ clearInterval(reader.audio.keepAlive); reader.audio.keepAlive = null; }
}
function syncBookAudioButtons(){
  if(!readerEls.audio) return;
  const d = dict();
  const playing = reader.audio.state === "playing";
  const active = reader.audio.state !== "idle";
  const label = playing ? d.readerAudioPause : (active ? d.readerAudioResume : d.readerAudioPlay);
  readerEls.audio.setAttribute("aria-pressed", active ? "true" : "false");
  readerEls.audio.setAttribute("aria-label", label);
  readerEls.audio.querySelector(".txt").textContent = label;
  readerEls.audioStop.hidden = !active;
}
if(readerEls.audio){
  readerEls.audio.addEventListener("click", () => {
    if(reader.audio.state === "playing") pauseBookAudio();
    else if(reader.audio.state === "paused") resumeBookAudio();
    else startBookAudio();
  });
  readerEls.audioStop.addEventListener("click", () => stopBookAudio());
}
/* ---- dialog keyboard behaviour ---- */
if(readerEls.dialog) readerEls.dialog.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){ e.stopPropagation(); closeReader(); return; }
  if(e.key !== "Tab") return;
  const focusables = readerEls.dialog.querySelectorAll(
    'button:not([disabled]):not([hidden]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if(!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
});
/* ============ LIGHTBOX DE GALERIA ============
   Progressive enhancement: sem JS cada miniatura é um link direto
   para a imagem em tamanho real. Com JS, vira uma galeria navegável. */
const lightbox = {
  items: [],
  index: 0,
  opener: null,
  el: $("#lightbox")
};

function collectGallery(name){
  return Array.from(document.querySelectorAll(`[data-gallery="${name}"]`)).map(a => ({
    href: a.getAttribute("href"),
    caption: a.querySelector("img") ? a.querySelector("img").getAttribute("alt") : "",
    group: dict()[a.getAttribute("data-group-key")] || "",
    node: a
  }));
}

function preloadNeighbours(){
  [-1, 1].forEach(offset => {
    const i = (lightbox.index + offset + lightbox.items.length) % lightbox.items.length;
    const img = new Image();
    img.src = lightbox.items[i].href;
  });
}

function showLightboxItem(i){
  const total = lightbox.items.length;
  lightbox.index = (i + total) % total;
  const item = lightbox.items[lightbox.index];
  const d = dict();

  const img = $("#lightbox-img");
  img.style.opacity = "0";
  img.src = item.href;
  img.alt = item.caption;
  img.onload = () => { img.style.opacity = "1"; };

  $("#lightbox-caption").textContent = item.caption;
  $("#lightbox-group").textContent = item.group;
  $("#lightbox-counter").textContent = `${lightbox.index + 1} / ${total}`;
  $("#lightbox-open").href = item.href;

  const nav = total > 1;
  $("#lightbox-prev").hidden = !nav;
  $("#lightbox-next").hidden = !nav;

  // Thumbnail rail keeps the position visible while browsing.
  const rail = $("#lightbox-rail");
  rail.querySelectorAll("button").forEach((b, bi) => {
    const active = bi === lightbox.index;
    b.setAttribute("aria-current", active ? "true" : "false");
    if(active) b.scrollIntoView({ block: "nearest", inline: "center" });
  });

  announce(`${d.lightboxOf.replace("{c}", lightbox.index + 1).replace("{t}", total)} ${item.caption}`);
  preloadNeighbours();
}

function buildRail(){
  const rail = $("#lightbox-rail");
  rail.innerHTML = "";
  if(lightbox.items.length < 2){ rail.hidden = true; return; }
  rail.hidden = false;
  lightbox.items.forEach((item, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", item.caption);
    const thumb = item.node.querySelector("img");
    b.innerHTML = `<img src="${thumb ? thumb.getAttribute("src") : item.href}" alt="" loading="lazy">`;
    b.addEventListener("click", () => showLightboxItem(i));
    rail.appendChild(b);
  });
}

function openLightbox(name, index, opener){
  lightbox.items = collectGallery(name);
  if(!lightbox.items.length) return;
  lightbox.opener = opener || document.activeElement;
  if(narration.state !== "idle") stopNarration({ silent: true });
  buildRail();
  showLightboxItem(index);
  lightbox.el.classList.add("open");
  document.body.style.overflow = "hidden";
  $("#lightbox-close").focus();
}

function closeLightbox(){
  lightbox.el.classList.remove("open");
  document.body.style.overflow = "";
  $("#lightbox-img").src = "";
  if(lightbox.opener && document.contains(lightbox.opener)) lightbox.opener.focus();
}

if(lightbox.el){
  document.querySelectorAll("[data-gallery]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const name = link.getAttribute("data-gallery");
      const items = collectGallery(name);
      openLightbox(name, items.findIndex(it => it.node === link), link);
    });
  });

  $("#lightbox-prev").addEventListener("click", () => showLightboxItem(lightbox.index - 1));
  $("#lightbox-next").addEventListener("click", () => showLightboxItem(lightbox.index + 1));
  $("#lightbox-close").addEventListener("click", closeLightbox);
  lightbox.el.addEventListener("mousedown", (e) => {
    if(e.target === lightbox.el || e.target.id === "lightbox-stage") closeLightbox();
  });

  lightbox.el.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){ e.stopPropagation(); closeLightbox(); return; }
    if(e.key === "ArrowLeft"){ e.preventDefault(); showLightboxItem(lightbox.index - 1); return; }
    if(e.key === "ArrowRight"){ e.preventDefault(); showLightboxItem(lightbox.index + 1); return; }
    if(e.key === "Home"){ e.preventDefault(); showLightboxItem(0); return; }
    if(e.key === "End"){ e.preventDefault(); showLightboxItem(lightbox.items.length - 1); return; }
    if(e.key !== "Tab") return;
    const f = lightbox.el.querySelectorAll('button:not([hidden]), a[href]');
    if(!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  });

  // Swipe on touch devices
  let touchX = null;
  const stage = $("#lightbox-stage");
  stage.addEventListener("touchstart", (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if(touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if(Math.abs(dx) > 45) showLightboxItem(lightbox.index + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });
}

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
/* ============ TERMINAL TYPEWRITER ============ */
let typewriterTimer = null;
function restartTerminalTypewriter(){
  if(typewriterTimer) clearTimeout(typewriterTimer);
  const lines = document.querySelectorAll('#receipt .line');
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced){
    lines.forEach(l => { l.style.transition = 'none'; l.style.opacity = '1'; });
    return;
  }
  lines.forEach(l => { l.style.transition = 'none'; l.style.opacity = '0'; });
  let i = 0;
  function revealLine(){
    if(i >= lines.length) return;
    lines[i].style.transition = 'opacity .25s ease';
    lines[i].style.opacity = '1';
    i++;
    typewriterTimer = setTimeout(revealLine, 70);
  }
  typewriterTimer = setTimeout(revealLine, 200);
}
/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem(STORAGE_KEY);
  const initialLang = supportedLangs.includes(savedLang) ? savedLang : "pt";
  // The inline boot script in <head> already applied these before first paint;
  // here we only bring the internal state and the buttons in line with it.
  highContrastOn = document.documentElement.classList.contains("high-contrast");
  largeTextOn = localStorage.getItem(TEXTSIZE_KEY) === "1";
  applyLanguage(initialLang, { silent: true });
});
window.addEventListener('beforeunload', () => {
  if(supportsSpeech) window.speechSynthesis.cancel();
});
