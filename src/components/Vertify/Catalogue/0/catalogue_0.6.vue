<template>
  <div>
    <div>
      <label for='input-one'>
        Name and address of authorised representative, if any：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_0_6: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.6",
    props: ['value']
  }
</script>
