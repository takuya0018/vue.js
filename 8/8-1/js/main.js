const imageThumbnail = Vue.component("image-thumbnails", {
    props: {
        path: {
            type: String,
            default: ""
        }
    },
    template: `<div class="img-box" :style="{ 'background-image': 'url(' + path + ')'}" @click="$emit('clickimage')"></div>`
});

const modal = Vue.component("modal", {
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: ""
        }
    },
    template: `<div v-if="isShow" class="modal" @click="$emit('close')"><img class="modal-img" :src="imagePath" alt="selectedImage"></div>`
});

const app = new Vue({
    el: "#app",
    components: {
        "image-thumbnails": imageThumbnail,
        modal
    },
    data() {
        return {
            myColor : "red",
            fontSize : 200,
            isShow: false,
            selectedImage: "",
            images: [
                {path: "./images/img1.jpg"},
                {path: "./images/img2.jpg"},
                {path: "./images/img3.jpg"},
                {path: "./images/img4.jpg"},
                {path: "./images/img5.jpg"},
                {path: "./images/img6.jpg"},
                {path: "./images/img7.jpg"},
                {path: "./images/img8.jpg"},
                {path: "./images/img9.jpg"},
            ]
        };
    },
    methods: {
        onSelectImage(path) {
            this.setImage(path);
            this.openModal();
        },
        openModal() {
            this.isShow = true;
        },
        closeModal() {
            this.isShow = false;
        },
        setImage(path) {
            this.selectedImage = path;
        }
    }
})