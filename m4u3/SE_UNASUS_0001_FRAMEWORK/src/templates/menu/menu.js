import { provide, watch, ref, onMounted, onUnmounted } from 'vue'
import { SectionItem, Menu } from './wrapper.js'
import { watchActiveSection } from '../../composables/sectionScroll.js'

/*
    Tópicos página, na mesma ordem dos <ol class="lista-outline"> de
    pages/pag1.js — o id tem que bater com o do <ol> correspondente, e a
    numeração com a que os contadores CSS de .lista-outline geram lá.
*/
const sections = [
    { id: 'secao-1', title: 'Processos de trabalho em saúde prisional' },
    { id: 'secao-2', title: 'Acolhimento humanizado e abordagem interdisciplinar' },
    { id: 'secao-3', title: 'Comissão Técnica de Classificação (CTC) e limites de atuação' },
    { id: 'secao-4', title: 'Protocolos, fluxos e ferramentas de coordenação do cuidado' },
    { id: 'secao-5', title: 'Sistemas de informação (SISDEPEN, INFOPEN, e-SUS APS, SINAN)' },
    { id: 'secao-6', title: 'Planejamento de agendas e organização do cuidado' },
    { id: 'secao-7', title: 'Acesso à saúde no ambiente prisional' },
    { id: 'secao-8', title: 'Experiências do cotidiano e prática clínica' },
]

export default {
    emits: ['clickItem', 'navigate'],
    setup(props, ctx) {
        const data = ref({
            item: null,
            section: sections[0].id,
        })

        const menu = ref(null)

        let unwatchActiveSection = null

        provide('menu', data)

        watch(() => data.value.item, (data) => ctx.emit('clickItem', data))

        onMounted(() => {
            unwatchActiveSection = watchActiveSection(
                sections.map((section) => section.id),
                (id) => data.value.section = id
            )
        })

        onUnmounted(() => unwatchActiveSection && unwatchActiveSection())

        return {
            menu,
            sections,
        }
    },
    components: {
        SectionItem,
        Menu
    },
    template: `
        <Menu ref="menu">
            <SectionItem
                v-for="section in sections"
                :key="section.id"
                :target="section.id"
                @navigate="$emit('navigate')"
            >{{ section.title }}</SectionItem>
        </Menu>
    `,
}
