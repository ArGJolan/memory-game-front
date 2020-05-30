<template>
  <div
    class="game-controls"
  >
    <button
      v-if="gameState === 'init'"
      class="start"
      @click="startGame"
    >
      Start
    </button>
    <button
      v-if="resetGameMessage"
      class="reset"
      @click="resetGame"
    >
      {{ resetGameMessage }}
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
  computed: {
    resetGameMessage () {
      const messages = {
        running: 'Reset',
        won: 'Play Again!',
        lost: 'Try Again!',
      };

      return messages[this.gameState];
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
