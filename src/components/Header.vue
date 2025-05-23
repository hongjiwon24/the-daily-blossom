<template>
  <header>
    <nav class="flex">
      <h1>The Daily Blossom</h1>
      <ul class="flex">
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/flowers">Flower</router-link></li>
        <li><router-link to="/flowers">Seasons</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
    margin: 32px;
    width: 100%;
    position: absolute;
}
header nav {
    flex-direction: column;
    align-items: center;
    border-top: 4px solid;
    margin: 0px 120px;
}
header nav h1 {
    padding: 37px;
    font-size: 65px;
}
header nav ul {
    width: 100%;
    justify-content: center;
    gap: 200px;
    border-top: 2.5px solid;
    border-bottom: 2.5px solid;
    padding: 13px 0;
}
header nav ul li {

}
header nav ul li a {
    font-size: 24px;
}
</style>
