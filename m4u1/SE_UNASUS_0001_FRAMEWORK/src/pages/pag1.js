import { inject, onMounted, onUnmounted, ref } from 'vue'
import { initInteracoesUnidade, destroyInteracoesUnidade } from '../composables/unidade.js'

export default {
  emits: ['getData'],
  setup(props, ctx) {
    const navigation = inject('navigation')
    // TODO: Título da página
    const title = ''

    const root = ref(null)

    onMounted(() => {
      ctx.emit('getData', title)
      initInteracoesUnidade(root.value)
    })

    onUnmounted(() => destroyInteracoesUnidade())

    return {
      navigation,
      root,
    }
  },
  template: `
    <div id="pag1" ref="root">
      <section class="banner-unidade">
        <div class="container-fluid p-0">
          <div class="row align-items-center g-0 flex-nowrap">
            <div class="col banner-texto">
              <!-- TODO: Nome do módulo -->
              <h3 class="modulo-titulo mt-4"></h3>
              <h1 class="unidade-numero">Unidade 1</h1>
              <h1 class="unidade-subtitulo">Determinação social, iniquidades e interseccionalidades</h1>
            </div>
            <div class="col-auto banner-imagem">
              <!-- TODO: Nome do módulo -->
              <img src="./src/assets/img/geral/título.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="barra-objetivo">
        <div class="container px-5 py-4">
          <div class="row">
            <div class="col-12">
              <h4 style="margin-top: 0 !important;">Objetivo geral da Unidade:</h4>
              <h5>Promover a determinação social do processo saúde-doença no contexto da privação de liberdade.</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container py-5">
          <ol class="lista-outline" style="--secao: 1;">
            <li>Organização da atenção à saúde no sistema prisional</li>
          </ol>
          <p>A organização da atenção à saúde no sistema prisional brasileiro é orientada pelos princípios do SUS. A Constituição Federal de 1988, a Lei de Execução Penal (Lei nº 7.210/1984) e a Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional, instituída em 2014, reconhecem que as pessoas privadas de liberdade mantêm o direito à saúde e devem ter acesso às ações e serviços ofertados à população em geral.</p>
          <p>Nesse contexto, a atenção à saúde nas prisões deve ser organizada de forma integrada à Rede de Atenção à Saúde  (RAS), superando a lógica de isolamento institucional historicamente presente nesses espaços.</p>
          <p>Segundo Starfield (2002), a Atenção Primária à Saúde (APS) deve constituir a principal porta de entrada para o cuidado em saúde. No sistema prisional não é diferente. As equipes de Atenção Primária Prisional (eAPP) são responsáveis pelo acolhimento e acompanhamento contínuo da população privada de liberdade, desenvolvendo as seguintes ações.</p>
          <img src="src/assets/img/unidade/img-1.svg" alt="" class="w-100">
          <p>Essas equipes atuam de forma multiprofissional e devem realizar o atendimento integral, incluindo acolhimento, a identificação das necessidades de saúde, o acompanhamento de condições crônicas e todos os ciclos de vida. Além de questões de gênero e étnico-raciais, deve acolher as deficiências, promover a atenção à saúde mental, à saúde da mulher e do idoso, estabelecer pontes com as famílias, estimular redes de apoio social, entre outras demandas específicas desta população.</p>
          <div class="split">
            <p>Como sabemos, a APS é responsável pela coordenação do cuidado e sua capacidade resolutiva depende também da corresponsabilidade e dos compartilhamentos dos casos com outros serviços extramuros a fim de prover exames diagnósticos, atendimentos hospitalares e ações de urgência e emergência.</p>
            <p>Dessa forma, a organização da atenção à saúde no sistema prisional depende da articulação efetiva com os demais pontos da RAS. A regulação do acesso aos serviços especializados, o transporte sanitário e a comunicação entre as equipes de saúde prisional e os serviços externos são elementos fundamentais para garantir a continuidade do cuidado e evitar interrupções nos tratamentos.</p>
          </div>
          <img src="src/assets/img/unidade/img-2.svg" alt="" class="mx-auto my-4 d-block w-80">
          <div class="split">
            <p>No âmbito da saúde prisional, o cuidado das pessoas privadas de liberdade mantém a lógica das RAS. Segundo Mendes (2011), as RAS são arranjos organizativos de ações e serviços de saúde, de diferentes densidades tecnológicas, que, integrados por sistemas de apoio, logísticos e de gestão, buscam garantir a integralidade do cuidado a uma população definida. Trata-se, portanto, de um trabalho em rede, baseado na cooperação e na interdependência entre serviços e coordenado pela atenção primária.</p>
            <p>Nessa lógica, a eAPP ocupa o lugar de centro de comunicação da rede: é ela que coordena o cuidado e articula a pessoa aos demais pontos de atenção e programas do SUS. Vale lembrar que a eAPP é uma equipe multiprofissional e que, diferentemente da Estratégia Saúde da Família, não conta com agentes comunitários de saúde. Para organizar a RAS no território prisional, ajuda a reconhecer os cinco componentes que Mendes (2011) descreve. Vamos conhecê-los melhor.</p>
          </div>
          <img src="src/assets/img/unidade/img-3.svg" alt="" class="mx-auto my-4 d-block w-100">
          <div class="split">
            <p>A RAS é composta por serviços de saúde do SUS. Vale lembrar que para que seja possível atender às necessidades da pessoa, é importante acionar recursos disponíveis provenientes das diferentes políticas públicas vigentes. O Sistema Único de Assistência Social (SUAS), os órgãos da justiça e da segurança pública, os conselhos de direitos e as entidades da sociedade civil não integram a RAS, mas compõem a rede intersetorial com a qual a saúde prisional precisa se articular para enfrentar os determinantes sociais. Essa articulação é dinâmica e se organiza conforme a realidade de cada território, por isso a equipe deve conhecer e acionar os parceiros disponíveis no seu contexto local.</p>
            <p>A assistência farmacêutica também faz parte da RAS das pessoas privadas de liberdade e é consolidada por meio da Relação Nacional de Medicamentos Essenciais (RENAME). É importante saber que os medicamentos disponíveis na sua UBSP são os mesmos das UBS para pessoas extramuros.</p>
            <!-- TODO: Saiba mais -->
          </div>
          <p>Sobre a escolha destes insumos no SUS, destaca-se que o Ministério da Saúde é o órgão competente pela gestão e organização da política de saúde nacional, e a competência legal de dispor sobre a RENAME e os Protocolos Clínicos (PCDT) pertence à Comissão Intergestores Tripartite (CIT). </p>
          <p>O Ministério da Saúde consolidava e publicava as atualizações da RENAME a cada dois anos. No entanto, a RENAME passou a contar com um modelo de atualização dinâmica e em tempo real para modernizar o acesso à lista. Vários desafios dificultam a efetivação desse modelo de atenção, e é importante reconhecer que as barreiras ao cuidado de qualidade não estão de um lado só. Elas se originam tanto no sistema penal-carcerário quanto no próprio sistema de saúde, havendo barreiras de acesso em ambos.</p>
          <p>Por isso, a atenção à saúde no sistema prisional deve ser compreendida como uma responsabilidade compartilhada entre os gestores da saúde, da administração penitenciária e das demais políticas públicas, resumido pelo tripé saúde-segurança-justiça. Discutir a saúde das pessoas privadas de liberdade, além de contribuir para a proteção da dignidade humana intramuros, também fortalece toda a comunidade, uma vez que, além das pessoas privadas de liberdade, este sistema conta com familiares e profissionais da saúde e da segurança pública.</p>
          <div class="split">
            <img src="src/assets/img/unidade/img-1.png" alt="">
            <p>Outro fator importante é o papel que a oferta de um cuidado integral pode contribuir para a reintegração e ressocialização que o sistema penal se propõe, uma vez que as pessoas privadas de liberdade retornarão às suas comunidades em algum momento.</p>
            <p class="pt-3">Assim, a organização da atenção à saúde no sistema prisional representa um importante desafio para a consolidação dos princípios do SUS e para a promoção da equidade em saúde, sem que sua privação de liberdade seja entendida como uma quebra da longitudinalidade do cuidado que propõe a APS (Minayo; Ribeiro, 2016).</p>
          </div>
          <p>Para compreender de forma mais aprofundada essa organização, é fundamental reconhecer o sistema prisional como um território de atuação da APS, que embora apresente características singulares relacionadas à privação de liberdade, à segurança institucional e às dinâmicas sociais próprias, o ambiente prisional constitui um espaço onde vivem, trabalham e interagem diferentes sujeitos, produzindo necessidades de saúde específicas e complexas.</p>
          <p>A partir da perspectiva da territorialização, torna-se possível identificar vulnerabilidades, recursos disponíveis, fluxos assistenciais, barreiras de acesso e oportunidades de intervenção que influenciam diretamente a qualidade do cuidado ofertado.</p>
          <p>Ao longo desta unidade, você será convidado a analisar como a organização dos serviços, a articulação com a RAS e os processos de trabalho das equipes interferem no acesso e na continuidade do cuidado das pessoas privadas de liberdade. Ao aprofundar conhecimentos sobre normas e estruturas organizacionais, o objetivo é desenvolver um olhar crítico sobre as possibilidades concretas de qualificação do cuidado e de fortalecimento do direito à saúde para uma população historicamente marcada por situações de vulnerabilidade e exclusão social.</p>
          <ol id="secao-1-1" class="lista-outline lista-outline-sub" style="--secao: 1;">
            <li>Higiene das pessoas privadas de liberdade e pobreza menstrual</li>
          </ol>
          <img src="src/assets/img/unidade/img-4.svg" alt="" class="my-4 w-100">
          <p>O primeiro esforço de regulamentação e de expansão efetiva de equipes veio com o Plano Nacional de Saúde no Sistema Penitenciário (PNSSP), instituído pela Portaria Interministerial nº 1.777/2003, que vigorou até 2013.</p>
          <p>O PNSSP ampliou de forma importante o número de equipes e já aproximava os serviços prisionais da Atenção Básica, inclusive pelo cadastramento das unidades no Cadastro Nacional de Estabelecimentos de Saúde (CNES). Tinha limites significativos, no entanto, concentrava-se na população em regime fechado, deixando de fora pessoas em regime provisório e em delegacias, e sua cobertura permaneceu em torno de 30%, bem abaixo do ritmo de crescimento da população prisional no período.</p>
          <p>Em 2014, o PNSSP é substituído pela Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade, instituída pela Portaria Interministerial nº 1/2014.</p>
          <img src="src/assets/img/unidade/img-5.svg" alt="" class="my-4 w-80 d-block mx-auto">
          <div class="split">
            <p>Reafirma, ainda, a responsabilidade compartilhada entre União, estados e municípios. Essa evolução é também simbólica: como observa Teixeira Junior (2024), os termos mudam ao longo do tempo — da "atenção" da LEP à "assistência" do PNSSP e ao "cuidado" da PNAISP —, assim como a própria designação "pessoas privadas de liberdade", que resgata a ideia de sujeito para além do estigma da condição penal.</p>
            <p>Do ponto de vista político, a importância da PNAISP vai muito além da operacionalização de serviços. Ao reconhecer a população privada de liberdade como responsabilidade da rede pública de saúde, a política fortalece tanto a universalidade quanto a equidade do SUS, afinal, é uma política dirigida a um grupo específico, marcado por profundas desigualdades.</p>
          </div>
          <p>O sistema penal brasileiro é seletivo, e a seletividade penal e o racismo institucional fazem com que o encarceramento recaia de forma desproporcional sobre a população historicamente vulnerada, reproduzindo práticas históricas de exclusão e segregação. Garantir saúde de qualidade às pessoas presas é, nesse sentido, também uma resposta de equidade a uma iniquidade socialmente produzida.</p>
          <p>A PNAISP reconhece que os problemas vividos por essa população não podem ser enfrentados por um único setor. Por isso aproxima a saúde de outros campos, como justiça, administração penitenciária, assistência social e educação, apostando na articulação intersetorial. Convém lembrar, contudo, que essa articulação não é apenas harmônica, na prática, a lógica do cuidado convive, e por vezes tensiona, com a lógica da segurança, e a gestão compartilhada entre saúde e administração penitenciária é, ela mesma, um campo de negociação permanente (Teixeira Junior, 2024).</p>
          <p>A seguir, apresentaremos os princípios e as diretrizes da PNAISP e seus objetivos específicos.</p>
          <!-- TODO: Group -->
          <p>A PNAISP veio também para reforçar no Brasil as Regras de Nelson Mandela.  Essas regras surgiram em 1955 quando a então Organização das Nações Unidas (ONU) aprovou as Regras Mínimas para o Tratamento de Presos durante o Primeiro Congresso das Nações Unidas sobre Prevenção do Crime e Tratamento de Delinquentes. Naquele momento, o mundo vivia o período pós Segunda Guerra Mundial, marcado pela consolidação dos direitos humanos como um valor universal após as atrocidades cometidas durante o conflito.</p>
          <p>O objetivo era definir parâmetros mínimos de dignidade que todos os países deveriam observar em seus sistemas prisionais. Ao longo das décadas seguintes, transformações sociais, jurídicas e científicas evidenciaram a necessidade de atualizar essas regras. Temas como saúde mental, prevenção da tortura, uso da força, isolamento prisional, acesso à saúde e respeito à dignidade humana ganharam maior relevância no debate internacional. Em 2015, após um amplo processo de revisão conduzido pela ONU, a Assembleia Geral aprovou uma versão atualizada das Regras Mínimas para o Tratamento de Presos. Em homenagem a Nelson Mandela, elas passaram a ser conhecidas como Regras de Nelson Mandela. '</p>
          <!-- TODO: Saiba mais -->
          <p>Como a PNAISP e as regras de Nelson Mandela (a privação de liberdade não pode significar privação do direito à saúde, à dignidade e à cidadania) influenciam diretamente na sua autonomia enquanto profissional de saúde dentro do ambiente prisional? Em ambos, existe a garantia de que a clínica seja soberana e o profissional de saúde tenha independência técnica dentro do cárcere. Os principais pontos de convergência para a preservação da autonomia do profissional de saúde são os descritos a seguir, acompanhe.</p>
          <img src="src/assets/img/unidade/img-6.svg" alt="" class="my-4 w-100">
          <p>Portanto, enquanto as Regras de Mandela oferecem o respaldo ético internacional para a coordenação do cuidado, a PNAISP fornece o arcabouço jurídico e administrativo no Brasil para que você exerça sua profissão com a liberdade necessária para enfrentar as iniquidades do ambiente carcerário.</p>
          <ol class="lista-outline" style="--secao: 1; --item: 1">
            <li>Competências dos entes federativos na implementação da PNAISP</li>
          </ol>
          <p>A organização da saúde no sistema prisional reflete o próprio modelo federativo do SUS, no qual União, estados e municípios compartilham responsabilidades. Diferentemente de um modelo centralizado, a PNAISP foi estruturada para que cada esfera de governo exerça funções complementares, respeitando as competências previstas na Constituição Federal de 1988 e na Lei Orgânica da Saúde (Lei nº 8.080/1990).</p>
          <p>Essa divisão de responsabilidades permite que a formulação das políticas ocorra em âmbito nacional, enquanto a organização dos serviços e a oferta do cuidado sejam adaptadas às realidades regionais e locais. Ao mesmo tempo, exige intensa cooperação entre gestores da saúde e da administração prisional, uma vez que a atenção à saúde das pessoas privadas de liberdade envolve tanto o sistema de saúde quanto o sistema de justiça e segurança pública.</p>
          <p>Conheça, a seguir, as especificidades da União, dos estados e dos municípios brasileiros. </p>
          <!-- TODO: Continuar daqui -->
        </div>
      </section>
    </div>
  `
}
