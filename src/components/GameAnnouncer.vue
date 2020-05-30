<template>
  <div
    v-if="['won', 'lost'].includes(gameState)"
    class="game-announcer"
  >
    <template v-if="gameState === 'won'">
      <div class="won">
        <img
          class="spin-to-win"
          src="/doge.gif"
        >
        YOU WON!!!1!
        <img
          class="spin-to-win"
          src="/doge.gif"
        >
      </div>
    </template>
    <template v-if="gameState === 'lost'">
      <div class="won">
        YOU LOST :c
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GameAnnoncer',
  props: {
    gameState: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.game-announcer {
  font-size: 3.1415rem;
  margin-top: 4rem;
}
.spin-to-win {
  border-radius: 3.1415rem;
  width: 3.1415rem;
  -webkit-animation: rotation 3.1415s linear infinite;
  -moz-animation: rotation 3.1415s linear infinite;
  animation: rotation 3.1415s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
