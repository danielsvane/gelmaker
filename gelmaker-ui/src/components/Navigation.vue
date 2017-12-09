<template>
  <div class="navigation">
    <router-link class="nav-item" active-class="active" :to="{ name: 'Buffer' }">Buffer</router-link>
    <router-link class="nav-item" active-class="active" :to="{ name: 'Agarose' }">Agarose</router-link>
    <router-link class="nav-item" active-class="active" :to="{ name: 'Weight' }">Weight</router-link>
  </div>
</template>

<style>
  .navigation {
    display: flex;
    position: absolute;
  }

  .nav-item {
    padding: 1rem 0rem 1rem 1rem;
    text-decoration: none;
    color: #000;
  }
  
  .nav-item.active {
    font-weight: bold;
  }
</style>
