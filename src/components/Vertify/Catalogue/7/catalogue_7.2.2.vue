<template>
  <div>
    <label for='input-one'>
      Linkage to wheels (including other than mechanical means; specify for front and rear, if applicable)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ltw: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.2.3"
  }
</script>
