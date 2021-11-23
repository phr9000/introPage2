<template>
  <div class="footer">
    <div class="footer_in">
      <ul class="footer_in_line">
        <li>운영정책</li>
        <li>사업자번호 : 123-456-759</li>
        <li>사업자대표 : 홍길홍</li>
        <li style="color: #000">Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.footer {
  position: absolute;
  width: 100%;
  height: 80px;
  line-height: 80px;
  bottom: 0px;
  color: #888;
  font-size: 1rem;
  border-top: 1px solid #dfdfdf;
  .footer_in {
    max-width: 1250px;
    margin: 0 auto;
    .footer_in_line {
      display: flex;
      @media screen {
      }
      > li {
        margin: 0px 1rem;
      }
      > li:nth-child(1) {
        margin: 0px;
      }
    }
  }
}
</style>
