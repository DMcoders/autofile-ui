<template>
  <div>
    <label for='input-one'>
      Technically permissible maximum mass on each group of axles：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tpmmoegoa: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.10"
  }
</script>
