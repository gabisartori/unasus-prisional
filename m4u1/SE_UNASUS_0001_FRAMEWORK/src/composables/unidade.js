/*
    mTODO: handle whatever is in this section.
    It doesn't seem to really bother development.
    From what I've gathered by a quick glance, it's just some definitions of what
    specific components (such as flipping cards or expandable boxes) M15U1 used.
    These definitions can just go ignored if they won't be used.
    However, I'll keep them around since I'll probably have to use them in M2

    mTODO: Regarding the previous item, I'd just like to point out that I do expect a
    `todo` item to emerge here, probably something describing which components are available to use with ease

    Interações do conteúdo do Módulo 15 – Eixo Transversal, portadas de
    Modulo-15-Eixo-Transversal/js/script.js para dentro do ciclo de vida
    dos componentes Vue do framework PPU.

    - flip cards (.thecard): clique ou Enter/Espaço alternam o giro;
    - tabs (.paragrafo-tab): hover/foco fixa a aba até passar em outra;
    - carousel (.carousel-etica): setas avançam/voltam e desabilitam nas
      extremidades.

    Os accordions usam o data-API do Bootstrap 5 (bootstrap.bundle.min.js,
    carregado em index.html) e não precisam de código aqui. Os modais usam o
    mesmo data-API, mas precisam ser movidos para o <body> — ver
    reposicionarModais() abaixo.
*/

const documentListeners = []

function on(type, handler, options) {
    document.addEventListener(type, handler, options)
    documentListeners.push({ type, handler, options })
}

const modaisMovidos = []

/*
    #content-area usa transform: translateX(256px) para abrir espaço ao menu
    lateral. Um transform cria contexto de empilhamento e vira o bloco de
    contenção dos position:fixed, então um .modal renderizado dentro do
    conteúdo fica preso no z-index 1 desse contexto, enquanto o .modal-backdrop
    que o Bootstrap anexa ao <body> fica em 1050: o backdrop cobre o modal e
    engole os cliques, inclusive o do card com data-bs-dismiss.

    A solução é a documentada pelo próprio Bootstrap — manter os modais no
    nível do <body>. Guardamos a posição original para devolvê-los no unmount,
    já que quem os criou foi o Vue.
*/
function reposicionarModais(root) {
    root.querySelectorAll('.modal').forEach((modal) => {
        modaisMovidos.push({ modal, parent: modal.parentNode, next: modal.nextSibling })
        // fora de #pag1 o modal perderia a tipografia do conteúdo
        modal.classList.add('unidade-modal')
        document.body.appendChild(modal)
    })
}

function restaurarModais() {
    while (modaisMovidos.length) {
        const { modal, parent, next } = modaisMovidos.pop()
        modal.classList.remove('unidade-modal')
        if (parent) parent.insertBefore(modal, next)
    }
}

const ativarParagrafoTab = (tab) => {
    const grupo = tab.closest('.paragrafo-tabs')
    if (!grupo || tab.classList.contains('paragrafo-tab-ativo')) return
    grupo.querySelectorAll('.paragrafo-tab-ativo').forEach((el) => el.classList.remove('paragrafo-tab-ativo'))
    tab.classList.add('paragrafo-tab-ativo')
}

export function initInteracoesUnidade(root = document) {
    // Remontagem do componente não pode empilhar listeners: dois handlers de
    // clique alternariam a mesma classe duas vezes e o card não viraria.
    destroyInteracoesUnidade()

    if (root && root !== document) reposicionarModais(root)

    /* Card giratório (flip card): clique alterna o flip (delegação em document) */
    on('click', (ev) => {
        const card = ev.target.closest('.thecard')
        if (card) {
            card.classList.toggle('flipped')
        }
    }, { passive: true })

    /* Acessibilidade: Enter/Espaço também alternam o flip quando o card está focado */
    on('keydown', (ev) => {
        if (ev.key !== 'Enter' && ev.key !== ' ') return
        const card = ev.target.closest('.thecard')
        if (!card) return
        ev.preventDefault()
        card.classList.toggle('flipped')
    }, { passive: false })

    /* Tabs "Ideia principal / Desenvolvimento / Conclusão": passar o mouse fixa a aba até passar em outra */
    on('mouseover', (ev) => {
        const tab = ev.target.closest('.paragrafo-tab')
        if (tab) ativarParagrafoTab(tab)
    }, { passive: true })

    on('focusin', (ev) => {
        const tab = ev.target.closest('.paragrafo-tab')
        if (tab) ativarParagrafoTab(tab)
    })

    /* Carousel de itens (setas + caixa): seta esquerda volta, direita avança; desabilitam nas extremidades */
    root.querySelectorAll('.carousel-etica').forEach((carousel) => {
        const itens = [...carousel.querySelectorAll('.carousel-etica-item')]
        const btnPrev = carousel.querySelector('.carousel-seta-prev')
        const btnNext = carousel.querySelector('.carousel-seta-next')
        let indice = 0

        const atualizarBotao = (btn) => {
            const img = btn.querySelector('img')
            img.src = btn.disabled ? btn.dataset.inativa : btn.dataset.ativa
        }

        const atualizarCarousel = () => {
            itens.forEach((item, i) => item.classList.toggle('ativo', i === indice))
            btnPrev.disabled = indice === 0
            btnNext.disabled = indice === itens.length - 1
            atualizarBotao(btnPrev)
            atualizarBotao(btnNext)
        }

        btnPrev.addEventListener('click', () => {
            if (indice === 0) return
            indice -= 1
            atualizarCarousel()
        })

        btnNext.addEventListener('click', () => {
            if (indice === itens.length - 1) return
            indice += 1
            atualizarCarousel()
        })

        atualizarCarousel()
    })
}

export function destroyInteracoesUnidade() {
    while (documentListeners.length) {
        const { type, handler, options } = documentListeners.pop()
        document.removeEventListener(type, handler, options)
    }

    restaurarModais()
}
