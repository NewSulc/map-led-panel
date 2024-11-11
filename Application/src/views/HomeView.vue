<template>
    <div class="main">
        <h1>Map - Led panel application</h1>
        <div class="container">
            <RouterLink to="/standart" class="button">black and white</RouterLink>
            <RouterLink to="/fullcolor" class="button">Full color</RouterLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    color: #f0f0f0;
}

h1{
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 1rem;
    text-transform: uppercase;
}

.container{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    text-transform: capitalize;
}

.button{
    width: 18rem;
    height: 3rem;
    background-color: #f0f0f0;
    color: #3d3d3d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 1rem;
    transition: 0.1s;
    user-select: none;
    text-decoration: none;
}

.button:active{
    transform: scale(0.90);
    transition: 0.2s;
}
</style>