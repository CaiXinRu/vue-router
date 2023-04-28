<template>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">Push</button>
    <button type="button" @click="replace">Replace</button>
    <button type="button" @click="go">Go</button>
    <hr/>
    <button type="button" @click="addRoute">新增路由</button>

</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    // push () {
    //   // push後可接網址
    //   this.$router.push('/newPage/namedView/a2b')
    // },
    // 使用router name的方式連接網址
    push () {
      this.$router.push({
        name: 'about'
      })
    },
    // 沒有歷史紀錄
    replace () {
      this.$router.replace({
        name: 'about'
      })
    },
    // 操作歷史紀錄
    go () {
      // 可以帶入正整數或負整數
      // 如是正整數：往下一頁走；如是負數：回上一頁
      this.$router.go(-1)
    },
    // 取得常用參數
    getRoute () {
      // 取得路由的屬性
      // 取得目前在這個路由下有哪些資訊
      // console.log(this.$route)
      // 呼叫路由的方法
      console.log(this.$router)
    },
    // 臨時新增路由
    addRoute () {
      this.$router.addRoute({
        // 帶入物件，帶入的值與路由表上輸入的模板一樣，但做了微調：不同名字，同一元件
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    }
  }
}
</script>
