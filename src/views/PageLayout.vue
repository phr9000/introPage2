<template>
  <div id="introPage" class="mainPage">
    <!-- 헤더 -->
    <header>12 Ground Guard</header>
    <!-- 메인사진  -->
    <div class="main_container">
      <div class="main_in">
        <!-- <img
          src="../../src/assets/main.jpg"
          alt=""
          style="width: 100%; object-fit: cover; height: 100%"
        /> -->
        <div>
          <div class="main_txt_area">
            <h2 style="font-size: 3.5rem">Welcome Hero</h2>
            <div class="waviy">
              <span style="--i: 1">S</span>
              <span style="--i: 2">a</span>
              <span style="--i: 3">v</span>
              <span style="--i: 4">e</span>
              <span style="margin-left: 1.2rem"></span>
              <span style="--i: 5">t</span>
              <span style="--i: 6">h</span>
              <span style="--i: 7">e</span>
              <span style="margin-left: 1.2rem"></span>
              <span style="--i: 8">W</span>
              <span style="--i: 8">o</span>
              <span style="--i: 8">r</span>
              <span style="--i: 8">l</span>
              <span style="--i: 8">d</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- about story ko  -->
    <div style="padding: 1rem 1.5rem">
      <section style="color: #fff">
        <div
          data-aos="fade-left"
          class="card"
          style="
            max-width: 70%;
            margin: 10x auto;
            line-height: 25px;
            font-size: 20px;
          "
        >
          <h3 class="aboutStory_txt" style="color: #fff; font-size: 1.7rem">
            About Story
          </h3>
          <div style="padding-left: 1.5rem">
            옛날 옛적, 세계는 사악한 사흉신에 의해 멸망의 위기에 있었다.
            <br />이때, 세계의 균형을 지키는 사방신은 땅을 수호하는 십이지신을
            불러 모아, 사흉신과 맞서 싸웠다. 강력한 사흉신의 힘 때문에,
            십이지신은 본인들의 영혼을 담보로 사흉신을 봉인하는데 성공했다.
            <br />그 결과, 세계 곳곳으로 영혼의 조각이 흩어진 십이지신은 시간이
            지남에 따라 역사 속에서 사라졌다.<br />
            약 3000년이 후, 인간들의 커져가는 탐욕과 욕망, 악인들의 횡포로
            십이지신의 봉인이 약해지게 되었고 사흉신은 점차 본인들의 힘을 되찾고
            있었다. <br />이를 느낀 사방신은 다시 한 번 십이지신을 불러 모으려고
            했지만, 12000개의 영혼으로 흩어진 십이지신을 찾기란 불가능 했다.
            <br />그때, 세계 곳곳에서 십이지신의 영혼의 힘을 얻은 영웅들이
            등장하게 되는데.. 진정한 십이지신의 모습을 되찾고, 세상을 구할
            영웅은 누가 될 것 인가?
          </div>
        </div>
      </section>
    </div>

    <!-- about story in  -->
    <section>
      <div
        data-aos="fade-left"
        class="card"
        style="
          max-width: 70%;
          margin: 10px;
          line-height: 27px;
          color: #fff;
          font-size: 22px;
          text-align: left;
          padding-left: 2rem;
        "
      >
        Once upon a time, the world was on the verge of extinction by The four
        evil monsters. At this time, Sabangsin(four bearing god?), who protected
        the balance of the world, gathered The Twelve Ground Guards who
        protected the land and fought against The four evil monsters. However
        The four evil monsters were very powerful. The Twelve Ground Guards
        succeeded in sealing the evils with their souls as collateral. As a
        result, The Twelve Ground Guards‘s fragments of soul were scattered all
        over the world. Over time, it has been forgotten in history. About 3,000
        years later, due to the growing greed, desire, and tyranny of the
        wicked, the seal of The Twelve Ground Guards was weakened, and the evils
        spirit was gradually regaining its power. Feeling this, Sabangsin(four
        bearing god?) once again tried to gather The Twelve Ground Guards.
        However, It was impossible to find 12,000 scattered souls. At that time,
        heroes who gained the power of the spirit of the twelve ground guards
        appeared from all over the world.. Who will be the hero who will regain
        the true image of the twelve ground guard and save the world?
      </div>
    </section>

    <!-- about story in  -->
    <section style="padding-left: 1.5rem">
      <h3 class="nfts_txt" style="color: #fff; font-size: 1.7rem">NFTs</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
};
</script>

<style>
header {
  width: 100%;
  height: 80px;
  background-color: #000;
  position: fixed;
  z-index: 1000;
  padding: 20px;
  font-size: 2rem;
  color: #fff;
}
.main_container {
  width: 100%;
  height: 700px;
  background-image: url("../../src/assets/main.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
}

.main_in {
  height: 100%;
  color: #fff;
}

.mainPage {
  background-color: #000;
}

.main_txt_area {
  position: absolute;
  top: 30px;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  padding-top: 1rem;
  color: #fff;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(0.2s * var(--i));
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}

h3 {
  padding-bottom: 1rem;
}

.txt {
  font-size: 1.2rem;
}
/* about story */

h3 {
  margin-top: 50px;
  font-size: 5em;
  padding: 0px 1rem;
  color: white;
  font-weight: 800;
  animation: aniload 3s;
}

.aboutStory_txt::after {
  content: "About Story";
  display: flex;
  transform: rotateX(180deg);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
  -webkit-background-clip: text;
  color: transparent;
}

.nfts_txt::after {
  content: "NFTs";
  display: flex;
  transform: rotateX(180deg);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
  -webkit-background-clip: text;
  color: transparent;
}

.story_txt {
  width: 100%;
  height: 300px;
  color: #fff;
}
</style>
