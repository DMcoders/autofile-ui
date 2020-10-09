<template>
  <div>
    <div>
      <label for='input-one'>
        Name and address of manufacture：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {naaom: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.5",
    props: ['value']
  }
</script>
