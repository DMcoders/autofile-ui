<template>
  <div>
    <div>
      <label for='input-one'>
        Means of identification of type if marked on the audible warning device(s), audible warning system(s), multiple audible warning system(s) ：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {moiotimotawd: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.10",
    props: ['value']
  }
</script>
