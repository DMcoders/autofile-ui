<template>
  <div>
    <label for='input-one'>
      Locking and adjustment system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_27_3_2: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.27.3.2"
  }
</script>
