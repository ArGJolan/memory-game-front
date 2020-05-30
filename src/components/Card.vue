<template>
  <div
    class="card"
    :class="{ flippable, [`background-${background}`]: background }"
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
    background: {
      type: String,
      default: null,
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
  border-radius: 7px;
  width: 60px;
  height: 90px;
  margin: 4px;
  display: inline-block;
}

.flippable {
  cursor: pointer;
}

.card-face {
  border-radius: 7px;
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

.card.background-green {
  box-shadow: 3px 3px 3px 3px rgba(0, 255, 0, 0.3);
}

.card.background-red {
  box-shadow: 3px 3px 3px 3px rgba(255, 0, 0, 0.3);
}
</style>
