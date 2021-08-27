<template>
  <div>
    <label for='input-one'>
      Operating mode switch (with/without): 
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_4_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.3"
  }
</script>
