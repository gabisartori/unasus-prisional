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
              <!-- mTODO: Figure out what this is -->
              <span class="badge-eixo">Eixo Transversal</span>
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
      <!-- TODO: conteúdo da página -->
      <section>
        <div class="container">
          <!-- TODO: Título da unidade -->
          <p>Ao iniciar esta unidade, convidamos você a refletir sobre uma questão fundamental para a prática em saúde prisional.</p>
          <!-- TODO: Reflexion card -->
          <!-- TODO: Implement split class -->
          <div class="split">
            <p>A resposta a essa pergunta é central para a compreensão da saúde das pessoas privadas de liberdade. Embora aspectos biológicos sejam importantes, eles são insuficientes para explicar a distribuição desigual da exposição, do adoecimento, do sofrimento e da morte observada em diferentes grupos populacionais.</p>
            <p>As condições de vida, trabalho, renda, escolarização, moradia, alimentação, pertencimento racial, gênero, território e acesso a direitos influenciam profundamente as possibilidades de viver com saúde ou adoecer. Nesse sentido, a determinação social da saúde constitui um importante referencial teórico, ético e político para compreender como as desigualdades estruturais produzem iniquidades em saúde (Breilh, 2006; Buss; Pellegrini Filho, 2007).</p>
          </div>
        </div>
      </section>
    </div>
  `
}
