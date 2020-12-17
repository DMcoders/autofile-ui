<template>
  <div>
    <label for='input-one'>
      To the left : Number of turns of the steering wheel (or equivalent data) ：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ttl: $event.target.value})">
      See above table
    </label>
    <br/>
    <table width="100%" border="1px solid #ccc" cellspacing="0" cellpadding="0" style="margin:auto">
      <thead>
      <tr>
        <td>Direction</td>
        <td>Inside wheel (°)</td>
        <td>Outside wheel (°)</td>
        <td>circle of turns of the steering wheel</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>To the right</td>
        <td>43°</td>
        <td>33°</td>
        <td>1.8</td>
      </tr>
      <tr>
        <td>To the left</td>
        <td>43°</td>
        <td>33°</td>
        <td>1.8</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.3.2"
  }
</script>
