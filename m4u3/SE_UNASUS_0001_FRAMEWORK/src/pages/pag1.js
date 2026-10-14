import { inject, onMounted, onUnmounted, ref } from 'vue'
import { initInteracoesUnidade, destroyInteracoesUnidade } from '../composables/unidade.js'

export default {
  emits: ['getData'],
  setup(props, ctx) {
    const navigation = inject('navigation')
    const title = 'Unidade 3'

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
              <h3 class="modulo-titulo mt-4">Gestão da Atenção à Saúde e Coordenação do Cuidado no Sistema Prisional</h3>
              <h1 class="unidade-numero">Unidade 3</h1>
              <h1 class="unidade-subtitulo">Processos de trabalho e prática clínica no sistema prisional</h1>
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
              <h5>Compreender os processos de trabalho das equipes de saúde no sistema prisional e suas implicações para o cuidado.</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container py-5">
          <p>O cuidado em saúde no sistema prisional é desenvolvido em um contexto singular, marcado por especificidades institucionais, demandas complexas de saúde e desafios relacionados à garantia de direitos. Nesse cenário, os processos de trabalho das equipes de saúde assumem papel fundamental para a oferta de uma atenção integral, humanizada e resolutiva. Compreender como essas equipes se organizam e atuam é essencial para reconhecer as potencialidades e os limites da prática profissional no ambiente prisional.</p>
          <p>A atuação em equipe multiprofissional constitui um dos pilares da atenção à saúde das pessoas privadas de liberdade, exigindo integração entre diferentes saberes e práticas. O acolhimento, a escuta qualificada e a abordagem interdisciplinar favorecem a identificação das necessidades de saúde e a construção de planos de cuidado mais efetivos. Além disso, o uso de ferramentas de apoio à prática clínica, como protocolos, registros em saúde, discussão de casos e projetos terapêuticos, contribui para qualificar o processo de trabalho e fortalecer a coordenação do cuidado.</p>
          <p>Ao longo desta unidade, serão discutidos os principais aspectos relacionados à organização do trabalho das equipes de saúde no sistema prisional, destacando as estratégias utilizadas para enfrentar desafios cotidianos e promover a atenção integral.  Também serão abordadas questões éticas e institucionais que permeiam o cuidado nesse contexto, refletindo sobre os dilemas enfrentados pelos profissionais e a importância da atuação comprometida com os princípios do SUS e com os direitos humanos. </p>
          <p>Mais do que compreender atribuições profissionais e fluxos de trabalho, esta unidade convida você a refletir sobre como o cuidado é produzido em um contexto marcado por tensões entre saúde, segurança e garantia de direitos. As práticas desenvolvidas pelas equipes de saúde têm potencial para reduzir vulnerabilidades, promover dignidade e fortalecer a cidadania de uma população historicamente invisibilizada. Ao analisar os processos de trabalho no sistema prisional, você será desafiado a identificar possibilidades de qualificação da assistência, reconhecer o papel estratégico das equipes multiprofissionais e compreender como o trabalho em saúde pode contribuir para a transformação das condições de vida e saúde das pessoas privadas de liberdade.</p>
          <ol id="secao-1" class="lista-outline" style="--secao: 3;">
            <li>Processos de trabalho em saúde prisional</li>
          </ol>
          <p>Os processos de trabalho em saúde correspondem ao conjunto de ações, relações, saberes, tecnologias e recursos mobilizados pelos profissionais para responder às necessidades de saúde da população. No sistema prisional, esses processos assumem características particulares em razão das especificidades do ambiente de privação de liberdade, das condições institucionais de segurança e das complexas demandas de saúde apresentadas pelas pessoas privadas de liberdade. Nesse contexto, o trabalho em saúde ultrapassa a realização de procedimentos e consultas, envolvendo a construção cotidiana de estratégias para garantir o acesso ao cuidado e a efetivação do direito à saúde.</p>
          <p>Podemos relembrar, neste momento, que a PNAISP estabelece que as ações de saúde desenvolvidas nas unidades prisionais devem estar integradas ao SUS e organizadas a partir dos princípios da APS. Dessa forma, as equipes de saúde prisional desenvolvem as seguintes ações.</p>
          <img src="src/assets/img/unidade/img-1.svg" alt="" class="my-4 w-100">
          <p>Nesse cenário, o trabalho em saúde prisional é realizado por equipes multiprofissionais que atuam em um contexto marcado por demandas complexas e frequentemente invisibilizadas. Médicos, enfermeiros, técnicos de enfermagem, dentistas, psicólogos, assistentes sociais e outros profissionais compartilham a responsabilidade de responder às necessidades de saúde de uma população que apresenta elevada carga de doenças infecciosas, transtornos mentais, uso problemático de álcool e outras drogas, agravos crônicos e condições decorrentes de trajetórias históricas de exclusão social. A atuação dessas equipes exige conhecimento técnico-científico, capacidade de diálogo, sensibilidade para reconhecer vulnerabilidades e compromisso com os princípios éticos que orientam o cuidado em saúde.</p>
          <p>Como viemos destacando, diferentemente de outros cenários assistenciais, o trabalho em saúde no sistema prisional ocorre em uma permanente interface entre cuidado e segurança. Veja, a seguir, o porquê. </p>
          <img src="src/assets/img/unidade/img-2.svg" alt="" class="my-4 w-100">
          <p>A equipe de saúde assume papel estratégico na defesa do direito à saúde das pessoas privadas de liberdade. Muitas vezes, os profissionais são os primeiros a identificar situações de sofrimento físico e psíquico, violência institucional, agravamento de doenças crônicas, risco de suicídio, vulnerabilidades sociais e necessidades que extrapolam o campo estritamente clínico. Nesses momentos, o trabalho em saúde ultrapassa a dimensão assistencial e passa a incorporar funções de proteção, advocacy e articulação com a rede de serviços do território (Campos; Amaral, 2007). Essa atuação exige que os profissionais reconheçam a pessoa privada de liberdade como sujeito de direitos, capaz de participar das decisões relacionadas ao seu cuidado e de construir, juntamente com a equipe, estratégias para a melhoria de sua condição de saúde.</p>
          <p>O trabalho em equipe não pode ser compreendido apenas como a soma de diferentes profissões atuando em um mesmo espaço. A complexidade das necessidades de saúde presentes no ambiente prisional demanda práticas colaborativas, nas quais os saberes se complementam e as decisões são construídas de forma compartilhada. A interdisciplinaridade favorece uma compreensão ampliada dos problemas de saúde e possibilita intervenções mais efetivas, considerando não apenas aspectos biológicos, mas também fatores psicológicos, sociais, familiares e institucionais que influenciam o processo saúde-doença.</p>
          <p>Os processos de trabalho em saúde prisional são atravessados por desafios  como os descritos a seguir, acompanhe.</p>
          <img src="src/assets/img/unidade/img-3.svg" alt="" class="my-4 w-100">
          <p>Além disso, os profissionais frequentemente precisam conciliar demandas assistenciais imediatas com atividades de promoção da saúde, vigilância epidemiológica, educação em saúde e articulação com a rede externa.</p>
          <p>E, quando as equipes conseguem integrar diferentes olhares, compartilhar responsabilidades e construir projetos terapêuticos articulados, ampliam significativamente sua capacidade de produzir cuidado. E, assim, passam a reconhecer histórias, trajetórias e necessidades que frequentemente permanecem ocultas pelos muros da prisão. É nessa perspectiva que o trabalho em saúde prisional se aproxima dos princípios da atenção integral e da humanização.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3;">
            <li>Organização e gestão da equipe de saúde</li>
          </ol>
          <p>A garantia do direito à saúde das pessoas privadas de liberdade depende, em grande medida, do trabalho desenvolvido pelas eAPP. Essas equipes representam a principal porta de entrada do SUS dentro das unidades prisionais e desempenham papel fundamental na organização do cuidado, no acompanhamento das condições de saúde da população custodiada e na articulação com os demais serviços da rede de atenção.</p>
          <p>A criação das eAPPs está vinculada à PNAISP, instituída com o propósito de integrar o sistema prisional ao SUS e assegurar que a condição de encarceramento não implique perda ou restrição do acesso aos cuidados de saúde. Essa diretriz parte do entendimento de que a pena privativa de liberdade restringe o direito de ir e vir, mas não suspende os demais direitos fundamentais, entre eles o direito à saúde.</p>
          <p>As equipes podem se organizar em quatro modalidades, o que definirá o repasse dos recursos financeiros, conforme abaixo (Brasil, 2026).</p>
          <img src="src/assets/img/unidade/img-4.svg" alt="" class="my-4 w-100">
          <p>O trabalho das equipes ocorre em um contexto singular. Muitas pessoas ingressam no sistema prisional sem histórico de acompanhamento regular de saúde, apresentando agravos que permaneceram sem diagnóstico ou tratamento por longos períodos. Em diversas situações, o primeiro contato efetivo com um profissional de saúde ocorre somente após o encarceramento.</p>
          <p>Por essa razão, a avaliação inicial realizada nos primeiros dias de ingresso na unidade prisional constitui uma etapa estratégica do processo de trabalho. Além da identificação de doenças e necessidades imediatas de cuidado, esse momento permite reconhecer fatores de vulnerabilidade que poderão influenciar a saúde durante o período de privação de liberdade. Confira, a seguir, exemplos de ações que contribuem para o planejamento do cuidado e para a prevenção de agravos coletivos.</p>
          <img src="src/assets/img/unidade/img-5.svg" alt="" class="my-4 w-100">
          <p>A composição das equipes busca responder à complexidade das necessidades encontradas no ambiente prisional. Em sua configuração mínima, a eAPP conta com médico, enfermeiro e técnico ou auxiliar de enfermagem. Entretanto, a presença de outros profissionais, como psicólogos, assistentes sociais, cirurgiões-dentistas, farmacêuticos e psiquiatras, amplia a capacidade de resposta da equipe e favorece uma abordagem mais integral dos problemas identificados.</p>
          <p>Essa atuação multiprofissional é particularmente importante porque os problemas de saúde observados no sistema prisional raramente possuem apenas uma dimensão biológica. Um homem com hipertensão arterial descompensada, por exemplo, pode apresentar simultaneamente sofrimento psíquico decorrente do afastamento familiar, dificuldades de adaptação ao ambiente prisional e histórico de uso abusivo de álcool. Da mesma forma, uma mulher privada de liberdade durante a gestação necessita não apenas de acompanhamento pré-natal, mas também de apoio psicológico, orientação sobre seus direitos e planejamento dos cuidados relacionados ao parto e ao vínculo com o recém-nascido.</p>
          <p>Nesse contexto, a eAPP desenvolve ações que vão muito além da assistência clínica tradicional. Acompanhe. </p>
          <img src="src/assets/img/unidade/img-6.svg" alt="" class="my-4 w-100">
          <p>A equipe de saúde desempenha papel fundamental na identificação precoce de surtos, no controle da tuberculose e de outras doenças transmissíveis, bem como na promoção de hábitos saudáveis em um ambiente frequentemente marcado por condições adversas à saúde.</p>
          <p>A atenção à saúde mental merece destaque entre as atribuições da equipe. </p>
          <div class="split d-flex align-items-center gap-4">
            <img src="src/assets/img/unidade/img-1.png" alt="">
            <p>O encarceramento pode potencializar situações de sofrimento emocional, ansiedade, depressão e risco de comportamento suicida. Além disso, o uso problemático de álcool e outras drogas constitui uma realidade frequente entre a população prisional. Nesses casos, a atuação integrada entre os profissionais da unidade e os serviços especializados da Rede de Atenção Psicossocial torna-se essencial para garantir acompanhamento adequado e continuidade do cuidado.</p>
          </div>
          <p>Outro aspecto central do trabalho da eAPP é a coordenação do cuidado. Muitas necessidades de saúde não podem ser resolvidas exclusivamente no interior da unidade prisional, exigindo acesso a consultas especializadas, exames diagnósticos, procedimentos cirúrgicos ou internações hospitalares. Cabe à equipe articular esses encaminhamentos junto à Rede de Atenção à Saúde, acompanhar a trajetória do usuário nos diferentes serviços e garantir que o tratamento tenha continuidade após o retorno à unidade prisional.</p>
          <p>E, assim, o trabalho da eAPP não se restringe à execução de procedimentos ou ao atendimento de demandas imediatas. Sua atuação envolve planejamento, vigilância, educação em saúde, coordenação do cuidado e defesa do direito à saúde. Em um contexto marcado por desigualdades sociais e múltiplas vulnerabilidades, essas equipes desempenham papel decisivo na construção de práticas de cuidado mais integral, humanizadas e comprometidas com a dignidade das pessoas privadas de liberdade.</p>
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
                  <p>Você já ouviu falar dos Agentes Promotores de Saúde (AgPS)? Os Agentes Promotores de Saúde são pessoas privadas de liberdade que assumem o papel de colaborar com a saúde junto com a EAPP, desempenhando funções semelhantes às dos Agentes Comunitários de Saúde, adaptadas ao contexto prisional. Entre suas atividades estão a identificação de necessidades de saúde, a orientação das pessoas privadas de liberdade e o encaminhamento para atendimento quando necessário. Embora ainda não exista regulamentação nacional específica para sua atuação, os AgPS têm sido uma estratégia utilizada em algumas unidades prisionais. Eles contribuem para ampliar o acesso aos serviços, identificar precocemente problemas de saúde e fortalecer as ações de promoção da saúde, prevenção de doenças e continuidade do cuidado nas unidades prisionais. Para saber mais sobre essa experiência acesse o artigo “Agente Promotor de Saúde no sistema prisional: atuação, cuidados, experiências e resiliência", disponível em: <a href="https://sanare.emnuvens.com.br/sanare/article/view/1869/950" target="_blank" class="text-black">https://sanare.emnuvens.com.br/sanare/article/view/1869/950</a></p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <ol id="secao-2" class="lista-outline" style="--secao: 3; --item: 1;">
            <li>Acolhimento humanizado e abordagem interdisciplinar</li>
          </ol>
          <p>O acolhimento humanizado constitui um dos fundamentos da atenção à saúde no SUS e representa uma diretriz central para a organização das práticas de cuidado. Mais do que um procedimento ou uma etapa inicial do atendimento, o acolhimento configura-se como uma postura ética, relacional e político-institucional, baseada no reconhecimento da pessoa como sujeito de direitos, portadora de necessidades singulares e participante ativa na construção do seu processo de cuidado (Brasil, 2013; Fortes, 2004).</p>
          <p>Nessa perspectiva, acolher significa as seguintes ações.</p>
          <img src="src/assets/img/unidade/img-7.svg" alt="">
          <p>A Política Nacional de Humanização (PNH) compreende o acolhimento como uma tecnologia relacional capaz de transformar os processos de trabalho em saúde, fortalecendo a integralidade da atenção e a corresponsabilização entre profissionais, usuários e gestores (UFSC, 2015).</p>
          <img src="src/assets/img/unidade/img-8.svg" alt="" class="w-80 mx-auto d-block my-4">
          <p>No contexto prisional, o acolhimento humanizado assume relevância ainda maior diante das múltiplas vulnerabilidades vivenciadas pelas pessoas privadas de liberdade. Frequentemente, essa população apresenta histórico de exclusão social, baixa escolaridade, rompimento de vínculos familiares, experiências de violência, sofrimento psíquico e acesso precário aos serviços de saúde antes do encarceramento. O ambiente prisional também é marcado por relações de poder, restrições à autonomia e condições que podem agravar problemas de saúde física e mental. Nesse cenário, o acolhimento representa uma estratégia fundamental para garantir o acesso aos cuidados, promover a dignidade humana e reduzir barreiras institucionais que dificultam o exercício do direito à saúde. Um atendimento baseado apenas na queixa imediata ou na lógica burocrática tende a reproduzir processos de exclusão; por outro lado, uma abordagem acolhedora possibilita compreender a pessoa em sua totalidade, reconhecendo aspectos biológicos, psicológicos, sociais e culturais que influenciam seu estado de saúde.</p>
          <img src="src/assets/img/unidade/img-9.svg" alt="" class="w-100 my-4">
          <p>Entretanto, a complexidade das necessidades de saúde no sistema prisional exige que o acolhimento seja articulado a uma abordagem interdisciplinar. A interdisciplinaridade pressupõe a integração de diferentes áreas do conhecimento na compreensão dos problemas de saúde e na elaboração de estratégias de cuidado. Diferentemente da simples coexistência de profissionais de distintas categorias, a prática interdisciplinar envolve diálogo permanente, compartilhamento de informações, construção coletiva de decisões e reconhecimento da complementaridade dos diferentes saberes. Essa perspectiva busca superar a fragmentação do cuidado e ampliar a capacidade de resposta das equipes diante de situações complexas.</p>
          <img src="src/assets/img/unidade/img-10.svg" alt="" class="w-80 mx-auto d-block my-4">
          <p>Médicos, enfermeiros, psicólogos, assistentes sociais, dentistas, farmacêuticos, terapeutas ocupacionais e demais profissionais contribuem com olhares específicos sobre o mesmo fenômeno, permitindo uma análise mais abrangente da situação de saúde. Nesse processo, cada área mantém sua identidade profissional, mas atua de forma integrada na construção de objetivos comuns voltados à promoção da saúde e à melhoria das condições de vida das pessoas atendidas. A interdisciplinaridade fortalece a produção do cuidado ao favorecer a articulação entre diferentes núcleos de conhecimento e ampliar a capacidade de intervenção sobre os determinantes do processo saúde-doença (Campos, 2000).</p>
          <p>No cotidiano das equipes de saúde prisional, a prática interdisciplinar pode ser observada em diferentes situações. Vamos acompanhar dois exemplos.</p>
          <img src="src/assets/img/unidade/img-11.svg" alt="" class="w-80 mx-auto d-block my-4">
          <p>A clínica ampliada constitui um importante referencial para a operacionalização da interdisciplinaridade. Essa abordagem propõe superar modelos centrados exclusivamente na doença, incorporando dimensões subjetivas, familiares, sociais e culturais ao processo de cuidado. Nesse sentido, o foco da atenção deixa de ser apenas o diagnóstico clínico e passa a incluir os projetos de vida, os contextos de vulnerabilidade e os recursos disponíveis para o enfrentamento dos problemas identificados. A construção compartilhada de projetos terapêuticos fortalece a corresponsabilização entre equipe e usuário, favorecendo intervenções mais efetivas e contextualizadas (Campos, 2006).</p>
          <p>Outro aspecto relevante é que o acolhimento humanizado e a interdisciplinaridade contribuem para qualificar as relações de trabalho entre os próprios profissionais. </p>
          <p>Espaços de discussão de casos, reuniões de equipe, elaboração de projetos terapêuticos singulares e processos de educação permanente favorecem a troca de experiências e o compartilhamento de responsabilidades. </p>
          <img src="src/assets/img/unidade/list-1.svg" alt="" class="w-100 my-auto">
          <ol id="secao-3" class="lista-outline" style="--secao: 3; --item: 2;">
            <li>Comissão Técnica de Classificação (CTC) e limites de atuação</li>
          </ol>
          <p>A Comissão Técnica de Classificação (CTC) é um órgão previsto na Lei de Execução Penal (LEP) que desempenha papel estratégico na organização da execução da pena e no acompanhamento das pessoas privadas de liberdade. Sua principal finalidade é subsidiar o processo de individualização da execução penal, produzindo informações técnicas que contribuam para a definição de estratégias de acompanhamento, assistência e inclusão da pessoa custodiada nas diferentes atividades desenvolvidas no ambiente prisional. </p>
          <p>A existência da CTC fundamenta-se no reconhecimento de que indivíduos submetidos ao mesmo regime de cumprimento de pena apresentam histórias de vida, condições de saúde, trajetórias sociais, vínculos familiares e necessidades distintas, exigindo abordagens diferenciadas por parte das instituições responsáveis pelo cuidado e pela gestão prisional (Brasil; MJSP, 2026). </p>
          <p>Após a reforma promovida pela Lei nº 10.792/2003, o papel da CTC foi reduzido em algumas decisões da execução penal, especialmente porque o exame criminológico deixou de ser obrigatório para progressão de regime. Atualmente, a comissão permanece relevante para a classificação e acompanhamento da pessoa privada de liberdade, mas sua atuação deve ser compreendida dentro de uma perspectiva interdisciplinar, voltada à garantia de direitos e não à produção de julgamentos morais sobre o indivíduo. Essa é uma discussão bastante atual que envolve a saúde coletiva, a psicologia jurídica e a execução penal (Brasil, 2020). </p>
          <img src="src/assets/img/unidade/img-12.svg" alt="" class="w-80 mx-auto d-block my-4">
          <p>A composição da comissão é multiprofissional, podendo incluir representantes das áreas de saúde, psicologia, serviço social, pedagogia, segurança penal e administração prisional. Essa diversidade de saberes possibilita uma avaliação mais abrangente das condições do indivíduo, superando análises restritas aos aspectos jurídicos ou disciplinares. A proposta é reunir diferentes perspectivas para compreender fatores que influenciam a adaptação à vida prisional, as necessidades de assistência e as possibilidades de participação em atividades educacionais, laborais e de reintegração social. </p>
          <p>Vamos conhecer um pouco mais sobre as atribuições da CTC (Brasil, 2007).</p>
          <img src="src/assets/img/unidade/list-2.svg" alt="" class="w-100 my-4">
          <p>Em alguns contextos, a CTC também contribui para a identificação de situações de vulnerabilidade, como transtornos mentais, deficiência física, dependência de álcool e outras drogas, risco de violência, rompimento de vínculos familiares ou necessidades de proteção especial (Brasil; SENAPPEN, 2026).</p>
          <p>Vamos conferir alguns exemplos e a atuação da CTC.</p>
          <img src="src/assets/img/unidade/img-13.svg" alt="" class="w-100 my-4">
          <p>A atuação da CTC está diretamente relacionada ao princípio da individualização da pena, previsto na Constituição Federal e operacionalizado pela Lei de Execução Penal. Esse princípio estabelece que a execução da pena não deve ocorrer de forma homogênea para todos os indivíduos, mas considerar suas características e necessidades específicas. A individualização, entretanto, não significa tratamento privilegiado, mas a adequação das ações institucionais às particularidades de cada pessoa, respeitando os princípios da dignidade humana e da equidade (Brasil; SENAPPEN, 2026).</p>
          <p>Apesar de sua relevância, a atuação da CTC possui limites claramente definidos. Confira a seguir. </p>
          <img src="src/assets/img/unidade/title-1.svg" alt="" class="w-100 my-4">
          <p class="ms-4">O primeiro deles é o limite jurídico. A comissão não possui competência para decidir sobre progressão de regime, concessão de benefícios penais, aplicação de sanções disciplinares ou qualquer outra atribuição exclusiva do Poder Judiciário. Seus pareceres possuem caráter técnico e consultivo, servindo como subsídio para decisões de outras instâncias, mas não substituindo a autoridade judicial.</p>
          <img src="src/assets/img/unidade/title-2.svg" alt="" class="w-100 my-4">
          <p class="ms-4">Outro limite importante refere-se aos aspectos éticos da atuação profissional. Os integrantes da comissão devem observar os códigos de ética de suas respectivas profissões, especialmente no que se refere ao respeito à autonomia, à confidencialidade das informações e à proteção dos direitos humanos. Informações obtidas durante entrevistas ou atendimentos de saúde não devem ser utilizadas para produzir estigmatização, discriminação ou agravamento das condições de encarceramento. Esse aspecto é particularmente relevante para profissionais da saúde, cujo compromisso ético está voltado para a proteção da vida, do bem-estar e da dignidade das pessoas atendidas.</p>
          <p>Nesse contexto, merece destacarmos a distinção entre avaliação técnica e julgamento moral. A comissão não deve produzir pareceres baseados em impressões subjetivas sobre o “merecimento” da pessoa privada de liberdade, sua personalidade ou suposta periculosidade sem respaldo técnico-científico. Historicamente, avaliações centradas em conceitos vagos de adaptação social ou periculosidade contribuíram para processos de exclusão e discriminação dentro do sistema penal. Atualmente, busca-se uma abordagem baseada em evidências, direitos humanos e necessidades concretas de cuidado.</p>
          <p>Há, também, mais um limite a ser considerado.</p>
          <img src="src/assets/img/unidade/title-3.svg" alt="" class="w-100 my-4">
          <p class="ms-4">A atuação da CTC também encontra limites na própria complexidade do ambiente prisional. Superlotação, insuficiência de equipes, escassez de recursos e dificuldades de articulação com a rede externa de serviços podem comprometer a efetividade das recomendações elaboradas pela comissão. Muitas vezes, a identificação de uma necessidade específica não é suficiente para garantir a oferta do cuidado necessário, evidenciando a importância da articulação entre o sistema prisional, o SUS, a assistência social e outros setores das políticas públicas (Brasil, 2026).</p>
          <p>Para as equipes de saúde, compreender o papel da CTC é fundamental. Sua atuação deve contribuir para a identificação de necessidades de saúde, para o planejamento de intervenções e para a construção de estratégias de cuidado integral. Entretanto, é igualmente importante reconhecer seus limites institucionais e éticos, evitando que instrumentos técnicos sejam utilizados como mecanismos de controle, punição ou restrição de direitos. </p>
          <p>Quando orientada pelos princípios da dignidade humana, da integralidade do cuidado e da interdisciplinaridade, a CTC pode constituir um importante espaço de articulação entre saúde, assistência e execução penal, fortalecendo ações voltadas à promoção da saúde e à reintegração social das pessoas privadas de liberdade. Ou seja, as EAPP podem contribuir com a CTC informando aspectos de saúde, sem fazer juízo sobre comportamento ou merecimento, sem produzir pareceres sobre mérito da execução penal, periculosidade ou aptidão para progressão de regime.</p>
          <p>Existem algumas experiências consideradas exitosas envolvendo a CTC, e essas têm menos relação com a emissão de pareceres e mais com a capacidade da comissão de atuar como espaço de articulação entre saúde, assistência social, educação e segurança prisional.</p>
          <p>Acompanhe. </p>
          <img src="src/assets/img/unidade/img-13.svg" alt="" class="w-100 my-4">
          <p>No geral, o êxito da comissão, além da capacidade de prever comportamentos ou medir "periculosidade", também está em sua capacidade de atuar nas seguintes ações. </p>
          <img src="src/assets/img/unidade/img-14.svg" alt="" class="w-100 my-4">
          <p>É importante considerar que na prática, as experiências mais exitosas envolvendo a CTC não são aquelas que aperfeiçoam mecanismos de controle sobre as pessoas privadas de liberdade, mas aquelas que transformam a classificação em uma ferramenta de reconhecimento de necessidades, garantia de direitos e planejamento do cuidado. Nessa perspectiva, a CTC atua como dispositivo de articulação interdisciplinar voltado à promoção da saúde e à reintegração social.</p>
          <ol id="secao-4" class="lista-outline" style="--secao: 3; --item: 3;">
            <li>Protocolos, fluxos e ferramentas de coordenação do cuidado</li>
          </ol>
          <p>A coordenação do cuidado no sistema prisional depende da utilização de protocolos assistenciais, fluxos de referência e contrarreferência e ferramentas de gestão clínica capazes de garantir a continuidade da atenção em diferentes momentos do encarceramento. Esses instrumentos contribuem para organizar o trabalho das equipes, reduzir a fragmentação da assistência e assegurar que as pessoas privadas de liberdade tenham acesso oportuno aos diferentes pontos da RAS. </p>
          <p>Embora a PNAISP estabeleça diretrizes para a organização da assistência, grande parte dos protocolos utilizados pelas equipes de saúde prisional é compartilhada com a APS, sendo adaptada às especificidades do ambiente prisional e ao perfil epidemiológico dessa população.</p>
          <p>Como discutido anteriormente, compreenda o que significa coordenar o cuidado no sistema prisional. </p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 4; --item: 0;">
            <li>A jornada do cuidado e por que ela exige ferramentas</li>
          </ol>
          <p>A atenção primária descreve o cuidado como uma jornada: a pessoa entra em contato com o serviço, é acolhida e avaliada, segue em acompanhamento, é referenciada a outros pontos quando necessário e, em algum momento, faz a transição para outro serviço ou para a comunidade (Enggist et al., 2014). Dois atributos da atenção primária sustentam essa jornada: a longitudinalidade — o acompanhamento ao longo do tempo, com vínculo — e a coordenação do cuidado — a capacidade de garantir a continuidade da atenção e de integrar as informações que circulam entre os diversos pontos da rede (Starfield, 2002; Teixeira Junior, 2024). No contexto prisional, manter essa jornada íntegra é especialmente difícil, porque a pessoa privada de liberdade se desloca com frequência e sua informação clínica corre o risco de se perder a cada movimentação. </p>
          <p>Nas próximas páginas, percorremos cada etapa, observando o que os protocolos recomendam, o que a organização do serviço operacionaliza e como tudo isso se traduz ou esbarra em limites, no cotidiano das equipes.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 4; --item: 1;">
            <li>Ferramentas na porta de entrada</li>
          </ol>
          <p>A porta de entrada é o momento em que o cuidado começa, e é também onde se cria o primeiro registro que poderá (ou não) acompanhar a pessoa dali em diante. </p>
          <p>O acolhimento, aqui, vai além de uma recepção cordial: ele é uma <strong>ferramenta assistencial de cuidado</strong>, voltada a garantir acesso e resolutividade por meio da escuta qualificada e do diagnóstico e tratamento precoces (Teixeira Junior, 2024). Na prática das equipes, esse acolhimento de chegada costuma receber o nome de bonde — o termo do campo para a recepção das pessoas que chegam à unidade, individualmente ou em grupo. É nesse primeiro contato que a equipe identifica condições crônicas em tratamento, agravos de interesse coletivo (como suspeita de tuberculose), quadros agudos e riscos em saúde mental, incluindo o risco de suicídio.</p>
          <p>Algumas ferramentas se concentram neste momento, acompanhe. </p>
          <img src="src/assets/img/unidade/img-16.svg" alt="" class="w-100 my-4">
          <p>Outra ferramenta de acesso típica do ambiente prisional é o catatau — o bilhete escrito pela própria pessoa para solicitar atendimento (Teixeira Junior, 2024). Ele é, ao mesmo tempo, um recurso engenhoso e um sinal de alerta: muitas vezes a demanda chega só pelo papel, sem que a pessoa seja vista, o que reforça a importância de a equipe consultar o prontuário antes de decidir a conduta.</p>
          <img src="src/assets/img/unidade/img-17.svg" alt="" class="w-80 mx-auto d-block my-4">
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 4; --item: 2;">
            <li>Ferramentas na permanência</li>
          </ol>
          <p>Passado o primeiro contato, o desafio passa a ser manter o acompanhamento ao longo do tempo. A ferramenta central desta etapa é o plano de cuidados, de preferência um plano integrado, que reúne em um só lugar os principais problemas de saúde da pessoa, os riscos, as condutas previstas e os responsáveis por cada ação. Para construí-lo e revisá-lo, ajuda seguir um roteiro de perguntas proposto por Teixeira Junior (2024). Confira.</p>
          <img src="src/assets/img/unidade/img-18.svg" alt="" class="w-100 my-4">
          <p>Esse roteiro transforma o plano de cuidados em uma ferramenta viva de coordenação, e não em um documento que se preenche uma vez e se esquece.</p>
          <p>O <strong>prontuário</strong> — eletrônico e, quando necessário, físico — é a espinha dorsal da continuidade: é nele que resultados de exames, prescrições e evoluções ficam disponíveis para quem atender a pessoa em seguida. Na ausência de sistemas plenamente integrados, às equipes recorrem a ferramentas complementares: planilhas de acompanhamento, listas de pessoas com condições crônicas e registros nos sistemas de informação prisionais, com destaque para o protagonismo da enfermagem no monitoramento desses casos (Teixeira Junior, 2024). </p>
          <div class="d-flex gap-4 my-4 align-items-center">
            <img src="src/assets/img/unidade/img-2.png" alt="">
            <p>O próprio catatau reaparece aqui como canal de comunicação: alguns profissionais pedem que a pessoa envie um bilhete avisando que coletou um exame ou relatando o efeito de uma medicação, combinando ali o próximo retorno. São soluções adaptativas que revelam tanto o empenho das equipes quanto a fragilidade estrutural dos fluxos.</p>
          </div>
          <p>O <strong>Projeto Terapêutico Singular (PTS)</strong> é uma importante ferramenta para a organização do cuidado. Trata-se de um plano de cuidado construído de forma compartilhada entre os diferentes profissionais da equipe de saúde, considerando as necessidades, potencialidades e vulnerabilidades de cada pessoa. Seu objetivo é organizar intervenções integradas, definir responsabilidades entre os membros da equipe e acompanhar a evolução do usuário de maneira contínua e articulada.</p>
          <p>No contexto do sistema prisional, o PTS é particularmente útil para determinados acompanhamentos, como os descritos abaixo.</p>
          <img src="src/assets/img/unidade/img-19.svg" alt="" class="w-100 my-4">
          <p>Também pode ser empregado em situações que exigem articulação com outros serviços da RAS, como os Centros de Atenção Psicossocial (CAPS), serviços especializados e hospitais (Kemper, 2022).</p>
          <p>A elaboração do PTS favorece a comunicação entre os profissionais, fortalece o trabalho em equipe e amplia a integralidade do cuidado, uma vez que permite planejar intervenções de forma coordenada e acompanhar os resultados ao longo do tempo. No ambiente prisional, onde frequentemente coexistem necessidades clínicas, psicossociais e institucionais, o PTS torna-se uma ferramenta estratégica para qualificar a assistência e promover a continuidade do cuidado, mesmo diante de situações como transferências entre unidades ou retorno da pessoa privada de liberdade ao convívio comunitário.</p>
          <p>A permanência também é o momento do matriciamento em saúde mental: o apoio entre a equipe de atenção primária prisional e os serviços especializados, como os centros de atenção psicossocial, para os casos de maior complexidade. Esse arranjo é, em si, uma ferramenta de coordenação, uma vez que ele evita que a pessoa fique sem referência e qualifica a atuação da equipe local. </p>
          <p>Conheça outras três ferramentas importantes</p>
          <img src="src/assets/img/unidade/img-20.svg" alt="" class="w-100 my-4">
          <p>Embora existam protocolos e instrumentos, há obstáculos relacionados à própria dinâmica do encarceramento. Transferências frequentes entre unidades, limitações para deslocamento externo, necessidade de escolta, dificuldades de comunicação entre os serviços e fragmentação dos sistemas de informação podem interromper tratamentos e comprometer o acompanhamento longitudinal.</p>
          <p>Nesse contexto, o trabalho da eAPP extrapola a realização de consultas. A equipe atua como coordenadora do cuidado, articulando diferentes serviços da Rede de Atenção à Saúde para garantir que a privação de liberdade não resulte na interrupção do tratamento nem na perda do vínculo com o SUS. Essa função é essencial para assegurar a integralidade da atenção e a continuidade do cuidado, princípios que orientam a organização do sistema público de saúde.</p>
          <img src="src/assets/img/unidade/img-21.svg" alt="" class="w-100 my-4">
          <button type="button" class="btn-saibamais me-0 ms-auto" style="margin-top: -16px;" data-bs-toggle="modal" data-bs-target="#modal-2">
            <img src="./src/assets/img/geral/saibamais-botao.svg" alt="Saiba mais">
          </button>
          <div class="modal fade modal-saibamais" id="modal-2" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content">
                <div class="card-saibamais" data-bs-dismiss="modal">
                <div class="card-saibamais-icone">
                  <img src="./src/assets/img/geral/saibamais.svg" alt="">
                </div>
                <div class="card-saibamais-texto">
                  <h4>Saiba mais</h4>
                  <p>O capítulo sobre atenção primária em prisões da publicação Prisons and Health, da OMS Europa (Enggist et al., 2014, cap. 20), detalha a ideia de “jornada do cuidado” e os componentes que estruturam uma atenção primária de qualidade no ambiente prisional. É uma leitura recomendada para aprofundar como organizar protocolos e ferramentas a partir dos atributos da atenção primária.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 4; --item: 3;">
            <li>Protocolos assistenciais</li>
          </ol>
          <p>As equipes de saúde prisional utilizam os mesmos Protocolos Clínicos e Diretrizes Terapêuticas (PCDT) e protocolos da Atenção Primária adotados pelo SUS. </p>
          <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-6">
            <img src="./src/assets/img/geral/cliqueaqui-botao.svg" alt="Saiba mais">
          </button>
          <div class="modal fade modal-saibamais" id="modal-6" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content">
                <div class="card-saibamais" data-bs-dismiss="modal">
                  <div class="card-saibamais-texto">
                    <p>Manual de Recomendações para o Controle da Tuberculose no Brasil, disponível em: https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/tuberculose/manual-de-recomendacoes-e-controle-da-tuberculose-no-brasil-2a-ed.pdf/view</p>
                    <p>Protocolos Clínicos e Diretrizes Terapêuticas do Ministério da Saúde sobre HIV e outras IST, disponível em: https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts</p>
                    <p>Protocolos Clínicos e Diretrizes Terapêuticas sobre Hepatites Virais, disponível em: https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts</p>
                    <p>PCDT da Hanseníase, disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hanseniase/publicacoes/protocolo-clinico-e-diretrizes-terapeuticas-da-hanseniase-2022/view</p>
                    <p>PCDT da Hipertensão Arterial, disponível em: https://www.gov.br/conitec/pt-br/midias/protocolos/2026/pcdt-resumido/pcdt-resumido-da-hipertensao-arterial-sistemica</p>
                    <p>PCDT do Diabetes Mellitus Tipo 2, disponível em: https://www.gov.br/conitec/pt-br/midias/protocolos/2026/pcdt-diabete-melito-tipo-2</p>
                    <p>Manuais e publicações da Coordenação-Geral de Saúde Mental, disponível em: https://www.gov.br/saude/pt-br/composicao/saes/desmad/publicacoes</p>
                    <p>Linha de Cuidado e Plano Nacional de Políticas sobre Drogas, disponível em: https://www.gov.br/mj/pt-br/assuntos/sua-protecao/politicas-sobre-drogas/arquivo-manual-de-avaliacao-e-alienacao-de-bens/planad_set_2022.pdf e https://linhasdecuidado.saude.gov.br/portal/transtornos-por-uso-de-alcool-no-adulto/ </p>
                    <p>Protocolos da Atenção Básica e Cadernos de Atenção Primária: Saúde da mulher, disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/protocolos_atencao_basica_saude_mulheres.pdf</p>
                    <p>Manual de Atenção ao Pré-natal do Ministério da Saúde, disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/gravidez/publicacoes</p>
                    <p>Manuais do Programa Nacional de Imunizações (PNI), disponível em:  https://www.gov.br/saude/pt-br/vacinacao/manuais </p>
                    <p>Diretrizes Clínicas da Atenção Primária à Saúde: Saúde Bucal, disponível em: https://www.gov.br/saude/pt-br/composicao/saps/brasil-sorridente/diretrizes-clinicas-para-a-aps/diretrizes-abordadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Reforçamos que, no cotidiano das unidades prisionais, os protocolos, manuais, diretrizes, funcionam como instrumentos de apoio à decisão clínica, mas não substituem a prática clínica. </p>
          <p>Cada pessoa privada de liberdade apresenta necessidades específicas que devem ser avaliadas considerando seu contexto clínico, suas vulnerabilidades, seu histórico de saúde e as condições do ambiente prisional. </p>
          <p>É importante destacar que nem todas as situações clínicas vivenciadas no sistema prisional possuem protocolos específicos. Casos complexos, situações que envolvam múltiplas vulnerabilidades exigem que a equipe multiprofissional discuta os casos, consulte evidências científicas atualizadas, solicite apoio matricial quando necessário e articule encaminhamentos para outros serviços da rede. Nesses contextos, a construção compartilhada do plano de cuidado torna-se tão importante quanto a aplicação dos protocolos assistenciais.</p>
          <p>Os protocolos devem ser compreendidos como instrumentos dinâmicos, sujeitos a atualizações periódicas conforme novas evidências científicas são incorporadas pelo Ministério da Saúde.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 4; --item: 4;">
            <li>Ferramentas de referência à rede</li>
          </ol>
          <p>Boa parte do cuidado, de que a pessoa precisa, não está dentro da unidade penal: exames de maior complexidade, consultas especializadas, procedimentos e internações dependem da rede de atenção à saúde do SUS. A ferramenta que organiza esse acesso é a regulação, em geral por meio do sistema de regulação (SISREG), o mesmo utilizado para a população em geral. Esse ponto tem uma dimensão importante de equidade: ao entrar nas mesmas filas, a pessoa privada de liberdade enfrenta as mesmas barreiras de acesso de qualquer cidadão daquele território. Nem mais, nem menos.</p>
          <p>À regulação somam-se os protocolos de referência e contrarreferência, saiba mais sobre eles. </p>
          <img src="src/assets/img/unidade/img-22.svg" alt="" class="d-block mx-auto">
          <p>Mas há uma ferramenta de coordenação específica do ambiente prisional sem a qual nada disso se concretiza: a <strong>articulação da escolta</strong>.</p>
          <p>Uma consulta agendada via regulação não acontece se, no dia, não houver escolta disponível e autorização formal de saída (Teixeira Junior, 2024). A relação entre saúde e segurança precisa, portanto, estar pactuada, com atribuições claras de cada setor e rotinas combinadas de transporte, agendamento e alimentação dos sistemas de informação.</p>
          <p>Essa dependência produz uma cadeia de eventos que a equipe precisa acompanhar de perto: solicitar o exame, viabilizar a coleta ou a saída com escolta, receber o laudo, registrá-lo no prontuário e reagendar a pessoa para dar seguimento ao plano. Quando há mais agendamentos do que escoltas disponíveis em um mesmo dia, surgem reagendamentos sucessivos e cada reagendamento é um ponto onde a continuidade pode se romper.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 4; --item: 5;">
            <li>Ferramentas nas transições</li>
          </ol>
          <p>Talvez o ponto mais frágil de toda a jornada seja a transição: quando a pessoa muda de unidade, por transferência ou progressão de regime. A pergunta prática é simples: o que viaja com ela? A ferramenta essencial aqui é a <strong>transferência da informação clínica</strong> – prontuário, resultados de exames, encaminhamentos e prescrições – para a unidade de destino, por meio eletrônico e/ou manual, de modo que a equipe que recebe não precise recomeçar do zero. Os protocolos de acolhimento preveem exatamente isso: a cada movimentação, repassar os registros e consultar previamente o histórico da pessoa, aproveitando ao máximo o contato inicial.</p>
          <p>Na prática, porém, é comum que a informação se perca nas transferências, e os profissionais relatam recorrer a soluções improvisadas para não interromper o cuidado (Teixeira Junior, 2024). Reconhecer esse risco é o primeiro passo para enfrentá-lo: quanto mais a continuidade depender de ferramentas confiáveis, e menos da memória individual, mais robusta ela será diante das movimentações constantes.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 4; --item: 6;">
            <li>Ferramentas na porta de saída</li>
          </ol>
          <p>A jornada do cuidado não termina nos muros. A porta de saída, a preparação para o retorno à liberdade, total ou parcial, é uma etapa de cuidado em si, voltada a garantir que o tratamento continue na comunidade. A OMS chama essa lógica de continuidade do cuidado para egressos (continuum ou throughcare): planejar a saída de modo que a pessoa chegue ao SUS e à rede socioassistencial já vinculada, sobretudo nos casos de condições crônicas e de saúde mental (Enggist et al., 2014).</p>
          <p>As ferramentas desta etapa são bastante concretas: a entrega de documentos que sustentam a continuidade, cartão nacional de saúde, cartão de vacina, resultados de exames, prescrições e relatórios, e o encaminhamento ativo para os serviços de saúde e de assistência social do território, incluindo os dispositivos de apoio ao egresso. Aqui, a coordenação se estende para fora da unidade penal e se apoia na articulação intersetorial: sem ela, a pessoa sai com a pena cumprida, mas com o cuidado interrompido.</p>
          <p class="text-center fs-6">Quadro 1 — Ferramentas de coordenação ao longo do itinerário terapêutico.</p>
          <img src="src/assets/img/unidade/table-1-1.png" alt="" style="width: 80%" class="mx-auto d-block mt-3">
          <div class="collapse" id="table-1">
            <img src="src/assets/img/unidade/table-1-2.png" alt="" style="width: 80%" class="mx-auto d-block">
          </div>
          <a href="#table-1" data-bs-toggle="collapse" role="button" style="width: 80%" class="mx-auto d-block">
            <img src="src/assets/img/unidade/table-1-3.png" alt="" class="w-100">
          </a>
          <p class="text-center fs-6">Fonte: elaborado pelos autores.  </p>
          <ol id="secao-5" class="lista-outline" style="--secao: 3; --item: 4;">
            <li>Sistemas de informação (SISDEPEN, INFOPEN, e-SUS APS, SINAN)</li>
          </ol>
          <p>O principal sistema nacional da administração penitenciária é o <strong>Sistema de Informações do Departamento Penitenciário Nacional (SISDEPEN)</strong>, coordenado pela Secretaria Nacional de Políticas Penais (SENAPPEN). Ele reúne informações sobre todas as unidades prisionais brasileiras, incluindo infraestrutura, capacidade instalada, recursos humanos, perfil da população prisional, educação, trabalho, assistência jurídica, assistência à saúde e outros indicadores de gestão. Os dados são alimentados pelas administrações penitenciárias estaduais e consolidados pela SENAPPEN para subsidiar o diagnóstico e o planejamento das políticas penais nacionais.</p>
          <p>É importante ressaltar que, na área da saúde, o SISDEPEN não funciona como um prontuário eletrônico nem substitui os sistemas do SUS. As informações registradas são predominantemente agregadas e gerenciais, como existência de equipes de saúde, cobertura assistencial, estrutura disponível e alguns indicadores gerais sobre as condições de saúde da população privada de liberdade.</p>
          <p>Você conhece os sistemas de informação mais utilizados pela equipe de atenção primária prisional? Confira.</p>
          <img src="src/assets/img/unidade/img-23.svg" alt="" class="w-100 my-4">
          <p>Você se perguntou como ocorre a integração? Na prática, a integração entre os sistemas da saúde e da administração penitenciária ainda ocorre de forma parcial. </p>
          <p>As equipes de saúde registram os atendimentos clínicos nos sistemas do SUS, como o CNES, o SISAB/e-SUS APS, o SINAN, o SIH/SUS e outros sistemas assistenciais. Paralelamente, a administração penitenciária atualiza o SISDEPEN com informações sobre a população custodiada, movimentações entre unidades, capacidade instalada e indicadores institucionais.</p>
          <p>Em muitos estados, essas informações ainda precisam ser conciliadas manualmente pelos gestores, pois não existe interoperabilidade completa entre os sistemas. Isso significa que uma transferência de uma pessoa privada de liberdade registrada no sistema penitenciário nem sempre atualiza automaticamente os registros utilizados pelas equipes de saúde, exigindo comunicação entre os profissionais e atualização dos cadastros locais.</p>
          <p>Essa fragmentação pode gerar dificuldades para acompanhar a continuidade dos tratamentos durante transferências entre unidades; manter atualizados os cadastros populacionais utilizados para o financiamento da PNAISP; produzir indicadores nacionais consistentes sobre a assistência em saúde prisional e integrar informações clínicas e administrativas para subsidiar a tomada de decisão.</p>
          <p>Nos últimos anos, o Ministério da Saúde tem avançado na construção da Rede Nacional de Dados em Saúde (RNDS), cuja finalidade é promover a interoperabilidade entre diferentes sistemas de informação em saúde, criando um ambiente nacional para o compartilhamento seguro de dados clínicos. Embora represente um avanço importante para o SUS, a integração plena entre a RNDS e os sistemas da administração penitenciária ainda constitui um desafio, exigindo os itens descritos abaixo. </p>
          <img src="src/assets/img/unidade/img-24.svg" alt="" class="w-100 my-4">
          <p>No contexto da PNAISP, fortalecer a comunicação entre os sistemas do SUS e da SENAPPEN representa um passo importante para qualificar o monitoramento da política, favorecer a continuidade do cuidado e ampliar a capacidade de planejamento das ações de saúde destinadas às pessoas privadas de liberdade.</p>
          <p>E você já se perguntou qual a importância do correto preenchimento dos sistemas de informação? Utilize o e-SUS APS para registrar seus atendimentos, permitindo que o histórico clínico acompanhe o paciente mesmo após a soltura. Alimente o SINAN com rigor para monitorar doenças de notificação compulsória e direcionar a vigilância epidemiológica no presídio. Consulte o SISDEPEN para acessar estatísticas oficiais sobre a população carcerária e a infraestrutura das unidades. Domine essas ferramentas para integrar dados de saúde e justiça, reduzindo incertezas e qualificando a coordenação do cuidado.</p>
          <p>Alimentar os sistemas de informação é um ato técnico-político que transforma sua prática individual em dados coletivos essenciais para garantir a universalidade, permitindo identificar quem está sendo atendido e quem ainda permanece excluído do acesso. Quando você registra corretamente as condições de saúde e os determinantes sociais, viabiliza a estratificação de riscos, o que é um dos pilares da equidade: isso permite que o sistema de saúde direcione recursos e cuidados específicos para os pacientes e populações vulneráveis.</p>
          <p>O preenchimento rigoroso de ferramentas como o e-SUS APS fundamenta a integralidade, assegurando que a informação clínica seja contínua e acompanhe o itinerário do paciente por todos os pontos da RAS. Ao alimentar o SINAN, você integra a vigilância epidemiológica à assistência clínica, permitindo um planejamento que antecipa necessidades de saúde em vez de apenas reagir a eventos agudos.</p>
          <p>A qualidade desses registros reduz incertezas na gestão e garante o direito fundamental do cidadão ao acesso à informação, transformando dados brutos em sabedoria para decisões clínicas e administrativas mais seguras. Lembre-se que o prontuário eletrônico é a memória da sua equipe; sem ele, a longitudinalidade se perde e o cuidado torna-se fragmentado e ineficiente. Atuar proativamente na alimentação desses sistemas é, portanto, uma forma direta de exercer os princípios éticos de justiça social que regem o SUS.</p>
          <p>Dentro do ambiente prisional, é possível que lhe seja orientado também o registro de informações acerca da saúde em um sistema paralelo de administração. Esse sistema costuma não ser integrado nacionalmente. Cada unidade pode possuir o seu de acordo com a jurisprudência de cada unidade federativa. Nesses sistemas é comum informações como as descritas a seguir. </p>
          <img src="src/assets/img/unidade/img-25.svg" alt="" class="w-100 my-4">
          <p>Fique atento à questão da confidencialidade: ao preencher sistemas de informações administrativas, você pode acabar revelando diagnósticos sensíveis (como HIV, hipertensão e diabetes) para membros da segurança que acessam o sistema. Portanto, utilize os dados de forma ética e lembre-se de que o e-SUS é a memória clínica da sua equipe, já os sistemas de informações administrativos podem ajudar você com a correlação entre itinerário terapêutico e carcerário. Além disso, é importante reforçar que nem toda unidade prisional contará com esse sistema.</p>
          <p>A efetivação da PNAISP não depende apenas da atuação das equipes, mas também da governança da informação. O desafio atual não é apenas produzir dados, e sim garantir que as informações geradas pelo SUS e pela SENAPPEN possam dialogar entre si, apoiando decisões clínicas, gerenciais e de financiamento.</p>
          <ol id="secao-6" class="lista-outline" style="--secao: 3; --item: 5;">
            <li>Planejamento de agendas e organização do cuidado</li>
          </ol>
          <p>A organização das agendas deve ser orientada pelo perfil epidemiológico da população atendida e pelas necessidades identificadas pela equipe. Pessoas com doenças crônicas, gestantes, idosos, indivíduos com tuberculose, HIV, transtornos mentais ou outras condições que exigem acompanhamento contínuo devem ter consultas programadas de acordo com critérios clínicos previamente estabelecidos.</p>
          <p>Além dos atendimentos agendados, é importante manter horários destinados às demandas espontâneas e às intercorrências clínicas, que são frequentes no ambiente prisional. Essa combinação entre ações programadas e atendimento às situações agudas contribui para ampliar o acesso sem comprometer a continuidade do cuidado.</p>
          <p>O planejamento da agenda deve ser construído de forma compartilhada entre os diferentes profissionais da equipe. Médicos, enfermeiros, técnicos de enfermagem, cirurgiões-dentistas, farmacêuticos, psicólogos e demais profissionais possuem agendas complementares e desenvolvem ações que muitas vezes dependem umas das outras.</p>
          <div class="d-flex gap-4 my-4 align-items-center">
            <img src="src/assets/img/unidade/img-3.png" alt="">
            <p>Por exemplo, uma pessoa diagnosticada com diabetes pode necessitar de consulta médica para ajuste terapêutico, acompanhamento de enfermagem para monitoramento clínico, atendimento odontológico, avaliação nutricional, dispensação de medicamentos e participação em atividades educativas. Quando essas ações são planejadas de forma integrada, o cuidado torna-se mais resolutivo e reduz-se o risco de fragmentação da assistência.</p>
          </div>
          <p>O planejamento das agendas deve considerar os diferentes momentos da trajetória da pessoa privada de liberdade. No ingresso na unidade prisional, é fundamental garantir avaliação inicial em saúde para identificação de necessidades imediatas e fatores de risco. Durante o período de custódia, deve ser assegurado o acompanhamento longitudinal, o profissional precisa realizar busca ativa para o monitoramento das condições crônicas, as ações preventivas e a realização de exames e encaminhamentos necessários.</p>
          <p>Nos casos de transferência entre unidades ou de saída do sistema prisional, a equipe deve organizar a continuidade do cuidado, preparando informações clínicas, orientações e encaminhamentos para os serviços da Rede de Atenção à Saúde. Dessa forma, a agenda deixa de ser apenas um instrumento de organização interna e passa a integrar a coordenação do cuidado em toda a trajetória assistencial.</p>
          <p>Embora o planejamento seja essencial, a organização do trabalho no sistema prisional exige flexibilidade para lidar com situações imprevistas, como intercorrências clínicas, surtos de doenças transmissíveis, transferências, audiências judiciais ou alterações na rotina da unidade.</p>
          <img src="src/assets/img/unidade/img-26.svg" alt="" class="w-100 my-4">
          <p>Esse monitoramento permite ajustar continuamente o processo de trabalho e identificar oportunidades para ampliar o acesso, qualificar o cuidado e utilizar de forma eficiente os recursos disponíveis.</p>
          <ol id="secao-7" class="lista-outline" style="--secao: 3; --item: 6;">
            <li>Acesso à saúde no ambiente prisional</li>
          </ol>
          <p>De todos os desafios que você vai encontrar na atenção primária prisional, o acesso talvez seja o mais cotidiano e o mais revelador. Antes de qualquer conduta clínica, há uma pergunta prática que se impõe todos os dias: como a pessoa privada de liberdade chega até você? </p>
          <p>A resposta raramente é simples, e entender essa engrenagem é o primeiro passo para cuidar bem.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 7; --item: 0;">
            <li>Acesso é primeiro contato</li>
          </ol>
          <p>Na atenção primária, o acesso corresponde ao atributo do primeiro contato: a porta de entrada do sistema, o lugar a que a pessoa recorre a cada novo problema ou novo episódio de saúde (Mendes, 2011; Starfield, 2002). Esse atributo tem duas faces que vale distinguir. A acessibilidade é a possibilidade estrutural de obter cuidado: existe um serviço, há uma equipe, há uma porta. O uso é a utilização efetiva desse serviço quando se precisa dele. As duas não são a mesma coisa, e é justamente entre elas que mora o problema do acesso na prisão.</p>
          <p>No sistema prisional, a acessibilidade costuma existir no papel: há uma unidade de saúde dentro do estabelecimento penal e uma equipe responsável por aquela população. Mas o uso é intensamente mediado. Entre a pessoa que precisa de cuidado e a equipe que pode oferecê-lo, interpõe-se uma camada de logística e de regras de segurança que não existe em nenhum outro ponto da rede. A pessoa não “vai” ao serviço: ela precisa ser levada. É essa diferença que transforma o acesso, na prisão, em um desafio permanente (Teixeira Junior, 2024).</p>
          <p>Vale guardar, desde já, o princípio que sustenta tudo o que vem a seguir: a pessoa privada de liberdade é, antes de tudo, um paciente, com direito ao mesmo padrão de atenção disponível fora dos muros (Enggist et al., 2014). O acesso não é um favor concedido, mas sim um direito que os fluxos de trabalho existem para garantir.</p>
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
                  <p>Para aprofundar o conceito de primeiro contato e os demais atributos da atenção primária, a obra As Redes de Atenção à Saúde, de Eugênio Vilaça Mendes (2011), é uma referência incontornável. Ela detalha como a atenção primária ordena o acesso e os fluxos dentro da rede de atenção à saúde.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 7; --item: 1;">
            <li>As formas de acesso na prática</li>
          </ol>
          <p>Compreender o acesso na prisão começa por uma pergunta concreta: por quais caminhos a pessoa chega até a equipe? A pesquisa de campo identifica várias vias, que convivem e às vezes competem entre si (Teixeira Junior, 2024). </p>
          <img src="src/assets/img/unidade/img-27.svg" alt="" class="w-100 my-4">
          <p>Cada uma dessas vias resolve uma parte do problema e cria outra. O Quadro 2 organiza as principais formas de acesso, como funcionam e que limites trazem.</p>
          <p class="text-center fs-6">Quadro 2 — Vias de acesso à equipe de saúde na atenção primária prisional</p>
          <img src="src/assets/img/unidade/table-2-1.png" alt="" style="width: 80%" class="mx-auto d-block mt-3">
          <div class="collapse" id="table-1">
            <img src="src/assets/img/unidade/table-2-2.png" alt="" style="width: 80%" class="mx-auto d-block">
          </div>
          <a href="#table-1" data-bs-toggle="collapse" role="button" style="width: 80%" class="mx-auto d-block">
            <img src="src/assets/img/unidade/table-1-3.png" alt="" class="w-100">
          </a>
          <p class="text-center fs-6">Fonte: elaborado pelos autores.  </p>
          <p>Repare em um ponto: muitas dessas vias dependem de intermediários, o bilhete, o agente, o familiar. Isso significa que, com frequência, a demanda chega até você sem que a pessoa tenha sido vista. Por isso, consultar o prontuário antes de decidir a conduta deixa de ser uma recomendação e passa a ser parte essencial do método de trabalho.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 7; --item: 2;">
            <li>O que você vai encontrar: as barreiras do cotidiano</li>
          </ol>
          <p>Se a acessibilidade existe e as vias de acesso são várias, por que o acesso continua sendo um problema? Porque entre a demanda e o atendimento há barreiras que se repetem todos os dias, e que você precisa conhecer para não as atribuir, equivocadamente, à própria pessoa. Vamos falar sobre quatro barreiras.</p>
          <div class="row my-4">
            <div class="col-4">
              <img src="src/assets/img/unidade/img-28.svg" alt="" class="w-100">
            </div>
            <div class="col">
              <p>A primeira é a <strong>dependência de escolta</strong>. Toda vez que alguém precisa ir à unidade de saúde, é necessário operacionalizar uma logística de segurança: abrir e fechar celas, deslocar a pessoa entre blocos, garantir um número mínimo de escoltantes. O trabalho da saúde fica, assim, limitado pelo número de policiais penais disponíveis (Teixeira Junior, 2024). Daí decorre a pauta: a agenda precisa contar não só o tempo da consulta, mas o tempo do deslocamento, da espera na cela de espera e do trânsito dentro da própria unidade. Se você encaminha a pessoa para uma medicação injetável, o próximo paciente só chega quando o mesmo escoltante puder trazê-lo. Uma agenda de 15 ou 30 minutos, portanto, embute uma parcela de tempo que é pura logística.</p>
              <p>A segunda barreira são as <strong>regras de segurança</strong> sobre quem pode circular e permanecer junto: nem todas as pessoas podem dividir o mesmo espaço de espera, o que fragmenta ainda mais a agenda. </p>
            </div>
          </div>
          <p>A terceira é a <strong>informação</strong> que chega sem avaliação — o catatau que indica um risco apenas pelo que está escrito no papel. E há uma barreira mais sutil, porém, decisiva: o <strong>estigma</strong>.</p>
          <p>Convidamos você a fazer uma reflexão. Na sala de atendimento costuma haver três cadeiras: a do profissional, a do policial e a cadeira verde, de fibra, sem estofado, que não gira — reservada à pessoa presa. Em um episódio de campo, um profissional chega a alertar outro para não se sentar ali, porque um preso havia se sentado antes (Teixeira Junior, 2024). Pergunte-se: o que comunica, sobre o acesso e sobre o cuidado, o simples fato de existir uma cadeira diferente para quem está preso? Que mensagens silenciosas a organização do espaço transmite a quem busca atendimento?</p>
          <img src="src/assets/img/unidade/img-29.svg" alt="" class="my-4 mx-auto d-block">
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 7; --item: 3;">
            <li>Implicações para a prática clínica</li>
          </ol>
          <p>O que tudo isso significa para o seu dia a dia? Confira uma breve resposta, mas que diz muito sobre o tema.</p>
          <img src="src/assets/img/unidade/list-3.svg" alt="" class="w-100 my-4">
          <p>E, acima de tudo, sustentar uma postura: tratar o acesso como direito, e não como concessão.</p>
          <p>Voltando à pergunta do início — como a pessoa chega até você? —, talvez a melhor medida da qualidade do acesso não seja quantas pessoas a equipe atende, mas quantas deixam de ser atendidas por barreiras que poderiam ser enfrentadas. Pense, no seu contexto: quais barreiras de acesso você já consegue identificar? E quais delas dependem de você, da equipe ou da articulação com a segurança para serem reduzidas? </p>
          <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-3">
            <img src="./src/assets/img/geral/saibamais-botao.svg" alt="Saiba mais">
          </button>
          <div class="modal fade modal-saibamais" id="modal-3" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content">
                <div class="card-saibamais" data-bs-dismiss="modal">
                <div class="card-saibamais-icone">
                  <img src="./src/assets/img/geral/saibamais.svg" alt="">
                </div>
                <div class="card-saibamais-texto">
                  <h4>Saiba mais</h4>
                  <p>A Lei nº 15.378, de 6 de abril de 2026, trata do Estatuto dos Direitos do Paciente. Este é um marco normativo importante. A lei se aplica a serviços de saúde de qualquer natureza e a profissionais de saúde, portanto também alcança a atenção à saúde no sistema prisional. A norma unifica as diretrizes de saúde do Brasil, garantindo maior autonomia, informação, segurança e pode fortalecer especialmente a confidencialidade, prontuário, acesso a cuidados em tempo oportuno, não discriminação, participação do paciente no plano terapêutico, consentimento informado, privacidade no atendimento e encaminhamento do registro assistencial em situações de transferência. No contexto prisional, reforça que a pessoa privada de liberdade permanece sujeito de direitos, e que a restrição penal não autoriza restrição indevida dos direitos relacionados ao cuidado em saúde. </p>
                  <p>Acesse em: <a href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15378.htm" class="text-black" target="_blank">https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15378.htm</a></p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <img src="src/assets/img/unidade/img-30.svg" alt="" class="w-80 mx-auto my-4 d-block">
          <ol id="secao-8" class="lista-outline" style="--secao: 3; --item: 7;">
            <li>Experiências do cotidiano e prática clínica</li>
          </ol>
          <div class="split">
            <p>O cotidiano das equipes de saúde no sistema prisional exige criatividade, flexibilidade e capacidade de adaptação permanente. Sabemos que diferentemente de outros serviços de saúde, a prática clínica nas prisões ocorre em um ambiente onde as rotinas são influenciadas por questões de segurança, movimentação de pessoas, disponibilidade de escolta, mudanças no regime disciplinar e situações imprevisíveis que podem alterar completamente a agenda planejada para o dia. Ainda assim, para avançarmos, a Atenção Primária Prisional precisa manter seu compromisso com a prevenção de agravos, o acompanhamento das condições crônicas e a coordenação do cuidado, buscando garantir o direito à saúde das pessoas privadas de liberdade.</p>
            <p>Indicamos a leitura de algumas experiências publicadas que demonstram que a APS prisional vai muito além do atendimento individual em consultório. Ela envolve ações coletivas, educação em saúde, construção de vínculos, planejamento de fluxos assistenciais e articulação permanente entre saúde, administração prisional e rede externa de serviços. </p>
            <p>A qualificação dos processos de trabalho, a atuação multiprofissional e a integração com a Rede de Atenção à Saúde (RAS) aparecem como elementos centrais para ampliar o acesso e a resolutividade do cuidado.</p>
            <button type="button" class="btn-saibamais mx-0" data-bs-toggle="modal" data-bs-target="#modal-5">
              <img src="./src/assets/img/geral/cliqueaqui-botao.svg" alt="Saiba mais">
            </button>
            <div class="modal fade modal-saibamais" id="modal-5" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                  <div class="card-saibamais" data-bs-dismiss="modal">
                    <div class="card-saibamais-texto">
                      <p>Recomendações sobre a organização do cuidado na atenção primária à saúde prisional: <a class="text-black" target="_blank" href="https://periodicos.newsciencepubl.com/arace/article/view/1143/1684">https://periodicos.newsciencepubl.com/arace/article/view/1143/1684</a></p>
                      <p>Programa de enfrentamento ao tabagismo na saúde prisional do Centro de Progressão Penitenciária (CPP): <a class="text-black" target="_blank" href="https://www.prisoeslivresdetbcesp.com.br/_files/ugd/4979d2_9af74932d46e403bbb5aa0c43a993794.pdf">https://www.prisoeslivresdetbcesp.com.br/_files/ugd/4979d2_9af74932d46e403bbb5aa0c43a993794.pdf</a></p>
                      <p>Promoção da saúde sexual com jovens nas prisões: uma abordagem participativa: <a class="text-black" target="_blank" href="https://www.researchprotocols.org/2019/4/e11829/pdf">https://www.researchprotocols.org/2019/4/e11829/pdf</a></p>
                      <p>Planificação da Atenção Primária à Saúde nas prisões: projeto piloto: <a class="text-black" target="_blank" href="https://docs.bvsalud.org/biblioref/2022/06/1371763/01_10366_raquel-barcella_portugues_gramatica.pdf">https://docs.bvsalud.org/biblioref/2022/06/1371763/01_10366_raquel-barcella_portugues_gramatica.pdf</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>A experiência do Programa de Enfrentamento ao Tabagismo no Centro de Progressão Penitenciária (CPP) demonstra como grupos terapêuticos podem ser organizados dentro da prisão. O programa reuniu até dez participantes por grupo, com encontros semanais durante doze semanas, combinando apoio terapêutico, abordagem cognitivo-comportamental, uso de medicamentos quando necessário e acompanhamento posterior dos participantes. A experiência mostrou que foi preciso adaptar metodologias tradicionais ao contexto prisional, ampliando o tempo de convivência, fortalecendo vínculos e incorporando práticas integrativas para favorecer a adesão ao tratamento.</p>
          <p>Da mesma forma, a experiência internacional de promoção da saúde sexual com jovens privados de liberdade evidenciou a importância de metodologias participativas. Em vez de apenas transmitir informações, os participantes foram convidados a discutir suas próprias experiências, construir mensagens educativas e colaborar na elaboração de materiais de comunicação voltados aos demais internos. Essa estratégia favoreceu o protagonismo dos participantes e aumentou a relevância das ações educativas.</p>
          <p>Temas frequentemente trabalhados incluem as seguintes questões. </p>
          <img src="src/assets/img/unidade/img-31.svg" alt="" class="w-100 mx-auto my-4 d-block">
          <p>Mais do que repassar informações, a educação em saúde nas prisões deve estimular reflexão, autonomia e participação, reconhecendo os saberes e experiências das pessoas privadas de liberdade.</p>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3; --sub: 8; --item: 0;">
            <li>A adaptação da agenda diante das intercorrências</li>
          </ol>
          <p>Uma característica marcante da APS prisional é a necessidade de reorganizar constantemente a agenda de trabalho. Embora as equipes realizem planejamento prévio das consultas, grupos e atividades programadas, intercorrências são frequentes e exigem respostas rápidas.</p>
          <p>Situações como crises psiquiátricas, tentativas de suicídio, episódios de violência, surtos infecciosos, transferências emergenciais, audiências judiciais, operações de segurança ou indisponibilidade de escoltas podem alterar completamente a rotina do serviço.</p>
          <p>Nesses momentos, a equipe precisa exercer uma gestão dinâmica da agenda. Algumas estratégias frequentemente utilizadas incluem as ações descritas a seguir.</p>
          <img src="src/assets/img/unidade/img-32.svg" alt="" class="w-100 mx-auto my-4 d-block">
          <p>Por exemplo, uma manhã planejada para acompanhamento de pessoas com hipertensão pode precisar ser interrompida para atendimento de uma crise de abstinência, de uma suspeita de tuberculose ou de uma emergência relacionada à saúde mental. Nesses casos, o desafio não é apenas atender a intercorrência, mas garantir posteriormente a continuidade do cuidado das demais pessoas que tiveram suas consultas adiadas.</p>
          <p>Essa capacidade de adaptação foi identificada também na experiência da Planificação da APS nas prisões, que destacou a importância de revisar processos de trabalho, refletir sobre as rotinas institucionais e fortalecer o papel dos profissionais como protagonistas na organização do cuidado.</p>
          <p>As oficinas realizadas com trabalhadores da saúde e da segurança demonstraram que a flexibilidade dos processos é fundamental para responder às demandas reais do ambiente prisional.</p>
          <p><strong>Então, o que é possível fazer no sistema prisional?</strong> É possível desenvolver um conjunto de ações de saúde dentro das prisões. Os melhores resultados ocorrem quando a equipe de saúde atua de forma integrada com os demais setores da instituição, sem abrir mão de sua autonomia técnica e ética. Estamos discutindo neste curso que a prática clínica prisional exige sensibilidade para compreender as limitações do contexto, mas também capacidade de identificar oportunidades de cuidado, promoção da saúde e fortalecimento da cidadania. Afinal, mesmo em um ambiente de privação de liberdade, continuam existindo pessoas com projetos de vida, necessidades de saúde e potencial para participar ativamente da construção do próprio cuidado.</p>
          <h3 style="color: #123F68;">Encerramento da Unidade</h3>
          <p>Ao longo desta unidade, você percebeu que protocolos e fluxos só coordenam o cuidado quando existem ferramentas que os sustentam. Mais do que preencher formulários, coordenar é assumir a responsabilidade de que a informação e o cuidado acompanhem a pessoa em cada deslocamento.</p>
          <p>Há, por fim, uma dimensão da continuidade que nenhum sistema de informação captura: o vínculo. Os profissionais de saúde descrevem o esforço de manter um “fio de vida” para pessoas em situações extremas de isolamento (Teixeira Junior, 2024) — um cuidado que também é escuta, presença e sentido. Pergunte-se: no seu contexto de trabalho, quais ferramentas garantem a continuidade da informação? E o que, além delas, sustenta a continuidade do vínculo? </p>
          <p>Mantenha sempre a atenção sobre os temas abordados e continue aprimorando conhecimentos sobre os assuntos!</p>
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
                      <p>BRASIL. Lei nº 7.210, de 11 de julho de 1984. Institui a Lei de Execução Penal. Brasília, DF: Presidência da República, 1984.</p>
                      <p>BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Política Nacional de Humanização da Atenção e Gestão do SUS. Brasília: Ministério da Saúde, 2013. </p>
                      <p>BRASIL. Ministério da Saúde; Ministério da Justiça. Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP). Brasília, DF: Ministério da Saúde, 2014.</p>
                      <p>BRASIL. Ministério da Saúde. Política Nacional de Atenção Básica. Brasília, DF: Ministério da Saúde, 2017.</p>
                      <p>BRASIL. Ministério da Justiça e Segurança Pública. Política Nacional de Atenção à Pessoa Egressa do Sistema Prisional. Brasília, DF: MJSP, 2020.</p>
                      <p>BRASIL. Ministério da Saúde. Sistema de Informação em Saúde da Atenção Básica: e-Gestor Atenção Básica. Brasília, DF: Ministério da Saúde, 2026. Disponível em: https://sisaps.saude.gov.br/sistemas/gerenciaaps/docs/modulo-de-solicitacoes/equipes/6eapp/. Acesso em: 25 jun. 2026.</p>
                      <p>BRASIL. Ministério da Saúde. Sobre a PNAISP. Brasília, DF: Ministério da Saúde, 2026. Disponível em: https://www.gov.br/saude/pt-br/composicao/saps/pnaisp/sobre-a-pnaisp. Acesso em: 18 jun. 2026.</p>
                      <p>BRASIL. Ministério da Justiça e Segurança Pública. Nota Técnica nº 1/2026/GT-CTC/GABSEC/SENAPPEN/MJ. Brasília, DF: MJSP, 2026.</p>
                      <p>BRASIL. Ministério da Justiça e Segurança Pública. Portaria nº 2.065, de 12 de dezembro de 2007. Define os procedimentos da Comissão Técnica de Classificação e dá outras providências. Brasília, DF: MJSP, 2007. Disponível em: https://www.gov.br/senappen/pt-br/composicao/ppf/assistencias-ao-preso/arquivos/comissao-tecnica-de-classificacao.pdf. Acesso em: 25 jun. 2026.</p>
                      <p>BRASIL. Secretaria Nacional de Políticas Penais. Nota Técnica: Diretrizes Nacionais para a Individualização da Pena. Brasília: SENAPPEN, 2026. Disponível em: https://www.gov.br/senappen/pt-br/centrais-de-conteudo/notas-tecnicas/assistencia/classificacao-de-pessoas-privadas-de-liberdade/nota-tecnica.pdf/view Acesso em: 26 jun. 2026.</p>
                      <p>CAMPOS, Gastão Wagner de Sousa. Saúde pública e saúde coletiva: campo e núcleo de saberes e práticas. São Paulo: Hucitec, 2000.</p>
                      <p>CAMPOS, Gastão Wagner de Sousa; AMARAL, Márcia Aparecida do. A clínica ampliada e compartilhada, a gestão democrática e redes de atenção como referenciais teórico-operacionais para a reforma do hospital. Ciência & Saúde Coletiva, Rio de Janeiro, v. 12, n. 4, p. 849-859, 2007.</p>
                      <p>CONSELHO NACIONAL DO MINISTÉRIO PÚBLICO (Brasil). Política nacional de atenção integral à saúde das pessoas privadas de liberdade: o papel do Ministério Público na implementação da PNAISP. 1. ed. Brasília, DF: CNMP, 2023.</p>
                      <p>DISTRITO FEDERAL. Portaria Conjunta nº 18, de 24 de julho de 2023. Dispõe sobre a regulamentação das relações entre a Secretaria de Estado de Saúde do Distrito Federal (SES/DF) e a Secretaria de Estado de Administração Penitenciária do Distrito Federal (SEAPE/DF) [...]. Diário Oficial do Distrito Federal: Brasília, DF, n. 146, p. 4-5, 3 ago. 2023.</p>
                      <p>DISTRITO FEDERAL. Secretaria de Estado de Saúde. Nota Técnica nº 1/2022 – SES/SAIS/COAPS/DAEAP/GESSP: fluxo da atenção integral à saúde da pessoa privada de liberdade. Brasília, DF: SES/DF, 2022.</p>
                      <p>DISTRITO FEDERAL. Secretaria de Estado de Saúde. Nota Técnica nº 1/2023 – SES/SAIS/COAPS/DAEAP/GESSP: acolhimento para as pessoas privadas de liberdade (PPL) acompanhadas pelas equipes de saúde no sistema prisional do Distrito Federal. Brasília, DF: SES/DF, 2023.</p>
                      <p>ENGGIST, Stefan; MØLLER, Lars; GALEA, Gauden; UDESEN, Caroline (ed.). Prisons and health. Copenhagen: WHO Regional Office for Europe, 2014.</p>
                      <p>FORTES, Paulo Antônio de Carvalho. Ética, direitos dos usuários e políticas de humanização da atenção à saúde. Saúde e Sociedade, São Paulo, v. 13, n. 3, p. 30-35, 2004. Disponível em: https://www.scielo.br/j/sausoc/a/8GZ4zMCW6FhzZZw7CzdtF4n/?format=html&lang=pt. Acesso em: 18 jun. 2026.</p>
                      <p>GUSSO, Gustavo; LOPES, José Mauro Ceratti. Tratado de medicina de família e comunidade: princípios, formação e prática. Porto Alegre: Artmed, 2019.</p>
                      <p>KEMPER, Maria Lenz Cesar. Desinstitucionalização e saúde mental de privados de liberdade com transtornos mentais: a experiência do Rio de Janeiro, Brasil. Ciênc. saúde coletiva, v. 27, n. 12, 2022. Disponível em: https://doi.org/10.1590/1413-812320222712.12622022. Acesso em: 18 jun. 2026.</p>
                      <p>MENDES, Eugênio Vilaça. As redes de atenção à saúde. 2. ed. Brasília, DF: Organização Pan-Americana da Saúde, 2011. 549 p.</p>
                      <p>ORGANIZAÇÃO DAS NAÇÕES UNIDAS. Regras mínimas das Nações Unidas para o tratamento de presos (Regras de Mandela). Nova York: ONU, 2015.</p>
                      <p>STARFIELD, Barbara. Primary care: balancing health needs, services, and technology. New York: Oxford University Press, 2002.</p>
                      <p>TEIXEIRA JUNIOR, Jorge Esteves. Unidades Básicas de Saúde Prisionais: estratégias e práticas no SUS para o cuidado de pessoas privadas de liberdade no Complexo Penitenciário da Papuda – DF. 2024. 242 f. Tese (Doutorado em Saúde Coletiva) – Instituto de Medicina Social Hesio Cordeiro, Universidade do Estado do Rio de Janeiro, Rio de Janeiro, 2024.</p>
                      <p>UNIVERSIDADE FEDERAL DE SANTA CATARINA. Acolhimento e humanização nas práticas de gestão e atenção à saúde de pessoas privadas de liberdade. Organização de Marta Verdi, Maria Cláudia Souza Matias e Carlos Alberto Severo Garcia Júnior. Florianópolis: UFSC, 2015. 66 p.</p>
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
