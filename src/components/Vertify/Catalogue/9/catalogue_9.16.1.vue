<template>
  <div>
    <label for='input-one'>
      Brief description of the vehicle with regard to its wheel guards:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {bdotvwrtiwg: $event.target.value})">

    </label>
    The wheel guards are integrated in the vehicle body outside delimited by the front and rear wings. The inside is integrated in the vehicle structure for rear and front;
    There are plastic parts in the inside
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.16.1"
  }
</script>
