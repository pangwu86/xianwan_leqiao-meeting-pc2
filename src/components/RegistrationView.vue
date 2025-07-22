<template>
  <div class="row justify-content-center">
    <!-- 表格 -->
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">Registration</h2>
            </div>

            <!-- 注册 -->
            <div class="">
              <h6 class="form-subtitle">Attended</h6>
            </div>

            <div class="mb-3 col-12">
              <label class="form-label"
              >&nbsp;</label>
              <div class="position-relative" style="color: #0d120a">
                Online payment for registration fees on this website is available through Alipay, WeChat Pay, and UnionPay. If you are unable to pay using any of these three methods, you may first register and submit your abstract, and pay the registration fee on-site at the conference by card swiping. The registration fee type is determined by your registration date.
              </div>
            </div>

            <div class="row pt-1">
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Signup Type<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <div class="row">
                    <div
                      class="col-6"
                      v-for="si in signupItemsList"
                      :key="si.conferenceSignupItemId"
                    >
                      <div
                        :class="
                          'signup-item-card ' +
                          (si.conferenceSignupItemId ==
                          dataInfo.conferenceSignupItemId
                            ? 'active '
                            : '') +
                          (canAdd ? '' : 'disabled')
                        "
                        @click="switchTicketType(si.conferenceSignupItemId)"
                      >
                        <div class="name">
                          {{ si.conferenceSignupItemName }}
                        </div>
                        <div class="price">
                          <span class="ccode">{{ si.currencyCode }}</span>
                          <span>{{ moneyTxt(si.signupAmount) }}</span>
                        </div>
                        <div class="time">
                          <span class="">Ticketing Time: </span>
                          <span class="val">{{
                            signupItemValidityTime(si)
                          }}</span>
                        </div>
                        <div class="checked">
                          <i class="bi bi-check-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="position-relative" style="color: #0d120a">
                  The field-trip fee is 3500 RMB (490 USD) (including accommodation, meals, car rental, etc.), and air ticket and the insurance is not included.
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Attendance Type<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <select
                    class="form-select"
                    v-model="dataInfo.attendanceType"
                    :disabled="!canAdd"
                  >
                    <option disabled="" value="">
                      Please select a attendance type.
                    </option>
                    <option value="Oral Presentation">Oral Presentation</option>
                    <option value="Poster Presentation">
                      Poster Presentation
                    </option>
                    <option value="Attend only">Attend only</option>
                  </select>
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Branch Venue<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <select
                    class="form-select"
                    v-model="dataInfo.branchVenue"
                    :disabled="!canAdd"
                    placeholder="Please select a branch venue."
                  >
                    <option disabled="" value="">
                      Please select a branch venue.
                    </option>
                    <optgroup
                      v-for="bv in branchVenueList"
                      :key="bv.conferenceThemeId"
                      :label="bv.themeName"
                    >
                      <option
                        v-for="bc in bv.children"
                        :key="bc.conferenceThemeId"
                        :value="bc.themeName"
                      >
                        {{ bc.themeName }}
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Name<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please register your name."
                    v-model="dataInfo.signupName"
                    :disabled="!canAdd"
                  />
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Affiliation<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter school or affiliation name."
                    v-model="dataInfo.affiliation"
                    :disabled="!canAdd"
                  />
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Academic Title<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter your academic title."
                    v-model="dataInfo.academicTitle"
                    :disabled="!canAdd"
                  />
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Position<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter your position."
                    v-model="dataInfo.position"
                    :disabled="!canAdd"
                  />
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Email<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the email."
                    v-model="dataInfo.email"
                    :disabled="notModify"
                  />
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Cellphone<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <div class="row g-2">
                    <div class="col-4">
                      <select
                        class="form-select"
                        v-model="dataInfo.phonePrefix"
                      >
                        <option value="">
                          Please select the country code.
                        </option>
                        <option value="+86.">CHN (+86)</option>
                        <option value="+376.">AND (+376)</option>
                        <option value="+93.">AFG (+93)</option>
                        <option value="+1-268.">ATG (+1-268)</option>
                        <option value="+355.">ALB (+355)</option>
                        <option value="+374.">ARM (+374)</option>
                        <option value="+244.">AGO (+244)</option>
                        <option value="+54.">ARG (+54)</option>
                        <option value="+43.">AUT (+43)</option>
                        <option value="+61.">AUS (+61)</option>
                        <option value="+994.">AZE (+994)</option>
                        <option value="+387.">BIH (+387)</option>
                        <option value="+1-246.">BRB (+1-246)</option>
                        <option value="+880.">BGD (+880)</option>
                        <option value="+32.">BEL (+32)</option>
                        <option value="+226.">BFA (+226)</option>
                        <option value="+359.">BGR (+359)</option>
                        <option value="+973.">BHR (+973)</option>
                        <option value="+257.">BDI (+257)</option>
                        <option value="+229.">BEN (+229)</option>
                        <option value="+673.">BRN (+673)</option>
                        <option value="+591.">BOL (+591)</option>
                        <option value="+55.">BRA (+55)</option>
                        <option value="+1-242.">BHS (+1-242)</option>
                        <option value="+975.">BTN (+975)</option>
                        <option value="+267.">BWA (+267)</option>
                        <option value="+375.">BLR (+375)</option>
                        <option value="+501.">BLZ (+501)</option>
                        <option value="+1.">CAN (+1)</option>
                        <option value="+236.">CAF (+236)</option>
                        <option value="+242.">COG (+242)</option>
                        <option value="+225.">CIV (+225)</option>
                        <option value="+238.">CPV (+238)</option>
                        <option value="+56.">CHL (+56)</option>
                        <option value="+237.">CMR (+237)</option>
                        <option value="+57.">COL (+57)</option>
                        <option value="+506.">CRI (+506)</option>
                        <option value="+53.">CUB (+53)</option>
                        <option value="+269.">COM (+269)</option>
                        <option value="+357.">CYP (+357)</option>
                        <option value="+420.">CZE (+420)</option>
                        <option value="+49.">DEU (+49)</option>
                        <option value="+253.">DJI (+253)</option>
                        <option value="+243.">COD (+243)</option>
                        <option value="+45.">DNK (+45)</option>
                        <option value="+1-767.">DMA (+1-767)</option>
                        <option value="+1-809.">DOM (+1-809)</option>
                        <option value="+1-829.">DOM (+1-829)</option>
                        <option value="+1-849.">DOM (+1-849)</option>
                        <option value="+213.">DZA (+213)</option>
                        <option value="+593.">ECU (+593)</option>
                        <option value="+372.">EST (+372)</option>
                        <option value="+20.">EGY (+20)</option>
                        <option value="+291.">ERI (+291)</option>
                        <option value="+34.">ESP (+34)</option>
                        <option value="+251.">ETH (+251)</option>
                        <option value="+358.">FIN (+358)</option>
                        <option value="+679.">FJI (+679)</option>
                        <option value="+691.">FSM (+691)</option>
                        <option value="+33.">FRA (+33)</option>
                        <option value="+241.">GAB (+241)</option>
                        <option value="+1-473.">GRD (+1-473)</option>
                        <option value="+995.">GEO (+995)</option>
                        <option value="+233.">GHA (+233)</option>
                        <option value="+220.">GMB (+220)</option>
                        <option value="+224.">GIN (+224)</option>
                        <option value="+240.">GNQ (+240)</option>
                        <option value="+30.">GRC (+30)</option>
                        <option value="+502.">GTM (+502)</option>
                        <option value="+245.">GNB (+245)</option>
                        <option value="+592.">GUY (+592)</option>
                        <option value="+504.">HND (+504)</option>
                        <option value="+852.">HKG (+852)</option>
                        <option value="+385.">HRV (+385)</option>
                        <option value="+509.">HTI (+509)</option>
                        <option value="+36.">HUN (+36)</option>
                        <option value="+62.">IDN (+62)</option>
                        <option value="+353.">IRL (+353)</option>
                        <option value="+972.">ISR (+972)</option>
                        <option value="+91.">IND (+91)</option>
                        <option value="+964.">IRQ (+964)</option>
                        <option value="+98.">IRN (+98)</option>
                        <option value="+354.">ISL (+354)</option>
                        <option value="+39.">ITA (+39)</option>
                        <option value="+1-876.">JAM (+1-876)</option>
                        <option value="+962.">JOR (+962)</option>
                        <option value="+81.">JPN (+81)</option>
                        <option value="+254.">KEN (+254)</option>
                        <option value="+996.">KGZ (+996)</option>
                        <option value="+855.">KHM (+855)</option>
                        <option value="+686.">KIR (+686)</option>
                        <option value="+1-869.">KNA (+1-869)</option>
                        <option value="+850.">PRK (+850)</option>
                        <option value="+82.">KOR (+82)</option>
                        <option value="+965.">KWT (+965)</option>
                        <option value="+7.">KAZ (+7)</option>
                        <option value="+856.">LAO (+856)</option>
                        <option value="+961.">LBN (+961)</option>
                        <option value="+1-758.">LCA (+1-758)</option>
                        <option value="+423.">LIE (+423)</option>
                        <option value="+94.">LKA (+94)</option>
                        <option value="+231.">LBR (+231)</option>
                        <option value="+266.">LSO (+266)</option>
                        <option value="+370.">LTU (+370)</option>
                        <option value="+352.">LUX (+352)</option>
                        <option value="+371.">LVA (+371)</option>
                        <option value="+218.">LBY (+218)</option>
                        <option value="+212.">MAR (+212)</option>
                        <option value="+853.">MAC (+853)</option>
                        <option value="+377.">MCO (+377)</option>
                        <option value="+373.">MDA (+373)</option>
                        <option value="+382.">MNE (+382)</option>
                        <option value="+261.">MDG (+261)</option>
                        <option value="+692.">MHL (+692)</option>
                        <option value="+389.">MKD (+389)</option>
                        <option value="+223.">MLI (+223)</option>
                        <option value="+95.">MMR (+95)</option>
                        <option value="+976.">MNG (+976)</option>
                        <option value="+222.">MRT (+222)</option>
                        <option value="+356.">MLT (+356)</option>
                        <option value="+230.">MUS (+230)</option>
                        <option value="+960.">MDV (+960)</option>
                        <option value="+265.">MWI (+265)</option>
                        <option value="+52.">MEX (+52)</option>
                        <option value="+60.">MYS (+60)</option>
                        <option value="+258.">MOZ (+258)</option>
                        <option value="+264.">NAM (+264)</option>
                        <option value="+227.">NER (+227)</option>
                        <option value="+234.">NGA (+234)</option>
                        <option value="+505.">NIC (+505)</option>
                        <option value="+31.">NLD (+31)</option>
                        <option value="+47.">NOR (+47)</option>
                        <option value="+977.">NPL (+977)</option>
                        <option value="+674.">NRU (+674)</option>
                        <option value="+64.">NZL (+64)</option>
                        <option value="+968.">OMN (+968)</option>
                        <option value="+507.">PAN (+507)</option>
                        <option value="+51.">PER (+51)</option>
                        <option value="+675.">PNG (+675)</option>
                        <option value="+63.">PHL (+63)</option>
                        <option value="+92.">PAK (+92)</option>
                        <option value="+48.">POL (+48)</option>
                        <option value="+351.">PRT (+351)</option>
                        <option value="+680.">PLW (+680)</option>
                        <option value="+595.">PRY (+595)</option>
                        <option value="+974.">QAT (+974)</option>
                        <option value="+40.">ROU (+40)</option>
                        <option value="+381.">SRB (+381)</option>
                        <option value="+7.">RUS (+7)</option>
                        <option value="+250.">RWA (+250)</option>
                        <option value="+966.">SAU (+966)</option>
                        <option value="+677.">SLB (+677)</option>
                        <option value="+248.">SYC (+248)</option>
                        <option value="+249.">SDN (+249)</option>
                        <option value="+46.">SWE (+46)</option>
                        <option value="+65.">SGP (+65)</option>
                        <option value="+386.">SVN (+386)</option>
                        <option value="+421.">SVK (+421)</option>
                        <option value="+232.">SLE (+232)</option>
                        <option value="+378.">SMR (+378)</option>
                        <option value="+221.">SEN (+221)</option>
                        <option value="+252.">SOM (+252)</option>
                        <option value="+597.">SUR (+597)</option>
                        <option value="+27.">ZAF (+27)</option>
                        <option value="+211.">SSD (+211)</option>
                        <option value="+239.">STP (+239)</option>
                        <option value="+503.">SLV (+503)</option>
                        <option value="+963.">SYR (+963)</option>
                        <option value="+268.">SWZ (+268)</option>
                        <option value="+41.">CHE (+41)</option>
                        <option value="+235.">TCD (+235)</option>
                        <option value="+228.">TGO (+228)</option>
                        <option value="+66.">THA (+66)</option>
                        <option value="+992.">TJK (+992)</option>
                        <option value="+670.">TLS (+670)</option>
                        <option value="+993.">TKM (+993)</option>
                        <option value="+216.">TUN (+216)</option>
                        <option value="+676.">TON (+676)</option>
                        <option value="+90.">TUR (+90)</option>
                        <option value="+1-868.">TTO (+1-868)</option>
                        <option value="+688.">TUV (+688)</option>
                        <option value="+886.">TWN (+886)</option>
                        <option value="+380.">UKR (+380)</option>
                        <option value="+256.">UGA (+256)</option>
                        <option value="+971.">ARE (+971)</option>
                        <option value="+44.">GBR (+44)</option>
                        <option value="+255.">TZA (+255)</option>
                        <option value="+1.">USA (+1)</option>
                        <option value="+598.">URY (+598)</option>
                        <option value="+998.">UZB (+998)</option>
                        <option value="+1-784.">VCT (+1-784)</option>
                        <option value="+58.">VEN (+58)</option>
                        <option value="+84.">VNM (+84)</option>
                        <option value="+678.">VUT (+678)</option>
                        <option value="+685.">WSM (+685)</option>
                        <option value="+967.">YEM (+967)</option>
                        <option value="+260.">ZMB (+260)</option>
                        <option value="+263.">ZWE (+263)</option>
                      </select>
                    </div>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        v-model="dataInfo.phoneNumber"
                        maxlength="15"
                        oninput="this.value = this.value.replace(/\D/g, '')"
                        placeholder="Please enter your phone number."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 发票 -->
            <div class="pt-3">
              <h6 class="form-subtitle">Invoice Application</h6>
              <div class="form-tip">
                Reminder: The invoicing information is subject to the
                information filled in on the website
              </div>
            </div>

            <div class="row pt-4">
              <div class="mb-3 col-12">
                <label class="form-label">Invoice Type</label>
                <div class="position-relative">
                  <select
                    class="form-select"
                    v-model="dataInfo.invoiceType"
                    :disabled="notModify"
                  >
                    <option disabled="" value="">
                      Please select a invoice type.
                    </option>
                    <option value="1">
                      Electronic Ordinary Invoice - 数电普票
                    </option>
                    <option value="2">
                      Electronic Special Invoice - 数电专票
                    </option>
                    <option value="4">Electronic bill - 电子账单</option>
                  </select>
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label">Invoice Title</label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter invoice title."
                    v-model="dataInfo.invoiceTitle"
                    :disabled="notModify"
                    list="sites"
                  />
                  <datalist id="sites">
                    <option v-for="ti in taxList" :key="ti.taxNo">
                      {{ `${ti.invoiceTitle}(${ti.taxNo})` }}
                    </option>
                  </datalist>
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label">Invoice Tax Number</label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    maxlength="18"
                    placeholder="Please enter invoice tax number."
                    v-model="dataInfo.invoiceTaxNumber"
                    :disabled="notModify"
                    oninput="value=value.replace(/[^\w\x20\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                  />
                </div>
              </div>
            </div>

            <!-- 状态 -->
            <div class="pt-3" v-if="dataId">
              <h6 class="form-subtitle">Order Information</h6>
            </div>

            <div class="row pt-4" v-if="dataId">
              <table class="table">
                <thead class="table-light">
                  <tr>
                    <th>SIGNUP TYPE</th>
                    <th>AMOUNT PATABLE</th>
                    <th>ORDER STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ dataInfo.signupItem.conferenceSignupItemName }}</td>
                    <td>
                      {{
                        dataInfo.signupItem.currencyCode +
                        ": " +
                        moneyTxt(dataInfo.signupItem.signupAmount)
                      }}
                    </td>
                    <td>{{ statusMap[dataInfo.signupStatus] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 获取支付信息 -->
            <div class="d-grid mt-5" v-if="canUpdate">
              <button class="btn btn-primary" type="submit" @click="getPayment">
                Pay the order
              </button>
            </div>

            <!-- 更新 -->
            <div class="d-grid mt-5" v-if="canAdd || canUpdate">
              <button
                class="btn btn-primary"
                type="submit"
                @click="submitSignupInfo"
                v-if="!submitIng"
              >
                {{ !canUpdate ? "Submit" : "Update" }}
              </button>
              <button class="btn btn-primary" type="button" disabled v-else>
                <span class="spinner-border spinner-border-sm"></span>
              </button>
            </div>

            <!-- 展示支付内容 -->
            <div class="mt-5 payment-info" v-if="paymentInfo">
              <div class="qrcode">
                <vue-qrcode
                  :value="paymentInfo.qrcode"
                  width="300"
                  v-if="paymentCountDown >= 0"
                />
                <img src="../imgs/pc3/expiredQRcode.png" alt="" v-else />
              </div>
              <div class="tip-txt" v-if="paymentCountDown >= 0">
                The QR code expires at
                <span class="cd-num">{{ paymentTime }}</span
                >, only
                <span class="cd-num">{{ paymentCountDown }}</span> seconds left.
              </div>
              <div class="tip-txt" v-if="paymentCountDown >= 0">
                Order support scan code payment via Alipay, WeChat Pay, and
                UnionPay Wallet.
              </div>
              <img
                v-if="paymentCountDown >= 0"
                class="tip-img"
                src="../imgs/pc3/payment_methods.jpg"
                alt=""
              />
            </div>

            <div class="d-grid mt-5" v-if="paymentInfo && paymentCountDown < 0">
              <button
                class="btn btn-primary"
                type="submit"
                @click="getPayment(true)"
              >
                Get Pay Qrcode Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
  </div>
</template>

<script>
import { clearToken, getToken } from "../api/token.js";
import { Modal } from "bootstrap";
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
import VueQrcode from "vue-qrcode";

export default {
  components: { Editor, VueQrcode },
  data() {
    let self = this;
    return {
      dataId: "",
      dataInfo: {
        conferenceId: this.$globalData.conferenceId,
        conferenceSignupItemId: "",
        attendanceType: "",
        branchVenue: "",
        academicTitle: "",
        signupName: "",
        position: "",
        email: "",
        cellphone: "",
        phonePrefix: "",
        phoneNumber: "",
        affiliation: "",
        expandField: null,
        invoiceType: 1,
        invoiceTitle: "",
        invoiceTaxNumber: "",
        remark: "",
        signupStatus: -999,
      },
      statusMap: {
        0: "Completed, pending approval",
        1: "Approved, pending payment",
        2: "Paid online",
        3: "Waiting for offline payment",
        4: "Confirmed",
        "-1": "To be refunded",
        "-2": "Cancelled, no refund",
        "-3": "Cancelled and refunded",
        "-4": "Closed",
      },
      branchVenueList: [],
      signupItemsList: [],
      submitIng: false,
      paymentInfo: null,
      paymentTime: null,
      paymentCountDown: 0,
      paymentCountMax: 600,
      paymentInterval: null,
      showTaxList: false,
      taxList: [],
      queryTaxPass: false,
    };
  },
  watch: {
    "dataInfo.invoiceTitle": function (nval) {
      if (nval != "") {
        if (nval.indexOf("(") != -1 && nval.indexOf(")") != -1) {
          let title = nval.substring(0, nval.indexOf("("));
          let taxNo = nval.substring(nval.indexOf("(") + 1, nval.indexOf(")"));
          this.dataInfo.invoiceTitle = title;
          this.dataInfo.invoiceTaxNumber = taxNo;
          this.queryTaxPass = true;
        } else {
          if (this.queryTaxPass == true) {
            this.queryTaxPass = false;
          } else {
            this.updateQueryTaxResult();
          }
        }
      }
    },
  },
  computed: {
    notModify() {
      if (this.canAdd || this.canUpdate) {
        return false;
      }
      return true;
    },
    canAdd() {
      return this.dataInfo.signupStatus == -999;
    },
    canUpdate() {
      if (this.paymentInfo) {
        return false;
      }
      return this.dataInfo.signupStatus >= 0 && this.dataInfo.signupStatus < 2;
    },
  },
  methods: {
    // onTaxFocus() {
    //   this.showTaxList = true;
    // },
    // onTaxBlur() {
    //   setTimeout(() => {
    //     this.showTaxList = false;
    //   }, 150);
    // },
    updateQueryTaxResult() {
      let invoiceTitle = this.dataInfo.invoiceTitle;
      this.$api
        .queryTaxInfo({
          invoiceTitle,
        })
        .then((resp) => {
          console.log("tax-result:\n" + JSON.stringify(resp.data));
          this.taxList = resp.data || [];
        });
    },
    moneyTxt(val) {
      let valStr = val + "";
      if (valStr.indexOf(".") != -1) {
        return valStr;
      }
      return valStr + ".00";
    },
    switchTicketType(id) {
      if (this.canAdd) {
        this.dataInfo.conferenceSignupItemId = id;
      }
    },
    signupItemValidityTime(si) {
      let st = si.validityStart.substring(0, 10).replaceAll("-", ".");
      let ed = si.validityEnd.substring(0, 10).replaceAll("-", ".");
      return `${st} - ${ed}`;
    },
    checkParams() {
      let sd = this.dataInfo;

      if (!this.checkEmpty("Signup Type", sd.conferenceSignupItemId)) {
        return;
      }
      if (!this.checkEmpty("Attendance Type", sd.attendanceType)) {
        return;
      }
      if (!this.checkEmpty("Branch Venue", sd.branchVenue)) {
        return;
      }
      if (!this.checkEmpty("Name", sd.signupName)) {
        return;
      }
      if (!this.checkEmpty("Affiliation", sd.affiliation)) {
        return;
      }
      if (!this.checkEmpty("Position", sd.position)) {
        return;
      }
      if (!this.checkEmpty("Academic Title", sd.academicTitle)) {
        return;
      }
      if (!this.checkEmpty("Email", sd.email)) {
        return;
      }
      if (!this.checkEmail(sd.email)) {
        return;
      }
      let ppre = this.dataInfo.phonePrefix.trim();
      let pnum = this.dataInfo.phoneNumber.trim();
      if (ppre != "" && pnum == "") {
        alert("Please insert phone number");
        return;
      }
      if (ppre == "" && pnum != "") {
        alert("Please select phone IDD code");
        return;
      }
      let cellphone = ppre + pnum;
      this.dataInfo.cellphone = cellphone;

      // 税号
      let taxNumber = sd.invoiceTaxNumber.trim();
      if (taxNumber != "") {
        if (!this.checkTaxNumber(taxNumber)) {
          return;
        }
      }

      let sParams = Object.assign({}, sd);
      return sParams;
    },
    submitSignupInfo() {
      let sParams = this.checkParams();
      if (!sParams) {
        return;
      }

      this.submitIng = true;
      if (this.dataId) {
        sParams.conferenceSignupRecordId = this.dataId;
        this.$api.updateSignupInfo(sParams).then((resp) => {
          console.log(resp);
          this.submitIng = false;
          if (resp.code == 200) {
            alert("Update successful");
            this.setDataInfo(resp.data);
          } else {
            alert(resp.msg);
          }
        });
      } else {
        this.$api.submitSignupInfo(sParams).then((resp) => {
          console.log(resp);
          this.submitIng = false;
          if (resp.code == 200) {
            alert("Submit successful");
            this.setDataInfo(resp.data);
          } else {
            alert(resp.msg);
          }
        });
      }
    },
    loadThemes() {
      this.$api
        .loadSignupThemes(
          {},
          {
            urlParams: {
              conferenceId: this.dataInfo.conferenceId,
            },
          }
        )
        .then((resp) => {
          console.log(resp.data);
          this.branchVenueList = resp.data || [];
        });
    },
    loadSignupItems() {
      this.$api
        .loadSignupItems(
          {},
          {
            urlParams: {
              conferenceId: this.dataInfo.conferenceId,
            },
          }
        )
        .then((resp) => {
          console.log(resp.data);
          this.signupItemsList = resp.data || [];
        });
    },
    getPayment(force = false) {
      if (this.canUpdate || force) {
        let params = { businessId: this.dataId, businessType: 1 };
        this.$api.getC2BPayInfo(params).then((resp) => {
          if (resp.data) {
            this.startPaymentInterval(resp.data);
          } else {
            alert(resp.msg);
          }
        });
      }
    },
    startPaymentInterval(data) {
      this.stopPaymentInterval();

      // 设置新的
      let exTime = new Date();
      exTime.setMinutes(exTime.getMinutes() + 10);
      let exTimeStr =
        exTime.toLocaleDateString() + " " + exTime.toLocaleTimeString();

      this.paymentTime = exTimeStr;
      this.paymentInfo = data;
      this.paymentCountDown = this.paymentCountMax;
      this.paymentInterval = setInterval(() => {
        console.log("pay-cd:" + this.paymentCountDown);
        if (this.paymentCountDown % 5 == 0) {
          this.checkSignupInfo();
        }
        if (this.paymentCountDown >= 0) {
          this.paymentCountDown--;
        } else {
          this.stopPaymentInterval();
        }
      }, 1000);
    },
    stopPaymentInterval() {
      console.log("stopPaymentInterval");
      if (this.paymentInterval) {
        clearInterval(this.paymentInterval);
        this.paymentInterval = null;
      }
    },
    getSignupInfo() {
      this.$api
        .getSignupInfo(
          {},
          {
            urlParams: {
              conferenceId: this.dataInfo.conferenceId,
            },
          }
        )
        .then((resp) => {
          if (resp.data != null) {
            this.setDataInfo(resp.data);
          } else {
            this.getUserProfile();
          }
        });
    },
    getUserProfile() {
      this.$api.getBizUserInfo().then((resp) => {
        if (resp.code == 200) {
          let ui = resp.data;
          let bui = ui.userExpand;
          this.dataInfo.cellphone = ui.cellphone || "";
          if (this.dataInfo.cellphone.indexOf("\.") != -1) {
            let cp = this.dataInfo.cellphone.split("\.");
            this.dataInfo.phonePrefix = cp[0] + ".";
            this.dataInfo.phoneNumber = cp[1];
          }
          this.dataInfo.email = bui.workEmail || ui.email || "";
          this.dataInfo.affiliation = bui.affiliation || "";
          this.dataInfo.academicTitle = bui.academicTitle || "";
          this.dataInfo.position = bui.position || "";
        }
      });
    },
    checkSignupInfo() {
      this.$api
        .getSignupInfo(
          {},
          {
            urlParams: {
              conferenceId: this.dataInfo.conferenceId,
            },
          }
        )
        .then((resp) => {
          if (resp.data != null) {
            let signupStatus = resp.data.signupStatus;
            console.log("check-status: " + signupStatus);
            if (signupStatus < 0 || signupStatus > 1) {
              this.stopPaymentInterval();
              this.paymentInfo = null;
              this.setDataInfo(resp.data);
            }
          }
        });
    },
    setDataInfo(data) {
      this.dataInfo = data;
      if (this.dataInfo.cellphone.indexOf("\.") != -1) {
        let cp = this.dataInfo.cellphone.split("\.");
        this.dataInfo.phonePrefix = cp[0] + ".";
        this.dataInfo.phoneNumber = cp[1];
      }
      this.dataInfo.invoiceTitle = data.signupRecordExpand.invoiceTitle;
      this.dataInfo.invoiceType = data.signupRecordExpand.invoiceType;
      this.dataInfo.invoiceTaxNumber = data.signupRecordExpand.invoiceTaxNumber;
      this.dataId = data.conferenceSignupRecordId;
    },
    initData() {
      this.loadThemes();
      this.loadSignupItems();
      this.getSignupInfo();
    },
  },
  unmounted() {
    this.stopPaymentInterval();
  },
  destroyed() {
    this.stopPaymentInterval();
  },
  mounted() {
    this.initData();
  },
};
</script>

<style lang="scss" scoped>
.sign-tip {
  text-align: center;
  font-size: 16px;
}

.form-subtitle {
  display: inline-block;
  position: relative;
  font-size: 18px;
  line-height: 1.45;
  padding-bottom: 8px;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 2px solid #233b8b;
}

.form-tip {
  font-size: 17px;
  color: #233b8b;
}

.moveable-item {
  cursor: move;
}

.moveable-table {
  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group {
    min-height: 20px;
  }

  .list-group-item {
    cursor: move;
  }

  .list-group-item i {
    cursor: pointer;
  }
}

.preview-file {
  a {
    font-size: 14px;
  }
}

.form-label {
  width: 100%;
}

.words-count {
  float: right;
}

.text-red {
  color: red;
}

.btn-ph {
  width: 30px;
  height: 10px;
  display: inline-block;
}

.signup-item-card {
  border: 1px solid #ccc;
  padding: 20px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid #aaa;
    background: #ffffff33;
  }

  &.disabled {
    cursor: not-allowed;

    .name {
      color: #aaa;
    }

    .price {
      color: #999;
    }
  }

  &.active {
    border: 1px solid #3254c3;
    // box-shadow: 1px 1px 10px #577aeb;

    &.disabled {
      cursor: not-allowed;
    }

    .name {
      color: #233b8b;
    }

    .price {
      color: #9f1a13;
    }

    .checked {
      display: flex;
    }
  }

  .checked {
    display: none;
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 40px;
    height: 40px;
    background-image: linear-gradient(
      315deg,
      #3254c3 50%,
      rgba(255, 255, 255, 0) 50%
    );
    align-items: flex-end;
    justify-content: flex-end;
    i {
      color: #fff;
      font-size: 20px;
    }
  }

  .name {
    font-size: 16px;
    font-weight: bold;
  }

  .price {
    font-size: 30px;
    color: #c54640;
    font-weight: bold;
    margin-bottom: 10px;

    .ccode {
      margin-right: 6px;
    }
  }

  .time {
    background: linear-gradient(to right, #cadefd, #fff);
    padding: 5px 5px;
  }
}

.payment-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .qrcode {
    border: 0.5px solid #ccc;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  .tip-img {
    width: 50%;
    display: block;
  }

  .tip-txt {
    font-size: 18px;
    margin-bottom: 10px;

    .cd-num {
      display: inline-block;
      padding: 0 10px;
      color: #f00;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
  }
}
</style>
