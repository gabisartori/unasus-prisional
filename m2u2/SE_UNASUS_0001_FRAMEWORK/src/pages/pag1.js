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
              <h1 class="unidade-numero">Unidade 2</h1>
              <h1 class="unidade-subtitulo">Interseccionalidades e iniquidades em saúde no sistema prisional</h1>
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
              <h5>Analisar as interseccionalidades e as iniquidades estruturais no contexto da saúde prisional.</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <ol class="lista-outline" style="--secao: 2; --item: 0;">
            <li>Interseccionalidades e iniquidades em saúde</li>
          </ol>
          <p>A análise das condições de saúde das pessoas privadas de liberdade exige reconhecer que os processos de adoecimento e cuidado não ocorrem de forma homogênea entre os diferentes grupos populacionais. As desigualdades que influenciam profundamente as experiências de encarceramento e produzem impactos distintos sobre os modos de viver, adoecer, acessar direitos e sobreviver no sistema prisional estão relacionadas a:</p>
          <img class="my-auto w-100" src="src/assets/img/unidade/img-1.svg" alt="">
          <p>Nesse contexto, a interseccionalidade constitui uma importante ferramenta teórica, política e metodológica para compreender como diferentes sistemas de opressão atuam de forma simultânea e articulada (Crenshaw, 1989; Collins; Bilge, 2021). </p>
          <p>A perspectiva interseccional permite analisar como racismo, sexismo, LGBTfobia, xenofobia, capacitismo e outras formas de discriminação operam de maneira sobreposta, combinando-se na produção das desigualdades sociais e das iniquidades em saúde.</p>
          <div class="split">
            <p>No Brasil, autoras como Carla Akotirene (2019) destacam que a interseccionalidade deve ser compreendida, além da soma de diferentes formas de discriminação, como uma ferramenta analítica capaz de revelar como estruturas de poder se articulam para produzir experiências específicas de exclusão e vulnerabilização.</p>
            <p>Ao incorporar a perspectiva interseccional, os profissionais de saúde ampliam sua capacidade de compreender as singularidades das trajetórias de vida e identificar necessidades frequentemente invisibilizadas por abordagens universalizantes ou aparentemente neutras. Analise o quadro a seguir, e depois reflita sobre as questões sugeridas.</p>
          </div>
          <div class="w-80 mx-auto my-4">
            <img src="src/assets/img/unidade/table-1-1.svg" alt="" class="w-100">
            <div class="collapse" id="table-1">
              <img src="src/assets/img/unidade/table-1-2.svg" alt="" class="w-100">
            </div>
            <a href="#table-1" data-bs-toggle="collapse" role="button">
              <img src="src/assets/img/unidade/table-1-3.svg" alt="" class="w-100">
            </a>
          </div>
          <p>Quantas dessas situações podem estar presentes no cotidiano da sua prática profissional sem que sejam imediatamente reconhecidas? De que maneira a incorporação de uma perspectiva interseccional pode contribuir para a construção de planos terapêuticos mais adequados às necessidades das pessoas privadas de liberdade?</p>
          <ol class="lista-outline" style="--secao: 2; --item: 1;">
            <li>Racismo estrutural e saúde</li>
          </ol>
          <p>O sistema prisional brasileiro expressa, de modo contundente, os efeitos do racismo estrutural e da seletividade penal. </p>
          <p>A população privada de liberdade é majoritariamente composta por pessoas negras (Brasil, 2026), evidenciando a permanência de mecanismos de controle racial que se originam na escravização, se reconfiguram no pós-abolição sem reparação e se expressam, na contemporaneidade, por meio da criminalização da pobreza e de determinadas políticas de segurança pública.</p>
          <img src="src/assets/img/unidade/img-2.svg" alt="" class="my-4 w-100">
          <div class="split">
            <p>Silvio Almeida (2019) define o racismo estrutural como um sistema que organiza as instituições e distribui oportunidades e direitos de maneira desigual entre grupos raciais. No campo da saúde, isso se traduz em diferentes formas de discriminação institucional, invisibilização do sofrimento, acesso desigual ao cuidado e exposição ampliada a condições de adoecimento.</p>
            <p>A Política Nacional de Saúde Integral da População Negra (PNSIPN) reconhece o racismo como determinante social da saúde e estabelece diretrizes para o enfrentamento das desigualdades raciais no SUS. No contexto prisional, essa perspectiva é fundamental para compreender as necessidades de saúde da população majoritariamente encarcerada no país (Brasil, 2013).</p>
          </div>
          <p>Para os profissionais de saúde, reconhecer o racismo estrutural implica as seguintes ações: qualificar a escuta clínica, evitar estereótipos, desenvolver práticas de enfrentamento ao racismo e fortalecer estratégias de cuidado comprometidas com a equidade.</p>
          <ol class="lista-outline" style="--secao: 2; --item: 2">
            <li>Saúde dos povos indígenas e o encarceramento</li>
          </ol>
          <p>A privação de liberdade da população indígena revela a convergência de múltiplas iniquidades decorrentes do racismo estrutural, das limitações no acesso à justiça e do afastamento de seus territórios, de suas comunidades e das práticas tradicionais de cuidado. Esse conjunto de fatores repercute de maneira singular nas condições de saúde dessa população, potencializando as situações de violações de direitos que marcam esse grupo populacional historicamente invisibilizado.</p>
          <img src="src/assets/img/unidade/img-3.svg" alt="" class="my-4 w-80 mx-auto d-block">
          <p>No fim de 2016, o Departamento Penitenciário Nacional (DEPEN) registrava 590 indígenas encarcerados, apesar de ser apontado que o panorama estava subdimensionado, que o número seria bem maior (Silva; Menezes, 2019), sobretudo porque muitos não são registrados como indígenas quando presos, e esse desrespeito à autodeterminação inviabiliza a identificação da situação de maneira adequada. Sendo assim, é preciso chamar a atenção sobre o aumento dos índices prisionais quando se trata de indígenas. De acordo com o Infopen – Levantamento Nacional de Informações Penitenciárias, em dezembro de 2019 havia no sistema prisional brasileiro 1.390 indígenas presos, sendo 1.325 homens e 65 mulheres (DEPEN, 2020).</p>
          <p>Na conjuntura da privação de liberdade desta população, cabe destacar duas circunstâncias específicas:</p>
          <img src="src/assets/img/unidade/img-4.svg" alt="" class="my-4">
          <p>As condições e os fatores identificados como determinantes sociais que merecem destaque acerca da população indígena são: racismo estrutural e institucional; conflitos fundiários e desterritorialização; pobreza e exclusão socioeconômica; uso problemático de álcool e outras drogas.</p>
          <p>Por outro lado, a experiência no sistema prisional permanece gerando violências e evidencia a sobreposição de iniquidades, uma vez que reflete desrespeito aos costumes próprios das comunidades indígenas. Além disso, quando custodiados em unidades prisionais, os indígenas não apresentam suas particularidades culturais respeitadas, tais como rituais religiosos e alimentação (Assunção; Jung, 2019).</p>
          <p>Um marco importante para a garantia dos direitos da população indígena em conflito com a lei foi a aprovação da Resolução nº 287, pelo Conselho Nacional de Justiça (CNJ), em 25 de junho de 2019.</p>
          <img src="src/assets/img/unidade/img-5.svg" alt="">
          <div class="split">
            <p>Embora o ordenamento jurídico brasileiro já previsse dispositivos voltados à proteção dos povos indígenas, amparados tanto pela legislação nacional quanto por tratados internacionais ratificados pelo Brasil, permanecia uma lacuna quanto à atuação do Poder Judiciário diante das especificidades das pessoas indígenas em situação de privação de liberdade. </p>
            <p>Nesse contexto, a Resolução nº 287 representa um avanço ao orientar a adoção de práticas que considerem as particularidades étnicas, culturais e sociais dessa população no sistema prisional brasileiro, sobretudo por estabelecer procedimentos em consonância com as diretrizes e princípios do SUS, como equidade, integralidade, participação social (por meio do saber cultural específico) e acesso universal.</p>
          </div>
          <img src="src/assets/img/unidade/img-6.svg" alt="" class="w-80 mx-auto d-block my-4">
          <p>A política fundamenta-se no reconhecimento das especificidades sociais, culturais, geográficas, históricas e políticas dos povos indígenas, orientando a organização da atenção à saúde de modo a enfrentar as vulnerabilidades que contribuem para a ocorrência de agravos de maior magnitude e relevância. Também reafirma o respeito às práticas tradicionais de cuidado, reconhecendo sua legitimidade e eficácia, bem como assegura o direito dos povos indígenas à preservação e ao exercício de suas expressões culturais (Brasil, 2002).</p>
          <ol class="lista-outline" style="--secao: 2; --item: 3">
            <li>Gênero, sexismo e machismo</li>
          </ol>
          <p>As desigualdades de gênero assumem características específicas no sistema prisional. Muitas mulheres privadas de liberdade possuem trajetórias marcadas por violência doméstica, violência sexual, pobreza, maternidade em contextos de vulnerabilidade, racismo institucional e exclusão social (Santos, 2020).</p>
          <p>Historicamente, os sistemas prisionais foram organizados a partir de uma lógica masculina, tornando invisíveis e negligenciando diversas necessidades específicas das mulheres. Acompanhe, a seguir, questões que frequentemente recebem atenção insuficiente.</p>
          <img src="src/assets/img/unidade/img-7.svg" alt="" class="w-100 my-4">
          <div class="split">
            <p>Embora as necessidades relacionadas ao ciclo gravídico-puerperal e à saúde sexual e reprodutiva sejam dimensões importantes do cuidado às mulheres privadas de liberdade, reduzir a saúde das mulheres a essas experiências significa invisibilizar a diversidade de trajetórias, identidades, necessidades e projetos de vida que coexistem sob a categoria mulher. </p>
            <p>Além disso, essa perspectiva tende a reforçar concepções historicamente marcadas pela associação das mulheres ao papel reprodutivo e ao exercício da maternidade, negligenciando aspectos relacionados à saúde mental, às doenças crônicas, às experiências de violência, ao envelhecimento, às relações afetivas, à autonomia e às múltiplas formas de produção da vida para além da reprodução.</p>
          </div>
          <p>Como apontam Lélia Gonzalez (2020), Patricia Hill Collins (2019) e Angela Davis (2018), as experiências das mulheres negras não podem ser compreendidas a partir de categorias isoladas, uma vez que raça, gênero e classe social se articulam na produção de desigualdades, exclusões e formas específicas de opressão.</p>
          <img src="src/assets/img/unidade/img-8.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>Soma-se a isso a separação de muitas mulheres-mães de seus filhos, situações que ocorrem quando as mesmas se tornam mães dentro do sistema prisional e são separadas de seus bebês ou quando familiares tornam-se responsáveis pelos filhos daquelas que estão em privação de liberdade.</p>
          <img src="src/assets/img/unidade/img-9.svg" alt="" class="mx-auto d-block w-100 my-4">
          <p>Nesse cenário, a pobreza menstrual constitui uma importante expressão das iniquidades de gênero presentes nas instituições prisionais. A dificuldade de acesso a absorventes, instalações sanitárias adequadas, água e condições dignas de higiene compromete tanto a saúde física como também a saúde mental, a dignidade e o exercício de direitos fundamentais. </p>
          <div class="split">
            <p>Além dos impactos relacionados à menstruação, as desigualdades de gênero influenciam a experiência do encarceramento, os vínculos familiares, o exercício da maternidade, as oportunidades educacionais e laborais e as possibilidades de reinserção social. </p>
            <p>Cabe, portanto, às equipes de saúde reconhecer as múltiplas necessidades das mulheres privadas de liberdade, promover cuidado integral e atuar na defesa dos direitos humanos, da equidade de gênero e da dignidade de todas as mulheres em sua diversidade (Santos, 2020).</p>
          </div>
          <ol class="lista-outline" style="--secao: 2; --item: 4">
            <li>Diversidade sexual, envelhecimento, deficiência e outras formas de iniquidade</li>
          </ol>
          <p>Pessoas LGBTQIAPN+, migrantes, estrangeiros, pessoas idosas e pessoas com deficiência privadas de liberdade enfrentam desafios específicos relacionados ao acesso aos direitos, às condições de vida e ao cuidado em saúde. </p>
          <p>Embora compartilhem a experiência do encarceramento, suas necessidades de saúde e os riscos a que estão expostas não são homogêneos, sendo atravessados por diferentes formas de discriminação, exclusão social e violência institucional.</p>
          <p>Vamos aprofundar conhecimentos sobre cada uma dessas formas de iniquidade.</p>
          <img src="src/assets/img/unidade/label-1.svg" alt="" class="my-3">
          <img src="src/assets/img/unidade/img-16.svg" alt="">
          <img src="src/assets/img/unidade/label-2.svg" alt="" class="my-3">
          <p>No caso das pessoas idosas privadas de liberdade, o envelhecimento ocorre em ambientes marcados por restrições de mobilidade, inadequações estruturais e acesso limitado a recursos de promoção da saúde. </p>
          <p>Estudos apontam que o encarceramento pode acelerar processos de envelhecimento, agravar doenças crônicas e aumentar perdas funcionais, exigindo abordagens específicas voltadas à preservação da autonomia, da funcionalidade e da qualidade de vida (Williams et al., 2012; Lozano; Martínez, 2021). </p>
          <p>A Organização Mundial da Saúde (OMS) destaca que o envelhecimento em contextos de privação de liberdade demanda atenção diferenciada por parte dos sistemas de saúde e justiça (WHO, 2014).</p>
          <img src="src/assets/img/unidade/label-3.svg" alt="" class="my-3">
          <div class="d-flex">
            <div class="col">
              <img src="src/assets/img/unidade/img-1.png" alt="">
            </div>
            <div class="col">
              <p>As pessoas com deficiência privadas de liberdade enfrentam barreiras arquitetônicas, comunicacionais, atitudinais e institucionais que podem limitar sua autonomia e restringir o acesso ao cuidado. </p>
              <p>A ausência de adaptações razoáveis e de estratégias de acessibilidade compromete a participação plena dessas pessoas nas atividades cotidianas e pode configurar violação de direitos humanos, conforme reconhecido pela Convenção sobre os Direitos das Pessoas com Deficiência (ONU, 2006), assim como a ausência de pessoas habilitadas para realizar a Língua Brasileira de Sinais (Libras) impossibilitam qualquer forma de diálogo entre as pessoas surdas e os trabalhadores e profissionais do sistema prisional.</p>
            </div>
          </div>
          <img src="src/assets/img/unidade/label-4.svg" alt="" class="my-3">
          <p>Pessoas migrantes e estrangeiras, por sua vez, podem enfrentar dificuldades relacionadas ao idioma, às diferenças culturais, ao afastamento das redes de apoio e ao desconhecimento dos direitos garantidos pelo SUS. Essas barreiras podem dificultar a comunicação clínica, comprometer a adesão terapêutica e ampliar situações de vulnerabilidade social e institucional (IOM, 2022; Ventura; Yujra, 2019).</p>
          <p>Reconhecer cada uma dessas especificidades é fundamental para a construção de práticas clínicas inclusivas, culturalmente sensíveis e comprometidas com a equidade. Para os profissionais de saúde, incorporar uma perspectiva interseccional significa compreender que o cuidado deve ser orientado não apenas pelas condições clínicas apresentadas, mas também pelas experiências sociais e institucionais que moldam as necessidades de saúde de cada pessoa privada de liberdade.</p>
          <ol class="lista-outline" style="--secao: 2; --item: 5;">
            <li>Produção de iniquidades no sistema prisional</li>
          </ol>
          <p>As iniquidades em saúde não são naturais, inevitáveis ou decorrentes exclusivamente de escolhas individuais. Elas resultam de processos históricos, sociais, econômicos, políticos e institucionais que distribuem desigualmente oportunidades de vida, acesso a direitos, recursos de proteção social e condições para o desenvolvimento humano (Whitehead, 1992; Buss; Pellegrini Filho, 2007). </p>
          <div class="split">
            <p>Sob a perspectiva da determinação social da saúde, as desigualdades observadas nos padrões de adoecimento e morte refletem relações de poder historicamente constituídas, que produzem diferentes formas de exposição a riscos e de acesso à proteção e ao cuidado (Breilh, 2006).</p>
            <p>No sistema prisional, essas iniquidades tendem a ser agravadas pelas condições de encarceramento e pela interação entre desigualdades previamente existentes e novas vulnerabilidades produzidas pela privação de liberdade. </p>
          </div>
          <p>Acompanhe, a seguir, fatores que impactam diretamente as possibilidades de promoção da saúde e de enfrentamento dos agravos (WHO, 2014; Brasil, 2014).</p>
          <img src="src/assets/img/unidade/img-10.svg" alt="" class="mx-auto d-block w-100 my-4">
          <p>Esses fatores afetam de maneira particularmente intensa grupos historicamente marginalizados, como pessoas negras, mulheres, pessoas LGBTQIAPN+, pessoas idosas, migrantes e pessoas com deficiência.</p>
          <p>Diante desse cenário, a atuação dos profissionais de saúde exige, além de competência técnico-científica, também o compromisso ético com os direitos humanos, a capacidade crítica para identificar vulnerabilidades e a sensibilidade para reconhecer como diferentes marcadores sociais atravessam os processos de saúde e adoecimento.</p>
          <img src="src/assets/img/unidade/img-11.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>Além de reconhecer diferenças entre indivíduos e grupos sociais, a perspectiva interseccional convida os profissionais a compreenderem como essas diferenças são socialmente produzidas e transformadas em desigualdades por meio da articulação entre racismo, sexismo, LGBTfobia, capacitismo, xenofobia e outras formas de opressão (Crenshaw, 1989; Collins; Bilge, 2021; Akotirene, 2019). </p>
          <p>Para a prática clínica, isso significa ter atenção às seguintes ações, acompanhe:</p>
          <img src="src/assets/img/unidade/img-12.svg" alt="" class="mx-auto d-block w-80 my-4">
          <ol class="lista-outline" style="--secao: 2; --item: 6;">
            <li>Impactos na saúde e o papel das equipes de saúde na perspectiva dos Direitos Humanos</li>
          </ol>
          <p>A sobreposição dos marcadores sociais da diferença, como raça, gênero, sexualidade, idade, nacionalidade, religião, deficiência e classe social, compreendida na perspectiva da interseccionalidade, constitui um importante desafio para a formulação e implementação de políticas públicas no âmbito do SUS. </p>
          <p>Esses desafios tornam-se ainda mais complexos no contexto da privação de liberdade, marcado por múltiplas violações de direitos, condições estruturais adversas e limitações ao exercício da cidadania.</p>
          <p>Nesse contexto, compreender como as iniquidades em saúde são produzidas e reproduzidas no sistema prisional e de que maneira repercutem no acesso ao cuidado torna-se um eixo central da atuação das equipes de saúde. Tal compreensão orienta práticas comprometidas com as seguintes ações.</p>
          <img src="src/assets/img/unidade/img-13.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>Considerando as especificidades do cuidado em saúde no sistema prisional, a escuta qualificada e a clínica ampliada constituem estratégias fundamentais para qualificar as práticas assistenciais. Essa perspectiva dialoga diretamente com a atuação das equipes de saúde orientada pelos Direitos Humanos, uma vez que, conforme argumentam Campos e Amaral (2007), propõe uma metodologia organizacional capaz de articular a necessária padronização das condutas terapêuticas às singularidades dos sujeitos e às condições concretas impostas pelo contexto da privação de liberdade.</p>
          <img src="src/assets/img/unidade/img-14.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>Nessa perspectiva, a reorganização do processo de trabalho das equipes de saúde desloca o foco da doença para a produção do cuidado centrado na pessoa, considerando sua trajetória de vida, seus direitos e as condições sociais que atravessam o processo saúde-doença. </p>
          <p>Assim, a elaboração do projeto terapêutico deve estar ancorada em um olhar político e ampliado, orientado pelos seguintes aspectos descritos por Campos e Amaral (2007), conforme podem ser verificados a seguir.</p>
          <img src="src/assets/img/unidade/img-15.svg" alt="" class="mx-auto d-block w-80 my-4">
          <div class="split">
            <p>Assim, fundamentar as práticas em saúde nos Direitos Humanos implica compreender a escuta qualificada e a clínica ampliada como dispositivos capazes de incorporar as condições concretas de vida das pessoas privadas de liberdade ao planejamento e à produção do cuidado. </p>
            <p>Essa perspectiva possibilita superar uma abordagem estritamente biomédica, deslocando a clínica para uma compreensão ampliada do processo saúde-doença, na qual os determinantes sociais, os marcadores sociais da diferença e as iniquidades em saúde passam a constituir elementos centrais da prática profissional.</p>
          </div>
          <p>Desse modo, a atuação das equipes de saúde no sistema prisional fortalece o compromisso ético e político do SUS com a defesa da vida, da dignidade humana e da equidade.</p>
          <h3 style="color: #123F68;">Encerramento da Unidade</h3>
          <p>Nesta unidade, você analisou como diferentes marcadores sociais permeiam os processos de saúde, adoecimento e cuidado no sistema prisional. Também refletiu sobre como racismo, sexismo, LGBTfobia, xenofobia, etarismo e capacitismo influenciam o acesso aos serviços de saúde e produzem iniquidades. Foram discutidos os conceitos de interseccionalidade e de iniquidades em saúde e sua relação com o cárcere. </p>
          <p>A interseccionalidade entendida como a sobreposição de vulnerabilidades que multiplicam iniquidades apresenta repercussões no acesso a serviços de saúde, na garantia dos direitos e na integralidade do cuidado equânime e universal. Assim, a perspectiva interseccional amplia a capacidade de compreender as singularidades das trajetórias de vida e fortalece a construção de práticas clínicas mais éticas, inclusivas e comprometidas com a equidade.</p>
          <p>Ao reconhecer que as desigualdades são produzidas socialmente e afetam grupos populacionais de maneira distinta, os profissionais de saúde tornam-se mais capazes de concretizar as seguintes ações: identificar vulnerabilidades, promover cuidado integral e contribuir para a efetivação do direito à saúde das pessoas privadas de liberdade.</p>
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
                        <p>AKOTIRENE, Carla. Interseccionalidade. São Paulo: Pólen, 2019.</p>
                        <p>ALMEIDA, Silvio Luiz de. Racismo estrutural. São Paulo: Pólen, 2019.</p>
                        <p>ASSUNÇÃO, Waldilena; JUNG, Valdir Florisbal. A Resolução n. 287 do CNJ e os direitos da pessoa indígena no sistema prisional brasileiro. Revista de Criminologias e Políticas Criminais, Belém, v. 5, n. 2, p. 21‐37, 2019. Disponível em: https://pdfs.semanticscholar.org/2f32/8c3a3697d35af227e999800bc7941ed979e6.pdf. Acesso em: 14 ago. 2026;</p>
                        <p>BENTO, Berenice. Transviad@s: gênero, sexualidade e direitos humanos. Salvador: EDUFBA, 2017.</p>
                        <p>BRASIL. Fundação Nacional de Saúde. Política Nacional de Atenção à Saúde dos Povos Indígenas. 2. ed. Brasília: Ministério da Saúde, 2002</p>
                        <p>BRASIL. Ministério da Saúde. Política Nacional de Saúde Integral da População Negra. Brasília: Ministério da Saúde, 2017.</p>
                        <p>BRASIL. Portaria Interministerial nº 1, de 2 de janeiro de 2014. Institui a Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP) no âmbito do Sistema Único de Saúde (SUS). Brasília, DF: Ministério da Saúde/Ministério da Justiça, 2014. Disponível em: https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html. Acesso em: 1 jul. 2026.</p>
                        <p>BRASIL. Ministério da Saúde. Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais. Brasília: Ministério da Saúde, 2013.</p>
                        <p>BRASIL. Conselho Nacional de Justiça, 2019. Resolução 287, de 25 de junho de 2019. Disponível em: Acesso em: 04 ago 2026.</p>
                        <p>BREILH, Jaime. Epidemiologia crítica: ciência emancipadora e interculturalidade. Rio de Janeiro: Fiocruz, 2006.</p>
                        <p>BUSS, Paulo Marchiori; PELLEGRINI FILHO, Alberto. A saúde e seus determinantes sociais. Physis: Revista de Saúde Coletiva, Rio de Janeiro, v. 17, n. 1, p. 77-93, 2007.</p>
                        <p>BUTLER, Judith. Corpos em aliança e a política das ruas. Rio de Janeiro: Civilização Brasileira, 2018.</p>
                        <p>CAMPOS, Gastão Wagner de Sousa; AMARAL, Marcia Aparecida do. A clínica ampliada e compartilhada, a gestão democrática e redes de atenção como referenciais teórico-operacionais para a reforma do hospital. Ciência & Saúde Coletiva, Rio de Janeiro, v. 12, n. 4, p. 849-859, jul./ago. 2007. Disponível em: https://www.scielo.br/j/csc/a/NmPK5MRmgpvw6zwzQ865pBS/?format=html&lang=pt. Acesso em: 1 jul. 2026.</p>
                        <p>COLLINS, Patricia Hill. Pensamento feminista negro: conhecimento, consciência e a política do empoderamento. São Paulo: Boitempo, 2019.</p>
                        <p>COLLINS, Patricia Hill; BILGE, Sirma. Interseccionalidade. São Paulo: Boitempo, 2021.</p>
                        <p>CRENSHAW, Kimberlé. Demarginalizing the intersection of race and sex. University of Chicago Legal Forum, Chicago, v. 1989, n. 1, p. 139–167, 1989.</p>
                        <p>DAVIS, Angela Y. Estarão as prisões obsoletas? Rio de Janeiro: Difel, 2018.</p>
                        <p>DEPEN. Depen publica levantamento dos povos indígenas custodiados no sistema penitenciário. Disponível em: http://antigo.depen.gov.br/DEPEN/depen-publicalevantamento-dos-povos-indigenas-custodiados-no-sistema-penitenciario. Acesso em: 04 ago 2026.</p>
                        <p>GARCIA-GROSSMAN, Ilana R. et al. History of Incarceration and Its Association With Geriatric and Chronic Health Outcomes in Older Adulthood. JAMA Netw Open, v. 3, n. 6, 2023.</p>
                        <p>HOUT, Marie Clarie Van ; KEWLEY, Stephanie ; HILLIS, Alyson. Contemporary transgender health experience and health situation in prisons: A scoping review of extant published literature (2000–2019). International Journal of Transgenderism, v. 21, n. 3, p. 258-306, 2020.</p>
                        <p>INTERNATIONAL ORGANIZATION FOR MIGRATION (IOM). World Migration Report 2022. Geneva: IOM, 2022.</p>
                        <p>LE BRETON, David. A sociologia do corpo. Petrópolis: Vozes, 2016.</p>
                        <p>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU). Convenção sobre os Direitos das Pessoas com Deficiência. Nova York: ONU, 2006.</p>
                        <p>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU). Regras de Mandela. Brasília: CNJ, 2016.</p>
                        <p>SILVA, Crithian Teofi lo da; MENEZES, Gustavo Hamilton de Sousa. Indígenas têm suas identidades invisibilizadas nas prisões do Brasil. Disponível em: https:// diplomatique.org.br/indigenas-tem-suas-identidades-invisibilizadas-nas-prisoes-do-brasil/. Acesso em: 04 ago 2026.</p>
                        <p>SANTOS, Andreia Beatriz Silva dos. Mulheres encarceradas: considerações sobre gênero, feminismos e raça em um cenário específico de atenção à saúde. Revista Feminismos, Salvador, v. 8, n. 1, p. 109-123, jan./abr. 2020.</p>
                        <p>VENTURA, Deisy; YUJRA, Verónica. Saúde de migrantes e refugiados. In: GIOVANELLA, Lígia et al. Políticas e Sistema de Saúde no Brasil. 2. ed. Rio de Janeiro: Fiocruz, 2019.</p>
                        <p>WACQUANT, Loïc. Punir os pobres: a nova gestão da miséria nos Estados Unidos. Rio de Janeiro: Revan, 2007.</p>
                        <p>WERNECK, Jurema. Racismo institucional e saúde da população negra. Saúde e Sociedade, São Paulo, v. 25, n. 3, p. 535-549, 2016.</p>
                        <p>WILLIAMS, Brie A. et al. Aging in correctional custody: setting a policy agenda for older prisoner health care. American Journal of Public Health, v. 102, n. 8, p. 1475-1481, 2012.</p>
                        <p>WORLD HEALTH ORGANIZATION. Prisons and Health. Copenhagen: WHO Regional Office for Europe, 2014.</p>
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
