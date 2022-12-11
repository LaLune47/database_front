<template>
  <div>
    <a-spin :spinning="spinning">
      <div class="background">
        <div style="display:flex;justify-content:space-between;align-items: center;overflow:auto;padding:50px;">
          <my-info :user="user" />
        </div>
      </div>
    </a-spin>
  </div>
</template>
<script>
import { ShoppingTwoTone, PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons-vue';
import { defineComponent, ref } from "vue";
import MyInfo from '@/components/userinfo/MyInfo'
export default defineComponent({
  data() {
    return {
      collapsed: true,
      user: { userOrders: [], userStars: [], userIconUrl: "", },
      columns: [],
      userID: this.$store.state.userID,
      spinning: true,
    };
  },
  components: {
    // ShoppingTwoTone,
    // PlusCircleTwoTone,
    // MinusCircleTwoTone,
    MyInfo,
  },
  // setup() {
  //   const count = ref(0);

  //   const decline = () => {
  //     if (count.value >= 1) {
  //       count.value--;
  //     }
  //   };

  //   const increase = () => {
  //     count.value++;
  //   };

  //   return {
  //     count,
  //     show: ref(true),
  //     decline,
  //     increase,
  //   };
  // },
  created() {
    this.spinning = true
    this.$store.commit('setPath', { name: '个人中心' })
    this.$store.commit('pushPath', { name: '个人信息', to: '/home/userinfo' })
    this.getUserInfo();
  },
  activated() {
    this.$store.commit('setPath', { name: '个人中心' })
    this.$store.commit('pushPath', { name: '个人信息', to: '/home/userinfo' })
  },
  methods: {
    // testOnclick() {
    //   window.alert("You Clicked Me!!!");
    // },
    async getUserInfo() {
      try {
        const { data: res } = await this.$http.post("api/getInformation/", { userID: this.userID });
        if (res.success == false) {
          this.$message.error(res.message);
        }
        else {
          this.user = res
        }
      } catch (error) {
        // front_test
        this.user = { userName : "test_userName",
                      userNickName : "test_userNickName",
                      userTel : "test_userTel",
                      userAddress : "test_userAddress",}
        this.$message.error("网络异常");
      } finally {
        this.spinning = false
      }
    },
  },
});
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
@media screen and (min-width: 1201px) {
  .background {
    margin: 20px auto;
    background: rgb(255, 255, 255, 0.9);
    box-shadow: 1px 1px 7px #adadad, -1px -1px 7px #ffffff;
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    overflow: auto;
  }
}

@media screen and (max-width: 1200px) {
  .background {
    margin: 20px auto;
    background: rgb(255, 255, 255, 0.9);
    box-shadow: 1px 1px 7px #adadad, -1px -1px 7px #ffffff;
    border-radius: 10px;
    padding: 20px;
    width: 99%;
  }
}
</style>
