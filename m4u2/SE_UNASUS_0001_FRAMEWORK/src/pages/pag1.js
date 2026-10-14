import { inject, onMounted, onUnmounted, ref } from 'vue'
import { initInteracoesUnidade, destroyInteracoesUnidade } from '../composables/unidade.js'

export default {
  emits: ['getData'],
  setup(props, ctx) {
    const navigation = inject('navigation')
    const title = 'Unidade 2'

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
              <h1 class="unidade-numero">Unidade 2</h1>
              <h1 class="unidade-subtitulo">Coordenação do cuidado e redes de atenção à saúde</h1>
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
              <h5>Analisar os processos de coordenação do cuidado no sistema prisional e sua articulação com a Rede de Atenção à Saúde (RAS).</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container py-5">
          <ol id="secao-1" class="lista-outline" style="--secao: 2;">
            <li>Coordenação do cuidado no sistema prisional</li>
          </ol>
          <p>Nesta unidade, serão discutidos os processos de coordenação do cuidado em saúde no sistema prisional, destacando a importância da articulação entre os serviços ofertados nas unidades prisionais e a Rede de Atenção à Saúde (RAS). Considerando que as pessoas privadas de liberdade apresentam necessidades de saúde complexas e, muitas vezes, acumulam condições de vulnerabilidade social e clínica, torna-se essencial compreender como o cuidado é organizado ao longo de sua trajetória no sistema de saúde, garantindo acesso oportuno, continuidade assistencial e integralidade da atenção.</p>
          <div class="split">
            <p>A APS desempenha papel central nesse processo, atuando como coordenadora do cuidado e articuladora dos diferentes pontos da rede. Nesse contexto, a regulação em saúde assume função estratégica ao organizar os fluxos assistenciais, possibilitando o acesso a consultas, exames, procedimentos e serviços especializados. Compreender o itinerário da pessoa privada de liberdade dentro da rede de atenção permite identificar desafios e potencialidades para a efetivação do direito à saúde no ambiente prisional.</p>
            <p>Além disso, esta unidade abordará a relevância da porta de entrada e da porta de saída do sistema prisional como momentos críticos para a continuidade do cuidado. A integração entre os serviços de saúde e os demais setores envolvidos na atenção às pessoas privadas de liberdade é fundamental para assegurar acompanhamento adequado durante o encarceramento e após o retorno à comunidade, contribuindo para melhores condições de saúde e para a redução das iniquidades sociais.</p>
          </div>
          <p>Continue com seus estudos e bom aprendizado para você!</p>
          <ol class="lista-outline" style="--secao: 2;">
            <li>Coordenação do cuidado no sistema prisional</li>
          </ol>
          <p>Imagine o caminho que uma pessoa percorre quando adoece.</p>
          <img src="src/assets/img/unidade/img-1.svg" alt="" class="my-4 w-100">
          <div class="split">
            <p>Para que esse percurso faça sentido, alguém precisa costurar as pontas: reunir as informações, acompanhar o que foi decidido em cada ponto e garantir que nada se perca pelo caminho. A esse trabalho de costura damos o nome de coordenação do cuidado. A coordenação do cuidado é um dos atributos essenciais da APS. Ela consiste na capacidade de reconhecer os problemas que exigem acompanhamento ao longo do tempo e de articular, de maneira coerente, os diferentes serviços pelos quais a pessoa transita, de modo que cada um saiba o que o outro já fez (Starfield, 2002). Além de encaminhar, trata-se de manter o fio contínuo da história clínica, mesmo quando o cuidado é prestado em lugares e por equipes diferentes.</p>
            <p>No sistema prisional, esse atributo ganha contornos próprios. Pessoas que vivem com hipertensão, dor crônica, tuberculose, HIV ou sofrimento mental precisam de muito mais do que consultas isoladas: necessitam de uma sequência organizada de ações que, quase sempre, atravessa os muros da unidade e depende de atores que não pertencem à saúde. </p>
            <p class="pt-3">Coordenar o cuidado, aqui, significa sustentar a continuidade em um ambiente marcado pela privação de liberdade, pela rotatividade da população custodiada e pela necessidade permanente de articulação com a segurança e com os demais pontos da rede.</p>
          </div>
          <img src="src/assets/img/unidade/img-2.svg" alt="" class="my-4 w-80 d-block mx-auto">
          <ol id="secao-2-1" class="lista-outline lista-outline-sub" style="--secao: 2;">
            <li>Papel da atenção primária na rede de atenção à saúde</li>
          </ol>
          <p>A Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP) reconhece os serviços de saúde das unidades prisionais como pontos de atenção da RAS e atribui à APS o papel de porta de entrada preferencial e de ordenadora do cuidado (Brasil, 2014). Em outras palavras, é a equipe de Atenção Primária Prisional que assume a responsabilidade de acompanhar a pessoa ao longo do tempo e de articular sua passagem pelos demais serviços.</p>
          <div class="split">
            <p>Esse papel só se realiza quando a equipe atua como equipe e não como uma soma de profissionais que atendem isoladamente. O acompanhamento longitudinal da população privada de liberdade pode ser feito por vários profissionais de saúde que compartilham informações, discutem casos e constroem, juntos, um plano de cuidado.</p>
            <p>Esse princípio de equivalência, ou seja, oferecer à pessoa presa um padrão de cuidado equivalente ao que se oferece à comunidade externa, é também uma diretriz internacional consolidada (WHO, 2014). Acontece que a continuidade depende de uma articulação que vai além da própria equipe de saúde. </p>
          </div>
          <div class="split">
            <img src="src/assets/img/unidade/img-1.png" alt="">
            <p>Para que uma pessoa seja levada a uma consulta, a um exame ou a um procedimento, é preciso contar com a equipe de segurança: é ela que viabiliza a escolta, organiza o deslocamento e estabelece as condições para que o atendimento ocorra. Ao mesmo tempo, é necessário manter boa comunicação com os demais serviços da rede, sendo eles: policlínicas, ambulatórios, centros de especialidades e hospitais, para onde a pessoa será referenciada e de onde precisará retornar com informações.</p>
            <p class="pt-3">Parece lógico, mas não é simples. Na prática, raramente existe um canal direto e ágil que ligue a equipe de saúde prisional aos demais pontos da rede e à segurança. Muitas vezes a comunicação é informal, fragmentada e dependente do esforço pessoal de cada profissional. </p>
          </div>
          <p>Por isso, a garantia de que uma pessoa privada de liberdade vai ser atendida na APS Prisional e nos serviços extramuros quando precisar demanda uma articulação entre as equipes de saúde e segurança. Neste sentido, além das costuras do cotidiano, é importante que municípios e estados tenham normativas que garantam essa logística e os fluxos necessários.</p>
          <p>O problema se agrava quando a pessoa se movimenta dentro do sistema. A população prisional é marcada pela transitoriedade: ao progredir de um regime para outro, ou ao ser transferida de uma unidade para outra, a pessoa muitas vezes deixa para trás o seu histórico. </p>
          <div class="split">
            <p>Resultado: o itinerário terapêutico, que é o caminho que ela percorreu no cuidado de sua saúde, corre o risco de se perder a cada mudança. Sem esse histórico, a nova equipe recomeça do zero, repete exames, interrompe tratamentos e desperdiça o vínculo que já havia sido construído.</p>
            <p>O prontuário eletrônico é a memória da equipe. Registrar adequadamente os atendimentos no e-SUS APS é o que permite que a história clínica acompanhe a pessoa pela rede e resista às transferências. Sem registro, a longitudinalidade se perde e o cuidado se fragmenta.</p>
          </div>
          <ol id="secao-3" class="lista-outline" style="--secao: 2; --item: 1;">
            <li>Regulação e acesso aos serviços de saúde</li>
          </ol>
          <p>Quando a necessidade de saúde ultrapassa o que a APS pode resolver na unidade, é preciso utilizar os serviços de regulação. Regular o acesso significa organizar, segundo critérios de necessidade e prioridade, a oferta de consultas especializadas, exames, procedimentos e internações disponíveis na rede. No SUS, esse processo é operacionalizado por sistemas de regulação, o mais conhecido é o Sistema Nacional de Regulação (SISREG), que organiza as filas e distribui as vagas dos serviços próprios, contratados ou conveniados.</p>
          <div class="split">
            <img src="src/assets/img/unidade/img-2.png" alt="">
            <p>Aqui vale uma observação importante. A pessoa privada de liberdade acessa a rede pela mesma porta e enfrenta as mesmas filas que qualquer outra pessoa daquele território. As barreiras de acesso comuns à população local, a demora para conseguir um especialista, as vagas escassas para determinados exames são fatores que também recaem sobre ela. Isso é, em parte, expressão do princípio da equidade: a pessoa presa não está fora do SUS, mas dentro dele, sujeita às suas possibilidades e aos seus limites.</p>
          </div>
          <p>A essas dificuldades, porém, somam-se outras, próprias do contexto penal. A mais determinante delas é a disponibilidade de escolta. De nada adianta uma consulta agendada, um exame marcado ou uma cirurgia autorizada se não houver, no dia e na hora, equipe de segurança disponível para conduzir a pessoa até o serviço. </p>
          <img src="src/assets/img/unidade/img-3.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>Diante desse cenário, a regulação no sistema prisional não se resume ao manejo técnico do sistema informatizado. Ela exige também articulação permanente com a equipe de segurança para que o deslocamento seja planejado em conjunto e, com frequência, uma postura de <strong>advocacy</strong>, isto é, de defesa ativa do direito à saúde da pessoa presa junto à rede e às instâncias de gestão, garantindo que sua condição de privação de liberdade não se converta em mais uma barreira de acesso.</p>
          <p>Convidamos, então, você a pensar nas seguintes questões: quantas vagas reguladas para a sua população foram perdidas no último mês por ausência de escolta? Existe, na sua realidade, algum espaço de planejamento conjunto entre saúde e segurança para organizar esses deslocamentos? Se não existe, que primeiro passo seria possível dar para criá-lo?</p>
          <ol id="secao-4" class="lista-outline" style="--secao: 2; --item: 2;">
            <li>Itinerário da pessoa privada de liberdade na rede</li>
          </ol>
          <p>Chamamos de <strong>itinerário</strong> o percurso que a pessoa faz pelos serviços de saúde e, no caso da população prisional, também pelas diferentes unidades penais ao longo do cumprimento da pena. </p>
          <p>Esse percurso é feito de idas e vindas, conforme pode ser visto a seguir.</p>
          <img src="src/assets/img/unidade/img-4.svg" alt="" class="mx-auto">
          <p>O itinerário da população prisional é, portanto, atravessado por duas ordens de barreiras que se sobrepõem: as barreiras de acesso à saúde, que discutimos, e as barreiras da segurança, ligadas à logística de transporte, às condições de escolta e às normas de cada unidade. É no encontro dessas duas lógicas, a do cuidado e a da custódia, que o cuidado precisa abrir caminho.</p>
          <div class="split">
            <p>Reconhecer a prisão como território de atuação da APS ajuda a enxergar esse itinerário. O ambiente prisional é um território vivo, com perfis epidemiológicos, vulnerabilidades e fluxos próprios. Compreendê-lo permite antecipar os pontos em que o cuidado costuma se romper, em especial, os momentos de transição, e planejar ações para sustentá-lo (Teixeira Junior, 2024).</p>
            <p>E é justamente nas transições que mora o maior risco. Sempre que a pessoa muda de regime ou é transferida de uma instituição penal para outra, abre-se uma brecha por onde a informação pode escapar. Para fechar essa brecha, as equipes lançam mão de uma prática que merece atenção: o bonde — termo do cotidiano prisional usado para nomear a movimentação de pessoas entre unidades. </p>
          </div>
          <img src="src/assets/img/unidade/img-5.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>Nas duas próximas seções, olhamos com mais cuidado para os dois extremos desse itinerário: a porta de entrada, quando a pessoa ingressa no sistema, e a porta de saída, quando ela retorna à comunidade. Em ambos, a lógica do bonde (preparar a saída e organizar a chegada) é o que torna a continuidade possível.</p>
          <ol id="secao-5" class="lista-outline" style="--secao: 2; --item: 3;">
            <li>Porta de entrada no sistema prisional</li>
          </ol>
          <p>A porta de entrada é o primeiro contato da pessoa com o sistema prisional e, idealmente, com a equipe de saúde. É um momento decisivo.  A pessoa recém-ingressa chega frequentemente fragilizada, sem saber a que serviços têm direito, e pode trazer consigo condições de saúde que precisam ser identificadas com rapidez: doenças infecciosas transmissíveis, agravos agudos, sofrimento mental, uso problemático de álcool e outras drogas, tratamentos em curso, que não podem ser interrompidos.</p>
          <p>Por isso, o acolhimento na entrada não é uma formalidade burocrática: é uma ferramenta assistencial. Um acolhimento bem conduzido nesse primeiro momento permite identificar necessidades urgentes, conter a disseminação de doenças logo na admissão, iniciar vínculos e abrir o registro que vai sustentar todo o cuidado dali em diante. Organizar esse contato inicial costuma envolver as seguintes ações, acompanhe. </p>
          <img src="src/assets/img/unidade/img-6.svg" alt="" class="w-100">
          <p>Aqui reaparece a lógica do bonde, agora no sentido da chegada. Quando a pessoa ingressa ou é recebida vinda de outra unidade, o bonde de chegada é o momento em que a equipe que recebe deve buscar o que se sabe sobre aquela pessoa: consultar o prontuário, recuperar resultados de exames, reconhecer tratamentos em andamento. Quanto mais informações forem resgatadas nesse contato inicial, menos o cuidado recomeça do zero e mais ele se sustenta como uma história contínua.</p>
          <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-1">
            <img src="./src/assets/img/geral/saibamais-botao.svg" alt="Saiba mais">
          </button>
          <div class="modal fade modal-saibamais" id="modal-1" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content">
                <div class="card-saibamais" data-bs-dismiss="modal">
                  <div class="card-saibamais-icone">
                    <img src="./src/assets/img/geral/saibamais.svg" alt="">
                  </div>
                  <div class="card-saibamais-texto">
                    <h4>Saiba mais</h4>
                    <p>A organização do acolhimento na admissão pode ganhar muito quando estruturada em momentos sucessivos — da chegada ao sistema, passando pelas transferências, até a preparação para a saída. Para conhecer um modelo que detalha esse acolhimento em etapas e pode inspirar a organização do seu serviço, consulte a <a href="https://www.saude.df.gov.br/documents/d/saude/sei_gdf___126325989___nota_tecnica_1_de_2023_criterios_de_encaminhamento_cesme__2_" target="_blank" class="text-black">Nota Técnica nº 1/2023 da SES/DF</a>, que orienta o acolhimento das pessoas privadas de liberdade pelas equipes de saúde no sistema prisional.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol id="secao-6" class="lista-outline" style="--secao: 2; --item: 4;">
            <li>Porta de saída e continuidade do cuidado</li>
          </ol>
          <p>Se a entrada é decisiva, a saída é igualmente crítica, e costuma ser o ponto mais negligenciado de todo o itinerário. A porta de saída compreende tanto a progressão para regimes mais abertos quanto o retorno definitivo à comunidade. Em ambos os casos, há um risco concreto: o cuidado construído ao longo de meses ou anos pode simplesmente se interromper no momento em que a pessoa deixa a unidade.</p>
          <div class="split">
            <p>A literatura internacional chama a atenção para esse momento sob o conceito de continuidade do cuidado na transição prisão–comunidade (WHO, 2014). A pessoa que sai leva consigo necessidades de saúde que não desaparecem com a soltura: tratamentos crônicos, acompanhamento de saúde mental, terapias para condições infecciosas. </p>
            <p>Garantir que ela seja efetivamente acolhida pela rede de saúde do território para onde retorna é parte do cuidado, e não algo externo a ele. Preparar a saída, portanto, é organizar um bonde de saída voltado à continuidade, e inclui as ações descritas a seguir.</p>
          </div>
          <img src="src/assets/img/unidade/img-7.svg" alt="" class="w-100">
          <p>Dentre as dificuldades relatadas pelas pessoas egressas do sistema prisional estão:</p>
          <img src="src/assets/img/unidade/img-8.svg" alt="" class="w-100 mx-auto d-block">
          <p>Toda essa combinação faz com que seja provável que esse egresso acabe em situação de rua ou reincidindo no sistema carcerário de forma precoce transição (Karam, 2015). Nesse contexto, surgem os Escritórios Sociais.</p>
          <div class="split">
            <p>Os Escritórios Sociais são equipamentos públicos de gestão compartilhada entre o Poder Judiciário e o Executivo, instituídos como o pilar central para a execução da Política Nacional de Atenção às Pessoas Egressas do Sistema Prisional (instituída pela Resolução CNJ nº 307/2019). Eles têm como função realizar o acolhimento e o encaminhamento de pessoas egressas e seus familiares para as redes de proteção social e políticas públicas existentes.</p>
            <p>Antes da formalização nacional, o modelo do Escritório Social já operava como iniciativas locais precursoras, notadamente nos estados do Espírito Santo e Paraná, que serviram de referência para o Conselho Nacional de Justiça (CNJ). A institucionalização nacional ocorreu com a Resolução nº 307/2019, que centralizou as ações de atenção aos egressos nesses escritórios, buscando superar a fragmentação de serviços e a baixa institucionalidade das iniciativas anteriores. </p>
          </div>
          <p>No âmbito da política nacional, o Escritório Social funciona como o nó de articulação que conecta o sistema de justiça penal às políticas sociais universais. Conheça, a seguir, os objetivos desses espaços. </p>
          <img src="src/assets/img/unidade/img-9.svg" alt="" class="w-100 mx-auto d-block">
          <p>O Escritório Social possui grande potencial para reduzir as taxas de reincidência criminal ao enfrentar o estigma e a vulnerabilidade social que marcam o retorno à liberdade. Ele atua como um refúgio contra o isolamento do egresso, oferecendo suporte onde antes imperava a lógica do “cada um por si”. </p>
          <p>Além disso, ao substituir o acompanhamento meramente burocrático de penas por um suporte multidisciplinar, o escritório fortalece os vínculos familiares e comunitários, permitindo que o egresso reconstrua seu projeto de vida com dignidade.</p>
          <p>A relação com a saúde é estratégica e essencial, sendo uma das áreas de maior demanda dos egressos. A atuação do Escritório Social nesse campo abrange as seguintes ações. </p>
          <img src="src/assets/img/unidade/img-10.svg" alt="" class="w-100 mx-auto d-block">
          <p>É importante ressaltar que a Política Nacional de Atenção à Pessoa Egressa do Sistema Prisional  (PNAPE) prevê a atuação dos escritórios sociais tanto no pré-egresso (pessoa que ainda se encontre em cumprimento de pena privativa de liberdade, no período de seis meses que antecede a sua soltura da unidade prisional prevista, ainda que em virtude de progressão de regime ou de livramento condicional), quanto no egresso (pessoa que, após qualquer período de permanência no sistema penitenciário, mesmo em caráter provisório, necessite de algum atendimento no âmbito das políticas públicas em decorrência de sua institucionalização).</p>
          <p>Note como a entrada e saída se espelham. Na chegada, a equipe que recebe busca o histórico para não recomeçar do zero; na partida, a equipe que despede organiza esse histórico e o entrega para que o próximo cuidador possa continuar. Bonde de chegada e bonde de saída são, no fundo, a mesma ideia vista de dois ângulos: a informação e o vínculo precisam viajar junto com a pessoa.</p>
          <img src="src/assets/img/unidade/img-11.svg" alt="" class="mx-auto d-block w-80 my-4">
          <h3 style="color: #123F68;">Encerramento da Unidade</h3>
          <div class="split">
            <p>Ao concluir esta unidade, você aprofundou sua compreensão sobre a coordenação do cuidado como um dos principais atributos da APS e como elemento essencial para a efetivação do direito à saúde das pessoas privadas de liberdade. Você percebeu que coordenar o cuidado vai muito além de encaminhar usuários para outros serviços: significa acompanhar trajetórias, integrar informações, fortalecer vínculos e garantir que o cuidado permaneça contínuo, mesmo diante das mudanças de unidade prisional, de regime ou de território.</p>
            <p>Você também analisou o itinerário da pessoa privada de liberdade na rede de saúde e identificou que as transições representam momentos de maior vulnerabilidade para a continuidade do cuidado. A porta de entrada no sistema prisional oferece uma oportunidade para identificar necessidades de saúde, construir vínculos e organizar o acompanhamento desde o início. A porta de saída exige planejamento para que o cuidado não seja interrompido quando a pessoa retorna à comunidade ou muda de regime.</p>
          </div>
          <p>Em ambas as situações, a qualidade dos registros, a comunicação entre equipes e a integração entre os serviços tornam-se fundamentais para sustentar a longitudinalidade do cuidado. Outro aspecto importante discutido nesta unidade foi o papel da regulação. Este depende tanto da organização da RAS quanto da articulação com a administração prisional e da disponibilidade de escolta. Nesse contexto, a defesa do direito à saúde também faz parte do trabalho da equipe, que frequentemente precisa atuar para reduzir barreiras e ampliar o acesso da população privada de liberdade aos serviços do SUS, tendo uma postura de advocacy.</p>
          <div class="split">
            <p>Além de conhecer conceitos e fluxos, você foi convidado a enxergar a pessoa privada de liberdade em toda a sua trajetória de cuidado. Cada consulta, encaminhamento, transferência, progressão de regime ou retorno à comunidade representa uma oportunidade de fortalecer ou interromper esse percurso. A diferença entre essas possibilidades depende, em grande medida, da capacidade da equipe de coordenar o cuidado de forma integrada, humanizada e articulada com os setores de segurança e justiça.</p>
            <p>Agora, o desafio é incorporar esse olhar à sua prática cotidiana. Em qualquer unidade prisional onde você atue, sua capacidade de articular a rede, registrar informações de forma qualificada, construir vínculos e planejar as transições pode fazer a diferença entre um cuidado fragmentado e um cuidado contínuo. Ao assumir esse compromisso, você fortalece a APS, contribui para a efetivação da PNAISP e reafirma os princípios do SUS, promovendo um cuidado integral e comprometido com a dignidade e os direitos humanos.</p>
          </div>
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
                      <p>BRASIL. Ministério da Saúde; Ministério da Justiça. <strong>Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP)</strong>. Brasília, DF: Ministério da Saúde, 2014.</p>
                      <p>KARAM, B. J. <strong>Precisamos falar sobre egresso prisional em situação de rua no estado de São Paulo</strong>. São Paulo: Editora Revan, 2015.</p>
                      <p>BRASIL. Decreto nº 11.843, de 21 de dezembro de 2023. Regulamenta a assistência à pessoa egressa de que tratam os arts. 10, 11, 25, 26 e 27 da Lei nº 7.210, de 11 de julho de 1984, e institui a Política Nacional de Atenção à Pessoa Egressa do Sistema Prisional. <strong>Diário Oficial da União</strong>, Brasília, DF, 22 dez. 2023.</p>
                      <p>STARFIELD, Barbara. <strong>Primary care</strong>: balancing health needs, services, and technology. New York: Oxford University Press, 2002.</p>
                      <p>TEIXEIRA JUNIOR, Jorge Esteves. <strong>Unidades Básicas de Saúde Prisionais</strong>: estratégias e práticas no SUS para o cuidado de pessoas privadas de liberdade no Complexo Penitenciário da Papuda – DF. 2024. 242 f. Tese (Doutorado em Saúde Coletiva) – Instituto de Medicina Social Hesio Cordeiro, Universidade do Estado do Rio de Janeiro, Rio de Janeiro, 2024.</p>
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
