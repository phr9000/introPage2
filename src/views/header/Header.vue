<template>
  <div class="header">
    <div class="header_in">
      <h1>kakao</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #f4f4f4;
  .header_in {
    position: relative;
    max-width: 1250px;
    margin: 0 auto;
    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
