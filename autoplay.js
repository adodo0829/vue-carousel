// autoplay minxin
export const autoplay = {
    props: {
        // 是否自动轮播
        autoplay: {
            type: Boolean,
            default: false
        },
        // 轮播时间
        autoplayTimeout: {
            type: Number,
            default: 2000
        },
       // PC下悬浮停止
        autoplayHoverPause: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            autoplayInterval: null // 轮播间隔
        }
    },
    destroyed () {
        this.pauseAutoplay()

        if (!this.$isServer) {
            this.$el.removeEventListener('mouseenter', this.pauseAutoplay)
            this.$el.removeEventListener('mouseleave', this.startAutoplay)
        }
    },
    methods: {
        pauseAutoplay () {
            if (this.autoplayInterval) {
                this.autoplayInterval = clearInterval(this.autoplayInterval)
            }
        },
        startAutoplay () {
            if (this.autoplay) {
                this.autoplayInterval = setInterval(() => {
                    this.dir === 'ltr' ? this.goPrev() : this.goNext()
                }, this.autoplayTimeout)
            }
        }
    },
    mounted () {
        if (!this.$isServer && this.autoplayHoverPause) {
            this.$el.addEventListener('mouseenter', this.pauseAutoplay)
            this.$el.addEventListener('mouseleave', this.startAutoplay)
        }

        this.startAutoplay()
    },
    watch: {
        // 监听antoplay值, 控制是否自动轮播
        autoplay(value) {
            if (value) {
                this.startAutoplay()
            } else {
                this.pauseAutoplay()
            }

        }
    }
}


