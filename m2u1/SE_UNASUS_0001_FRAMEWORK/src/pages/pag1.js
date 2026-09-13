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
              <!-- TODO: Nome e número da unidade -->
              <h1 class="unidade-numero">Unidade</h1>
              <h1 class="unidade-subtitulo"></h1>
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
              <!-- TODO: Objetivo da unidade -->
              <h4 style="margin-top: 0 !important;">Objetivo geral da Unidade:</h4>
              <h5></h5>
            </div>
          </div>
        </div>
      </section>
      <!-- TODO: conteúdo da página -->
      <section></section>
    </div>
  `
}
