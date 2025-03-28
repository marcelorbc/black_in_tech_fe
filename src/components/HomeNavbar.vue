<template>
    <nav class="navbar">
        <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start">
                <router-link to="/noticias" class="navbar-item">
                    Notícias
                </router-link>
            </div>
        </div>
    </nav>
</template>