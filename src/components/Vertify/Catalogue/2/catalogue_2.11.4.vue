<template>
  <div>
    <label for='input-one'>
      Technically permissible maximum mass of the combination：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tpmmotc: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.4"
  }
</script>
