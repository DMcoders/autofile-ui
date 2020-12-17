<template>
  <div>
    <div>
      Vehicle Identification Number system
    </div>
    <div>
      <table border="1px solid #ccc" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>
            DIGIT
          </td>
          <td>
            ⑴
          </td>
          <td>
            ⑵
          </td>
          <td>
            ⑶
          </td>
          <td>
            ⑷
          </td>
          <td>
            ⑸
          </td>
          <td>
            ⑹
          </td>
          <td>
            ⑺
          </td>
          <td>
            ⑻
          </td>
          <td>
            ⑼
          </td>
          <td>
            ⑽
          </td>
          <td>
            ⑾
          </td>
          <td>
            ⑿
          </td>
          <td>
            ⒀
          </td>
          <td>
            ⒁
          </td>
          <td>
            ⒂
          </td>
          <td>
            ⒃
          </td>
          <td>
            ⒄
          </td>
        </tr>
        <tr>
          <td>E.G.1</td>
          <td>L</td>
          <td>J</td>
          <td>1</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
          <td>*</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      Ⅰ NO. (1)—(3) DIGIT: (WMI)
      <table border="1px solid #ccc" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>DIGIT</td>
          <td>CODE</td>
          <td>INTERNATIONAL WMI NO.</td>
        </tr>
        <tr>
          <td>⑴—⑶<td>
          <td>LJ1</td>
          <td>Anhui Jianghuai Automobile Group Corp., Ltd.</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      Ⅱ  no. (4) digit: vehicle type

      Ⅲ  no. (5) digit: body type

      Ⅳ no. (6) digit: gross vehicle weight (gvw)
      Ⅴ no. (7) digit: wheelbase or chassis length

      Ⅵ  no. (8) digit: engine type and rate power

      vii  no. digit (9): check digit, check bit is “0-9” or “x”

      Ⅷ   no. digit (10): (year of production)

      Ⅸ  no. digit (11)—(17):  production no. defined by manufacturer
    </div>
  </div>
</template>

<script>
  export default {
    name: "annex_9_C_4_tail"
  }
</script>
