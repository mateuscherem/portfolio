/* ============ BIBLIOTECA DE MENTORIAS ============
   Conteúdo escrito em português. A interface do leitor é traduzida;
   os textos dos e-books, não — o leitor avisa isso quando a interface
   está em outro idioma, e o audiobook sempre narra em pt-BR. */
const bookLang = "pt-BR";

const library = [
  {
    id: "fundamentos",
    level: "Básico", levelKey: "levelBasic",
    title: "Do problema ao primeiro fluxo",
    blurb: "O caminho de quem está começando: entender o problema antes de desenhar, e chegar num fluxo que outra pessoa consegue ler.",
    minutes: 6,
    chapters: [
      {
        title: "Antes de abrir o Figma",
        body: [
          "A vontade de abrir o Figma na primeira hora do projeto é o erro mais caro que um designer iniciante comete. Não porque desenhar cedo seja proibido, mas porque a tela em branco cria uma pressão de produzir alguma coisa — e o que sai dessa pressão é quase sempre uma solução para um problema que ninguém confirmou existir.",
          "Antes da primeira tela, você precisa conseguir responder três coisas em voz alta, sem consultar nada: quem tem esse problema, o que essa pessoa faz hoje para contornar ele, e o que muda no negócio se ele for resolvido. Se qualquer uma das três respostas começar com “eu acho”, você ainda está no território do palpite.",
          "A gambiarra que o usuário já inventou é a informação mais valiosa que existe. Alguém que exporta um relatório para o Excel toda sexta-feira está te dizendo exatamente onde o produto falha e qual é o formato mental que faz sentido pra ele. Procure a gambiarra antes de procurar a referência no Dribbble.",
          "Um exercício prático: escreva o problema em uma frase que caiba num post-it, sem nomear nenhuma solução. “Reduzir o tempo de aprovação de pedidos” é um problema. “Criar um dashboard de aprovações” já é uma solução disfarçada de problema — e uma solução que você escolheu antes de investigar."
        ]
      },
      {
        title: "Como fazer uma boa pergunta de pesquisa",
        body: [
          "Perguntas ruins produzem dados ruins com muita confiança, e isso é pior do que não ter dado nenhum. A pergunta “você gostaria de um filtro por data?” sempre recebe sim. Ninguém recusa uma funcionalidade hipotética e gratuita.",
          "Troque futuro por passado. Em vez de “você usaria”, pergunte “me conta a última vez que você precisou fazer isso”. O passado tem detalhe, tem contexto, tem a frustração real. O futuro só tem educação e boa vontade.",
          "Evite também perguntar por que a pessoa faz algo, pelo menos de forma direta. “Por que” convida à racionalização: a pessoa inventa uma justificativa lógica para um comportamento que foi automático. Pergunte o que ela fez, em que ordem, e o que aconteceu depois. O motivo aparece sozinho no meio da narrativa.",
          "Cinco a sete conversas bem-feitas com o mesmo perfil já mostram os padrões que importam. Não espere ter trinta entrevistas para começar a agir. O objetivo não é prova estatística — é parar de adivinhar."
        ]
      },
      {
        title: "Mapear a jornada sem se perder",
        body: [
          "Mapa de jornada virou entregável decorativo em muitos times: bonito, gigante, colado na parede, e nunca mais consultado. Isso acontece quando o mapa tenta descrever tudo em vez de decidir alguma coisa.",
          "Um mapa útil tem um recorte estreito e um objetivo declarado. “A jornada do lojista desde a solicitação da maquininha até a primeira venda” é um recorte. “A jornada do cliente” não é — é um tema.",
          "Marque no mapa três camadas apenas: o que a pessoa faz, o que ela sente naquele ponto, e onde o sistema atual a deixa na mão. A terceira camada é a que gera trabalho. Cada ponto de queda vira um candidato a problema, e é dali que sai o backlog de design.",
          "Valide o mapa com quem opera o processo, não só com quem o gerencia. Gestor descreve o processo como ele foi desenhado; quem opera descreve como ele realmente acontece. A diferença entre os dois é o seu espaço de atuação."
        ]
      },
      {
        title: "Do papel ao wireframe",
        body: [
          "Comece no papel porque o papel é feio de propósito. Um rabisco não convida ninguém a discutir cor, raio de borda ou tipografia — e é exatamente essa discussão que você não quer ter enquanto ainda está definindo estrutura.",
          "No wireframe, resolva quatro coisas antes de qualquer refinamento: qual é a informação mais importante da tela, qual é a única ação principal, o que acontece quando dá errado, e o que a pessoa vê quando ainda não tem dado nenhum. Estado vazio e estado de erro não são detalhe de acabamento; são metade do produto real.",
          "Nomeie os botões pelo que eles fazem. “Enviar” é preguiça. “Enviar para aprovação” diz o que vai acontecer, e o nome se mantém no aviso de sucesso, na notificação e no histórico. Vocabulário consistente é o que faz alguém aprender a navegar sozinho.",
          "Se o wireframe precisa de você ao lado para ser entendido, ele ainda não está pronto. Mande para alguém do time sem explicação e veja o que essa pessoa pergunta. As perguntas dela são a lista do que falta."
        ]
      },
      {
        title: "Como apresentar sem se defender",
        body: [
          "A apresentação é parte do design, não um anexo. Quando você abre mostrando a tela, todo mundo comenta a tela. Quando você abre mostrando o problema e a evidência, a conversa fica no lugar certo por muito mais tempo.",
          "Uma estrutura que funciona: o problema em uma frase, o que você descobriu, a decisão que tomou, e o que você deliberadamente deixou de fora. Esse último item é o que mais gera confiança — mostra que houve escolha, não falta de tempo.",
          "Separe crítica de preferência. Quando alguém diz “não gostei desse botão”, pergunte o que a pessoa espera que aconteça quando ele for clicado. Metade das vezes a objeção é sobre o fluxo, não sobre o visual, e ela está te dando uma informação útil embrulhada em opinião.",
          "Anote as decisões junto com o motivo, num lugar que o time consiga achar depois. Daqui a seis meses ninguém vai lembrar por que aquele campo é obrigatório, e sem registro a discussão inteira acontece de novo do zero."
        ]
      }
    ]
  },
  {
    id: "systems",
    level: "Intermediário", levelKey: "levelIntermediate",
    title: "Design system que sobrevive ao segundo ano",
    blurb: "Construir é a parte fácil. Este é sobre o que faz um sistema continuar vivo depois que o entusiasmo inicial passa.",
    minutes: 5,
    chapters: [
      {
        title: "Por que a maioria morre",
        body: [
          "Quase todo design system nasce bem. O time separa uma sprint, monta a biblioteca, faz a documentação bonita, apresenta numa reunião geral e todo mundo aplaude. O problema aparece no mês seis, quando chega a primeira demanda que o sistema não previu e o prazo não permite discutir.",
          "A partir daí, uma de duas coisas acontece: alguém cria um componente solto no arquivo do projeto, ou alguém adiciona mais uma variante ao componente oficial para acomodar o caso. A primeira gera dívida invisível. A segunda gera um componente com dezoito propriedades que ninguém entende.",
          "Design system não morre de falta de qualidade inicial. Morre de falta de dono e de falta de processo para o caso excepcional. Se não existe um caminho combinado para “preciso de algo que não tem”, o caminho será a exceção silenciosa.",
          "Antes de expandir a biblioteca, responda: quem decide o que entra? em quanto tempo essa decisão sai? e o que o time faz enquanto espera? Sem essas três respostas, você está construindo uma biblioteca, não um sistema."
        ]
      },
      {
        title: "Comece pelo token, não pelo componente",
        body: [
          "Componente é a parte visível, então é por onde todo mundo quer começar. Mas o que dá consistência de verdade é a camada de baixo: as decisões de cor, espaçamento, tipografia e raio que todos os componentes consultam.",
          "Separe token primitivo de token semântico. O primitivo é o valor cru — um azul específico, um espaçamento de oito. O semântico é o papel que aquele valor cumpre: cor de superfície elevada, cor de texto secundário, espaçamento entre seções. Componentes devem consumir o semântico, nunca o primitivo.",
          "Essa separação é o que torna troca de tema possível. Quando você redefine o que significa “cor de ação primária”, cada botão do produto acompanha, e nenhum arquivo precisa ser reaberto. É também a base de qualquer estratégia multimarca.",
          "Um teste simples de maturidade: peça para alguém trocar toda a paleta do produto. Se a resposta envolver abrir componentes um por um, sua camada de token ainda não existe de verdade — existe uma lista de cores com nome bonito."
        ]
      },
      {
        title: "Anatomia de um componente que escala",
        body: [
          "Um componente escalável resolve um comportamento, não um layout. “Card de produto” tende a envelhecer mal porque carrega uma composição específica. “Superfície com cabeçalho, conteúdo e ações” sobrevive a várias telas porque descreve estrutura.",
          "Cuidado com o excesso de propriedades. Toda vez que você adiciona uma variante para acomodar um caso único, você transfere a complexidade da decisão para quem usa o componente. Quatro propriedades bem escolhidas servem melhor que doze exaustivas.",
          "Documente os estados junto com o componente: padrão, hover, foco, desabilitado, carregando, erro, e o comportamento quando o texto é muito longo. O estado de foco em especial costuma ser esquecido, e é ele que sustenta a navegação por teclado do produto inteiro.",
          "Escreva também o que o componente não faz. Um bloco de “quando não usar” com dois exemplos evita mais uso indevido do que três páginas explicando o uso correto."
        ]
      },
      {
        title: "Governança: dizer não é o trabalho",
        body: [
          "A parte impopular da curadoria é recusar. Cada exceção aceita sem critério reduz o valor de todas as regras anteriores, porque comunica ao time que a régua é negociável dependendo do prazo.",
          "Mas recusar sem alternativa é burocracia. A resposta útil tem duas partes: por que não entra agora, e o que fazer nesta sprint. Uma solução local, marcada como temporária, com data para revisão, é melhor que um componente oficial criado às pressas.",
          "Crie um ritmo previsível — uma revisão quinzenal, curta, com decisões registradas. Previsibilidade reduz ansiedade: quem sabe que a resposta sai em duas semanas espera; quem não sabe, improvisa.",
          "Meça adoção, não quantidade. Quarenta componentes com uso baixo é um catálogo. Doze com uso alto é um sistema. Se você não consegue dizer qual percentual das telas novas usa a biblioteca, ainda não tem como saber se está funcionando."
        ]
      },
      {
        title: "Multimarca sem duplicar tudo",
        body: [
          "Vender o mesmo produto sob marcas diferentes é comum em pagamentos, em white-label e em qualquer ecossistema de parceiros. O erro clássico é duplicar a biblioteca inteira por marca — a partir daí, toda correção precisa ser feita várias vezes, e as versões divergem em silêncio.",
          "O caminho que funciona é desacoplar identidade de comportamento. A lógica de interação, a hierarquia da informação e a estrutura dos componentes ficam numa base única. Cor, tipografia, logo, raio e tom de voz ficam numa camada de marca que é trocada por cima.",
          "Defina cedo o que é negociável por parceiro e o que não é. Cor primária costuma ser negociável. Posição do botão de confirmar numa tela de pagamento não deveria ser — é segurança e memória muscular do operador, não estética.",
          "Cada marca nova é um teste do sistema. Se lançar a terceira marca exigir o mesmo esforço da primeira, a base não está desacoplada de verdade; está apenas organizada."
        ]
      }
    ]
  },
  {
    id: "influencia",
    level: "Avançado", levelKey: "levelAdvanced",
    title: "Design perto de quem decide",
    blurb: "Sobre a parte da senioridade que não aparece no portfólio: influência, priorização e liderança sem cargo.",
    minutes: 5,
    chapters: [
      {
        title: "O designer na sala de roadmap",
        body: [
          "Chega um ponto da carreira em que refinar a interface para de mudar o resultado. O que passa a mudar é estar na conversa em que se decide o que será construído — e essa conversa quase nunca é sobre tela.",
          "Ser convidado para essa sala não é sorte nem simpatia. É consequência de entregar, com consistência, uma informação que os outros não têm: o que o usuário realmente faz, com evidência, em linguagem de decisão.",
          "Comece aparecendo com dados de uso e de pesquisa antes de aparecer com proposta. Quem chega com problema bem descrito é ouvido; quem chega com solução pronta é avaliado. São posições muito diferentes na mesa.",
          "E aceite o incômodo de participar de decisões que não terminam em design. Discussão de precificação, de escopo de contrato e de capacidade de time também molda o produto — e opinar bem nelas é o que consolida seu lugar."
        ]
      },
      {
        title: "Traduzir design em linguagem de negócio",
        body: [
          "“Melhorou a experiência” não é um argumento — é uma conclusão sem premissa. Quem decide orçamento precisa saber o que muda em custo, receita, risco ou tempo.",
          "Aprenda a fazer a ponte explícita. Menos passos numa jornada operacional vira menos tempo por atendimento. Menos erro de preenchimento vira menos chamado no suporte. Um fluxo de aprovação rastreável vira menos exposição em auditoria. Nenhuma dessas frases exige abandonar o vocabulário de design; exige só terminar o raciocínio.",
          "Quando não houver número disponível, seja honesto sobre a incerteza e proponha como medir. “Não tenho esse dado, mas se instrumentarmos esta etapa, em um mês saberemos” é uma resposta forte. Inventar estimativa para parecer confiante é a forma mais rápida de perder credibilidade quando o número real aparece.",
          "Evite também o extremo oposto: transformar toda decisão em métrica. Algumas coisas se fazem porque estão certas — acessibilidade, clareza de linguagem, respeito ao tempo de quem usa. Saber quando não pedir licença faz parte do repertório."
        ]
      },
      {
        title: "Priorizar quando tudo é urgente",
        body: [
          "Times maduros não priorizam por importância — quase tudo é importante. Priorizam por consequência: o que acontece se isso não for feito neste ciclo?",
          "Uma classificação simples e brutal ajuda: o que quebra a operação de alguém, o que trava dinheiro entrando, o que gera retrabalho recorrente, e o que apenas melhora. As três primeiras categorias competem entre si. A quarta espera, e tudo bem que espere.",
          "Cuidado com a armadilha do pedido mais alto. A demanda que chega com mais insistência costuma ser a de quem tem mais acesso a você, não a de quem tem mais dor. Compare o volume do pedido com o volume do problema.",
          "Deixe visível o que ficou de fora e por quê. Uma lista de “não faremos agora” bem mantida evita que a mesma discussão volte toda sprint, e protege o time do sentimento de que nada nunca é decidido."
        ]
      },
      {
        title: "Levar acessibilidade sem virar o chato",
        body: [
          "Acessibilidade tratada como checklist no fim do projeto gera duas coisas: retrabalho e antipatia. Tratada como restrição de design desde o início, ela quase não custa nada — e melhora o produto para todo mundo.",
          "Traga como decisão técnica concreta, não como princípio moral. “Esse contraste está em 3,1 e precisa de 4,5 para texto” é acionável. “Precisamos ser mais inclusivos” gera concordância e nenhuma mudança no arquivo.",
          "Escolha as batalhas que rendem mais por esforço: contraste de texto e de bordas de controle, navegação completa por teclado, foco visível, rótulo em todo elemento interativo, e não depender só de cor para comunicar estado. Isso já resolve a maior parte das barreiras reais.",
          "E leve para dentro do sistema. Um componente com foco visível e rótulo correto por padrão faz acessibilidade acontecer sem depender da disciplina individual de cada pessoa em cada sprint — que é a única forma de isso escalar."
        ]
      },
      {
        title: "Liderar sem cargo",
        body: [
          "Boa parte da liderança em design acontece antes de qualquer promoção, e quase toda ela é invisível: revisar o trabalho de alguém sem passar por cima, manter um padrão quando ninguém está olhando, recusar a exceção fácil.",
          "Revisar bem é uma habilidade específica. Comece pelo que está funcionando e por quê — não por educação, mas porque a pessoa precisa saber o que preservar. Depois traga no máximo três pontos, ordenados por impacto, e separe o que é bloqueio do que é preferência sua.",
          "Deixe espaço para a solução do outro ser diferente da sua. Se toda revisão termina com o trabalho parecido com o que você teria feito, você não está formando ninguém — está terceirizando execução.",
          "E documente o caminho, não só o resultado. As decisões que você registrou, os nãos que você justificou e os padrões que você manteve são o que continua funcionando no time depois que você sai da sala. Esse é o teste real de senioridade."
        ]
      }
    ]
  }
];
