<template>
    <div></div>
</template>

<script>
// 將axios載入
import axios from 'axios'

export default {
  // 加上props，取得路由表上的id
  props: ['id'],
  created () {
    // 直接取得props id的內容
    console.log(this.id)
    // 定義seed(取用props id的內容)
    const seed = this.id
    // const seed = '4ae794680a3eb0cd'
    // 在生命週期取得原端資料
    // 使用seed樣板字面值取得
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res)
      })
  }
}
</script>
