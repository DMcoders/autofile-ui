<template>
  <div>
    <div>
      <label for='input-one'>
        Commercial description(s)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {cd: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.2.1",
    props: ['value']
  }
</script>
