<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link"
              :to="{
                name: '新增頁面',
              }"
              >新增頁面</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | -->
    <!-- router-link其中也可以用name做物件連接 -->
    <!-- <router-link
      :to="{
        name: '新增頁面',
      }"
      >新增頁面</router-link
    > -->
  <!-- </nav> -->
  <!-- 另外將router-view加進container裡 -->
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
