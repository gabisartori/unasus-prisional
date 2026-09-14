export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    template: `
        <button :disabled="disabled" class="unasus-button">
            <slot>button name</slot>
        </button>
    `
}