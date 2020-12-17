<template>
  <div>
    <label for='input-one'>
      Detailed drawings of the wheel guards and their position on the vehicle showing the dimensions specified in Figure 1 of Annex II to this directive and taking account of the extremes of tyre/wheel combinations:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ddotwg: $event.target.value})">

    </label>
    See annex G
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.16.2"
  }
</script>
