import { inject, onMounted, onUnmounted, ref } from 'vue'
import { initInteracoesUnidade, destroyInteracoesUnidade } from '../composables/unidade.js'

export default {
  emits: ['getData'],
  setup(props, ctx) {
    const navigation = inject('navigation')
    const title = 'Unidade 1'

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
              <h5>Compreender os princípios, as diretrizes e os mecanismos de organização da atenção à saúde no sistema prisional.</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container py-5">
          <ol id="secao-1" class="lista-outline" style="--secao: 1;">
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
            <p>A assistência farmacêutica também faz parte da RAS das pessoas privadas de liberdade e é consolidada por meio da Relação Nacional de Medicamentos Essenciais (RENAME). É importante saber que os medicamentos disponíveis na sua UBSP são os mesmos das UBS para pessoas extramuros.
            </p>
            <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-1">
              <img src="./src/assets/img/geral/saibamais-botao.svg" alt="Saiba mais">
            </button>
            <div class="modal fade modal-saibamais" id="modal-1" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="card-saibamais" data-bs-dismiss="modal">
                    <div class="card-saibamais-icone">
                      <img src="./src/assets/img/geral/saibamais.svg" alt="">
                    </div>
                    <div class="card-saibamais-texto">
                      <h4>Saiba mais</h4>
                      <p>Para facilitar o acesso de profissionais de saúde e pacientes, o Ministério da Saúde disponibiliza as monografias e a lista no aplicativo MedSUS. Disponível em: <a href="https://www.gov.br/saude/pt-br/composicao/sectics/rename" target="_blank" class="text-black">https://www.gov.br/saude/pt-br/composicao/sectics/rename</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div id="group-1" class="mt-img">
            <div class="row m-img px-3 rounded-4">
              <div class="col px-0">
                <div style="border: 1px solid #0037D7; border-radius: 16px 0px 0px 16px;" class="py-3">
                  <a data-bs-toggle="collapse" href="#group-1-1" role="button" aria-expanded="true" aria-controls="group-1-1" class="fw-bold text-center text-decoration-none d-block" style="color: #0037D7;">Princípios</a>
                </div>
              </div>
              <div class="col px-0">
                <div style="border: 1px solid #0037D7;" class="py-3">
                  <a data-bs-toggle="collapse" href="#group-1-2" role="button" aria-expanded="false" aria-controls="group-1-2" class="fw-bold text-center text-decoration-none d-block" style="color: #0037D7;">Diretrizes</a>
                </div>
              </div>
              <div class="col px-0">
                <div style="border: 1px solid #0037D7; border-radius: 0px 16px 16px 0px;" class="py-3">
                  <a data-bs-toggle="collapse" href="#group-1-3" role="button" aria-expanded="false" aria-controls="group-1-3" class="fw-bold text-center text-decoration-none d-block" style="color: #0037D7;">Objetivos</a>
                </div>
              </div>
            </div>
            <div id="group-1-1" data-bs-parent="#group-1" class="collapse show">
              <img src="src/assets/img/unidade/group-1-1.svg" alt="" class="w-100 mt-3">
            </div>
            <div id="group-1-2" data-bs-parent="#group-1" class="collapse">
              <img src="src/assets/img/unidade/group-1-2.svg" alt="" class="w-100 mt-3">
            </div>
            <div id="group-1-3" data-bs-parent="#group-1" class="collapse">
              <img src="src/assets/img/unidade/group-1-3.svg" alt="" class="w-100 mt-3">
            </div>
          </div>
          <p>A PNAISP veio também para reforçar no Brasil as Regras de Nelson Mandela. Essas regras surgiram em 1955 quando a então Organização das Nações Unidas (ONU) aprovou as Regras Mínimas para o Tratamento de Presos durante o Primeiro Congresso das Nações Unidas sobre Prevenção do Crime e Tratamento de Delinquentes. Naquele momento, o mundo vivia o período pós Segunda Guerra Mundial, marcado pela consolidação dos direitos humanos como um valor universal após as atrocidades cometidas durante o conflito.</p>
          <p>O objetivo era definir parâmetros mínimos de dignidade que todos os países deveriam observar em seus sistemas prisionais. Ao longo das décadas seguintes, transformações sociais, jurídicas e científicas evidenciaram a necessidade de atualizar essas regras. Temas como saúde mental, prevenção da tortura, uso da força, isolamento prisional, acesso à saúde e respeito à dignidade humana ganharam maior relevância no debate internacional. Em 2015, após um amplo processo de revisão conduzido pela ONU, a Assembleia Geral aprovou uma versão atualizada das Regras Mínimas para o Tratamento de Presos. Em homenagem a Nelson Mandela, elas passaram a ser conhecidas como Regras de Nelson Mandela.'</p>
          <div class="row px-3 align-items-center">
            <div class="col px-0">
              <div class="bg-white p-4" style="border-bottom: 4px solid #E9A80F;">
                <p>A escolha do nome possui forte significado simbólico. Mandela passou cerca de 27 anos preso durante o regime do apartheid na África do Sul por sua luta contra a segregação racial. Sua trajetória tornou-se um símbolo mundial da defesa da dignidade humana, da justiça e dos direitos das pessoas submetidas à privação de liberdade.</p>
                <p>Ao integrar a população privada de liberdade ao SUS, a PNAISP dialoga com a ideia central das Regras de Nelson Mandela: a privação de liberdade não pode significar privação do direito à saúde, à dignidade e à cidadania.</p>
                <button type="button" class="btn-saibamais ms-auto me-0" data-bs-toggle="modal" data-bs-target="#modal-4">
                  <img src="./src/assets/img/geral/saibamais-botao.svg" alt="Saiba mais">
                </button>
                <div class="modal fade modal-saibamais" id="modal-4" tabindex="-1" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                      <div class="card-saibamais" data-bs-dismiss="modal">
                      <div class="card-saibamais-icone">
                        <img src="./src/assets/img/geral/saibamais.svg" alt="">
                      </div>
                      <div class="card-saibamais-texto">
                        <h4>Saiba mais</h4>
                        <p>Acesse a sua biografia em:</p>
                        <p>NELSON MANDELA FOUNDATION. Nelson Mandela Biography. Johannesburg, [s.d.]. Disponível em: <a href="https://www.nelsonmandela.org" target="_blank" class="text-black">https://www.nelsonmandela.org</a>. Acesso em: 21 jun. 2026. </p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col px-0">
              <img src="src/assets/img/unidade/img-5.png" alt="" class="w-100">
            </div>
          </div>
          <p>Como a PNAISP e as regras de Nelson Mandela (a privação de liberdade não pode significar privação do direito à saúde, à dignidade e à cidadania) influenciam diretamente na sua autonomia enquanto profissional de saúde dentro do ambiente prisional? Em ambos, existe a garantia de que a clínica seja soberana e o profissional de saúde tenha independência técnica dentro do cárcere. Os principais pontos de convergência para a preservação da autonomia do profissional de saúde são os descritos a seguir, acompanhe.</p>
          <img src="src/assets/img/unidade/img-6.svg" alt="" class="my-4 w-100">
          <p>Portanto, enquanto as Regras de Mandela oferecem o respaldo ético internacional para a coordenação do cuidado, a PNAISP fornece o arcabouço jurídico e administrativo no Brasil para que você exerça sua profissão com a liberdade necessária para enfrentar as iniquidades do ambiente carcerário.</p>
          <ol id="secao-2" class="lista-outline" style="--secao: 1; --item: 1">
            <li>Competências dos entes federativos na implementação da PNAISP</li>
          </ol>
          <p>A organização da saúde no sistema prisional reflete o próprio modelo federativo do SUS, no qual União, estados e municípios compartilham responsabilidades. Diferentemente de um modelo centralizado, a PNAISP foi estruturada para que cada esfera de governo exerça funções complementares, respeitando as competências previstas na Constituição Federal de 1988 e na Lei Orgânica da Saúde (Lei nº 8.080/1990).</p>
          <p>Essa divisão de responsabilidades permite que a formulação das políticas ocorra em âmbito nacional, enquanto a organização dos serviços e a oferta do cuidado sejam adaptadas às realidades regionais e locais. Ao mesmo tempo, exige intensa cooperação entre gestores da saúde e da administração prisional, uma vez que a atenção à saúde das pessoas privadas de liberdade envolve tanto o sistema de saúde quanto o sistema de justiça e segurança pública.</p>
          <p>Conheça, a seguir, as especificidades da União, dos estados e dos municípios brasileiros.</p>
          <img src="src/assets/img/unidade/img-7.svg" alt="" class="my-4 w-100">
          <p>Embora as competências estejam distribuídas entre União, estados e municípios, a efetividade da PNAISP depende da atuação integrada entre essas três esferas de governo. A fragmentação das responsabilidades pode gerar lacunas na assistência quando não há mecanismos eficientes de comunicação, planejamento e financiamento.</p>
          <p>Situações como encaminhamento para consultas especializadas, transporte de pessoas privadas de liberdade, fornecimento de medicamentos de alto custo ou realização de exames complexos frequentemente exigem a participação simultânea de diferentes gestores. Assim, o sucesso da política depende menos da atuação isolada de cada ente e mais da capacidade de cooperação interfederativa.</p>
          <p>Nesse contexto, as Comissões Intergestores Bipartite (CIB) e a Comissão Intergestores Tripartite (CIT) desempenham papel relevante ao pactuar responsabilidades, definir fluxos assistenciais e estabelecer critérios de financiamento para a implementação da PNAISP.</p>
          <p>Reconhecemos que, apesar da definição formal das competências, diversos desafios ainda comprometem a consolidação da política no país. Entre os principais destacam-se os descritos a seguir, acompanhe.</p>
          <img src="src/assets/img/unidade/img-8.svg" alt="" class="my-4 w-80 d-block mx-auto">
          <div class="split">
            <p>Embora os problemas do sistema prisional sejam amplamente conhecidos pelo poder público e pela sociedade, ainda existem dificuldades para transformar os princípios legais em ações concretas (Fernandes, 2014). Entre os principais entraves estão a inadequação da infraestrutura das unidades prisionais, a insuficiência de recursos humanos, as limitações no acesso aos serviços especializados e as dificuldades de articulação entre o sistema prisional e a Rede de Atenção à Saúde. Essas fragilidades contribuem para manter um cenário em que as condições de encarceramento se tornam fatores determinantes do processo saúde-doença.</p>
            <p>Complementando essa análise, Assis (2007) destaca que características como superlotação, insalubridade, ventilação inadequada, alimentação insuficiente, baixa oferta de atividades físicas e dificuldades para manutenção da higiene favorecem a ocorrência de doenças e agravam condições de saúde preexistentes. Dessa forma, o ambiente prisional pode potencializar vulnerabilidades já existentes, reforçando a necessidade de políticas públicas capazes de garantir condições dignas de vida e assegurar o direito constitucional à saúde das pessoas privadas de liberdade.</p>
          </div>
          <p>Ferreira (2011, p. 511) reflete que a ordem social atual produz desemprego, emprego precário e redução da proteção social, fatores que têm sido “paliativamente” enfrentados com força de polícia e pena de prisão, em uma lógica fundamentalmente punitiva, repressiva e de controle.</p>
          <p>As condições estruturais que caracterizam grande parte das prisões brasileiras, como superlotação, ociosidade, violência e precariedade das condições de vida, comprometem não apenas a saúde física e mental das pessoas privadas de liberdade, mas também o próprio objetivo de ressocialização. Em um ambiente que frequentemente reproduz exclusão e violações de direitos, torna-se necessário questionar em que medida é possível promover a reintegração social de forma efetiva?</p>
          <p>Esses desafios demonstram que a simples definição normativa das responsabilidades não garante, por si só, a efetivação do direito à saúde. É necessário fortalecer mecanismos de governança, planejamento regional, financiamento adequado e cooperação entre os diferentes níveis de gestão.</p>
          <ol id="secao-3" class="lista-outline" style="--secao: 1; --item: 2;">
            <li>Acesso e organização da atenção à saúde no sistema prisional</li>
          </ol>
          <p>Você sabe que o SUS é um sistema de saúde de tipo universal, criado em 1988, como resultado direto da promulgação da “Constituição Cidadã”. Abrange todas as dimensões da saúde, da promoção, proteção e prevenção até a reabilitação, oferecendo desde atenção básica até o atendimento mais especializado, a fim de garantir o direito à saúde integral e gratuita à população.</p>
          <p>A privação de liberdade restringe apenas o direito de ir e vir, não os demais direitos fundamentais. Por estarem sob a custódia do Estado, as pessoas privadas de liberdade têm direito ao acesso à saúde e a outras políticas públicas, cabendo ao poder público garantir condições para a efetivação desses direitos, conforme previsto na Constituição Federal.</p>
          <div class="split">
            <img src="src/assets/img/unidade/img-2.png" alt="">
            <p>Para o médico que atua nesse cenário, é imperativo compreender que a saúde prisional não é um sistema isolado, mas parte integrante e indissociável do SUS, pautada pelo princípio da universalidade: a pessoa privada de liberdade (PPL) mantém seu direito à dignidade e à saúde, devendo receber um padrão de cuidado equivalente ao oferecido à comunidade externa.</p>
            <p class="pt-3">A principal inovação da PNAISP foi reconhecer os serviços de saúde presentes nas unidades prisionais como pontos de atenção da RAS, atribuindo à APS o papel de porta de entrada preferencial do sistema e coordenadora do cuidado.</p>
          </div>
          <p>Dessa forma, as equipes de saúde prisional passam a desenvolver ações de promoção da saúde, prevenção de agravos, assistência, vigilância em saúde e acompanhamento longitudinal das pessoas privadas de liberdade, seguindo os mesmos princípios organizativos que orientam a APS nos territórios comunitários. A política também estabelece que o cuidado ofertado no ambiente prisional deve estar articulado com os demais níveis de atenção, garantindo acesso a consultas especializadas, exames diagnósticos, internações hospitalares e serviços de saúde mental quando necessário (Brasil, 2026).</p>
          <p>Apesar dos avanços normativos, estudos apontam que dificuldades logísticas relacionadas à segurança, à escolta para atendimentos externos, ao transporte sanitário e à insuficiência de recursos humanos frequentemente comprometem a continuidade do cuidado (Pacheco et al., 2024). Além disso, a elevada carga de doenças infecciosas, transtornos mentais, uso problemático de álcool e outras drogas e condições crônicas exige uma rede de atenção integrada e capaz de responder às necessidades específicas dessa população. A integralidade do cuidado depende da superação de práticas fragmentadas e do fortalecimento da articulação intersetorial entre saúde, justiça, assistência social e direitos humanos (Barbosa et al., 2022)</p>
          <div class="split">
            <p>O acesso à saúde no sistema prisional requer uma compreensão ampliada do território. Embora marcado pela privação de liberdade, o ambiente prisional é um território vivo, onde circulam pessoas, e há relações de trabalho, fluxos institucionais e necessidades de saúde diversas.</p>
            <p>Nesse sentido, a territorialização não se restringe à delimitação geográfica da unidade prisional, mas envolve o reconhecimento das condições de vida, dos perfis epidemiológicos, das vulnerabilidades e dos recursos disponíveis para o cuidado. Compreender a prisão como território de atuação da APS permite identificar barreiras e potencialidades para a organização dos serviços, favorecendo o planejamento de ações mais efetivas e equitativas.</p>
            <img src="src/assets/img/unidade/img-3.png" alt="">
          </div>
          <p>Ressaltamos, neste contexto, que é necessário desenvolver a capacidade de analisar criticamente os desafios que atravessam o cuidado e reconhecer oportunidades de transformação. Este é um convite para refletir com sua equipe e buscar ir além de conhecer fluxos assistenciais e normativas.</p>
            <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-4">
              <img src="./src/assets/img/geral/saibamais-botao.svg" alt="Saiba mais">
            </button>
            <div class="modal fade modal-saibamais" id="modal-4" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                  <div class="card-saibamais" data-bs-dismiss="modal">
                  <div class="card-saibamais-icone">
                    <img src="./src/assets/img/geral/saibamais.svg" alt="">
                  </div>
                  <div class="card-saibamais-texto">
                    <h4>Saiba mais</h4>
                    <p>Para aprofundar seus estudos, sugerimos conhecer o capítulo “32 – Cuidado incondicional” do livro “Teorias e sentidos de uma prática abolicionista”.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          <ol id="secao-4" class="lista-outline" style="--secao: 1; --item: 3;">
            <li>Financiamento, adesão e credenciamento na política</li>
          </ol>
          <p>Para que a assistência aconteça de forma organizada e sustentável, a PNAISP conta com processos específicos de adesão, credenciamento e financiamento. Como médico atuante na Atenção Primária Prisional, é fundamental que você compreenda essas etapas, pois elas definem como as equipes são implantadas, financiadas e integradas à Rede de Atenção à Saúde.</p>
          <p>A adesão à política é o compromisso formal que o Estado ou Município firma com a União para implantar as ações de saúde, exigindo a assinatura de um Termo de Adesão e a elaboração de um Plano de Ação específico. No caso dos municípios, essa adesão é facultativa, mas obrigatória se eles desejarem gerir suas próprias equipes, dependendo sempre de o Estado já ter aderido previamente (Brasil, 2014).</p>
          <img src="src/assets/img/unidade/img-9.svg" alt="">
          <p>Agora, convidamos você a conhecer melhor o fluxo de solicitação de credenciamento.</p>
          <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-2">
            <img src="./src/assets/img/geral/cliqueaqui-botao.svg" alt="Saiba mais">
          </button>
          <div class="modal fade modal-saibamais" id="modal-2" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content">
                <div class="card-saibamais" data-bs-dismiss="modal">
                  <img src="./src/assets/img/unidade/modal-2.svg" alt="" class="w-100">
                </div>
              </div>
            </div>
          </div>
          <p>Para formulação do plano de ação estadual, você pode encontrar o modelo no <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2014/pri0001_02_01_2014.html" target="_blank" class="text-black">Anexo III da Portaria da PNAISP 2014</a>. Mas aqui você vai ser apresentado aos principais pontos que devem ser abordados na construção de um plano sólido, confira!</p>
          <div class="row">
            <div class="col">
              <p class="fw-bold">Instâncias e responsabilidades</p>
              <p>Defina claramente o papel das Secretarias de Saúde e de Administração Penitenciária na gestão e apoio das ações.</p>
              <p class="fw-bold">Abrangência e público-alvo</p>
              <p>Quantifique a população privada de liberdade no estado e identifique cada unidade prisional que receberá assistência.</p>
              <p class="fw-bold">Constituição do grupo condutor</p>
              <p>Estabeleça como funcionará o grupo responsável por mobilizar os dirigentes e monitorar a implementação da política.</p>
              <p class="fw-bold">Gestão do trabalho</p>
              <p>Planeje a contratação das equipes, definindo as jornadas de trabalho, os vínculos profissionais e os programas de educação permanente.</p>
              <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-3">
                <img src="./src/assets/img/geral/saibamais-botao.svg" alt="Saiba mais">
              </button>
              <div class="modal fade modal-saibamais" id="modal-3" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                    <div class="card-saibamais" data-bs-dismiss="modal">
                      <div class="card-saibamais-icone">
                        <img src="./src/assets/img/geral/saibamais.svg" alt="">
                      </div>
                      <div class="card-saibamais-texto">
                        <h4>Saiba mais</h4>
                        <p>O passo a passo para registrar corretamente as eAPP no SCNES pode ser consultado <a target="_blank" class="text-black" href="https://wiki.saude.gov.br/cnes/index.php/Cadastro_de_Equipes#:~:text=explicado%20%20mais%20adiante.-,Cadastro%20de%20Equipe,ser%20realizado%20na%20aba%20Caracteriza%%20C3%A7%C3%A3o.">clicando aqui.</a></p>
                        <p>Demais orientações sobre a solicitação de credenciamento e adesão de equipes, serviços e programas da APS podem ser consultadas na Nota Técnica nº 282 (Brasil, 2023). Acesse: <a href="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2023/nota-tecnica-no-282-2023.pdf/view" class="text-black" target="_blank">https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2023/nota-tecnica-no-282-2023.pdf/view</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <p class="fw-bold">Ambiência e infraestrutura </p>
              <p>Caracteriza o espaço físico das unidades de saúde nos presídios, garantindo que atendam às normas sanitárias vigentes.</p>
              <p class="fw-bold">Fluxos de assistência</p>
              <p>Organize a logística de transporte sanitário e a articulação com a rede externa para garantir o acesso a consultas e exames de média e alta complexidade.</p>
              <p class="fw-bold">Sistemas de informação</p>
              <p>Indique como será feito o cadastramento dos usuários e o uso do prontuário eletrônico (e-SUS APS) para o acompanhamento clínico.</p>
              <p class="fw-bold">Monitoramento epidemiológico</p>
              <p>Estabeleça indicadores para controlar agravos prevalentes, como tuberculose, HIV, saúde mental e condições crônicas.</p>
            </div>
          </div>
          <p>Vale também destacar um assunto importante! Para o recebimento do incentivo financeiro federal mensal de custeio das Equipes de Atenção Primária Prisional (eAPP), três aspectos devem ser observados. Em primeiro lugar, é importante saber que o repasse só acontecerá após a publicação da habilitação da equipe no Diário Oficial da União. Além disso, a Secretaria de Saúde pode complementar as equipes mínimas com outros profissionais, sem prejuízo do repasse federal. Por fim, a forma de contratação dos profissionais é de responsabilidade da gestão local.</p>
          <ol id="secao-5" class="lista-outline" style="--secao: 1; --item: 4;">
            <li>Componente básico da assistência farmacêutica</li>
          </ol>
          <p>Além do financiamento destinado às equipes, a PNAISP conta com recursos específicos para a Assistência Farmacêutica. Todos os anos, o Ministério da Saúde realiza o repasse do Componente Básico da Assistência Farmacêutica (CBAF) voltado à população privada de liberdade. Esse financiamento foi instituído pela Portaria GM/MS nº 2.765/2014, e atualmente está incorporado à Portaria de Consolidação GM/MS nº 6/2017.</p>
          <img src="src/assets/img/unidade/img-10.svg" alt="">
          <p>Por isso, é fundamental que você compreenda a importância da atualização dos dados da população privada de liberdade.</p>
          <div class="split">
            <p>Quando cada unidade prisional mantém essas informações atualizadas junto aos sistemas oficiais da SENAPPEN, o cálculo dos recursos torna-se mais preciso, contribuindo para um financiamento mais adequado das ações de saúde e da assistência farmacêutica no sistema prisional.</p>
            <p>É importante compreender que o repasse financeiro do CBAF, por si só, não garante o acesso aos medicamentos. A Assistência Farmacêutica constitui um conjunto de ações que envolve desde a seleção dos medicamentos até sua dispensação e o acompanhamento do tratamento.</p>
          </div>
          <p>Assim, além da disponibilidade de recursos financeiros, é necessário que gestores e equipes de saúde desenvolvam adequadamente todas as etapas do ciclo da Assistência Farmacêutica, que devem incluir os itens descritos a seguir.</p>
          <img src="src/assets/img/unidade/img-11.svg" alt="">
          <div class="split">
            <p>No contexto prisional, essas atividades assumem características próprias. As unidades prisionais apresentam elevada frequência de doenças transmissíveis, transtornos mentais, dependência de álcool e outras drogas, doenças crônicas, agravos relacionados à saúde bucal e elevada demanda por medicamentos de uso contínuo. Dessa forma, a programação da assistência farmacêutica deve considerar o perfil epidemiológico da população privada de liberdade, evitando tanto a falta quanto o desperdício de medicamentos.</p>
            <p>Outro aspecto relevante é que os medicamentos disponibilizados pelo CBAF devem estar em conformidade com a RENAME e com as listas estaduais e municipais de medicamentos, respeitando as pactuações realizadas entre os gestores do SUS. A seleção de medicamentos baseia-se em critérios científicos, epidemiológicos e de custo-efetividade, buscando assegurar o acesso às terapias consideradas essenciais para atender aos principais problemas de saúde da população.</p>
          </div>
          <p>Na atenção à saúde das pessoas privadas de liberdade, médicos, enfermeiros, farmacêuticos, dentistas e demais profissionais compartilham a responsabilidade pelo acompanhamento terapêutico. A integração entre esses profissionais favorece maior adesão ao tratamento, reduz erros de medicação e contribui para melhores resultados clínicos.</p>
          <p>Agora, convidamos você a imaginar uma pessoa privada de liberdade, em tratamento para hipertensão arterial e diabetes, seja transferida para outra unidade prisional sem que seu histórico medicamentoso acompanhe essa mudança. Quais riscos essa interrupção pode trazer para sua saúde? Como a organização da Assistência Farmacêutica pode contribuir para garantir a continuidade do tratamento?</p>
          <p>A Assistência Farmacêutica é componente essencial da continuidade do cuidado. O farmacêutico desempenha papel estratégico na organização dos estoques, na avaliação da prescrição, na prevenção de interações medicamentosas, no monitoramento de reações adversas e na orientação quanto ao uso correto dos medicamentos. No entanto, a qualidade da assistência farmacêutica depende da atuação integrada de toda a equipe multiprofissional. O diálogo permanente entre os profissionais fortalece a segurança do paciente, reduz falhas terapêuticas e favorece melhores resultados em saúde.</p>
          <ol id="secao-6" class="lista-outline" style="--secao: 1; --item: 5;">
            <li>Requisitos de validação das eAPP para financiamento</li>
          </ol>
          <p>Para que uma Equipe de Atenção Primária Prisional receba financiamento no âmbito da PNAISP, ela precisa atender aos requisitos de validação estabelecidos pelo Ministério da Saúde. Como profissional que atua nesse cenário, é importante compreender que o financiamento está condicionado não apenas à implantação formal da equipe, mas também à comprovação de seu funcionamento regular e da prestação efetiva dos serviços de saúde.</p>
          <div class="split">
            <img src="src/assets/img/unidade/img-4.png" alt="">
            <p>Esse processo de validação busca assegurar que os recursos públicos sejam destinados às equipes que estão efetivamente desenvolvendo ações assistenciais junto à população privada de liberdade.</p>
            <p class="pt-3">Para isso, gestores e equipes precisam manter atualizadas as informações nos sistemas oficiais do SUS, especialmente no Cadastro Nacional de Estabelecimentos de Saúde (CNES). Além disso, a equipe deve apresentar a composição profissional compatível com a modalidade de habilitação, manter carga horária adequada e desenvolver regularmente as atividades previstas pela PNAISP.</p>
          </div>
          <p>Outro requisito fundamental é o registro das ações realizadas. Toda produção assistencial deve ser informada nos sistemas nacionais de informação em saúde, permitindo acompanhar o número de atendimentos, os procedimentos realizados, as ações de promoção da saúde, prevenção de doenças e acompanhamento dos usuários. Esses registros constituem importante fonte de informação para o planejamento das ações, a avaliação da política e o monitoramento da utilização dos recursos financeiros.</p>
          <p>A atualização dos dados relativos à unidade prisional e à população privada de liberdade também é indispensável para o processo de validação. Informações inconsistentes ou desatualizadas podem comprometer o cálculo dos incentivos financeiros, dificultar o planejamento da assistência e produzir distorções na distribuição dos recursos entre estados e municípios.</p>
          <div class="split">
            <p>É importante destacar, neste contexto, que a responsabilidade pela validação das equipes não se limita ao gestor municipal ou estadual. Trata-se de um processo compartilhado que envolve gestores, coordenadores das equipes e todos os profissionais que realizam os registros assistenciais.</p>
            <p>Um prontuário preenchido corretamente, um cadastro atualizado no CNES ou o lançamento oportuno da produção assistencial não representam apenas exigências administrativas, mas são informações essenciais para demonstrar que o atendimento está sendo ofertado e para subsidiar o planejamento das políticas públicas.</p>
          </div>
          <p>Quando esses requisitos são atendidos, o Ministério da Saúde consegue acompanhar o funcionamento das equipes, avaliar a execução da política, monitorar indicadores assistenciais e assegurar a continuidade do repasse financeiro. Dessa forma, a validação fortalece a qualidade da atenção ofertada, amplia a transparência na aplicação dos recursos públicos e contribui para o aperfeiçoamento da gestão da saúde no sistema prisional.</p>
          <p>Neste sentido, registrar informações é uma atividade diretamente relacionada ao financiamento, ao planejamento, à avaliação da política e, principalmente, à garantia do direito à saúde.</p>
          <p>Depois do que lhe foi explicado, como você responderia à seguinte pergunta:</p>
          <div class="mx-auto my-4 p-4" style="border: 6px solid #DFDAC9; border-radius: 16px; width: 80%;">
            <p class="fw-bold">De acordo com a PNAISP, qual das alternativas apresenta um requisito necessário para que uma Equipe de Atenção Primária Prisional (eAPP) mantenha sua validação e o financiamento federal?</p>
            <ol>
              <li><strong>a)</strong> Realizar apenas atendimentos de urgência e emergência na unidade prisional.</li>
              <li><strong>b)</strong> Manter o cadastro da equipe atualizado no CNES e registrar regularmente as ações realizadas nos sistemas oficiais do SUS.</li>
              <li><strong>c)</strong> Atualizar os dados da equipe somente quando houver troca de profissionais.</li>
              <li><strong>d)</strong> Enviar informações assistenciais ao Ministério da Saúde apenas uma vez por ano.</li>
            </ol>
            <div class="mx-auto mt-4" style="width: 80%;">
              <a href="#hidden-text-1" data-bs-toggle="collapse" role="button" class="d-flex expandable-title justify-content-between">
                Resposta
                <img src="src/assets/img/geral/expandable-arrow.svg" alt="">
              </a>
              <div class="collapse" id="hidden-text-1">
                <div class="rounded-4 expandable-body">
                  <p><strong>Resposta:</strong> B.</p>
                  <p><strong>Comentário:</strong> Não se esqueça! Para manter a validação e o financiamento, a eAPP deve manter seu cadastro atualizado no CNES, registrar os atendimentos e demais ações nos sistemas oficiais do SUS, enviar regularmente sua produção assistencial e manter atualizados os dados relacionados à população privada de liberdade. Essas informações permitem o monitoramento das atividades e a continuidade do repasse financeiro.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="split">
            <p>A consolidação da PNAISP depende não apenas da atuação das equipes de saúde, mas também da qualidade das informações registradas nos sistemas oficiais do SUS. Esses sistemas constituem importantes instrumentos de gestão, permitindo acompanhar a implantação das equipes, monitorar a produção assistencial, subsidiar o planejamento das ações e avaliar a utilização dos recursos públicos.</p>
            <p>Neste sentido, o registro adequado das informações possibilita tornar visível o trabalho desenvolvido pelas equipes de saúde prisional. Quando uma consulta, um procedimento, uma vacinação ou uma atividade coletiva deixa de ser registrada, ela deixa também de compor os indicadores utilizados para avaliar o desempenho da política, dificultando o planejamento e o financiamento das ações.</p>
          </div>
          <img src="src/assets/img/unidade/img-12.svg" alt="" class="mt-3">
          <p>O Cadastro Nacional de Estabelecimentos de Saúde (CNES) representa a principal base de informações sobre a estrutura assistencial do SUS. É nesse sistema que são cadastrados os estabelecimentos de saúde, as eAPP, os profissionais que as compõem, suas cargas horárias e os vínculos de trabalho.</p>
          <p>No processo de validação das eAPP, o CNES permite verificar se a equipe está formalmente constituída de acordo com os critérios estabelecidos pelo Ministério da Saúde. Um cadastro desatualizado pode indicar, por exemplo, ausência de profissionais obrigatórios, incompatibilidade de carga horária ou equipes que deixaram de funcionar, comprometendo a continuidade do financiamento.</p>
          <p>Assim, manter o CNES atualizado é uma responsabilidade permanente dos gestores e constitui uma das principais condições para demonstrar que a equipe está regularmente implantada e em funcionamento.</p>
          <img src="src/assets/img/unidade/img-13.svg" alt="">
          <p>Enquanto o CNES informa quem compõe a equipe, o Sistema de Informação em Saúde para a Atenção Básica (SISAB), alimentado principalmente pelo e-SUS APS, demonstra o que a equipe efetivamente realiza. E é por meio desses sistemas que são registrados os atendimentos individuais, procedimentos, visitas, ações coletivas, atividades educativas, acompanhamento de condições crônicas, vacinação e demais ações desenvolvidas pelas equipes de Atenção Primária.</p>
          <p>Os dados produzidos pelo SISAB apoiam o planejamento das ações locais, estaduais e nacionais, permitindo identificar necessidades de saúde, reorganizar processos de trabalho e orientar a alocação de recursos.</p>
          <img src="src/assets/img/unidade/img-14.svg" alt="">
          <p>Dependendo da ação desenvolvida, outros sistemas nacionais também são utilizados pelas equipes de saúde prisional, ampliando a capacidade de monitoramento da política. Entre eles destacam-se os descritos a seguir.</p>
          <img src="src/assets/img/unidade/img-15.svg" alt="">
          <p>Esses sistemas produzem informações complementares que, quando analisadas em conjunto, permitem compreender o perfil epidemiológico da população privada de liberdade e avaliar a efetividade das ações desenvolvidas.</p>
          <p>Para o financiamento das eAPP, o registro das informações no sistema do SUS é essencial. Identificamos que muitas Unidades de Saúde não possuem o e-SUS implantado, porém esta é uma luta necessária para a efetivação da PNAISP e, nestes casos, a Coordenação de Saúde no Sistema Prisional (COPRIS/SAPS/MS) vem desenvolvendo ações como:</p>
          <img src="src/assets/img/unidade/img-16.svg" alt="" class="w-80 mx-auto d-block">
          <p>Atualmente, estados e municípios podem solicitar o credenciamento das Equipes de Atenção Primária Prisional independentemente da adesão formal à PNAISP. Essa flexibilização busca acelerar a implantação das equipes e ampliar o acesso da população privada de liberdade à Atenção Primária, reduzindo entraves administrativos para o financiamento federal.</p>
          <p>A responsabilidade pela atenção à saúde das pessoas privadas de liberdade é do SUS e, portanto, compartilhada entre União, estados e municípios. No entanto, quando um município não adere à PNAISP ou demora a implantar equipes específicas, quem sofre as consequências é a população privada de liberdade, que permanece com maior dificuldade de acesso à Atenção Primária.</p>
          <h3 style="color: #123F68;">Encerramento da Unidade</h3>
          <p>Ao concluir esta unidade, você ampliou sua compreensão sobre a organização da atenção à saúde no sistema prisional e sobre o papel estratégico da PNAISP na garantia do direito à saúde. Você teve o convite a refletir sobre a prisão como um território de cuidado, onde o SUS se materializa por meio de ações voltadas à promoção da saúde, à prevenção de agravos, ao tratamento e à reabilitação.</p>
          <p>Durante esta unidade, compreendemos também que a garantia do cuidado depende da articulação entre diferentes setores e instituições, exigindo diálogo permanente entre saúde, justiça e administração prisional. Esse tem sido um dos principais desafios provavelmente encontrados na sua prática diária. Você conheceu os princípios e as diretrizes da PNAISP, e identificou as responsabilidades dos entes federativos, compreendendo como se organizam os processos de acesso, financiamento, adesão, credenciamento e manutenção das equipes. Além disso, foi reforçado que a utilização correta dos sistemas de informação por parte dos profissionais de saúde é fundamental para fortalecer a gestão, garantir recursos e ampliar a capacidade de resposta das equipes às necessidades de saúde da população custodiada.</p>
          <p>É importante compreender que o cuidado em saúde no sistema prisional ultrapassa os limites dos muros das unidades. Ele exige o reconhecimento das trajetórias de vida, das vulnerabilidades sociais e das desigualdades que atravessam a experiência do encarceramento. Agora, o convite é levar esse conhecimento para sua prática cotidiana.</p>
          <p>Ao compreender a organização da atenção à saúde no sistema prisional, você amplia sua capacidade de planejar ações, coordenar o cuidado, atuar em equipe e defender o acesso à saúde como um direito de todas as pessoas, independentemente de sua condição de privação de liberdade.</p>
          <div class="accordion" id="accordionReferencias">
            <div class="accordion-item">
                <h4 class="accordion-header" id="headingReferencias">
                  <button class="accordion-button card-style--white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#painelReferencias" aria-expanded="false" aria-controls="painelReferencias">
                      Referências
                  </button>
                </h4>
                <div id="painelReferencias" class="accordion-collapse collapse" aria-labelledby="headingReferencias" data-bs-parent="#accordionReferencias">
                  <div class="accordion-body">
                    <div class="accordion-body-p--white referencias">
                      <p>BARBOSA, Mayara Lima; CELINO, Suely Deysny de Matos; OLIVEIRA, Lannuzya Veríssimo; COSTA, Gabriela Maria Cavalcanti. Política nacional de atenção integral à saúde das pessoas privadas de liberdade: o desafio da integralidade. <strong>Cadernos Saúde Coletiva</strong>, Rio de Janeiro, v. 30, n. 4, p. 517-524, 2022.</p>
                      <p>BRASIL. Ministério da Saúde; Ministério da Justiça. <strong>Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP)</strong>. Brasília, DF: Ministério da Saúde, 2014.</p>
                      <p>BRASIL. Ministério da Justiça e Segurança Pública. <strong>SISDEPEN: Sistema de Informações do Departamento Penitenciário Nacional</strong>. Brasília, DF: MJSP, 2023.</p>
                      <p>BRASIL. Ministério da Saúde. <strong>Sistema de Informação em Saúde da Atenção Básica: e-Gestor Atenção Básica</strong>. Brasília, DF: Ministério da Saúde, 2026. Disponível em: <a href="https://sisaps.saude.gov.br/sistemas/gerenciaaps/docs/modulo-de-solicitacoes/equipes/6eapp/" class="text-black" target="_blank">https://sisaps.saude.gov.br/sistemas/gerenciaaps/docs/modulo-de-solicitacoes/equipes/6eapp/</a>. Acesso em: 25 jun. 2026.</p>
                      <p>BRASIL. Ministério da Saúde. <strong>Sobre a PNAISP</strong>. Brasília, DF: Ministério da Saúde, 2026. Disponível em: <a href="https://www.gov.br/saude/pt-br/composicao/saps/pnaisp/sobre-a-pnaisp" class="text-black" target="_blank">https://www.gov.br/saude/pt-br/composicao/saps/pnaisp/sobre-a-pnaisp</a>. Acesso em: 18 jun. 2026.</p>
                      <p>MENDES, Eugênio Vilaça. <strong>As redes de atenção à saúde</strong>. 2. ed. Brasília, DF: Organização Pan-Americana da Saúde, 2011. 549 p.</p>
                      <p>MINAYO, Maria Cecília de Souza; RIBEIRO, Adalgisa Peixoto. Condições de saúde dos presos do estado do Rio de Janeiro, Brasil. <strong>Ciência & Saúde Coletiva</strong>, Rio de Janeiro, v. 21, n. 7, p. 2031-2040, 2016. DOI: 10.1590/1413-81232015217.08552016.</p>
                      <p>NELSON MANDELA FOUNDATION. <strong>Nelson Mandela Biography</strong>. Johannesburg, [s.d.]. Disponível em: <a href="https://www.nelsonmandela.org" target="_blank" class="text-black">https://www.nelsonmandela.org</a>. Acesso em: 21 jun. 2026. </p>
                      <p>PACHECO, Leonardo Pereira; SILVA, Victor Costa da; ALVES, Larissa Torres Santos; GRAEVER, Leonardo. Recomendações sobre a organização do cuidado na atenção primária à saúde prisional. <strong>Revista Aracê</strong>, São José dos Pinhais, v. 6, n. 3, p. 4438-4450, 2024. DOI: 10.56238/arev6n3-011. Disponível em: https://periodicos.newsciencepubl.com/arace/article/view/1143. Acesso em: 26 jun. 2026.</p>
                      <p>STARFIELD, Barbara. Primary care: balancing health needs, services, and technology. New York: Oxford University Press, 2002.</p>
                      <p>TEIXEIRA JUNIOR, Jorge Esteves. <strong>Unidades Básicas de Saúde Prisionais:</strong> estratégias e práticas no SUS para o cuidado de pessoas privadas de liberdade no Complexo Penitenciário da Papuda – DF. 2024. 242 f. Tese (Doutorado em Saúde Coletiva) – Instituto de Medicina Social Hesio Cordeiro, Universidade do Estado do Rio de Janeiro, Rio de Janeiro, 2024.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
}
