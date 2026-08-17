(function () {
  'use strict';

  /* ============ content data ============ */
  var PROJETOS = {
    chegajunto: {
      kicker: '01 · produto ponta a ponta',
      titulo: 'Chega Junto',
      versionTag: 'v3.0',
      heroPlaceholder: 'Chega Junto, imagem principal',
      video: 'entra depois do bloco de solução, mostrando o protótipo em movimento. Arquivo a inserir.',
      resumo: 'App de agenda de shows com foco em acessibilidade. Da pesquisa e do reposicionamento ao naming, branding, design system e protótipo navegável.',
      pv: {
        kicker: 'chega junto · produto · branding · motion',
        titulo: 'Do entendimento ao app no ar',
        sub: 'Pesquisa, marca, produto e vídeo no mesmo fluxo, com o time por perto em cada versão.',
        meta: [['ano', '2025'], ['versão', 'v3.0'], ['meu papel', 'ponta a ponta'], ['time', 'produto + eng']],
        ribbon: true,
        stats: [['8', 'meses, pesquisa à entrega'], ['3', 'versões documentadas'], ['1', 'designer, ponta a ponta']],
        resultadoFrase: 'O app saiu da pesquisa e chegou ao ar com marca, telas e vídeos feitos no mesmo fluxo, e o time entendeu a decisão de cada versão.',
        secoes: [
          {
            label: '01 · problema',
            heading: 'Ninguém sabia dizer o que o produto era',
            texto: [
              'A ideia existia em conversas, não em tela. Cada pessoa descrevia um produto diferente, e o que chegava ao público mudava de tom a cada peça.',
              'Comecei pelo entendimento: entrevistas, leitura do negócio e um mapa do que já existia, antes de desenhar qualquer coisa.'
            ],
            imagem: 'pesquisa, quadro de entendimento, mãos em gesto'
          },
          {
            label: '02 · método',
            heading: 'Escuta documentada, junto de quem constrói',
            texto: ['Levei cada versão para o time de produto e engenharia com a pergunta aberta. O feedback virou registro: o que mudou, por que mudou e o que ficou de fora.'],
            metodoImgs: ['sessão de escuta', 'marca em construção', 'wireframe / fluxo'],
            caption: 'o time viu antes de mim'
          },
          {
            label: '03 · iteração',
            heading: 'A versão anterior fica visível atrás da atual',
            iteracao: {
              v1: 'v1.0, primeira tela',
              v3: 'v3.0, tela atual',
              textos: [
                'v1.0 resolvia o fluxo, mas a marca não aparecia. O time leu como um app genérico.',
                'v3.0 trouxe a marca para dentro do produto: cor, grão e ritmo na mesma tela em que a pessoa decide.'
              ]
            }
          },
          {
            label: '04 · resultado',
            heading: 'Marca, produto e vídeo falando a mesma língua',
            texto: ['O que era conversa virou tela, peça e vídeo promocional com a mesma voz. A documentação de cada versão ficou como material do time, não como pasta minha.']
          }
        ]
      },
      meta: [
        ['contexto', 'Jornada Menina de UX, T4 (FIAP)'],
        ['ano', '2026'],
        ['formato', 'projeto em grupo, 5 designers'],
        ['meu papel', 'dados, naming, branding, design system e telas finais'],
        ['ferramentas', 'Figma, pesquisa quantitativa'],
        ['entregáveis', 'pesquisa, benchmark, identidade, design system, protótipo']
      ],
      secoes: [
        ['Desafio', 'Descobrir e comprar ingresso é uma experiência fragmentada: a informação está espalhada entre redes dos artistas, bilheterias e grupos de fãs. Para quem tem alguma deficiência o problema se agrava, porque as informações de acessibilidade do evento não estão onde a decisão é tomada. O desafio era entender se a dor era real e generalizada, e então projetar a jornada inteira sem tratar acessibilidade como recurso à parte.'],
        ['Solução', 'Pesquisa quantitativa com 51 respondentes em dois públicos, com revisão de viés das perguntas e triangulação dos dados. O benchmark levou a um reposicionamento: o Bandsintown já resolvia a agenda geral, então o grupo nichou em acessibilidade. Construí sozinha o design system completo, com tokens nomeados no vocabulário de show (Palco, Pulseira, Ingresso, Grade, Rampa, Bastidor), e o recurso de daltonismo, ativado já no passo 2 do onboarding.'],
        ['Resultado', 'Cinco rodadas de iteração com auditoria de usabilidade e acessibilidade: 26 apontamentos corrigidos e 18 documentados como próximos passos, versão a versão. Na avaliação final, as três mentoras deram 10, 9,5 e 10 (média 9,83), com nota máxima nos quatro critérios de conteúdo.'],
        ['O que eu levo daqui', 'Depois de semanas no mesmo projeto, o olhar cansa. A auditoria foi a forma de criar um olhar externo quando eu não tinha uma especialista disponível. Com a lista na mão, aprendi a separar o que era crítico do que podia ficar documentado: saber a hora de parar é decisão de projeto, não falha de acabamento.']
      ]
    },
    comunicacaouol: {
      kicker: '02 · sistema de comunicação',
      titulo: 'Comunicação visual do UOL ads',
      versionTag: 'v4.0',
      heroPlaceholder: 'Comunicação visual do UOL ads, imagem principal',
      resumo: 'Direção de arte e produção das peças do produto, construindo o estilo visual da marca enquanto ela já estava no ar.',
      meta: [
        ['contexto', 'UOL ads, atuação contínua'],
        ['período', 'desde 2024'],
        ['formato', 'dentro do time, aprovação em rituais curtos'],
        ['meu papel', 'direção de arte e produção das peças'],
        ['ferramentas', 'Figma, Illustrator, Photoshop'],
        ['entregáveis', 'posts, carrosséis, capas de vídeo, apresentações, e-mails']
      ],
      secoes: [
        ['Desafio', 'O UOL ads é uma marca dentro de outra marca: precisa ser reconhecível como UOL sem virar o UOL. Esse equilíbrio se decide de novo a cada peça. Somado a isso, o ritmo: a demanda entra e sai em um dia, no máximo um dia e meio. E quando comecei esse estilo não existia, não havia repertório pronto para aplicar.'],
        ['Solução', 'Referência primeiro, sempre, e não só em posts: revista e material editorial costumam responder melhor. Escopo antes do estilo, distribuindo o texto e decidindo o que cabe em cada imagem. Imagem com significado: adaptei o gráfico de vazado trocando a foto genérica pelo assunto de cada fatia, uma casa para quem fica, um pai com mochila e criança para quem viaja. Estilo fotográfico definido como critério, e uma tabela de aprendizado mapeando o que eu dominava, errava e precisava explorar.'],
        ['Resultado', 'Hoje um carrossel sai em um dia ou um dia e meio e costuma ser aprovado em uma reunião de dez minutos. No começo, a mesma peça exigia várias rodadas de crítica. Não tenho dados de performance, então afirmo o que observo: qualquer peça do UOL ads hoje, post, capa de vídeo, apresentação ou landing page, é reconhecível como sendo do UOL ads.'],
        ['O que eu levo daqui', 'Foi produzindo essas peças que eu mais evoluí, e foi uma troca: eu aprendi com a empresa e a empresa aprendeu comigo. Identidade visual não é só o que está no manual, é o acúmulo de decisões pequenas tomadas rápido, até alguém de fora reconhecer a marca sem ler o logo.']
      ]
    },
    masterclass: {
      kicker: '03 · campanha ponta a ponta',
      titulo: 'Masterclass UOL ads',
      versionTag: 'v1.4',
      heroPlaceholder: 'Masterclass UOL ads, imagem principal',
      heroImage: { src: 'assets/cases/masterclass-uol-ads/mc-vid-poster.webp', alt: 'Primeira tela da masterclass com contagem regressiva e botão para se inscrever agora' },
      resumo: 'Campanha do conceito visual ao ecossistema de peças: benchmark, arquitetura da página e desdobramento em landing page, e-mail, posts e apresentação.',
      meta: [
        ['contexto', 'UOL ads, aula conduzida pelo Head da área'],
        ['ano', '1º semestre de 2026'],
        ['formato', 'projeto contínuo, storytelling junto de marketing'],
        ['meu papel', 'benchmark, AI da página, concepção visual e direção de arte'],
        ['ferramentas', 'Figma, Figma Make'],
        ['entregáveis', 'landing page, e-mail, posts, apresentação']
      ],
      secoes: [
        ['Desafio', 'A masterclass nasceu de uma vontade simples: falar direto com quem usa e com quem pode vir a usar o UOL ads, sem intermediário. O problema é que ninguém ali tinha feito isso antes, não havia repertório interno. Sem referência, cada decisão de estrutura e de tom seria um chute, e chute na primeira edição custa caro. Somei um desafio meu: a aula era gratuita, mas a página não podia parecer gratuita, porque o custo que a pessoa paga é o tempo dela.'],
        ['Solução', 'Benchmark técnico de páginas de aula online, destrinchando que blocos apareciam, em que ordem e com que argumentos. Virou tabela de padrões recorrentes, com variações de CTA e nota do que fazia sentido trazer, o que permitiu defender cada escolha com argumento. Usei o Figma Make como sonda de repertório, para descartar caminhos cedo, sem que o material gerado virasse entrega. Revi a arquitetura da informação: o formulário saiu do lugar padrão e passou a aparecer depois de data, horário e formato.'],
        ['Resultado', 'A primeira edição passou de 100 inscritos, número que ninguém esperava para uma estreia, e gerou leads qualificados para o comercial. Ficou também o repertório: benchmark, tabela de padrões e testes de estilo viraram base documentada para as próximas edições. O retorno positivo veio da gestão, da comunicação e do time de produto, sobre o resultado e sobre a condução.'],
        ['O que eu levo daqui', '[APRENDIZADO: PREENCHER. Caminhos possíveis: propor uma estrutura diferente do briefing e defendê-la; o que testar muito na primeira edição rendeu para as seguintes; usar IA para explorar sem terceirizar a decisão.]']
      ],
      pvMedia: {
        secoesMedia: [
          {
            galeria: [
              { src: 'assets/cases/masterclass-uol-ads/mc-02-painel-benchmark.webp', alt: 'Painel de benchmark com pontos recorrentes de outras masterclasses e variações de call to action testadas para a página' }
            ],
            galeriaLegenda: 'benchmark que mapeou o que já existia, na ausência de repertório interno'
          },
          {
            videoReal: {
              mp4: 'assets/cases/masterclass-uol-ads/mc-vid-walkthrough.mp4',
              webm: 'assets/cases/masterclass-uol-ads/mc-vid-walkthrough.webm',
              poster: 'assets/cases/masterclass-uol-ads/mc-vid-poster.webp'
            }
          },
          {
            galeria: [
              { src: 'assets/cases/masterclass-uol-ads/mc-07-landing-completa.webp', alt: 'Página inteira da masterclass, do hero com contagem regressiva até o rodapé com formulário e depoimento' },
              { src: 'assets/cases/masterclass-uol-ads/mc-08-email-convite.webp', alt: 'E-mail de convite com proposta da masterclass, os quatro públicos ideais e lista do que será ensinado' },
              { src: 'assets/cases/masterclass-uol-ads/mc-08-email-lembrete.webp', alt: 'E-mail lembrete com saudação personalizada, data e horário do evento e botão para acessar o link' },
              { src: 'assets/cases/masterclass-uol-ads/mc-09-post-perdeu-a-masterclass.webp', alt: 'Post convidando quem perdeu o evento a assistir a gravação completa com material exclusivo' },
              { src: 'assets/cases/masterclass-uol-ads/mc-09-post-o-que-espera.webp', alt: 'Lista com quatro pontos que a masterclass promete cobrir, marcados com ícone de check laranja' },
              { src: 'assets/cases/masterclass-uol-ads/mc-09-post-assista-agora.webp', alt: 'Retrato do palestrante com convite para assistir à gravação e baixar o material da masterclass' },
              { src: 'assets/cases/masterclass-uol-ads/mc-10-slide-capa.webp', alt: 'Slide de abertura com o título da masterclass ao lado de foto de duas pessoas trabalhando' },
              { src: 'assets/cases/masterclass-uol-ads/mc-10-slide-disputa-atencao.webp', alt: 'Slide com a frase sobre a disputa pela atenção e o tempo médio de 3 minutos por visita no UOL' },
              { src: 'assets/cases/masterclass-uol-ads/mc-10-slide-universo-possibilidades.webp', alt: 'Slide escuro com números de audiência do UOL por canal, das redes sociais a CTV e eventos' },
              { src: 'assets/cases/masterclass-uol-ads/mc-10-slide-blast-uol.webp', alt: 'Slide do formato Blast UOL mostrando os anúncios em diferentes telas do site e do celular' },
              { src: 'assets/cases/masterclass-uol-ads/mc-10-slide-connected-tv.webp', alt: 'Slide sobre Connected TV com dados de audiência compartilhada e engajamento ao lado de foto de amigos assistindo TV' },
              { src: 'assets/cases/masterclass-uol-ads/mc-10-slide-medindo-resultados.webp', alt: 'Slide de fechamento com um painel real de relatórios do UOL ads, mostrando métricas de campanha e gráficos' }
            ],
            galeriaLegenda: 'a landing page, os dois e-mails, os três posts e os seis slides da apresentação, prontos'
          },
          null
        ]
      }
    },
    sul: {
      kicker: '04 · sistema de marca',
      titulo: 'SUL Inteligência para Impacto',
      versionTag: 'v2.1',
      heroPlaceholder: 'SUL Inteligência para Impacto, imagem principal',
      video: 'vídeo animado da marca, junto às aplicações. Arquivo a inserir.',
      resumo: 'Sistema de marca para consultoria que transforma tecnologia em impacto socioambiental, do debrief ao manual de aplicação.',
      meta: [
        ['cliente', 'SUL Inteligência para Impacto'],
        ['categoria', 'branding e identidade visual'],
        ['formato', 'cliente real, conduzido individualmente'],
        ['meu papel', 'branding completo e manual de identidade'],
        ['interlocução', 'direta com os dois sócios'],
        ['acervo', '19 peças']
      ],
      secoes: [
        ['Desafio', 'A SUL vive na intersecção de dois mundos com códigos opostos. Tecnologia comunica precisão e frieza; impacto socioambiental, no repertório visual brasileiro, comunica quase sempre verde, natureza e estética de terceiro setor. Adotar um dos vocabulários puros custaria caro: pareceria startup sem causa ou ONG sem competência técnica. A marca defende o protagonismo do sul global e precisava carregar isso na forma, com aplicação autônoma por uma equipe pequena.'],
        ['Solução', 'Debrief e moodboard para achar o território, mais missão, visão, valores e persona. O logo é o mapa invertido da América do Sul em textura de linhas, que lê como rede neural e como conexão: o sul no topo é o argumento de posicionamento dentro do símbolo. Tipografias brasileiras por coerência, Brasileiro e Elza Text. Sistema de quatro paletas, porque a marca circula entre apresentação para investidor e comunicação de campo, e logo em três versões de idioma.'],
        ['Resultado', 'A marca foi entregue como sistema operável, não como arquivo: o manual vai da introdução conceitual aos usos incorretos. É o projeto com o acervo mais extenso do portfólio, 19 peças. Na apresentação final os sócios disseram que superou o que esperavam, e a prova mais forte veio com o tempo: a identidade está em uso há mais de um ano, aplicada por eles sozinhos em site, LinkedIn e Instagram.'],
        ['O que eu levo daqui', 'Foi a primeira vez que conduzi branding sozinha para um cliente real. O aprendizado maior não foi de estética, foi de condução: quando pedir feedback e quando seguir, como apresentar uma escolha para quem não é designer, como conciliar dois sócios na mesma marca. Aprendi também a tratar fechamento de arquivo e documentação como parte do projeto. Isso foi testado por acaso: parei de pegar freelas pouco depois e a marca continuou de pé.']
      ]
    }
  };

  var PECAS = {
    peca1: { kicker: 'ux/ui e direção de arte', titulo: 'Campanha UOL ads Friday', heroPlaceholder: 'Campanha UOL ads Friday, imagem principal', resumo: 'Landing page, e-mails, stories e os carrosséis da campanha, dentro de um projeto de equipe.', meta: [['cliente', 'UOL ads'], ['meu papel', 'ux/ui e direção de arte']] },
    peca2: { kicker: 'direção de arte', titulo: 'Campanha Digital O Boticário', heroPlaceholder: 'Campanha Digital O Boticário, imagem principal', resumo: 'Publicações de Pearl Skin, sustentabilidade e perfumaria, como responsável criativa das artes.', meta: [['cliente', 'O Boticário'], ['ano', '2024']] },
    peca3: { kicker: 'branding', titulo: 'Serenity Yoga Studio', heroPlaceholder: 'Serenity Yoga Studio, imagem principal', video: 'vídeo animado da identidade. Arquivo a inserir.', resumo: 'Identidade visual completa de marca fictícia, projeto autoral.', meta: [['contexto', 'projeto autoral'], ['acervo', '9 peças e vídeo']] },
    peca4: { kicker: 'ux/ui', titulo: 'Mapa do Bem Estar', heroPlaceholder: 'Mapa do Bem Estar, imagem principal', resumo: 'Site de dados demográficos de Curitiba: identidade e protótipo, em desafio acadêmico.', meta: [['contexto', 'Smart Challenges, UTFPR'], ['ano', '2023']] },
    peca5: { kicker: 'branding', titulo: 'Jardim das Américas', heroPlaceholder: 'Jardim das Américas, imagem principal', resumo: 'Identidade visual desenvolvida em Projeto e Sistemas Visuais.', meta: [['contexto', 'acadêmico, UTFPR'], ['meu papel', 'branding completo']] },
    peca6: { kicker: 'gráfico', titulo: 'Apresentação Patricia Urquiola', heroPlaceholder: 'Apresentação Patricia Urquiola, imagem principal', resumo: 'Pesquisa e design editorial da apresentação, em Teoria do Design 2.', meta: [['contexto', 'acadêmico, UTFPR'], ['acervo', '8 imagens']] }
  };

  /* ============ mobile menu ============ */
  var menuAbrir = document.getElementById('menuAbrir');
  var menuFechar = document.getElementById('menuFechar');
  var menuMobile = document.getElementById('menuMobile');
  var lastFocused = null;

  function abrirMenu() {
    lastFocused = document.activeElement;
    menuMobile.hidden = false;
    document.body.style.overflow = 'hidden';
    menuAbrir.setAttribute('aria-expanded', 'true');
    menuFechar.focus();
  }
  function fecharMenu() {
    menuMobile.hidden = true;
    document.body.style.overflow = '';
    menuAbrir.setAttribute('aria-expanded', 'false');
    if (lastFocused) lastFocused.focus();
  }
  menuAbrir.addEventListener('click', abrirMenu);
  menuFechar.addEventListener('click', fecharMenu);
  menuMobile.querySelectorAll('.mobile-menu-links a').forEach(function (a) {
    a.addEventListener('click', fecharMenu);
  });

  /* ============ scroll reveal ============ */
  var revealTargets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ============ gallery filters ============ */
  var filterButtons = document.querySelectorAll('.filter-pill');
  var galleryItems = document.querySelectorAll('.gallery-item');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var filter = btn.getAttribute('data-filter');
      galleryItems.forEach(function (item) {
        var tags = (item.getAttribute('data-tags') || '').split(',');
        var show = filter === 'tudo' || tags.indexOf(filter) !== -1;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ============ modal ============ */
  var backdrop = document.getElementById('modalBackdrop');
  var modal = document.getElementById('modal');
  var modalClose = document.getElementById('modalFechar');
  var modalVoltar = document.getElementById('modalVoltar');
  var modalHeroBtn = document.getElementById('modalHeroBtn');
  var modalHeroSlot = document.getElementById('modalHeroSlot');
  var modalKicker = document.getElementById('modalKicker');
  var modalTitulo = document.getElementById('modalTitulo');
  var modalResumo = document.getElementById('modalResumo');
  var modalMeta = document.getElementById('modalMeta');
  var modalVideo = document.getElementById('modalVideo');
  var modalVideoNota = document.getElementById('modalVideoNota');

  var zoomBackdrop = document.getElementById('zoomBackdrop');
  var zoomImage = document.getElementById('zoomImage');

  var modalLastFocused = null;

  function openModal(item) {
    modalLastFocused = document.activeElement;

    modalHeroSlot.setAttribute('data-label', item.heroPlaceholder || (item.titulo + ', imagem principal'));
    modalKicker.textContent = item.kicker || '';
    modalTitulo.textContent = item.titulo || '';
    modalResumo.textContent = item.resumo || '';

    if (item.meta && item.meta.length) {
      modalMeta.innerHTML = '';
      item.meta.forEach(function (pair) {
        var wrap = document.createElement('div');
        var label = document.createElement('div');
        label.className = 'mono-label';
        label.textContent = pair[0];
        var val = document.createElement('div');
        val.className = 'val';
        val.textContent = pair[1];
        wrap.appendChild(label);
        wrap.appendChild(val);
        modalMeta.appendChild(wrap);
      });
      modalMeta.hidden = false;
    } else {
      modalMeta.hidden = true;
    }

    if (item.video) {
      modalVideoNota.textContent = item.video;
      modalVideo.hidden = false;
    } else {
      modalVideo.hidden = true;
    }

    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
    modalClose.focus();
  }

  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = '';
    if (modalLastFocused) modalLastFocused.focus();
  }

  function openZoom(content) {
    zoomImage.innerHTML = '';
    if (content && typeof content === 'object' && content.src) {
      zoomImage.className = 'zoom-image zoom-image-real';
      var img = document.createElement('img');
      img.className = 'real-img';
      img.src = content.src;
      img.alt = content.alt || '';
      zoomImage.appendChild(img);
    } else {
      zoomImage.className = 'imgslot zoom-image';
      zoomImage.setAttribute('data-label', content || '');
    }
    zoomBackdrop.hidden = false;
  }
  function closeZoom() {
    zoomBackdrop.hidden = true;
  }

  // cases (data-open ids found in PROJETOS) navigate straight to their full
  // project page via the anchor's own href — no JS interception needed.
  // only peças soltas (PECAS) open in the modal.
  document.querySelectorAll('[data-open]').forEach(function (trigger) {
    var id = trigger.getAttribute('data-open');
    if (!PECAS[id]) return;
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(PECAS[id]);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalVoltar.addEventListener('click', closeModal);
  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });
  modal.addEventListener('click', function (e) { e.stopPropagation(); });

  modalHeroBtn.addEventListener('click', function () {
    openZoom(modalHeroSlot.getAttribute('data-label'));
  });

  zoomBackdrop.addEventListener('click', closeZoom);

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!zoomBackdrop.hidden) closeZoom();
    else if (!backdrop.hidden) closeModal();
    else if (!menuMobile.hidden) fecharMenu();
  });

  /* ============ standalone project page (1c), hash-routed ============ */
  var conteudo = document.getElementById('conteudo');
  var viewProjeto = document.getElementById('viewProjeto');
  var pvOrder = document.getElementById('pvOrder');
  var pvKicker = document.getElementById('pvKicker');
  var pvTitulo = document.getElementById('pvTitulo');
  var pvSub = document.getElementById('pvSub');
  var pvMeta = document.getElementById('pvMeta');
  var pvHeroSlot = document.getElementById('pvHeroSlot');
  var pvRibbon = document.getElementById('pvRibbon');
  var pvStats = document.getElementById('pvStats');
  var pvStatsFrase = document.getElementById('pvStatsFrase');
  var pvStatsRow = document.getElementById('pvStatsRow');
  var pvSecoes = document.getElementById('pvSecoes');
  var pvNextGrid = document.getElementById('pvNextGrid');
  var pvFooterTag = document.getElementById('pvFooterTag');
  var pvVoltar = document.getElementById('pvVoltar');

  function buildMetaGrid(container, pairs) {
    container.innerHTML = '';
    pairs.forEach(function (pair) {
      var wrap = document.createElement('div');
      var label = document.createElement('div');
      label.className = 'mono-label';
      label.textContent = pair[0];
      var val = document.createElement('div');
      val.className = 'val';
      val.textContent = pair[1];
      wrap.appendChild(label);
      wrap.appendChild(val);
      container.appendChild(wrap);
    });
  }

  function buildSlot(label, extraClass) {
    var slot = document.createElement('div');
    slot.className = 'imgslot' + (extraClass ? ' ' + extraClass : '');
    slot.setAttribute('data-label', label);
    return slot;
  }

  function buildImg(img, extraClass) {
    var el = document.createElement('img');
    el.className = 'real-img' + (extraClass ? ' ' + extraClass : '');
    el.src = img.src;
    el.alt = img.alt || '';
    el.loading = 'lazy';
    return el;
  }

  function buildVideo(video, extraClass) {
    var el = document.createElement('video');
    el.className = 'real-video' + (extraClass ? ' ' + extraClass : '');
    el.setAttribute('autoplay', '');
    el.setAttribute('muted', '');
    el.setAttribute('loop', '');
    el.setAttribute('playsinline', '');
    el.muted = true;
    el.poster = video.poster;
    var srcWebm = document.createElement('source');
    srcWebm.src = video.webm;
    srcWebm.type = 'video/webm';
    var srcMp4 = document.createElement('source');
    srcMp4.src = video.mp4;
    srcMp4.type = 'video/mp4';
    el.appendChild(srcWebm);
    el.appendChild(srcMp4);
    return el;
  }

  function buildCarousel(images, extraClass) {
    var wrap = document.createElement('div');
    wrap.className = 'pv-carousel' + (extraClass ? ' ' + extraClass : '');
    var idx = 0;

    var stage = document.createElement('div');
    stage.className = 'pv-carousel-stage';

    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'pv-carousel-arrow pv-carousel-prev';
    prevBtn.setAttribute('aria-label', 'Imagem anterior');
    prevBtn.innerHTML = '&#8249;';

    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'pv-carousel-arrow pv-carousel-next';
    nextBtn.setAttribute('aria-label', 'Próxima imagem');
    nextBtn.innerHTML = '&#8250;';

    var slideBtn = document.createElement('button');
    slideBtn.type = 'button';
    slideBtn.className = 'pv-carousel-slide';
    slideBtn.setAttribute('aria-label', 'Ver imagem em tela cheia');
    var img = document.createElement('img');
    img.className = 'real-img';
    slideBtn.appendChild(img);
    var zoomHint = document.createElement('span');
    zoomHint.className = 'zoom-hint pv-carousel-zoom-hint';
    zoomHint.textContent = 'clique para ver em tela cheia';
    slideBtn.appendChild(zoomHint);

    var counter = document.createElement('span');
    counter.className = 'pv-carousel-counter';

    function render() {
      img.src = images[idx].src;
      img.alt = images[idx].alt || '';
      counter.textContent = (idx + 1) + ' / ' + images.length;
    }
    render();

    prevBtn.addEventListener('click', function () { idx = (idx - 1 + images.length) % images.length; render(); });
    nextBtn.addEventListener('click', function () { idx = (idx + 1) % images.length; render(); });
    slideBtn.addEventListener('click', function () { openZoom(images[idx]); });

    if (images.length > 1) {
      var touchX = null;
      stage.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener('touchend', function (e) {
        if (touchX === null) return;
        var dx = e.changedTouches[0].clientX - touchX;
        if (dx > 40) prevBtn.click();
        else if (dx < -40) nextBtn.click();
        touchX = null;
      }, { passive: true });
    } else {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    }

    stage.appendChild(prevBtn);
    stage.appendChild(slideBtn);
    stage.appendChild(nextBtn);
    wrap.appendChild(stage);

    if (images.length > 1) {
      var meta = document.createElement('div');
      meta.className = 'pv-carousel-meta';
      meta.appendChild(counter);
      wrap.appendChild(meta);
    }

    return wrap;
  }

  function pvSectionMedia(sec, item, index) {
    var wrap = document.createElement('div');
    wrap.className = 'pv-sec-media';

    var realMedia = item.pvMedia && item.pvMedia.secoesMedia && item.pvMedia.secoesMedia[index];
    if (realMedia) {
      if (realMedia.galeria) {
        wrap.appendChild(buildCarousel(realMedia.galeria));
        if (realMedia.galeriaLegenda) {
          var rcap = document.createElement('p');
          rcap.className = 'pv-caption';
          rcap.textContent = realMedia.galeriaLegenda;
          wrap.appendChild(rcap);
        }
      }
      if (realMedia.videoReal) {
        var vwrap = document.createElement('div');
        vwrap.className = 'pv-real-video-wrap';
        vwrap.appendChild(buildVideo(realMedia.videoReal));
        wrap.appendChild(vwrap);
      }
      if (realMedia.imagemReal) {
        wrap.appendChild(buildCarousel([realMedia.imagemReal]));
      }
      if (wrap.childNodes.length) return wrap;
    }

    if (sec.metodoImgs) {
      var grid = document.createElement('div');
      grid.className = 'pv-metodo-grid';
      sec.metodoImgs.forEach(function (label, i) {
        var cell = document.createElement('div');
        cell.className = 'pv-metodo-cell' + (i === 1 ? ' pv-metodo-cell-cut' : '');
        cell.appendChild(buildSlot(label));
        grid.appendChild(cell);
      });
      wrap.appendChild(grid);
      if (sec.caption) {
        var cap = document.createElement('p');
        cap.className = 'pv-caption';
        cap.textContent = sec.caption;
        wrap.appendChild(cap);
      }
      return wrap;
    }

    if (sec.iteracao) {
      var compare = document.createElement('div');
      compare.className = 'pv-iteracao';
      var v1 = document.createElement('div');
      v1.className = 'pv-iteracao-v1';
      v1.appendChild(buildSlot(sec.iteracao.v1));
      var v1Tag = document.createElement('span');
      v1Tag.className = 'pv-iteracao-tag pv-iteracao-tag-old';
      v1Tag.textContent = 'v1.0';
      v1.appendChild(v1Tag);
      var v3 = document.createElement('div');
      v3.className = 'pv-iteracao-v3';
      v3.appendChild(buildSlot(sec.iteracao.v3));
      var v3Tag = document.createElement('span');
      v3Tag.className = 'pv-iteracao-tag pv-iteracao-tag-current';
      v3Tag.textContent = item.versionTag + ' · atual';
      v3.appendChild(v3Tag);
      compare.appendChild(v1);
      compare.appendChild(v3);
      wrap.appendChild(compare);
      if (sec.iteracao.textos) {
        var cols = document.createElement('div');
        cols.className = 'pv-iteracao-textos';
        sec.iteracao.textos.forEach(function (t) {
          var p = document.createElement('p');
          p.textContent = t;
          cols.appendChild(p);
        });
        wrap.appendChild(cols);
      }
      return wrap;
    }

    if (index === 3 && item.video) {
      var videoNote = document.createElement('div');
      videoNote.className = 'modal-video pv-video';
      var play = document.createElement('span');
      play.className = 'play';
      play.textContent = '▶';
      var textWrap = document.createElement('div');
      var label = document.createElement('p');
      label.className = 'mono-label';
      label.textContent = 'vídeo animado';
      var nota = document.createElement('p');
      nota.textContent = item.video;
      textWrap.appendChild(label);
      textWrap.appendChild(nota);
      videoNote.appendChild(play);
      videoNote.appendChild(textWrap);
      wrap.appendChild(videoNote);
      return wrap;
    }

    if (sec.imagem) {
      wrap.appendChild(buildSlot(sec.imagem));
      return wrap;
    }

    if (index < 3) {
      wrap.appendChild(buildSlot(item.titulo + ', imagem ' + (index + 1)));
      return wrap;
    }

    return null;
  }

  function renderProjectView(id) {
    var item = PROJETOS[id];
    if (!item) return false;

    var order = (item.kicker.split(' · ')[0] || '').trim();
    var pv = item.pv;

    pvOrder.textContent = 'case ' + order + ' de 04';
    pvKicker.textContent = pv ? pv.kicker : item.kicker;
    pvTitulo.textContent = pv ? pv.titulo : item.titulo;
    pvSub.textContent = pv ? pv.sub : item.resumo;
    buildMetaGrid(pvMeta, (pv && pv.meta) ? pv.meta : item.meta);

    pvHeroSlot.innerHTML = '';
    if (item.heroImage) {
      pvHeroSlot.className = 'pv-hero-real';
      pvHeroSlot.appendChild(buildImg(item.heroImage));
    } else {
      pvHeroSlot.className = 'imgslot';
      pvHeroSlot.setAttribute('data-label', item.heroPlaceholder || (item.titulo + ', imagem principal'));
    }
    pvRibbon.hidden = !(pv && pv.ribbon);

    if (pv && pv.stats) {
      pvStatsFrase.textContent = pv.resultadoFrase || '';
      pvStatsRow.innerHTML = '';
      pv.stats.forEach(function (stat) {
        var cell = document.createElement('div');
        var num = document.createElement('div');
        num.className = 'pv-stat-num';
        num.textContent = stat[0];
        var lbl = document.createElement('div');
        lbl.className = 'pv-stat-label';
        lbl.textContent = stat[1];
        cell.appendChild(num);
        cell.appendChild(lbl);
        pvStatsRow.appendChild(cell);
      });
      pvStats.hidden = false;
    } else {
      pvStats.hidden = true;
    }

    var secoesList = (pv && pv.secoes) ? pv.secoes : item.secoes.map(function (s, i) {
      return { label: String(i + 1).padStart(2, '0'), heading: s[0], texto: [s[1]] };
    });

    pvSecoes.innerHTML = '';
    secoesList.forEach(function (sec, index) {
      var block = document.createElement('div');
      block.className = 'pv-sec' + (index % 2 === 1 ? ' pv-sec-rev' : '');

      var copy = document.createElement('div');
      copy.className = 'pv-sec-copy';
      var stepLabel = document.createElement('p');
      stepLabel.className = 'kicker';
      stepLabel.textContent = sec.label;
      var h3 = document.createElement('h3');
      h3.className = 'h-xl';
      h3.textContent = sec.heading;
      copy.appendChild(stepLabel);
      copy.appendChild(h3);
      (sec.texto || []).forEach(function (t) {
        var p = document.createElement('p');
        p.className = 'body-lg';
        p.textContent = t;
        copy.appendChild(p);
      });
      block.appendChild(copy);

      var media = pvSectionMedia(sec, item, index);
      if (media) block.appendChild(media);
      else block.classList.add('pv-sec-solo');

      pvSecoes.appendChild(block);
    });

    var others = Object.keys(PROJETOS).filter(function (k) { return k !== id; });
    pvNextGrid.innerHTML = '';
    others.forEach(function (k) {
      var p = PROJETOS[k];
      var a = document.createElement('a');
      a.href = '#/projeto/' + k;
      a.className = 'pv-next-card';
      var media = document.createElement('div');
      media.className = 'pv-next-media';
      media.appendChild(buildSlot(p.heroPlaceholder || (p.titulo + ', imagem principal')));
      var kick = document.createElement('div');
      kick.className = 'kicker kicker-sm';
      kick.textContent = p.kicker;
      var h5 = document.createElement('h5');
      h5.textContent = p.titulo;
      a.appendChild(media);
      a.appendChild(kick);
      a.appendChild(h5);
      pvNextGrid.appendChild(a);
    });

    pvFooterTag.textContent = 'case ' + order + ' · ' + item.titulo + ' · ' + item.versionTag;

    return true;
  }

  function renderRoute() {
    var hash = window.location.hash;
    var match = /^#\/projeto\/([a-z0-9]+)/.exec(hash);
    if (match && renderProjectView(match[1])) {
      conteudo.hidden = true;
      viewProjeto.hidden = false;
      window.scrollTo(0, 0);
    } else {
      conteudo.hidden = false;
      viewProjeto.hidden = true;
    }
  }

  pvVoltar.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.hash = '';
  });
  pvNextGrid.addEventListener('click', function (e) {
    var link = e.target.closest('a.pv-next-card');
    if (!link) return;
    window.scrollTo(0, 0);
  });

  window.addEventListener('hashchange', renderRoute);
  renderRoute();
})();
