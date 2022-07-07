new Vue({
    el: "#app",
    data() {
        return {
            count: 0
        };
    },
    methods: {
        inpush() {
            this.count++;
        },
        dec() {
            this.count--;
        }
    }
})