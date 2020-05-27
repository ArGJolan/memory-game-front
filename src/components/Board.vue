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
    <p>Board</p>
    <Card
      v-for="(card, index) of cards"
      :key="`card-${index}`"
      :value="card.value"
      :flipped="card.flipped"
      :flippable="card.flippable"
      @flip="flip(card)"
    />
  </div>
</template>

<script>
import Picker from './Picker.vue'
import Card from './Card.vue'

export default {
  name: 'Board',
  components: {
    Picker,
    Card,
  },
  data () {
    return {
      possibleCardCounts: [4, 8, 12],
      selectedCardCount: 4,
      cards: []
    }
  },
  mounted () {
    if (this.selectedCardCount) {
      this.initGame();
    }
  },
  methods: {
    setCardCount (cardCount) {
      this.selectedCardCount = cardCount;
      this.initGame();
    },
    initGame () {
      this.playing = false

      this.cards = new Array(this.selectedCardCount).fill(0).map((_, index) => ({
        value: Math.floor(Math.random() * 100),
        flipped: index % 2 === 0,
        flippable: index % 2 === 0,
      }));
    },
    flip (card) {
      card.flipped = !card.flipped;
    },
  },
}
</script>

<style>

</style>
