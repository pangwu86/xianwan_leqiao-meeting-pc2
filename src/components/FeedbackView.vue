<template>
  <div class="row justify-content-center">
    <!-- 表格 -->
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">Feedback</h2>
            </div>
            <!-- 表单内容 -->
            <div class="row pt-4">
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Opinion Type<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <select
                    class="form-select"
                    v-model="dataInfo.opinionType"
                    placeholder="Please select an issue type."
                    :disabled="mode == 'view'"
                  >
                    <option disabled="" value="">
                      Please select an issue type.
                    </option>
                    <option>Incorrect information</option>
                    <option>Abnormal payment</option>
                    <option>Abnormal function</option>
                    <option>Product experience</option>
                    <option>Other issues</option>
                  </select>
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label"
                  >Feedback Content<span class="text-danger">*</span>
                </label>
                <div class="position-relative">
                  <textarea
                    class="form-control"
                    v-model="dataInfo.feedbackContent"
                    rows="5"
                    placeholder=""
                    :disabled="mode == 'view'"
                  ></textarea>
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label">Contact</label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the contact."
                    v-model="dataInfo.contact"
                    :disabled="mode == 'view'"
                  />
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label">Email</label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the email."
                    v-model="dataInfo.email"
                    :disabled="mode == 'view'"
                    oninput="value=value.replace(/[^\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                  />
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label">Cellphone</label>
                <!-- <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the cellphone."
                    v-model="dataInfo.cellphone"
                    :disabled="mode == 'view'"
                  />
                </div> -->
                <div class="position-relative">
                  <div class="row g-2">
                    <div class="col-4">
                      <select
                        class="form-select"
                        v-model="dataInfo.phonePrefix"
                        :disabled="mode == 'view'"
                      >
                        <option disabled="" value="">
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
                        :disabled="mode == 'view'"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-3 col-12">
                <label class="form-label">Screenshots</label>
                <label class="text-grey"
                  >Tips: Only PNG/JPG/JPEG format is supported, and up to three
                  images can beuploaded, each image size up to 10 MB</label
                >

                <!-- 图片预览 -->
                <div class="position-relative mt-3 mb-3 screenshots-list">
                  <div
                    class="screenshot-image"
                    v-for="(uf, uidx) in dataInfo.screenshots"
                    :key="uf.url"
                  >
                    <img :src="uf.url" alt="" />
                    <i
                      class="bi bi-x-circle"
                      @click="removeScreenshot(uidx)"
                      v-if="mode != 'view'"
                    ></i>
                  </div>
                </div>

                <div class="position-relative mt-3 mb-3" v-if="canUploadFile">
                  <label class="btn btn-primary btn-sm" v-if="!uploading"
                    >Select Image:
                    <input
                      type="file"
                      class="form-control required d-none"
                      accept="image/png, image/jpeg, image/jpg"
                      multiple
                      @change="selectFiles"
                      :disabled="mode == 'view'"
                    />
                  </label>
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    disabled
                    v-else
                  >
                    <span class="spinner-border spinner-border-sm"></span>
                  </button>
                </div>
              </div>
            </div>

            <!-- 更新 -->
            <div class="d-grid mt-5" v-if="mode != 'view'">
              <button
                class="btn btn-primary"
                type="submit"
                @click="submitProposal"
                v-if="!submitIng"
              >
                {{ mode == "add" ? "Submit" : "Update" }}
              </button>
              <button class="btn btn-primary" type="button" disabled v-else>
                <span class="spinner-border spinner-border-sm"></span>
              </button>
            </div>

            <!-- 返回列表 -->
            <div class="d-grid mt-4">
              <button
                class="btn btn-secondary"
                type="submit"
                @click="toListPage"
              >
                Back to List
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

