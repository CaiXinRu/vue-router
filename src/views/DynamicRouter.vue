<template>
    <div></div>
</template>

<script>
// 將axios載入
import axios from 'axios'

export default {
  created () {
    // 康搜出路由相關資訊
    console.log(this.$route.params.id)
    // 定義seed
    const seed = 'this.$route.params.id'
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
