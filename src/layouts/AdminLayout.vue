<template>
    <div class="admin-layout">
        <div class="admin-sidebar">
            <AdminSidebar />
        </div>
        <div class="admin-content">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue';

</script>

<style scoped>
.admin-layout {
    display: flex;
    min-height: 100vh;
    min-width: 800px;
}

.admin-sidebar {
    width: 250px;
    height: 100%;

    color: #fff;
}

.admin-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #181818;
}
</style>