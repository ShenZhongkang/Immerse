<template>
  <div class="sub-nav">
    <ul>
      <li>
        <router-link to="/recommend">推荐</router-link>
      </li>
      <li>
        <router-link to="/songlist">歌单</router-link>
      </li>
      <li>
        <router-link to="/radiostation">电台</router-link>
      </li>
      <li>
        <router-link to="/musiclist">榜单</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Homenav',
    data(){
      return{}
    }
  }
</script>

<style scoped>
  .sub-nav {
    height: 40px;
    line-height: 40px;
    margin-bottom: 2px;
  }
  .sub-nav>ul {
    display: flex;
  }
  .sub-nav li {
    flex: 1;
    margin: 0 5px;
    text-align: center;
  }
  .sub-nav li a {
    display: inline-block;
    width: 100%;
    height: 40px;
  }
  .sub-nav li a.router-link-active {
    color: #e41f6e;
    font-weight: 600;
    border-bottom: 2px solid #e41f6e;
    margin-bottom: -2px;
  }
</style>