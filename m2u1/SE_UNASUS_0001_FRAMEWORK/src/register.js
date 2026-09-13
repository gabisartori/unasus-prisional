import { defineAsyncComponent } from 'vue'

const Pag1 = defineAsyncComponent(() => import('./pages/pag1.js') )

export const Pages = {
    components: {
        Pag1,
    }
}

// A Unidade 1 é uma página única de rolagem contínua, sem páginas extras
// (objetivos, leituras e glossário foram removidos da configuração).
export const Extras = {
    components: {}
}
