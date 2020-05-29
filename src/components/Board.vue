<template>
  <div class="board">
    <p>Number of cards you want to play with (⚠️ Will reset the game)</p>
    <Picker
      v-for="cardCount of possibleCardCounts"
      :key="`picker-${cardCount}`"
      :card-count="cardCount"
      :selected-card-count="selectedCardCount"
      @pick="setCardCount(cardCount)"
    />
    <template v-if="cards && cards.length">
      <p>Board</p>
      <Card
        v-for="(card, index) of cards"
        :key="`card-${index}`"
        :value="card.value"
        :flipped="card.flipped"
        :flippable="card.flippable"
        @flip="flip(card)"
      />
      <GameControls
        :game-state="gameState"
        @start="startGame"
        @reset="resetGame"
      />
    </template>
  </div>
</template>

<script>
import Picker from './Picker.vue';
import Card from './Card.vue';
import GameControls from './GameControls.vue';

export default {
  name: 'Board',
  components: {
    Picker,
    Card,
    GameControls,
  },
  data () {
    return {
      gameState: 'init',
      possibleCardCounts: [4, 8, 12],
      selectedCardCount: 0,
      cards: [],
    };
  },
  methods: {
    setCardCount (cardCount) {
      this.selectedCardCount = cardCount;
      this.resetGame();
    },
    // TO REFACTOR WHEN IMPLEMENTING BACKEND
    generateValues (count) {
      const values = [];

      while (values.length !== count) {
        const newValue = Math.floor(Math.random() * 100);

        if (!values.includes(newValue)) {
          values.push(newValue);
        }
      }

      return values;
    },
    resetGame () {
      this.gameState = 'init';

      const values = this.generateValues(this.selectedCardCount);
      this.cards = values.map((value, index) => ({
        value,
        flipped: false,
        flippable: false,
      }));
    },
    startGame () {
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].flipped = true;
        this.cards[i].flippable = true;
      }
      this.gameState = 'running';
    },
    flip (card) {
      card.flipped = !card.flipped;
      card.flippable = false;
    },
  },
};
</script>

<style>

</style>
