import { ref, inject, watch, computed, onMounted } from 'vue'
import { Random } from '../../composables/randon.js'
import ltiPattern from '../../composables/ltiPattern.js'
import { scrollToSection } from '../../composables/sectionScroll.js'

const Item = {
    props: {
        links: String,
        checkTest: {
            type: String,
            required: false,
        },
    },
    setup(props, ctx) {
        const menu = inject('menu')
        const PPUdatabase = inject('ppu')
        const config = inject('config')

        const title = ref(null)

        const data = ref({
            isChecked: false,
        })

        const methods = {
            setTitleToGroup: () => {
                let breadCrumbing, breadCrumbingText = ''
                
                breadCrumbing = methods.getBreadCrumbingTitleGroup(title.value.children[0].parentNode, [])

                for (let i = 0; i < breadCrumbing.length; i++) {
                    breadCrumbingText += breadCrumbing[i] + ' / '
                }

                if (!config.hasOwnProperty('titleGroup')) {
                    config.titleGroup = {}
                    config.titleGroup[props.links] = breadCrumbingText + title.value.children[0].innerHTML
                } else {
                    config.titleGroup[props.links] = breadCrumbingText + title.value.children[0].innerHTML
                }
            },
            handleGetData: () => { menu.value.item = props.links + '(' + Random(5) + ')' },
            setChecked: () => {
                if (!props.checkTest) {
                    const pages = PPUdatabase.value.statusPages[props.links] 

                    const pagesLength = pages.length
                    let statusChecked = false
        
                    for (let i = 0; i < pagesLength; i++) {
                        if (pages[i]) {
                            statusChecked = true
                        } else {
                            statusChecked = false
                            break
                        }
                    }
        
                    if (statusChecked) { 
                        data.value.isChecked = true
                    }
                } else {
                    methods.setTestValidation(() => {
                        data.value.isChecked = true
                    })
                }
            },
            getBreadCrumbingTitleGroup: (item, titleArray) => {
                let group = item.parentNode.parentNode
                let hasClass = group.classList.contains('group')

                if (hasClass) {
                    titleArray.unshift(group.children[0].children[1].innerHTML)

                    return methods.getBreadCrumbingTitleGroup(group, titleArray)
                }

                return titleArray
            },
            setTestValidation: (callback) => {
                const patternLTI = ltiPattern.whichPattern(props.checkTest)
            
                if (patternLTI != 'PATTERN2') {
                    throw 'You\'ve written an incorrect pattern'
                }
    
                const listTests = ltiPattern.extractArgs(props.checkTest)
                const listMadeTests = PPUdatabase.value.test
                let sunTests = 0;
    
                for (let i = 0; i < listTests.len; i++) {
                    for (let j = 0; j < listMadeTests.length; j++) {
                        if (listTests.args[i] == listMadeTests[j]) {
                            sunTests++
    
                            break;
                        }
                    }
                }   
                
                if (sunTests == listTests.len) {
                    callback()
                }
            }
        }       
        
        watch(() => PPUdatabase.value.statusPagesExtra[props.links], () => {
            if (!props.checkTest) {
                data.value.isChecked = true
            }
        })

        if (props.checkTest) {
            watch(() => PPUdatabase.value.test.length, () => {
                methods.setTestValidation(() => {
                    data.value.isChecked = true
                })
            })
        }

        onMounted(() => {
            methods.setTitleToGroup()
            methods.setChecked()
        })

        return {
            data,
            methods,
            title,
        }
    },
    template: `
        <li ref="title" @click="methods.handleGetData">
            <div class="unasus-side-menu-title-item"><slot></slot></div>
            <div v-show="data.isChecked" class="unasus-side-menu-checked"></div>
        </li>
    `
}

const Group = {
    props: {
        name: String,
    },
    setup(props, ctx) {
        const content = ref(null)

        const data = ref({
            isOpen: false,
        })

        const methods = {
            calcHeightContent: (el) => {
                let totalHeight = 0;

                for (let i = 0; i < el.children.length; i++) {
                    if (el.children[i].getAttribute('class') == 'group') {
                        totalHeight += el.children[i].offsetHeight 
                        + methods.calcHeightContent(el.children[i]) 
                        + methods.calcHeightContent(el.children[i].children[1])
                    } else {
                        totalHeight += el.children[i].offsetHeight
                    }     
                }

                return totalHeight
            },
            setHeightContent: () => {
                const parent = content.value

                if (data.value.isOpen) {
                    data.value.isOpen = false

                    parent.style.maxHeight = methods.calcHeightContent(parent) + 'px'
                } else {
                    data.value.isOpen = true
                    parent.style.maxHeight = '0px'
                }
            }
        }

        onMounted(() => {
            methods.setHeightContent()

            setInterval(() => {
                if (!data.value.isOpen) {
                    const parent = content.value
                    parent.style.maxHeight = methods.calcHeightContent(parent) + 'px'
                }
            }, 1)
        })

        return {
            data,
            methods,
            content,
        }
    },
    template: `
        <li class="group">
            <div @click="methods.setHeightContent" class="unasus-side-menu-wrapper-front">
                <span  :class="{ unasus_side_menu_wrapper_arrow_effect: !data.isOpen }" class="arrow"></span>
                <span>{{ name }}</span>
            </div>
            <ul ref="content">
                <slot></slot>
            </ul>
        </li>
    `
}

/*
    Item de tópico de uma página de rolagem contínua. Diferente do <Item>, não
    troca a página exibida: rola o conteúdo até a seção de mesmo id e marca essa
    seção como a atual. A seção atual vive no ref 'menu' fornecido por menu.js,
    para que a rolagem manual do usuário também atualize o destaque.
*/
const SectionItem = {
    props: {
        target: {
            type: String,
            required: true,
        },
    },
    emits: ['navigate'],
    setup(props, ctx) {
        const menu = inject('menu')

        const isActive = computed(() => menu.value.section === props.target)

        const methods = {
            handleClick: () => {
                menu.value.section = props.target

                scrollToSection(props.target)

                ctx.emit('navigate')
            },
        }

        return {
            isActive,
            methods,
        }
    },
    template: `
        <li :class="{ menu_item_active: isActive }" @click="methods.handleClick">
            <slot></slot>
        </li>
    `
}

const Menu = {
    template: `
        <ul id="unasus-side-menu-wrapper">
            <slot></slot>
        </ul>
    `
}

export { Item, Group, SectionItem, Menu };