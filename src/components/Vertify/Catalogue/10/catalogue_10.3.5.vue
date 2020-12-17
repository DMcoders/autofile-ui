<template>
  <div>
    <label for='input-one'>
      Any specific mounting and wiring provisions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {asmawp: $event.target.value})">
    </label>
   <table border="1px solid #ccc" cellspacing="0" cellpadding="0">
   <tbody>
   <tr>
     <td>Lamps list</td>
     <td>Specific measures for the mounting and the wiring</td>
   </tr>
   <tr>
     <td>Main beam headlamps (=high beam)</td>
     <td>The main beam headlamp lighting doesn’t cause the extinction of dipped beam headlamp.</td>
   </tr>
   <tr>
     <td>Dipped-beam headlamps (=low beam)</td>
     <td>The dipped beam headlamps control causes the simultaneous extinction of all main beam headlamps.
       The dipped beam will turn ON and OFF automatically depending on the outside brightness conditions. However, manual switching ON and OFF is always possible when the AUTO ignition conditions are not met.
     </td>
   </tr>
   <tr>
     <td>Front fog lamp</td>
     <td>The front fog lamps may be separately switch ON or OFF from main beam headlamps or dipped beam headlamps or a combination of those lamps.</td>
   </tr>
   <tr>
     <td>Reversing lamp</td>
     <td>The reverse lamps switch ON only if the reverse control is engaged and if the device which commands the engine start or stop is in position such as the start of the engine is possible.</td>
   </tr>

   <tr>
     <td rowspan="3">Front direction indicator lamp</td>
     <td>The lighting is independent from the others lamps. All direction indicators lamps located on the same side of the vehicle are switched ON and OFF by the same control and flash in a synchronous way.</td>
   </tr>
   <tr>
     <td rowspan="1">Side direction indicator lamp</td>
   </tr>
   <tr>
     <td rowspan="1">Rear direction indicator lamp</td>
   </tr>

   <tr>
     <td>Hazard warning signal</td>
     <td>The putting in action of the signal is realized by a different control allowing all the direction indicators lamps to flash in a synchronous way.
       Hazard warning signal function even if the device which orders the walk or the shutdown finds in a position such as the walk of the engine is impossible.
     </td>
   </tr>
   <tr>
     <td rowspan="2">Stop lamp S1</td>
     <td>Simultaneous lighting of all stop lamps when the service brake is activated.</td>
   </tr>
   <tr>
     <td rowspan="1">Stop lamp S3</td>
   </tr>

   <tr>
     <td rowspan="3">Rear registration plate illuminating</td>
     <td>The front and rear position lamps as well as the rear registration plate lighting device switch ON and OFF simultaneously.</td>
   </tr>
   <tr>
     <td rowspan="1">Front position lamp</td>
   </tr>
   <tr>
     <td rowspan="1">Rear position lamp</td>
   </tr>

   <tr>
     <td>Rear fog lamp</td>
     <td>The rear fog lamps can ignite only if the main beam headlamps, the dipped-beam headlamps or front fog lamp themselves are lit.
       The rear fog lamps switch OFF independently of each other lamp.
       The rear fog lamps remain switched ON until the position lamps are switched OFF, and the rear fog lamps remain switched OFF until they are deliberately switched ON again
     </td>
   </tr>

   <tr>
     <td>Daytime running lamp
       (daytime running lamps are present according to the destination)
     </td>
     <td>Daytime running lamps of circulation ignite automatically when the engine is put under operation.
       The daytime running lamp is switched OFF automatically when the front fog lamps or headlamps are switched ON.
     </td>
   </tr>
   </tbody>
   </table>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.3.5"
  }
</script>
