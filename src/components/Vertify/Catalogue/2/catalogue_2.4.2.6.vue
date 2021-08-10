<template>
  <div>
    <label for='input-one'>
      Ground clearance:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {gclearance2426: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.6"
  }
</script>
