<template>
  <div class="row justify-content-center">
    <!-- 表格 -->
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">Session Proposal</h2>
            </div>
            <!-- 表单内容 -->
            <div class="row pt-4">
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Session Type<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <select
                    class="form-select"
                    v-model="dataInfo.sessionType"
                    :disabled="mode == 'view'"
                  >
                    <option disabled="" value="">
                      Please select a session type.
                    </option>
                    <option>General Session</option>
                    <option>Subcommission Session</option>
                    <option>Workshop</option>
                    <option>Short Course</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Session Title<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the session title."
                    v-model="dataInfo.proposalTitle"
                    :disabled="mode == 'view'"
                  />
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Submitter<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Affiliation</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="dataInfo.submitter.firstName">
                        <th>{{ 1 }}</th>
                        <td>{{ dataInfo.submitter.firstName }}</td>
                        <td>{{ dataInfo.submitter.middleName }}</td>
                        <td>{{ dataInfo.submitter.lastName }}</td>
                        <td>{{ dataInfo.submitter.affiliation }}</td>
                        <td>{{ dataInfo.submitter.email }}</td>
                        <td>
                          <div
                            class="d-grid gap-2 d-md-block btn-container"
                            v-if="mode != 'view'"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              data-bs-toggle="tooltip"
                              data-bs-title="Edit"
                              data-bs-placement="top"
                              @click="openSubmitterWin('edit')"
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>
                            <div class="btn-ph"></div>
                            <div class="btn-ph"></div>
                            <div class="btn-ph"></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Co-Conveners<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <table class="table table-striped table-hover moveable-table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Affiliation</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="dataInfo.submitter.firstName">
                        <th>{{ 1 }}</th>
                        <td>{{ dataInfo.submitter.firstName }}</td>
                        <td>{{ dataInfo.submitter.middleName }}</td>
                        <td>{{ dataInfo.submitter.lastName }}</td>
                        <td>{{ dataInfo.submitter.affiliation }}</td>
                        <td>{{ dataInfo.submitter.email }}</td>
                        <td>
                          <div class="btn-ph"></div>
                          <div class="btn-ph"></div>
                          <div class="btn-ph"></div>
                          <div class="btn-ph"></div>
                        </td>
                      </tr>
                      <tr
                        v-for="(element, index) in dataInfo.conveners"
                        :key="index"
                      >
                        <td>{{ index + 2 }}</td>
                        <td>{{ element.firstName }}</td>
                        <td>{{ element.middleName }}</td>
                        <td>{{ element.lastName }}</td>
                        <td>{{ element.affiliation }}</td>
                        <td>{{ element.email }}</td>
                        <td>
                          <div
                            class="d-grid gap-2 d-md-block btn-container"
                            v-if="mode != 'view'"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              data-bs-toggle="tooltip"
                              data-bs-title="Edit"
                              data-bs-placement="top"
                              @click="openConvenerWin('edit', index)"
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>
                            <button
                              type="button"
                              data-bs-toggle="tooltip"
                              data-bs-title="Delete"
                              data-bs-placement="top"
                              class="btn btn-outline-danger btn-sm"
                              @click="removeConvener(index)"
                            >
                              <i class="bi bi-trash"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-secondary btn-sm"
                              @click="sortUpConvener(index)"
                              data-bs-toggle="tooltip"
                              data-bs-title="Up"
                              data-bs-placement="top"
                              :disabled="index == 0"
                            >
                              <i class="bi bi-arrow-bar-up"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-secondary btn-sm"
                              data-bs-toggle="tooltip"
                              data-bs-title="Down"
                              data-bs-placement="top"
                              @click="sortDownConvener(index)"
                              :disabled="index == dataInfo.conveners.length - 1"
                            >
                              <i class="bi bi-arrow-bar-down"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="md-3">
                  <button
                    class="btn btn-primary btn-sm"
                    type="submit"
                    @click="openConvenerWin('add')"
                    v-if="mode != 'view'"
                  >
                    Add Convener
                  </button>
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Session Description<span class="text-danger">*</span
                  >（Maximum 600 words）
                  <div
                    :class="
                      'words-count ' + (descWordsCount > 600 ? 'text-red' : '')
                    "
                  >
                    Word Count: {{ descWordsCount }}
                  </div>
                </label>
                <div class="position-relative">
                  <textarea
                    class="form-control"
                    v-model="dataInfo.proposalText"
                    rows="5"
                    placeholder="The session description is limited to 600 words."
                    :disabled="mode == 'view'"
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label">File（PDF, up to 50 MB）</label>
                <div
                  class="preview-file mb-3"
                  v-if="this.dataInfo.proposalFileUrl"
                >
                  <a :href="this.dataInfo.proposalFileUrl" target="_blank">{{
                    this.dataInfo.proposalFileUrl
                  }}</a>
                  <div class="mt-3" v-if="mode != 'view'">
                    <button
                      class="btn btn-primary btn-sm"
                      type="submit"
                      title="Click to upload a PDF file."
                      @click="reUploadFile"
                    >
                      Re-upload file
                    </button>
                  </div>
                </div>
                <div
                  class="position-relative mb-3"
                  v-if="!this.dataInfo.proposalFileUrl"
                >
                  <input
                    type="file"
                    class="form-control"
                    accept=".pdf"
                    @change="previewFiles"
                    :disabled="mode == 'view'"
                  />
                </div>
                <div v-if="mode != 'view'">
                  <div v-if="!this.dataInfo.proposalFileUrl">
                    <button
                      class="btn btn-primary btn-sm"
                      type="submit"
                      @click="uploadFile"
                      :disabled="uploadFileObj == null"
                      v-if="!uploading"
                    >
                      Upload File
                    </button>
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
                title="After verifying that the proposal information is correct, submit it to the system."
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="convModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ conObj }} Info
            </h1>
            <button
              type="button"
              class="btn-close"
              title="Close"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >First Name<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please enter a first name."
                  v-model="conInfo.firstName"
                />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Middle Name </label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  v-model="conInfo.middleName"
                  placeholder="Please enter a middle name."
                />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Last Name<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  v-model="conInfo.lastName"
                  placeholder="Please enter a last name."
                />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Affiliation<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  v-model="conInfo.affiliation"
                  placeholder="Please enter an affiliation."
                />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Email<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  v-model="conInfo.email"
                  placeholder="Please enter an email."
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="addConvData"
              v-if="conMode == 'add'"
            >
              Add
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateConvData"
              v-if="conMode == 'edit'"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clearToken, getToken } from "../api/token.js";
