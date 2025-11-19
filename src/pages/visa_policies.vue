<template>
  <div class="container page-content">
    <h2>Visa Policies</h2>
    <p>&nbsp;</p>
    <p>Under China's current visa policies, citizens from 86 countries are eligible for a visa-free stay of up to 30 days. Additionally, citizens from 10 countries are subject to a 10-day visa-free transit policy. Details are listed below.
    </p>
    <p>&nbsp;</p>
    <p>
      <table class="table table-bordered table-colored table-striped">
          <thead>
            <tr>
              <th style="text-align: center" v-for="thi in tableHeader" :key="thi">{{ thi }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, tidx) in tableData" :key="'ti-' + tidx">
              <td class="td-colored" style="width: 40%;">{{ td.d1 }}</td>
              <td style="text-align: center; width: 20%;">{{ td.d2 }}</td>
              <td style="text-align: center; width: 20%;">{{ td.d3 }}</td>
              <td style="text-align: center; width: 20%; word-wrap:break-word;word-break:break-all; ">
                <a :href="td.d4">{{ td.d4 }}</a>
              </td>
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
      tableHeader: ["Countries","Visa-free Transit Period","Policy validity period","More information"],
      tableData: [{
        d1: `Antigua and Barbuda, the United Arab Emirates, Armenia, Azerbaijan, the Bahamas, Barbados, Belarus, Bosnia and Herzegovina, Brunei, Dominica, Fiji, Georgia, Grenada, Kazakhstan, the Maldives, Malaysia, Mauritius, Qatar, Samoa, Serbia, Seychelles, San Marino, Singapore, Suriname, the Solomon Islands, Thailand, Tonga, Uzbekistan`,
        d2: `30 days`,
        d3: `Long-term policy`,
        d4: `https://cs.mfa.gov.cn/zlbg/bgzl/lhqz/202506/t20250619_11653322.shtml`
      },{
        d1: `Andorra, Argentina, Australia, Austria, Bahrain, Belgium, Brazil, Bulgaria, Chile, Croatia, Cyprus, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Ireland, Japan, Kuwait, Latvia, Liechtenstein, Luxembourg, Malta, Monaco, Montenegro, the Netherlands, New Zealand, North Macedonia, Norway, Oman, Peru, Poland, Portugal, Romania, Saudi Arabia, Slovakia, Slovenia, South Korea, Spain, Switzerland, Sweden, Uruguay,`,
        d2: `30 days`,
        d3: `-2026.12.31`,
        d4: `https://en.nia.gov.cn/n147418/n147463/c183390/content.html`
      },{
        d1: `Russia`,
        d2: `30 days`,
        d3: `-2026.9.14`,
        d4: `https://en.nia.gov.cn/n147418/n147463/c183390/content.html`
      },{
        d1: `Albania, Canada, Czech Republic, Indonesia, Lithuania, Mexico, United Kingdom (UK), Ukraine, United States (USA)`,
        d2: `10 days visa-free transit policy`,
        d3: `Long-term policy`,
        d4: `https://en.nia.gov.cn/n147418/n147463/c183412/content.html`
      }]
    }
  }
};
</script>

<style></style>
