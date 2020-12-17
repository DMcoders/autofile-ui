<template>
  <div>
    <label for='input-one'>
      Marks assigned for loading conditions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {referencemarks1055: $event.target.value})">
    </label>
    Not applicable
    <br/>
    Description of different loading conditions
    1- A person on the driver’s seat
    2- The driver, plus a passenger on the front seat the furthest of driver
    3- Condition 2 + all the rearest taken places
    4- All the taken seats
    5- Condition 4 + load in the boot
    6- Condition 1 + load in the boot
    N- The driver + load
    <table>
      <tbody>
      <tr>
        <td>Loading conditions</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>N</td>
      </tr>
      <tr>
        <td>Levelling device mark</td>
        <td>N.A.</td>
        <td>N.A.</td>
        <td>N.A.</td>
        <td>N.A.</td>
        <td>N.A.</td>
        <td>N.A.</td>
        <td>N.A.</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5.6"
  }
</script>
