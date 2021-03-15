<template>
  <div>
    <div>
      <label for='input-one'>
        NG fuelling system: yes/no：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {nfs101_31: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.31",
    props: ['value']
  }
</script>
