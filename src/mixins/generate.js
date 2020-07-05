export default {
    created() {
        this.count = 800;
        this.generate();
    },
    data() {
        return {
            play: false,
            list: [],
        };
    },
    watch: {
        play(value) {
            if (value) {
                this.generate();
            }
        }
    },
    methods: {
        generate() {
            const data = [];
            for (let i = 0; i < this.count; i++) {
                data.push(Math.random() < 0.5)
            }

            this.list = data;
            this.play && requestAnimationFrame(this.generate);
        },
    },
};