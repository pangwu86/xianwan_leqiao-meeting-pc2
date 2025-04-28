<template>
  <div class="container page-content">
    <h2>Visa Policies</h2>
    <p>&nbsp;</p>
    <p>Under China's current policies, citizens from 31 countries can travel to China visa-free for up to 30 days. Additionally, citizens from 28 countries, including several major European nations, can stay visa-free for up to 15 days. Furthermore, citizens from 54 countries are eligible for visa-free transit, allowing them to stay in China for up to 10 days. Details are listed below:
    </p>
    <p>&nbsp;</p>
    <p>
      <table class="table table-bordered table-colored table-striped">
          <thead>
            <tr>
              <th style="text-align: center">Countries</th>
              <th style="text-align: center">Visa-free transit period</th>
              <th style="text-align: center">Policy validity period</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, tidx) in tableData" :key="'ti-' + tidx">
              <td class="td-colored" style="width: 60%;">{{ td.d1 }}</td>
              <td style="text-align: center">{{ td.d2 }}</td>
              <td style="text-align: center">{{ td.d3 }}</td>
            </tr>
          </tbody>
      </table>
    </p>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      tableData: [{
        d1: '31 countries: Thailand, Singapore, Maldives, Kazakhstan, Antigua and Barbuda, Albania, Georgia, Solomon Islands, United Arab Emirates, Barbados, Bahamas, Belarus, Bosnia and Herzegovina, Dominica, Ecuador, Fiji, Grenada, Qatar, Mauritius, Serbia, Seychelles, SAN Marino, Suriname, Tonga, Armenia',
        d2: "30 days",
        d3: "Long-term policy"
      },{
        d1: '28 countries including France, Germany, Italy, the Netherlands, Spain, Malaysia, Switzerland, Ireland, Hungary, Austria, Belgium, Luxembourg, New Zealand, Australia, Poland, Portugal, Greece, Cyprus, Slovenia,Slovakia, Norway, Finland, Denmark, Iceland, Andorra, Monaco, Liechtenstein, and the ROK',
        d2: "15 days",
        d3: "-2025.12.31"
      },{
        d1: '54 countries: Albania, Argentina, Australia, Austria, Belarus, Belgium, Bosnia and Herzegovina, Brazil, Brunei, Bulgaria, Canada, Chile, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, lreland, ltaly, Japan, Latvia, Lithuania, Luxembourg, Malta, Mexico, Monaco, Montenegro, the Netherlands, New Zealand, North Macedonia, Norway, Poland, Portugal, Qatar, the Republic of Korea, Romania, Russia, Serbia, Singapore, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, the United Arab Emirates, the United Kingdom, and the United States.',
        d2: "10 days visa-free transit policy",
        d3: "-2025.12.31"
      }]
    }
  }
};
</script>

<style></style>
