<template>
  <div>
    <div>
      <label for='input-one'>
        Rigid drawbar trailer: 
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_2_11_4: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.4"
  }
</script>
