<template>
  <div>
    <a-layout-sider
        v-model="collapsed"
        collapsible
        @collapse="handleCollapse"
        :style="{ overflow: 'auto', height: '100vh', left: 0 }"
    >

      <!-- <div class="logo"/> -->
      <a-menu
          theme="dark"
          :default-selected-keys="['1']"
          mode="inline"
      >
      
        <a-sub-menu key="sub1">
          <template v-slot:title>
            <UserOutlined/>
            <span v-if="collapsed">个人中心</span>
          </template>

          <a-menu-item key="1">
            <router-link
                to="/home/userinfo"
                replace
            >
              个人信息
            </router-link>
          </a-menu-item>
          
          <a-menu-item key="2">
            <router-link
                to="/home/orderquery"    
                replace
            >
              我的送单
            </router-link>
          </a-menu-item>

          <a-menu-item key="20">
            <router-link
                to="/home/orderquery"
                replace
            >
              我的点单
            </router-link>
          </a-menu-item>

          <a-menu-item key="3">
            <router-link
                to="/home/userstar"
                replace
            >
              我的收藏夹
            </router-link>
          </a-menu-item>

          <a-menu-item
              key="6"
              @click="visible=true;"
          >
            用户注销
          </a-menu-item>

          <a-menu-item
              key="7"
              @click="$store.commit('logout')"
          >
            <router-link to="/login">
              用户登出
            </router-link>
          </a-menu-item>

        </a-sub-menu>


        <a-sub-menu key="sub2">
          <template v-slot:title>
            <a-icon type="desktop"/>
            <ShoppingCartOutlined/>
            <span v-if="collapsed">开始点菜</span>
          </template>

          <a-menu-item key="11">
            <router-link
                to="/home/restaurants"
                replace
            >
              餐厅列表
            </router-link>
          </a-menu-item>

          <a-menu-item key="12">
            <router-link
                to="/home/hotfood"
                replace
            >
              菜品列表
            </router-link>
          </a-menu-item>

        </a-sub-menu>
        
        <a-sub-menu key="sub3">
          <template v-slot:title>
            <a-icon type="team"/>
            <CarOutlined/>
            <span v-if="collapsed">订单</span>
          </template>

          <a-menu-item key="17">
            <router-link
                to="/home/orders"
                replace
            >
              订单池
            </router-link>
          </a-menu-item>

        </a-sub-menu>
    
      </a-menu>
    </a-layout-sider>

    <a-modal :visible="visible" title="注销账户" ok-text="确认" cancel-text="取消" @cancel="visible=false;" @ok="deleteUser">
      <p>请输入您的密码：</p>
      <input v-model="password" @keyup.enter="deleteUser"/>
    </a-modal>
  </div>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
import {
  UserOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
  CarOutlined,
  CoffeeOutlined,
  SettingOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  name: "Menu",
  data() {
    return {
      collapsed: true,
      lastChild: "个人信息",
      password: "",
      visible: false,
    };
  },
  methods: {
    handleCollapse() {
      this.collapsed = !this.collapsed;
    },
    async deleteUser() {
      // try {
      //   const {data: res} = await this.$http.post("api/deleteUser/", {
      //     userID: this.$store.state.userID,
      //     userPassword: this.password
      //   });
      //    console.log(this.password)
      //   //console.log(res)
      //   if (res.success == false) {
      //     this.$message.error(res.message);
      //   } else {
      //     this.visible = false;
      //     this.$message.success(res.message);
      //     this.$store.commit('logout');
      //     this.$router.push({path: "/login"});
      //   }
      // } catch (error) {
      //   this.$message.error("网络异常");
      // }

      // front_test
      this.$router.push({path: "/login"})
    },
  },
  components: {
    UserOutlined,
    ShoppingCartOutlined,
    // CommentOutlined,
    CarOutlined,
    // CoffeeOutlined,
    //SettingOutlined,
  },
});
</script>

<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 0px; /*没想到吧，滚动条直接被我进行了一个横竖都调成0的动作，虽然可以用但是页面上完全看不到，名存实亡的概念！*/
}
</style>