import { Modal } from "bootstrap";
import axios from "axios";
import ProposalListView from "./ProposalListView.vue";

export default {
  components: {},
  data() {
    return {
      dataId: "",
      mode: "view",
      dataLoad: null,
      dragging: false,
      dataInfo: {
        proposalTitle: "",
        theme: "",
        sessionType: "",
        proposalText: "",
        conferenceId: "1899130655669882882",
        remark: "",
        proposalFileUrl: "",
        submitter: {
          firstName: "",
          middleName: "",
          lastName: "",
          affiliation: "",
          email: "",
        },
        conveners: [],
      },
      submitIng: false,
      conModal: null,
      conObj: "",
      conMode: "add",
      conInfo: {
        firstName: "",
        middleName: "",
        lastName: "",
        affiliation: "",
        email: "",
      },
      conInfoEmpty: {
        firstName: "",
        middleName: "",
        lastName: "",
        affiliation: "",
        email: "",
      },
      conIdx: -1,
      uploading: false,
      uploadFileObj: null,
    };
  },
  computed: {
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
      this.$router.push("/proposal/list");
    },
    sortUpConvener(index) {
      let tmp = this.dataInfo.conveners[index - 1];
      this.dataInfo.conveners[index - 1] = this.dataInfo.conveners[index];
      this.dataInfo.conveners[index] = tmp;
    },
    sortDownConvener(index) {
      let tmp = this.dataInfo.conveners[index + 1];
      this.dataInfo.conveners[index + 1] = this.dataInfo.conveners[index];
      this.dataInfo.conveners[index] = tmp;
    },
    reUploadFile() {
      this.dataInfo.proposalFileUrl = "";
      this.uploadFileObj = null;
    },
    submitProposal() {
      let sd = this.dataInfo;
      if (!this.checkEmpty("Session Title", sd.proposalTitle)) {
        return;
      }
      if (!this.checkEmpty("Session Type", sd.sessionType)) {
        return;
      }
      if (!this.checkEmpty("Session Description", sd.proposalText)) {
        return;
      }
      // if (!this.checkEmpty("File", sd.proposalFile)) {
      //   return;
      // }
      if (!this.checkEmpty("Submitter", sd.submitter.firstName)) {
        return;
      }
      // if (sd.conveners.length == 0) {
      //   alert("Conveners cannot be empty.");
      //   return;
      // }

      // 整合 submitter 到 conveners 数组中
      let convenersUp = [];
      let cindex = 1;
      convenersUp.push(Object.assign({ sort: cindex++ }, sd.submitter));
      sd.conveners.forEach((ci) => {
        convenersUp.push(Object.assign({ sort: cindex++ }, ci));
      });

      let sParams = Object.assign({}, sd);

      sParams.submitter = sd.submitter;
      sParams.conveners = convenersUp;

      if (this.mode == "edit" && this.dataId) {
        sParams.conferenceProposalId = this.dataId;
        this.$api.updateProposal(sParams).then((resp) => {
          console.log(resp);
          if (resp.code == 200) {
            alert("Update successful");
            this.$router.push("/proposal/list");
          } else {
            alert(resp.msg);
          }
        });
      } else {
        this.$api.submitProposal(sParams).then((resp) => {
          console.log(resp);
          if (resp.code == 200) {
            alert("Submit successful");
            this.$router.push("/proposal/list");
          } else {
            alert(resp.msg);
          }
        });
      }
    },
    previewFiles(event) {
      let maxSize = 1024 * 1024 * 50;
      let files = event.target.files;
      console.log(files);
      if (files.length > 0) {
        let upFile = files[0];
        let cfileSize = upFile.size;
        console.log("fileSize:" + this.formatFileSize(cfileSize));
        if (cfileSize > maxSize) {
          alert(
            `Upload file size is ${this.formatFileSize(
              cfileSize
            )}, limit size is 50MB, please reselect.`
          );
          return;
        } else {
          this.uploadFileObj = upFile;
        }
      }
    },
    uploadFile() {
      let formParams = new FormData();
      formParams.append("file", this.uploadFileObj);
      this.uploading = true;
      this.$api.uploadFile(formParams).then((resp) => {
        this.uploading = false;
        console.log(resp);
        if (resp.code == 200) {
          this.dataInfo.proposalFileUrl = resp.data.accessLink;
          alert("Upload successful");
        } else {
          alert(resp.msg);
        }
      });
    },
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
    openConvenerWin(mode = "add", idx) {
      this.conMode = mode;
      this.conIdx = idx;
      this.conInfo = Object.assign(
        {},
        mode == "add" ? this.conInfoEmpty : this.dataInfo.conveners[idx]
      );
      this.conObj = "Convener";
      this.openModal("Convener");
    },
    openSubmitterWin(mode = "add") {
      this.conMode = mode;
      this.conInfo = Object.assign(
        {},
        mode == "add" ? this.conInfoEmpty : this.dataInfo.submitter
      );
      this.conObj = "Submitter";
      this.openModal();
    },
    openModal() {
      this.conModal.show();
    },
    closeModal() {
      this.conModal.hide();
    },
    checkConvData() {
      let cd = this.conInfo;
      if (cd.firstName == "") {
        alert("First Name cannot be empty.");
        return false;
      }
      if (cd.lastName == "") {
        alert("Last Name cannot be empty.");
        return false;
      }
      if (cd.affiliation == "") {
        alert("Affiliation cannot be empty.");
        return false;
      }
      if (cd.email == "") {
        alert("Email cannot be empty.");
        return false;
      }
      if (!this.checkEmail(cd.email)) {
        return false;
      }
      return true;
    },
    addConvData() {
      if (!this.checkConvData()) {
        return;
      }
      console.log("add:" + JSON.stringify(this.conInfo));
      if (this.conObj == "Submitter") {
        this.dataInfo.submitter = Object.assign({}, this.conInfo);
      } else {
        this.dataInfo.conveners.push(Object.assign({}, this.conInfo));
      }
      this.conInfo = Object.assign({}, this.conInfoEmpty);
      this.closeModal();
    },
    updateConvData() {
      if (!this.checkConvData()) {
        return;
      }
      if (this.conObj == "Submitter") {
        this.dataInfo.submitter = Object.assign({}, this.conInfo);
      } else {
        this.dataInfo.conveners[this.conIdx] = Object.assign({}, this.conInfo);
      }
      this.conInfo = Object.assign({}, this.conInfoEmpty);
      this.closeModal();
    },
    importSubmitter() {
      this.$api.getSubmitterInfo().then((resp) => {
        if (resp.data) {
          let currData = resp.data;
          // 检查名字 邮箱
          if (
            currData.firstName.trim() == "" ||
            currData.lastName.trim() == "" ||
            currData.email.trim() == ""
          ) {
            alert("Please complete the basic information first.");
            this.$router.push("/user/profile");
            return;
          }
          this.dataInfo.submitter.firstName = currData.firstName || "";
          this.dataInfo.submitter.middleName = currData.middleName || "";
          this.dataInfo.submitter.lastName = currData.lastName || "";
          this.dataInfo.submitter.affiliation = currData.affiliation || "";
          this.dataInfo.submitter.email = currData.email || "";
        } else {
          alert(resp.msg);
        }
      });
    },
    removeSubmitter() {
      this.dataInfo.submitter.firstName = "";
      this.dataInfo.submitter.middleName = "";
      this.dataInfo.submitter.lastName = "";
      this.dataInfo.submitter.affiliation = "";
      this.dataInfo.submitter.email = "";
    },
    removeConvener(idx) {
      this.dataInfo.conveners.splice(idx, 1);
    },
    initData() {
      if (this.dataId) {
        this.$api
          .getProposal({
            conferenceProposalId: this.dataId,
          })
          .then((resp) => {
            if (resp.data) {
              let pd = resp.data;
              this.dataInfo.proposalTitle = pd.proposalTitle;
              this.dataInfo.proposalText = pd.proposalText;
              this.dataInfo.sessionType = pd.sessionType;
              this.dataInfo.theme = pd.theme;
              this.dataInfo.proposalFileUrl = pd.proposalFileUrl;
              this.dataInfo.submitter = pd.submitter;
              let conveners = pd.conveners;
              let submitter = this.dataInfo.submitter;

              if (conveners.length > 0) {
                if (
                  conveners[0].email == submitter.email &&
                  conveners[0].firstName == submitter.firstName &&
                  conveners[0].lastName == submitter.lastName
                ) {
                  conveners.shift();
                }
              }

              this.dataInfo.conveners = conveners;
            }
          });
      } else {
        this.importSubmitter();
      }
    },
  },
  mounted() {
    this.conModal = new Modal(document.getElementById("convModal"));
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
</style>
