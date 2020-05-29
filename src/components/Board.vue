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
        @start="initGame"
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
      this.initGame();
    },
    initGame () {
      this.playing = false;

      this.cards = new Array(this.selectedCardCount).fill(0).map((_, index) => ({
        value: Math.floor(Math.random() * 100),
        flipped: index % 2 === 0,
        flippable: index % 2 === 0,
      }));
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
