<template>
    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h4 align="center">Ajout Article</h4>
        <form @submit.prevent="addArticle">
            <div class="row">
                <div class="col-md-6">.
                    <label for="reference" class="form-label">Référence</label>
                    <input type="text" class="form-control" id="reference" vmodel="article.reference">
                </div>
                <div class="col-md-6 ms-auto">
                    <label for="designation" class="form-label">Désignation</label>
                    <input type="texte" class="form-control" id="designation" vmodel="article.designation">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">.
                    <label for="marque" class="form-label">Marque</label>
                    <input type="text" class="form-control" id="marque" vmodel="article.marque">
                </div>
                <div class="col-md-6 ms-auto">
                    <label for="Quantité" class="form-label">Qtock</label>
                    <input type="texte" class="form-control" id="qtestock" vmodel="article.qtestock">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">.
                    <label for="prix" class="form-label">Prix</label>
                    <input type="text" class="form-control" id="prix" v-model="article.prix">
                </div>
                <div class="col-md-6 ms-auto">
                    <label for="scategorie" class="form-label">Sous Catégorie</label>
                    <select class="form-control" v-model="article.scategorieID">
                        <option v-for="sc in Scategories" :key="sc.id" :value=sc.id>{{ sc.nomscategorie }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">.
                    <label for="prix" class="form-label">Image</label>
                    <input type="text" class="form-control" id="imageart" vmodel="article.imageart">
                </div>
            </div>
            <br />
            <button type="submit" className="btn btn-outline-primary">
                <i class="fa-solid fa-floppy-disk"></i>Enregister
            </button>
            <router-link to="/listart" class="btn btn-outline-danger mx-2">
                <i class="fa-solid fa-xmark"></i>Cancel
            </router-link>
        </form>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from 'vue-router';
const router = useRouter()
import axios from 'axios';
const article = ref({
    reference: "",
    designation: "",
    marque: "",
    qtestock: 0,
    prix: 0,
    imageart: "",
    scategorieID: ""
})
const Scategories = ref([]);
const getscategories = () => {
    axios.get('http://localhost:8000/api/scategories').then(res => {
        Scategories.value = res.data;
    }).catch(error => {
        console.log(error)
    });
}
const addArticle = async () => {
    await axios.post("http://localhost:8000/api/articles/", article.value)
        .then(() => (
            router.push({ name: 'Viewarticles' })
        ))
        .catch(err => console.log(err))
}
onMounted(() => {
    getscategories();
}
);
</script>
<style scoped></style>