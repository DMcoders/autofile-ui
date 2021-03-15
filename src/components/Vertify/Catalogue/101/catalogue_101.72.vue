<template>
  <div>
    <div>
      <label for='input-one'>
        If charging cable delivered with the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ic101_72: $event.target.value,length101_72:value.length101_72
               ,csa101_72:value.csa101_72})">
      </label>
      <br/>
      <label for='input-two'>
        Variant：
        <input id='input-two'
               v-bind:value='value'
               v-on:input="$emit('input', {length101_72: $event.target.value,ic101_72:value.ic101_72
               ,csa101_72:value.csa101_72
               })">
      </label>

      <br/>
      <label for='input-three'>
        Version：
        <input id='input-three'
               v-bind:value='value'
               v-on:input="$emit('input', {csa101_72: $event.target.value,ic101_72:value.ic101_72
               ,length101_72:value.length101_72})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.72",
    props: ['value']
  }
</script>
