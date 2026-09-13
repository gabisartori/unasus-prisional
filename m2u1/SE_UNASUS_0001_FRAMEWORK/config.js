import { reactive } from 'vue'

export default reactive({
    // TODO: Configurar nome do curso/módulo e título da página
    name: '',
    menuTitle: '',
    // TODO: SE NECESSÁRIO, configurar identidade visual
    color: '#003BBA',
    index: 'group_1(Pag1)',
    ltiValue: 'navigation',
    pages: {
        group_1: ['Pag1'],
    },
    /*
        Quem preenchia titleGroup era o <Item> do menu, que a unidade não usa
        mais (o menu virou uma lista de tópicos da mesma página). O título do
        grupo continua sendo lido em templates/content/content.js.
    */
    // TODO: Número da unidade
    titleGroup: {
        group_1: 'Unidade',
    },
    extra: []
})
