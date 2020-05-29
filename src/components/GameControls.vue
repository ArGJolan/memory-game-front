<template>
  <div
    class="game-controls"
  >
    <button
      v-if="gameState === 'init'"
      @click="startGame"
    >
      Start
    </button>
    <button
      v-if="gameState === 'running'"
      @click="resetGame"
    >
      Reset
    </button>
    <button
      v-if="gameState === 'won'"
      @click="resetGame"
    >
      Play Again!
    </button>
    <button
      v-if="gameState === 'lost'"
      @click="resetGame"
    >
      Try Again!
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameControls',
  props: {
    gameState: {
      type: String,
      required: true,
    },
  },

  methods: {
    startGame () {
      this.$emit('start');
    },
    resetGame () {
      this.$emit('reset');
    },
  },
};
</script>

<style>
.game-controls {
  margin-top: 2rem;
}
</style>
