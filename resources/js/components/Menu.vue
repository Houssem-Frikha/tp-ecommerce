<template>
    <nav class="navbar navbar-expand-lg bg-info" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Ecommerce</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bstarget="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" arialabel="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/listcat">Catégories
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/listcat">Sous Catégories
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/listcat">Sous Catégories
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/listart">Articles
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shopping" class="nav-item nav-link"> Shopping Cart
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/articletable">Articles table
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                            aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/articletable">Articles
                        </router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="search" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <router-link class="nav-link position-relative" :class="$route.name == 'Cart' ? 'active' : ''"
                            aria-current="page" :to="{
                                name: 'Cart'
                            }">
                            <i class="fa-solid fa-cart-shopping fa-lg" style="color:
    #ffffff;"></i>
                            <span v-if="$store.state.Articlestore.cart.length > 0"
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bgdanger">
                                {{ $store.state.Articlestore.cart.length }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
</script>
<style lang="scss" scoped></style>