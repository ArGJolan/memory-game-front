<template>
  <div
    class="card"
    :class="{ flippable }"
    @click="flip"
  >
    <div
      v-if="flipped"
      class="card-face back"
    >
      ??
    </div>
    <div
      v-else
      class="card-face front"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    value: {
      type: Number,
      required: true,
    },
    flipped: {
      type: Boolean,
      required: true,
    },
    flippable: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    flip () {
      if (this.flippable) {
        this.$emit('flip');
      }
    },
  },
};
</script>

<style>
.card {
  border: 1px black solid;
  border-radius: 4px;
  width: 60px;
  height: 90px;
  margin: 4px;
  display: inline-block;
}

.flippable {
  cursor: pointer;
}

.card-face {
  width: 100%;
  height: 100%;
  display: block;
}

.card-face.front {
  background: white;
}

.card-face.back {
  background: beige;
}
</style>
