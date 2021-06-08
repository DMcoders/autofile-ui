<template>
  <div>
    <label for='input-one'>
      Maximum permissible mass of the coupling device (if not fitted by the manufacturer)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type2123: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.12.3"
  }
</script>
