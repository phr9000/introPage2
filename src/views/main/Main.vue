<template>
  <div class="main">
    <div class="main_in">
      <div class="section1">
        <!-- left side -->
        <div class="item_card left_side">
          <h2>카카오 소식</h2>
          <div class="contents_area"></div>
        </div>
        <!-- right side -->
        <div class="item_card right_side">
          <h2>주가 정보</h2>
          <div class="contents_area"></div>
        </div>
      </div>

      <div class="section2"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.item_card {
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  border-radius: 10px;
}
h2 {
  font-size: 1.5rem;
  font-weight: 500;
}
.main {
  width: 100%;
  padding-top: 80px;
  .main_in {
    max-width: 1250px;
    margin: 0 auto;
    margin-top: 20px;
    .section1 {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .left_side {
        flex: 1;
        position: relative;
        max-width: 666px;
        max-height: 700px;
        padding: 0 18px;
        box-sizing: border-box;
        padding: 1rem;
        .contents_area {
          padding-bottom: 10rem;
        }
      }
      .right_side {
        flex: 1;
        position: relative;
        max-width: 666px;
        padding: 0 18px;
        margin-left: 1rem;
        box-sizing: border-box;
        padding: 1rem;
        .contents_area {
          padding-bottom: 10rem;
        }
      }
    }
  }
}
</style>
