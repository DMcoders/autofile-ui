<template>
  <div>
    <div>
      <label for='input-one'>
        Means of identification of type, if marked on the vehicle ：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {moiot: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_03",
    props: ['value']
  }
</script>
