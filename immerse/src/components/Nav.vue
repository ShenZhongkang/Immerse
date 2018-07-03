<template>
  <header>
    <nav>
      <a class="iconfont icon-iconfl nav-more" href="javascript:;"></a>
      <ul class="nav-list">
        <li>
          <router-link to="/homepage">音沐</router-link>
        </li>
        <li>
          <router-link to="/mine">我的</router-link>
        </li>
        <li>
          <router-link to="/activeties">动态</router-link>
        </li>
      </ul>
      <a class="iconfont icon-search nav-search" href="javascript:;"></a>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Nav',
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  header {
    height: 44px;
    position: relative;
    background: linear-gradient(to right, #6d2ada 0%, #af24a5 50%, #e51f7e 100%);
  }
  .nav-more, .nav-search {
    width: 44px;
    height: 44px;
    color: #eee;
    line-height: 44px;
    text-align: center;
    font-size: 24px;
    position: absolute;
    top: 0;
  }
  .nav-more {
    left: 0;
  }
  .nav-search {
    right: 0;
  }
  .nav-list {
    height: 44px;
    line-height: 44px;
    padding: 0 44px;
    display: flex;
  }
  .nav-list>li {
    flex: 1;
    text-align: center;
  }
  .nav-list>li>a {
    display: inline-block;
    width: 100%;
    height: 44px;
    color: #ddd;
  }
  .nav-list>li>a.router-link-active {
    color: #fff;
  }
</style>