<template>
  <div>
    <label for='input-one'>
      Axle 1:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {axle1: $event.target.value})">
      See below the table
    </label>
    <table width="100%" border="1px solid #ccc" cellspacing="0" cellpadding="0" style="margin:auto">
      <thead>
      <td ></td>
      <td>Type</td>
      <td>Rolling radii (mm)
      </td>
      <td>Load capacity</td>
      <td>Speed category</td>
      <td>Wheel rim</td>
      <td>Offset (mm)
      </td>
      </thead>
      <tbody>
      <tr>
        <td>Axle 1</td>
        <td>215/75R17.5</td>
        <td>372
        </td>
        <td>126/124</td>
        <td>M</td>
        <td>6.75x17.5</td>
        <td>137/122
        </td>
      </tr>
      <tr>
        <td>Axle 2</td>
        <td>215/75R17.5</td>
        <td>372
        </td>
        <td>126/124</td>
        <td>M</td>
        <td>6.75x17.5</td>
        <td>137/122
        </td>
      </tr>
      </tbody>
    </table>
    All tires of the same size but having higher indices can be mounted.
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1.1.1"
  }
</script>
