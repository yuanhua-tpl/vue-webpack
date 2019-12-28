<template>
  <div class="hello">
    <h2>欢迎使用</h2>
    <h2>\{{msg}}</h2>
    <ul>
      <li>
        <a
          href="#"
          target="_blank"
        >
          文档中心
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { commitPoi } from '../api';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '前端项目'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
