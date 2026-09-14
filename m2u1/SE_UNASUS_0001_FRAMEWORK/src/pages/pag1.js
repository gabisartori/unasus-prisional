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
              <li>Determinação social da saúde no contexto prisional</li>
          </ol>
          <p>Ao iniciar esta unidade, convidamos você a refletir sobre uma questão fundamental para a prática em saúde prisional.</p>
          <img src="src/assets/img/unidade/img-1.svg" alt="" class="w-80 mx-auto d-block my-4">
          <div class="split">
            <p>A resposta a essa pergunta é central para a compreensão da saúde das pessoas privadas de liberdade. Embora aspectos biológicos sejam importantes, eles são insuficientes para explicar a distribuição desigual da exposição, do adoecimento, do sofrimento e da morte observada em diferentes grupos populacionais.</p>
            <p>As condições de vida, trabalho, renda, escolarização, moradia, alimentação, pertencimento racial, gênero, território e acesso a direitos influenciam profundamente as possibilidades de viver com saúde ou adoecer. Nesse sentido, a determinação social da saúde constitui um importante referencial teórico, ético e político para compreender como as desigualdades estruturais produzem iniquidades em saúde (Breilh, 2006; Buss; Pellegrini Filho, 2007).</p>
          </div>
          <p class="mt-2">Diferentemente das abordagens que compreendem os determinantes sociais como fatores isolados associados ao risco de adoecimento, a perspectiva da determinação social da saúde entende que os processos de saúde, adoecimento e morte são historicamente produzidos pelas formas de organização econômica, política, social e cultural das sociedades. Essa abordagem permite compreender como relações de poder, exploração, racismo, colonialidade, patriarcado e desigualdade moldam as condições concretas de vida das populações e produzem distribuições desiguais de proteção e exposição ao sofrimento (Breilh, 2006). No contexto prisional brasileiro, essas desigualdades assumem contornos particularmente intensos.</p>
          <img src="src/assets/img/unidade/img-2.svg" alt="" class="my-4 w-100">
          <p>Como já destacado, dados nacionais demonstram que a população privada de liberdade é composta majoritariamente por pessoas negras, jovens, pobres e com baixa escolaridade, evidenciando a estreita relação entre desigualdades sociais e encarceramento em massa (Brasil, 2023; Almeida, 2019; Wacquant, 2007).</p>
          <div class="split">
            <p>Assim, o cárcere não pode ser compreendido apenas como espaço de cumprimento de pena. Trata-se também de um território produtor de necessidades de saúde, onde condições materiais e institucionais influenciam diretamente os processos de adoecimento.</p>
            <p>Superlotação, ventilação imprópria, acesso insuficiente à água, alimentação inadequada, restrição ao banho de sol, violência institucional, ruptura de vínculos familiares e dificuldades de acesso a direitos constituem elementos que impactam diretamente a saúde física e mental das pessoas privadas de liberdade (WHO, 2014).</p>  
          </div>
          <p>Essa compreensão está alinhada aos princípios da Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP), instituída pela Portaria Interministerial nº 1, de 2 de janeiro de 2014, que reconhece as pessoas privadas de liberdade como sujeitos de direitos e reafirma a responsabilidade do Sistema Único de Saúde (SUS) na garantia do acesso universal e integral às ações e serviços de saúde (Brasil, 2014).</p>
          <img src="src/assets/img/unidade/img-3.svg" alt="" class="w-80 mx-auto d-block my-4">
          <div class="split">
            <p>Nessa perspectiva, raça, gênero e classe não podem ser analisados separadamente, exigindo abordagens interseccionais capazes de compreender a articulação simultânea entre diferentes sistemas de opressão (Crenshaw, 1989). Ao discutir saúde prisional, torna-se igualmente fundamental reconhecer o papel do racismo estrutural na produção das desigualdades em saúde. </p>
            <p>O racismo não se limita a atitudes individuais discriminatórias, mas organiza o acesso aos direitos, aos bens sociais e às oportunidades de vida. No campo da saúde, isso se manifesta por meio de condições de vida desiguais, barreiras institucionais de acesso ao cuidado, invisibilização do sofrimento e naturalização de violências dirigidas à população negra (Almeida, 2019).</p>
          </div>
          <p>Autores como Mbembe (2018) contribuem para compreender como determinadas populações passam a ocupar zonas de maior exposição à morte e ao sofrimento, enquanto Vargas (2018) destaca a compreensão do encarceramento em massa como uma das expressões das desigualdades raciais persistentes. Para os profissionais de saúde que atuam no sistema prisional, reconhecer a determinação social da saúde significa ampliar o olhar clínico para além da doença ou dos fatores estritamente biológicos.</p>
          <div class="split">
            <p>Na prática cotidiana, isso implica reconhecer que queixas como insônia, dores crônicas, irritabilidade, sofrimento psíquico, hipertensão descompensada ou uso abusivo de substâncias podem estar diretamente relacionadas às condições de vida e às experiências produzidas pelo encarceramento. Também exige compreender que dificuldades de adesão terapêutica nem sempre decorrem de escolhas individuais, mas frequentemente refletem barreiras estruturais, institucionais e relacionais que interferem nas possibilidades de acesso, cuidado e autocuidado.</p>
            <p>Ao longo desta especialização, você aprofundará a compreensão dessas condições e de seus impactos sobre a saúde das pessoas privadas de liberdade. Serão discutidas as condições de vida no sistema prisional, incluindo aspectos relacionados à alimentação, água, higiene, habitação, pobreza menstrual, violência e acesso a direitos, bem como os principais agravos e necessidades de saúde presentes nesse contexto. A compreensão da determinação social da saúde constitui, portanto, uma base indispensável para analisar criticamente esses problemas e desenvolver intervenções clínicas e sanitárias mais efetivas e factíveis.</p>
          </div>
          <img src="src/assets/img/unidade/img-4.svg" alt="" class="my-4 w-100">
          <p>Ao final desta unidade, esperamos que você seja capaz de reconhecer que os processos de adoecimento observados no sistema prisional não começam no momento do encarceramento nem podem ser explicados exclusivamente pelas características individuais das pessoas privadas de liberdade. Eles são produzidos por trajetórias de vida marcadas por desigualdades sociais, raciais, econômicas e territoriais que frequentemente antecedem a prisão e continuam atuando durante a privação de liberdade.</p>
          <p>Essa compreensão é fundamental para a construção de práticas clínicas éticas, integrais e comprometidas com a equidade. No cenário prisional, atributos da Atenção Primária à Saúde (APS), como longitudinalidade, coordenação do cuidado, orientação comunitária e cuidado centrado na pessoa, tornam-se ferramentas essenciais para o reconhecimento das necessidades de saúde, o fortalecimento dos vínculos terapêuticos e a defesa do direito à saúde das pessoas privadas de liberdade.</p>
          <ol class="lista-outline">
            <li>Por que a determinação social da saúde importa para a prática clínica?</li>
          </ol>
          <div class="d-flex my-4 mx-0">
            <p>A incorporação da perspectiva da determinação social da saúde transforma a maneira como os profissionais interpretam os problemas apresentados pelas pessoas privadas de liberdade. Em abordagens centradas exclusivamente no indivíduo, sintomas, comportamentos e dificuldades relacionadas ao cuidado tendem a ser explicados por características pessoais, escolhas individuais ou suposta falta de adesão aos tratamentos propostos. Embora fatores individuais tenham relevância clínica, eles frequentemente não são suficientes para explicar a complexidade dos processos de adoecimento observados no sistema prisional.</p>
            <img src="src/assets/img/unidade/img-1.png" alt="">
          </div>
          <p>O infográfico apresentado abaixo busca representar, de forma sintética e visual, como diferentes processos sociais e institucionais se articulam na produção das iniquidades vivenciadas pela população privada de liberdade. Ao evidenciar o fluxo entre racismo estrutural, pobreza, superencarceramento, superlotação, restrição de direitos e adoecimento, pretende-se estimular uma leitura crítica sobre o sistema prisional e seus impactos na saúde individual e coletiva.</p>
          <p>O conteúdo a seguir demonstra que o adoecimento no contexto prisional não pode ser explicado apenas por fatores biológicos ou individuais. As condições de saúde das pessoas privadas de liberdade são produzidas por processos históricos e estruturais que organizam desigualmente o acesso à renda, à moradia, à educação, à proteção social e ao cuidado em saúde.</p>
          <img src="src/assets/img/unidade/img-5.svg" alt="" class="mx-auto d-block w-80 my-4">
          <div class="split">
            <p>Ao ampliar o olhar para as condições concretas de vida, para as trajetórias sociais e para o contexto institucional em que as pessoas estão inseridas, torna-se possível compreender que muitos agravos à saúde refletem experiências acumuladas de pobreza, racismo, violência, exclusão social, sofrimento psíquico e privação de direitos.</p>
            <p>O quadro a seguir apresenta exemplos de situações frequentemente encontradas na prática assistencial e ilustra como a perspectiva da determinação social da saúde pode contribuir para análises mais abrangentes, qualificando a tomada de decisão clínica e fortalecendo a construção de estratégias de cuidado integrais, humanizadas e comprometidas com a equidade.</p>
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
          <p>Ao incorporar essa perspectiva, a clínica amplia a capacidade de identificar vulnerabilidades, reconhecer necessidades de saúde e construir estratégias de cuidado mais efetivas e humanizadas, rompendo com a lógica reducionista de causa-efeito.</p>
          <a href="#table-2" role="button" data-bs-toggle="collapse">
            <img src="src/assets/img/unidade/table-2-1.svg" alt="" class="w-100">
          </a>
          <div class="collapse" id="table-2">
            <img src="src/assets/img/unidade/table-2-2.svg" alt="" class="w-100">
          </div>
          <p>A análise do caso evidencia que os processos de adoecimento não podem ser compreendidos apenas a partir de fatores biológicos individuais. A determinação social da saúde permite compreender que sofrimento psíquico, hipertensão descompensada, vulnerabilidade social e adoecimento crônico estão diretamente relacionados às desigualdades estruturais, ao racismo, à violência e às condições concretas de vida produzidas pelo encarceramento.</p>
          <p>Nesse contexto, a atuação da equipe de saúde exige uma abordagem centrada na pessoa, com escuta qualificada, construção de vínculo terapêutico, reconhecimento das vulnerabilidades sociais e articulação entre cuidado clínico, saúde mental e defesa de direitos.</p>
          <img src="src/assets/img/unidade/img-6.svg" alt="" class="w-100 my-4">
          <h3 style="color: #123F68;">Encerramento da Unidade</h3>
          <p>Nesta unidade, discutimos como os processos de saúde, adoecimento e morte das pessoas privadas de liberdade são influenciados por fatores que ultrapassam o campo biológico e individual. Compreendemos que desigualdades sociais, raciais, econômicas e institucionais moldam as condições concretas de vida e produzem distribuições desiguais de riscos, sofrimentos e oportunidades de proteção à saúde.</p>
          <p>Também analisamos como o encarceramento em massa se articula a processos históricos de racismo estrutural, criminalização da pobreza e exclusão social, influenciando diretamente as necessidades de saúde da população prisional.Para a prática profissional, reconhecer a determinação social da saúde significa ampliar o olhar clínico, fortalecer a escuta qualificada, desenvolver abordagens integrais e construir estratégias de cuidado comprometidas com os princípios da equidade, da dignidade humana e do direito à saúde.</p>
          <p>Ao longo da especialização, aprofundaremos a compreensão de como essas desigualdades se expressam no cotidiano das prisões e quais são seus impactos sobre grupos populacionais específicos.</p>
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
                        <p>ALMEIDA, Silvio Luiz de. Racismo estrutural. São Paulo: Pólen, 2019.</p>
                        <p>AMNISTIA INTERNACIONAL. Relatório Anual 2023/2024. Londres: Anistia Internacional, 2024.</p>
                        <p>BRASIL. Conselho Nacional de Justiça. Relatório de Inspeção Penal. Brasília: CNJ, 2024.</p>
                        <p>BRASIL. Constituição da República Federativa do Brasil. Brasília: Senado Federal, 1988. Art. 5º, cap. I (arts. 5º a LXVII).</p>
                        <p>BRASIL. Departamento Penitenciário Nacional. Levantamento Nacional de Informações Penitenciárias (INFOPEN). Brasília: DEPEN, 2024.</p>
                        <p>BRASIL. Ministério da Saúde. Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP). Brasília: Ministério da Saúde, 2014.</p>
                        <p>BRASIL. Ministério da Justiça e Segurança Pública. Relatório de Informações Penais – Relipen. Brasília: SENAPPEN, 2023.</p>
                        <p>BREILH, Jaime. Epidemiologia crítica: ciência emancipadora e interculturalidade. Rio de Janeiro: Fiocruz, 2006.</p>
                        <p>BUSS, Paulo Marchiori; PELLEGRINI FILHO, Alberto. A saúde e seus determinantes sociais. Physis, Rio de Janeiro, v. 17, n. 1, p. 77-93, 2007.</p>
                        <p>CRENSHAW, Kimberlé. Demarginalizing the intersection of race and sex. University of Chicago Legal Forum, Chicago, v. 1989, n. 1, p. 139-167, 1989.</p>
                        <p>DAVIS, Angela. A democracia da abolição para além do império, das prisões e da tortura. Rio de Janeiro: Difel, 2009. </p>
                        <p>DAVIS, Angela Y. Estarão as prisões obsoletas? Rio de Janeiro: Difel, 2018.</p>
                        <p>GONZALEZ, Lélia. Por um feminismo afro-latino-americano. Rio de Janeiro: Zahar, 2020.</p>
                        <p>JAMES, S. et al. Global health care in prisons: a scoping review. The Lancet, London, v. 38, n. 10049, p. 291–304, 2016. </p>
                        <p>KILOMBA, Grada. Memórias da plantação: episódios de racismo cotidiano. Rio de Janeiro: Cobogó, 2019.</p>
                        <p>LEWIS, [ilegível]. Direitos humanos de pessoas privadas de liberdade. Belo Horizonte: Fórum, 2019.</p>
                        <p>MBEMBE, Achille. Necropolítica. São Paulo: n-1 edições, 2018.</p>
                        <p>MINAYO, Maria Cecília de Souza; RIBEIRO, Adalgisa. Condições de saúde em prisões. Ciência & Saúde Coletiva, Rio de Janeiro, v. 15, n. 1, p. 219–228, 2010.</p>
                        <p>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU). Regras Mínimas das Nações Unidas para o Tratamento de Presos (Regras de Mandela). Viena: ONU, 2015.</p>
                        <p>PASTORAL CARCERÁRIA NACIONAL. Relatório anual sobre o sistema prisional brasileiro. São Paulo: Pastoral Carcerária, 2023.</p>
                        <p>PNUD. Relatório do Desenvolvimento Humano 2023/2024. Nova York: Programa das Nações Unidas para o Desenvolvimento, 2024. </p>
                        <p>ROCHA, Rosel. Pobreza e desigualdade no Brasil contemporâneo. Serviço Social & Sociedade, São Paulo, n. 140, p. 45–63, 2020. </p>
                        <p>SARLET, Ingo Wolfgang. A eficácia dos direitos fundamentais. 11. ed. Porto Alegre: Livraria do Advogado, 2018. </p>
                        <p>SERAFIM, Lucas; TEIXEIRA, Mariana. Desigualdades sociais e pobreza no Brasil. Ciência & Saúde Coletiva, Rio de Janeiro, v. 26, n. 5, p. 2101–2112, 2021.</p>
                        <p>THE WORLD PRISON BRIEF. World Prison Population List. London: Institute for Crime & Justice Policy Research, 2024. </p>
                        <p>VARGAS, João H. Costa. The Denial of Antiblackness: Multiracial Redemption and Black Suffering. Minneapolis: University of Minnesota Press, 2018.</p>
                        <p>WACQUANT, Loïc. As prisões da miséria. Rio de Janeiro: Zahar, 2001. </p>
                        <p>WACQUANT, Loïc. Punir os pobres: a nova gestão da miséria nos Estados Unidos. Rio de Janeiro: Revan, 2007.</p>
                        <p>WORLD HEALTH ORGANIZATION (WHO). Prisons and Health. Copenhagen: WHO Regional Office for Europe, 2014.</p>
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
