<template>
  <div>
    <label for='input-one'>
      Technical permissible maximum mass at the couping point：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tpmmatcp: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.12"
  }
</script>
