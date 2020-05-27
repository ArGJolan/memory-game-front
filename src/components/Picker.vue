<template>
  <div
    class="picker"
    :class="{ active }"
    @click="pick"
  >
    {{ cardCount }}
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: {
    cardCount: {
      type: Number,
      required: true,
    },
    selectedCardCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    active () {
      return this.cardCount === this.selectedCardCount;
    },
  },
  methods: {
    pick () {
      this.$emit('pick');
    },
  },
}
</script>

<style>
.picker {
  width: 30px;
  height: 30px;
  margin: 4px;
  border: 1px black solid;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}

.picker.active {
  border: 2px blue solid;
}
</style>
