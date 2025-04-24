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
                    placeholder="Please select a session type."
                    :disabled="mode == 'view'"
                  >
                    <option disabled="" value="">
                      Please select a session type.
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
                  />
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label">Cellphone</label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the cellphone."
                    v-model="dataInfo.cellphone"
                    :disabled="mode == 'view'"
                  />
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
        remark: "",
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
      // if (!this.checkEmpty("Contact", sd.contact)) {
      //   return;
      // }
      // if (!this.checkEmpty("Email", sd.email)) {
      //   return;
      // }
      // if (!this.checkEmpty("Cellphone", sd.cellphone)) {
      //   return;
      // }
      if (!this.checkEmpty("Feedback Content", sd.feedbackContent)) {
        return;
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
              this.dataInfo.contact = pd.contact;
              this.dataInfo.email = pd.email;
              this.dataInfo.screenshots = pd.screenshots;
              this.dataInfo.feedbackContent = pd.feedbackContent;
              this.dataInfo.remark = pd.remark;
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
          this.dataInfo.cellphone = ui.cellphone || "";
          this.dataInfo.email = ui.email || "";
          this.dataInfo.contact = bui.fullName || "";
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
