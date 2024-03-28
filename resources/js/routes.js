import Viewarticles from "./components/articles/Viewarticles.vue";
import Viewcategorie from "./components/categories/Viewcategorie.vue";
import Addcategorie from "./components/categories/addcategorie.vue";
import Addarticle from "./components/articles/Addarticle.vue";
import Editarticle from "./components/articles/Editarticle.vue";
import HomeCart from './components/cart/HomeCart.vue';
import Cart from './components/cart/Cart.vue';
import Viwearticletable from "./components/articles/Viewarticletable.vue";

export const routes = [
    {
        name: "Viewcategorie",
        path: "/listcat",
        component: Viewcategorie
    },
    {
        name: "Addcategorie",
        path: "/addcategorie",
        component: Addcategorie
    },
    {
        name: "Viewarticles",
        path: "/listart",
        component: Viewarticles
    },
    {
        name: "Addarticle",
        path: "/addarticle",
        component: Addarticle
    },
    {
        name: "editarticle",
        path: "/editarticle/:id",
        component: Editarticle
    },
    {
        name: "Viewarticletable",
        path: "/articletable",
        component: Viwearticletable
    },
    {
        path: '/shopping',
        name: 'HomeCart',
        component: HomeCart
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
]