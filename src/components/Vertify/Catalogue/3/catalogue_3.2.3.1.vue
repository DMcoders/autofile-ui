<template>
  <div>
    <label for='input-one'>
      Air filter, drawings：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {afd: $event.target.value})">
      See annex C page 4
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.3.1"
  }
</script>
