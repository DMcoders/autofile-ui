<template>
  <div>
    <div>
      <label for='input-one'>
        Name and address of manufacturer：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {naaom101_4: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.4",
    props: ['value']
  }
</script>
