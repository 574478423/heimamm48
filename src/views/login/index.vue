<template>
  <div class="login">
    <!-- 用户登录 -->
    <div class="user-login">
      <div class="title">
        <img class="title-img" src="../../assets/images/title_logo.png" alt />
        <span class="title-name">黑马面面</span>
        <span class="title-line"></span>
        <span class="title-login">用户登录</span>
      </div>
    </div>
    <!-- 背景图 -->
    <img class="login-img" src="../../assets/images/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .user-login {
    width: 478px;
    height: 550px;
    padding: 48px 42px 86px;
    box-sizing: border-box;
    background: rgba(245, 245, 245, 1);
    .title {
      display: flex;
      align-items: center;
      .title-img {
        width: 22px;
        height: 17px;
      }
      .title-name {
        margin-left: 16px;
        margin-right: 14px;
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .title-line {
        margin-right: 12px;
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
      }
      .title-login {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
  }
  .login-img {
    width: 633px;
    height: 435px;
  }
}
</style>
