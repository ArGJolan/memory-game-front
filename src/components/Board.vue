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
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
    <template v-if="cards && cards.length">
      <p>Board</p>
      <Card
        v-for="(card, index) of cards"
        :key="`card-${index}`"
        :value="card.value"
        :flipped="card.flipped"
        :flippable="card.flippable"
        :background="card.background"
        @flip="flip(card)"
      />
      <GameControls
        :game-state="gameState"
        @start="startGame"
        @reset="resetGame"
      />
      <GameAnnouncer
        :game-state="gameState"
      />
    </template>
  </div>
</template>

<script>
import Picker from './Picker.vue';
import Card from './Card.vue';
import GameControls from './GameControls.vue';
import GameAnnouncer from './GameAnnouncer.vue';
import axios from 'axios';

export default {
  name: 'Board',
  components: {
    Picker,
    Card,
    GameControls,
    GameAnnouncer,
  },
  data () {
    return {
      error: null,
      gameState: 'init',
      possibleCardCounts: [4, 8, 12],
      selectedCardCount: 0,
      cards: [],
      expectedCards: [],
    };
  },
  methods: {
    setCardCount (cardCount) {
      this.selectedCardCount = cardCount;
      this.resetGame();
    },
    async generateValues (count) {
      const { data: { result } } = await axios(`${process.env.VUE_APP_API_URL}/random/${count}`);

      return result;
    },
    async resetGame () {
      this.gameState = 'init';

      let values;
      try {
        this.error = null;
        values = await this.generateValues(this.selectedCardCount);
      } catch (err) {
        this.error = err.message || err;
        this.selectedCardCount = 0;
        return;
      }
      this.expectedCards = [...values];
      this.expectedCards.sort((a, b) => {
        // Could use ternary but not the most beautiful
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      this.cards = values.map((value) => ({
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
    lose () {
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].flipped = false;
        this.cards[i].flippable = false;
      }
      this.gameState = 'lost';
    },
    win () {
      this.gameState = 'won';
    },
    flip (card) {
      card.flipped = !card.flipped;
      card.flippable = false;

      const expectedCard = this.expectedCards.shift();
      if (card.value === expectedCard) {
        card.background = 'green';
      } else {
        card.background = 'red';
        return this.lose();
      }

      if (!this.expectedCards.length) {
        this.win();
      }
    },
  },
};
</script>

<style>
p.error {
  color: red;
}
</style>
