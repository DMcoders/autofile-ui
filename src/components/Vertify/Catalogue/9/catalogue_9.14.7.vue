<template>
  <div>
    <label for='input-one'>
      Angle of visibility in the horizontal plane:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {aovithp: $event.target.value})">

    </label>
    See annex A
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.14.7"
  }
</script>
