new Vue({
    el: "#app",
    data() {
        return {
            count: 55
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