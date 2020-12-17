<template>
  <div>
    <label for='input-one'>
      Front fog lamp: normal orientation as per referred in § 6.3.6 to Regulation 48R.:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ffl: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5"
  }
</script>
