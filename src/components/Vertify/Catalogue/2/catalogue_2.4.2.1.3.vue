<template>
  <div>
    <label for='input-one'>
      Elongated cab complying with Article 9a of Council Directive 96/53/EC (yes/no):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_4_2_1_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.1.3"
  }
</script>
