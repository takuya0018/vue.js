new Vue({
    el: "#app",
    data() {
        return {
            count: 55
        };
    },
    methods: {
        inpush(){
            this.count++;
        },
        dec(){
            this.count--;
        }
    },
    computed: {
        isPass(){
            return this.count >= 60;
        },
        isCen(){
            return this.count > 50;
        }
    }
})