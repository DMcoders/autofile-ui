<template>
  <div>
    <label for='input-one'>
      General arrangement (drawing or photographs)
      indicating the position of the attached sections
      and views:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {gaitpotasav: $event.target.value})">
    </label>
    See annex G
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.11.1"
  }
</script>
