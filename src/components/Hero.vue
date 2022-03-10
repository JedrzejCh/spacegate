<template>
  <div class="hero-section">
    <h1 class="title">
    skygate
    </h1>
    <div class="quotation">
      <q class="subtitle">
        Here men from the planet Earth first set foot upon the Moon. July 1969 AD. We came in peace for all mankind.
      </q>
        <span>Neil Armstrong</span>
    </div>
    <p class="subtitle pulsate">
      Type anything space-related to start.
    </p>
  </div>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

}

.title {
  font-size: 50px;
  margin: 0;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 15px;
  @media (min-width: 1200px) {
    font-size: 100px;
  }
  @media (min-width: 768px){

    font-size: 80px;
  }
}
.quotation{
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0 10px;
  & q {
    text-align: center;
    font-size: 16px;
    @media (min-width: 1024px){
      font-size: 18px;
    }
  }
 
  span {
    margin-top: 10px;
    font-size: 14px;
    align-self: center;
    @media (min-width: 1024px){
      align-self: flex-end;
    }
  }
}
.subtitle {
  margin-top: 10px;
  font-size: 13px;
  font-weight: 300;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 768px){
    letter-spacing: 2px;
    font-size: 16px;
    text-align: center;
  }
}

.pulsate {
  -webkit-animation: pulsate 4s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.3;
}
@-webkit-keyframes pulsate {
  0% {
    opacity: 0.3;
  }

  50% {
    opacity: 1.0;
  }

  100% {
    opacity: 0.3;
  }
}
</style>