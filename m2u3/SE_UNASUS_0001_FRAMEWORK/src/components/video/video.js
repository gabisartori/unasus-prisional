import { ref, onMounted, watch } from 'vue'

export default {
    props: {
        src: {
            type: String,
        },
        resolutions: {
            type: Array,
        },
        default: {
            type: String,
            required: true,
        }
    },
    setup(props, ctx) {
        const video = ref(null)

        const data = ref({
            close: false,
            currentResolution: props.default,
        })

        watch(() => data.value.close, (data) => {
            if (data) {
                video.value.pause()
            } else {
                video.value.play()
            }
        })

        const methods = {
            changeResolution: (resolution) => {
                methods.setResolution(resolution)

                unasus.pack.setPersistence('VIDEO', {
                    resolution: resolution,
                })
            },
            setResolution: (resolution) => {
                let newResolution = null
                let source = video.value.children[0]
                let currentTime = video.value.currentTime

                newResolution = methods.getSrcChunks(video.value.children[0].src, resolution)
                source.src = newResolution
                data.value.close = false
                data.value.currentResolution = resolution
                video.value.load()
                video.value.currentTime = currentTime
            },
            getSrcChunks: (src, resolution) => { return src.replace(/(_\d+p)/, '_' + resolution) }
        }

        onMounted(() => {
            let video = unasus.pack.getPersistence('VIDEO')

            if (!video) {
                unasus.pack.setPersistence('VIDEO', {
                    resolution: props.default
                })
            } else {
                let useDefault = false

                for (let i = 0; i < props.resolutions.length; i++) {
                    if (props.resolutions[i] == video.resolution) {
                        methods.setResolution(video.resolution)
                        useDefault = false

                        break
                    } else {
                        useDefault = true
                    }
                }

                if (useDefault) {
                    methods.setResolution(props.default)
                }
            }
        })

        return {
            data,
            methods,
            video,
        }
    },
    template: `
        <div class="unasus-player-video">
            <div class="unasus-player-video-wrapper">
                <div v-show="data.close" class="unasus-player-video-resolutions">
                    <div @click="data.close = false" class="unasus-player-video-close"></div>
                    <template v-for="resolution in resolutions">
                        <span @click="methods.changeResolution(resolution)" class="unasus-player-video-resolution">{{ resolution }}</span>
                    </template>
                </div>
                <div class="unasus-player-video-hover-screen">
                    <span class="unasus-player-display-current-resolution">
                        resolução: {{ data.currentResolution }}
                    </span>
                </div>
                <video ref="video" controls>
                    <source :src="src" type="video/mp4">
                </video>
            </div>
            <div v-if="resolutions.length > 1" @click="data.close = true" class="unasus-player-video-painel">Alterar Resolução</div>
        </div>
    `
}