export default {
  components: {},
  data() {
    return {
      dataId: "",
      mode: "view",
      dataLoad: null,
      dragging: false,
      dataInfo: {
        conferenceId: "1899130655669882882",
        opinionType: "",
        contact: "",
        email: "",
        cellphone: "",
        phonePrefix: "",
        phoneNumber: "",
        remark: "",
        feedbackContent: "",
        screenshots: [],
      },
      submitIng: false,
      uploading: false,
    };
  },
  computed: {
    canUploadFile() {
      if (this.mode == "add" || this.mode == "edit") {
        if (this.dataInfo.screenshots.length < 3) {
          return true;
        }
      }
      return false;
    },
    descWordsCount() {
      let text = this.dataInfo.proposalText.trim();
      if (text == "") {
        return 0;
      }
      // 替换中文字符为空格
      text = text.replace(/[\u4e00-\u9fa5]+/g, " ");
      // 将换行符，前后空格不计算为单词数
      text = text.replace(/\n|\r|^\s+|\s+$/gi, "");
      // 多个空格替换成一个空格
      text = text.replace(/\s+/gi, " ");
      // 更新计数
      let length = 0;
      let match = text.match(/\s/g);
      if (match) {
        length = match.length + 1;
      } else if (text) {
        length = 1;
      }
      return length;
    },
  },
  methods: {
    toListPage() {
      this.$router.push("/feedback/list");
    },
    submitProposal() {
      let sd = this.dataInfo;
      if (!this.checkEmpty("Opinion Type", sd.opinionType)) {
        return;
      }
      if (!this.checkEmpty("Feedback Content", sd.feedbackContent)) {
        return;
      }
      let ppre = this.dataInfo.phonePrefix.trim();
      let pnum = this.dataInfo.phoneNumber.trim();
      if (ppre != "" && pnum != "") {
        this.dataInfo.cellphone = ppre + pnum;
      }
      let sParams = Object.assign({}, sd);
      this.$api.submitFeedback(sParams).then((resp) => {
        console.log(resp);
        if (resp.code == 200) {
          alert("Submit successful");
          this.$router.push("/feedback/list");
        } else {
          alert(resp.msg);
        }
      });
    },
    selectFiles(event) {
      let maxSize = 1024 * 1024 * 10;
      let files = event.target.files;
      console.log(files);
      if (files.length > 0) {
        if (this.dataInfo.screenshots.length + files.length <= 3) {
          for (let i = 0; i < files.length; i++) {
            let upFile = files[i];
            let cfileSize = upFile.size;
            if (cfileSize > maxSize) {
              alert(
                `Upload image [${upFile.name}] size is ${this.formatFileSize(
                  cfileSize
                )}, limit size is 10MB, please reselect.`
              );
              return;
            }
          }
          // 检查通过
          this.startUpload(files);
        } else {
          alert(`Three images can beuploaded, please reselect.`);
        }
      }
    },
    async startUpload(files) {
      this.uploading = true;
      for (let i = 0; i < files.length; i++) {
        const upFile = files[i];
        let upResult = await this.uploadFile(upFile);
        if (upResult) {
          this.dataInfo.screenshots.push({
            text: upResult.sourceFileName,
            url: upResult.accessLink,
          });
        }
      }
      this.uploading = false;
      console.log("screenshots:\n" + JSON.stringify(this.dataInfo.screenshots));
    },
    uploadFile(upFile) {
      let self = this;
      return new Promise(function (resolve) {
        let formParams = new FormData();
        formParams.append("file", upFile);
        self.$api.uploadFile(formParams).then((resp) => {
          if (resp.code == 200) {
            resolve(resp.data);
            return;
          }
          resolve(null);
        });
      });
    },
    removeScreenshot(idx) {
      this.dataInfo.screenshots.splice(idx, 1);
    },
    initData() {
      if (this.dataId) {
        this.$api
          .getFeedback({
            feedbackId: this.dataId,
          })
          .then((resp) => {
            if (resp.data) {
              let pd = resp.data;
              this.dataInfo.opinionType = pd.opinionType;
              this.dataInfo.screenshots = pd.screenshots || [];
              this.dataInfo.feedbackContent = pd.feedbackContent || "";
              this.dataInfo.remark = pd.remark || "";
              this.dataInfo.contact = pd.contact || "";
              this.dataInfo.email = pd.email || "";
              this.dataInfo.cellphone = pd.cellphone || "";
              if (this.dataInfo.cellphone.indexOf("\.") != -1) {
                let cp = this.dataInfo.cellphone.split("\.");
                this.dataInfo.phonePrefix = cp[0] + ".";
                this.dataInfo.phoneNumber = cp[1];
              }
            }
          });
      } else {
        this.getBizUserInfo();
      }
    },
    getBizUserInfo() {
      this.$api.getBizUserInfo().then((resp) => {
        if (resp.code == 200) {
          let ui = resp.data;
          let bui = ui.userExpand;
          this.dataInfo.contact = bui.fullName || "";
          this.dataInfo.email = ui.email || "";
          this.dataInfo.cellphone = ui.cellphone || "";
          if (this.dataInfo.cellphone.indexOf("\.") != -1) {
            let cp = this.dataInfo.cellphone.split("\.");
            this.dataInfo.phonePrefix = cp[0] + ".";
            this.dataInfo.phoneNumber = cp[1];
            this.dataInfo.cellphone = "";
          }
        }
      });
    },
  },
  mounted() {
    let query = this.$route.query || {};
    this.dataId = query.id || "";
    this.mode = query.mode || (this.dataId ? "view" : "add");
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
  margin-bottom: 30px;
  margin-top: 20px;
  border-bottom: 2px solid #590a54;
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

.screenshots-list {
  display: flex;

  .screenshot-image {
    display: inline-flex;
    width: 100px;
    height: 100px;
    background: #000;
    margin-right: 30px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    i {
      position: absolute;
      right: -14px;
      top: -14px;
      display: inline-flex;
      background-color: rgba(255, 0, 0, 0.8);
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      color: #fff;
      font-size: 16px;

      &:hover {
        cursor: pointer;
        background-color: rgba(255, 0, 0, 1);
      }
    }
  }
}
</style>
