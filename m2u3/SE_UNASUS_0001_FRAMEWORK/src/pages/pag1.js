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
              <h1 class="unidade-numero">Unidade 3</h1>
              <h1 class="unidade-subtitulo">Condições de vida e impactos na saúde no sistema prisional</h1>
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
              <h5>Analisar a relação entre condições de vida e processos de saúde e adoecimento no sistema prisional.</h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <ol class="lista-outline" style="--secao: 3; --item: 0;">
            <li>Condições de vida e saúde no cárcere</li>
          </ol>
          <div class="d-flex gap-4">
            <div class="col">
              <p>As condições de vida exercem papel central nos processos de saúde, adoecimento e morte das pessoas privadas de liberdade. No contexto prisional, aspectos que ultrapassam o campo das necessidades materiais e passam a constituir elementos fundamentais para a proteção da <strong>saúde</strong>, da <strong>dignidade humana</strong> e da <strong>garantia de direitos</strong> estão relacionados ao acesso a água potável, alimentação adequada, higiene, ventilação, iluminação, vestuário, espaço físico, saneamento e banho de sol.
              <p>Sob a perspectiva da determinação social da saúde, as condições em que as pessoas vivem, trabalham e estabelecem relações sociais influenciam diretamente sua exposição a riscos, sua capacidade de proteção e suas possibilidades de acesso ao cuidado (Breilh, 2006; Buss; Pellegrini Filho, 2007).</p></p>
            </div>
            <div class="col">
              <img src="src/assets/img/unidade/img-1.png" alt="" class="w-100">
            </div>
          </div>
          <img src="src/assets/img/unidade/img-1.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>As prisões brasileiras são historicamente marcadas por superlotação, estrutura precária e insuficiência de condições mínimas para uma existência digna. Embora a privação de liberdade constitua a sanção imposta pelo sistema de justiça, ela não implica a suspensão de outros direitos fundamentais.</p>
          <div class="d-flex gap-4">
            <div class="col">
              <img src="src/assets/img/unidade/img-2.png" alt="" class="w-100">
            </div>
            <div class="col">
              <p>Entretanto, relatórios nacionais e internacionais têm documentado condições inadequadas de habitação, acesso insuficiente à água, limitações no fornecimento de itens de higiene, precariedade sanitária e restrições ao banho de sol, configurando contextos que favorecem o adoecimento e ampliam vulnerabilidades já existentes (Brasil, 2023; CNJ, 2024; WHO, 2014).</p>
              <p>As Regras de Mandela estabelecem que todas as pessoas privadas de liberdade devem ter acesso a determinadas condições adequadas (alojamento, higiene, alimentação, iluminação, ventilação e atividades ao ar livre), reconhecendo esses elementos como componentes essenciais do respeito à dignidade humana (ONU, 2016). </p>
            </div>
          </div>
          <p>Essas condições impactam diretamente a ocorrência e a disseminação de agravos à saúde. A superlotação e a circulação limitada de ar, por exemplo, favorecem a transmissão de doenças respiratórias, especialmente a tuberculose, cuja incidência nas prisões brasileiras permanece significativamente superior à observada na população geral.</p>
          <p>Da mesma forma, a insuficiência de água, as condições precárias de higiene e as limitações de saneamento contribuem para a ocorrência de doenças infecciosas, parasitárias, dermatológicas e agravos gastrointestinais (Sánchez et al., 2020; WHO, 2014). </p>
          <p>Além dos impactos sobre a saúde física, o confinamento prolongado produz efeitos significativos sobre a saúde mental. Acompanhe no infográfico abaixo.</p>
          <img src="src/assets/img/unidade/img-2.svg" alt="" class="mx-auto d-block w-100 my-4">
          <div class="split">
            <p>Quanto à alimentação, é importante reconhecer que o acesso a alimentos adequados, saudáveis e em quantidade suficiente constitui um direito humano fundamental e um dos determinantes centrais da saúde. Entretanto, em diversas unidades prisionais, o número de refeições oferecidas está abaixo das cinco preconizadas pelo Conselho Nacional de política Criminal e penitenciária (Brasil, 2024a). </p>
            <p>Além da menor oferta, a quantidade nem sempre é suficiente e a qualidade não atende padrões nutricionais recomendados ou condições inadequadas de armazenamento e preparo (Brasil, 2026). Ao impactarem a percepção de dignidade e bem-estar, tais situações repercutem diretamente sobre a imunidade, qualidade de vida, estado nutricional e no controle de doenças crônicas.</p>  
          </div>
          <p>Para os profissionais de saúde, reconhecer as condições de vida como parte integrante da avaliação clínica significa compreender que sintomas, agravos e dificuldades terapêuticas frequentemente expressam condições estruturais que extrapolam o âmbito individual.</p>
          <div class="split">
            <p>Questões como acesso à água, à alimentação, à higiene, à ventilação, ao espaço físico, a banho de sol e a condições de habitação não devem ser consideradas aspectos pormenorizados ou menos importantes do cuidado, mas componentes centrais da produção da saúde e da defesa do direito à vida. </p>
            <p>Nesse caminho, a atuação das equipes de saúde prisional exige a capacidade de identificar vulnerabilidades, registrar situações que impactem negativamente a saúde, articular ações intersetoriais e desenvolver estratégias de cuidado comprometidas com a integralidade, a equidade e os direitos humanos. Condições precárias de vida não devem ser naturalizadas como parte inerente do encarceramento.</p>
          </div>
          <ol class="lista-outline lista-outline-sub" style="--secao: 3;">
            <li>Higiene das pessoas privadas de liberdade e pobreza menstrual</li>
          </ol>
          <p>Durante a discussão do caso, surge a reflexão de que seus sintomas não podem ser compreendidos apenas como uma condição clínica individual, mas também como possíveis expressões das experiências de violência institucional, racismo, desigualdades de gênero e restrições de direitos vivenciadas no cotidiano prisional.</p>
          <img src="src/assets/img/unidade/img-3.svg" alt="" class="mx-auto d-block w-100 my-4">
          <p>E para dar continuidade, convidamos você a acompanhar um tema bastante importante: a pobreza menstrual. Confira a seguir e mantenha sempre a atenção quanto a este assunto.</p>
          <ol id="secao-3-2" class="lista-outline" style="--secao: 3; --item: 1;">
            <li>Condições de vestuário e habitação</li>
          </ol>
          <p>A pobreza menstrual constitui expressão concreta das desigualdades de gênero no cárcere. Tal situação é definida pela ausência ou insuficiência de absorventes e de condições adequadas para higiene menstrual, o que impacta diretamente a dignidade, a saúde e o bem-estar das mulheres privadas de liberdade. Além dos impactos físicos, a pobreza menstrual produz sofrimento emocional, constrangimento e aprofundamento das desigualdades.</p>
          <ol id="secao-3-3" class="lista-outline" style="--secao: 3; --item: 2;">
            <li>Condições de vestuário e habitação</li>
          </ol>
          <p>As condições de vestuário e habitação também exercem impactos significativos sobre a saúde das pessoas privadas de liberdade. </p>
          <p>No ambiente prisional, o acesso a roupas adequadas, limpas e compatíveis com as condições climáticas, bem como a existência de espaços habitáveis que garantam ventilação, iluminação, conforto térmico e proteção contra intempéries constituem elementos essenciais para a preservação da saúde e da dignidade humana. Entretanto, em muitas unidades prisionais, pessoas privadas de liberdade convivem com as situações descritas abaixo.</p>
          <img src="src/assets/img/unidade/img-4.svg" alt="" class="mx-auto d-block w-100 my-4">
          <p>Essas condições favorecem a ocorrência de doenças respiratórias, dermatológicas, musculoesqueléticas, além de outros agravos como alergias, infestações de pele e couro cabeludo, relacionados à exposição prolongada a ambientes insalubres.</p>
          <p>A permanência em espaços superlotados e mal ventilados também aumenta o risco de transmissão de doenças infecciosas, especialmente a tuberculose e hanseníase, consideradas como um dos principais problemas de saúde pública no sistema prisional brasileiro (Sánchez et al., 2020).</p>
          <img src="src/assets/img/unidade/img-5.svg" alt="" class="mx-auto d-block w-80 my-4">
          <p>Além dos impactos físicos, as condições inadequadas de habitação produzem efeitos importantes sobre a saúde mental. A ausência de privacidade, o desconforto permanente, a dificuldade para repouso adequado, medo, a exposição contínua a ruídos, temperaturas extremas e condições degradantes de vida contribuem para o aumento do sofrimento psíquico, da irritabilidade, dos transtornos do sono, da ansiedade e dos sintomas depressivos.</p>
          <p>Estudos internacionais apontam que ambientes prisionais marcados por superlotação e precariedade estrutural estão associados ao agravamento de transtornos mentais e à pior percepção de qualidade de vida entre pessoas privadas de liberdade (Fazel; Baillargeon, 2011; WHO, 2014).</p>
          <p>Do ponto de vista dos direitos humanos, condições adequadas de alojamento, vestuário e repouso não devem ser compreendidas como benefícios ou privilégios, mas como direitos fundamentais inerentes à dignidade humana. As Regras de Mandela estabelecem que todas as pessoas privadas de liberdade devem dispor de acomodações que atendem aos requisitos de salubridade, que são os seguintes.</p>
          <img src="src/assets/img/unidade/img-6.svg" alt="" class="mx-auto d-block w-100 my-4">
          <p>Da mesma forma, a Lei de Execução Penal brasileira prevê a garantia de instalações adequadas e condições mínimas de habitabilidade para as pessoas custodiadas pelo Estado (Brasil, 1984).</p>
          <p>Nesse contexto, cabe aos profissionais de saúde incorporar a avaliação das condições de habitação e vestuário como parte integrante da análise clínica e sanitária. Queixas recorrentes de dores musculoesqueléticas, sintomas respiratórios, alterações do sono, sofrimento psíquico ou problemas dermatológicos podem estar diretamente relacionadas às condições materiais de vida existentes no ambiente prisional. </p>
          <p>Reconhecer essa relação amplia a capacidade de compreender os processos de adoecimento em sua integralidade e fortalece a construção de estratégias de cuidado comprometidas com a promoção da saúde, a equidade e a defesa dos direitos humanos.</p>
          <ol class="lista-outline" style="--secao: 3; --item: 3">
            <li>Direito ao banho de sol e impactos na saúde</li>
          </ol>
          <div class="split">
          <p>A exposição à luz solar e a possibilidade de circulação em ambientes abertos possuem impactos significativos sobre a saúde física, mental e social das pessoas privadas de liberdade.</p>
          <p>A restrição prolongada ao banho de sol, frequentemente </p>
          <p>associada à superlotação, a limitações estruturais ou a medidas disciplinares, pode contribuir para deficiência de vitamina D, alterações do ciclo sono-vigília, piora da saúde mental e intensificação dos efeitos físicos e emocionais do confinamento prolongado (WHO, 2014; ONU, 2015).</p>
          </div>
          <img src="src/assets/img/unidade/img-7.svg" alt="" class="mx-auto d-block w-100 my-4">
          <p>Para além de seus efeitos biológicos, o banho de sol constitui um importante espaço de sociabilidade, convivência e redução parcial dos impactos do isolamento produzidos pelo encarceramento. </p>
          <div class="split">
            <p>Em ambientes marcados por restrições de liberdade, a possibilidade de acesso a espaços abertos favorece interações sociais, atividades físicas, contato com estímulos ambientais e experiências que contribuem para a preservação da saúde mental e da dignidade humana. </p>
            <p>Sua restrição prolongada tem sido associada ao agravamento do sofrimento psíquico, da ansiedade, dos sintomas depressivos e da sensação de despersonalização frequentemente relatada por pessoas submetidas a condições severas de confinamento (Fazel; Baillargeon, 2011; WHO, 2014).</p>
          </div>
          <p>As condições de vida no sistema prisional influenciam diretamente os processos de saúde, adoecimento e morte. Embora frequentemente analisadas de maneira isolada, questões como superlotação, ventilação inadequada, acesso insuficiente à água, alimentação inadequada, restrição ao banho de sol e condições precárias de higiene estão profundamente inter-relacionadas e produzem impactos cumulativos sobre a saúde física e mental.</p>
          <p>O quadro a seguir apresenta algumas das principais condições de vida observadas no contexto prisional e seus possíveis efeitos sobre a saúde das pessoas privadas de liberdade, destacando elementos que devem ser considerados pelas equipes de saúde na avaliação clínica, no planejamento das ações de cuidado e na defesa do direito à saúde.</p>
          <!-- TODO: Expandable -->
          <!-- TODO: Encerramento -->
          <div class="split">
            <p>Nesta unidade, você analisou como as condições concretas de vida no sistema prisional influenciam diretamente os processos de saúde, adoecimento e morte das pessoas privadas de liberdade. Aspectos como acesso à água potável, alimentação em quantidade e qualidade adequada, higiene, ventilação, iluminação, vestuário, espaço físico, banho de sol, qualidade do sono e segurança institucional mostraram-se elementos centrais para a proteção da saúde e para a garantia da dignidade humana.</p>
            <p>Ao longo do percurso, foi possível compreender que muitas das demandas encontradas no cotidiano das equipes de saúde não podem ser explicadas exclusivamente por fatores biológicos ou comportamentais individuais. Doenças infecciosas, agravos crônicos, sofrimento psíquico, alterações do sono, dores persistentes e dificuldades de adesão ao cuidado frequentemente refletem condições estruturais de vida produzidas ou agravadas pelo encarceramento.</p>
          </div>
          <p>Também refletimos sobre o papel ético, técnico e político dos profissionais de saúde na identificação de situações que impactam negativamente a saúde e na defesa do direito à vida, à dignidade e ao cuidado. Embora as equipes de saúde não sejam responsáveis pela gestão das unidades prisionais, elas ocupam posição estratégica na identificação de vulnerabilidades, na produção de informações qualificadas sobre as condições de vida e na articulação de ações intersetoriais que contribuam para a promoção da saúde e a garantia de direitos.</p>
          <div class="split">
            <p>Além do cenário onde o cuidado acontece, as condições de vida constituem parte do próprio objeto de trabalho em saúde. Compreender essa realidade amplia a capacidade de interpretar necessidades de saúde, fortalece a atuação interprofissional e reafirma os princípios da integralidade, da equidade e dos direitos humanos que orientam o SUS.</p>
            <p>No contexto prisional, cuidar da saúde implica também reconhecer, registrar e enfrentar as condições que produzem sofrimento, adoecimento e exclusão, contribuindo para a construção de práticas comprometidas com a justiça social e com a defesa incondicional da dignidade humana.</p>
          </div>
        </div>
      </section>
    </div>
  `
}
