<template>
  <div>
    <label for='input-one'>
      Meaning of the characters used in the second part and, if appropriate, in the third part, to comply with 3.1.1.2:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {motcuitspa: $event.target.value})">

    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17.4.1"
  }
</script>
