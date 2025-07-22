<template>
  <div class="row justify-content-center">
    <!-- 表格 -->
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">Submission</h2>
            </div>
            <!-- 表单内容 -->
            <div class="row pt-4">
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Submission Title<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the submission title."
                    v-model="dataInfo.submissionTitle"
                    :disabled="mode == 'view'"
                    oninput="value=value.replace(/[^\w\x20\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                  />
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
                    :disabled="mode == 'view'"
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
                  >Email<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the email."
                    v-model="dataInfo.email"
                    :disabled="mode == 'view'"
                    oninput="value=value.replace(/[^\w\x20\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                  />
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Address<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter the address."
                    v-model="dataInfo.address"
                    :disabled="mode == 'view'"
                    oninput="value=value.replace(/[^\w\x20\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                  />
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Authors<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Is Presenter</th>
                        <th scope="col">Is Contact</th>
                        <th scope="col">Sort</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(ai, aidx) in dataInfo.authors"
                        :key="aidx + '_' + ai.email"
                      >
                        <th>{{ aidx + 1 }}</th>
                        <td>{{ ai.firstName }}</td>
                        <td>{{ ai.lastName }}</td>
                        <td>{{ ai.email }}</td>
                        <td>{{ ai.isPresent ? "Yes" : "No" }}</td>
                        <td>{{ ai.isContact ? "Yes" : "No" }}</td>
                        <td>{{ sortTxt(ai.sort) }}</td>
                        <td>
                          <div
                            class="d-grid gap-2 d-md-block btn-container"
                            v-if="mode != 'view'"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              v-tooltip:top.accent="'Edit'"
                              @click="openConvenerWin('edit', aidx)"
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>
                            <button
                              type="button"
                              v-tooltip:top.accent="'Delete'"
                              class="btn btn-outline-danger btn-sm"
                              v-if="aidx > 0"
                              @click="removeConvener(aidx)"
                            >
                              <i class="bi bi-trash"></i>
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
                    Add Author
                  </button>
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Affiliations<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <table class="table table-striped table-hover moveable-table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Affiliation Name</th>
                        <th scope="col">Sort</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(af, afdx) in dataInfo.affiliations"
                        :key="afdx + '_' + af.affiliationName"
                      >
                        <th>{{ afdx + 1 }}</th>
                        <td>{{ af.affiliationName }}</td>
                        <td>{{ sortTxt(af.sort) }}</td>
                        <td>
                          <div
                            class="d-grid gap-2 d-md-block btn-container"
                            v-if="mode != 'view'"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              v-tooltip:top.accent="'Edit'"
                              @click="openAffWin('edit', afdx)"
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>
                            <button
                              type="button"
                              v-tooltip:top.accent="'Delete'"
                              class="btn btn-outline-danger btn-sm"
                              @click="removeAff(afdx)"
                            >
                              <i class="bi bi-trash"></i>
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
                    @click="openAffWin('add')"
                    v-if="mode != 'view'"
                  >
                    Add Affiliation
                  </button>
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label"
                  >Submission Description<span class="text-danger">*</span
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
                  <Editor
                    ref="editorRef"
                    :init="editConf"
                    v-model="dataInfo.submissionText"
                  />
                </div>
              </div>
              <div class="mb-3 col-12">
                <label class="form-label">File（PDF, up to 50 MB）</label>
                <div
                  class="preview-file mb-3"
                  v-if="this.dataInfo.submissionFileUrl"
                >
                  <a :href="this.dataInfo.submissionFileUrl" target="_blank">{{
                    this.dataInfo.submissionFileUrl
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
                  v-if="!this.dataInfo.submissionFileUrl"
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
                  <div v-if="!this.dataInfo.submissionFileUrl">
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
                @click="submitSubmission"
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
                title="After verifying that the submission information is correct, submit it to the system."
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
            <h1 class="modal-title fs-5">Author Info</h1>
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
                >Email<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  v-model="conInfo.email"
                  placeholder="Please enter an email."
                  oninput="value=value.replace(/[^\w\x20\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Whether the presenter<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="conInfo.isPresent"
                    :value="true"
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="conInfo.isPresent"
                    :value="false"
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Whether the corresponding author<span class="text-danger"
                  >*</span
                ></label
              >
              <div class="position-relative">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="conInfo.isContact"
                    :value="true"
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="conInfo.isContact"
                    :value="false"
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Sort<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <select class="form-select" v-model="conInfo.sort">
                  <option disabled="" value="">Please select sort.</option>
                  <option
                    v-for="bv in sortList"
                    :key="bv.value"
                    :value="bv.value"
                  >
                    {{ bv.label }}
                  </option>
                </select>
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

    <!-- Modal2 -->
    <div
      class="modal fade"
      id="convModal2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Affiliation Info</h1>
            <button
              type="button"
              class="btn-close"
              title="Close"
              aria-label="Close"
              @click="closeModal2"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Affiliation Name<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  v-model="conInfo2.affiliationName"
                  placeholder="Please enter an affiliation name."
                />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Sort<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <select class="form-select" v-model="conInfo2.sort">
                  <option disabled="" value="">Please select sort.</option>
                  <option
                    v-for="bv in sortList"
                    :key="bv.value"
                    :value="bv.value"
                  >
                    {{ bv.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="closeModal2"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="addAffData"
              v-if="conMode == 'add'"
            >
              Add
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateAffData"
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
import Editor from "@tinymce/tinymce-vue";

export default {
  components: { Editor },
  data() {
    let self = this;
    return {
      editConf: {
        readonly: true,
        height: 300,
        license_key: "gpl",
        promotion: false,
        plugins: ["charmap", "table", "link", "lists"],
        toolbar: "undo redo | bold italic underline strikethrough | charmap",
        menubar: false,
        statusbar: false,
        setup: function (editor) {
          editor.on("change", function (e) {
            self.editorChange(editor.getContent());
          });
        },
      },
      dataId: "",
      mode: "view",
      dataLoad: null,
      dragging: false,
      dataInfo: {
        conferenceId: this.$globalData.conferenceId,
        submissionTitle: "",
        submissionText: "",
        submissionFileUrl: "",
        attendanceType: 4,
        branchVenue: "",
        address: "",
        email: "",
        authors: [],
        affiliations: [],
        remark: "",
        expandField: null,
      },
      branchVenueList: [],
      sortList: [
        {
          label: "1st",
          value: 1,
        },
        {
          label: "2nd",
          value: 2,
        },
        {
          label: "3rd",
          value: 3,
        },
        {
          label: "4th",
          value: 4,
        },
        {
          label: "5th",
          value: 5,
        },
        {
          label: "6th",
          value: 6,
        },
        {
          label: "7th",
          value: 7,
        },
        {
          label: "8th",
          value: 8,
        },
        {
          label: "9th",
          value: 9,
        },
        {
          label: "10th",
          value: 10,
        },
      ],
      submitIng: false,
      conModal: null,
      conModal2: null,
      conMode: "add",
      conInfo: {
        firstName: "",
        lastName: "",
        email: "",
        isPresent: false,
        isContact: false,
        sort: "",
      },
      conInfoEmpty: {
        firstName: "",
        lastName: "",
        email: "",
        isPresent: false,
        isContact: false,
        sort: "",
      },
      conInfo2: {
        affiliationName: "",
        sort: "",
      },
      conInfo2Empty: {
        affiliationName: "",
        sort: "",
      },
      conIdx: -1,
      uploading: false,
      uploadFileObj: null,
    };
  },
  computed: {
    descWordsCount() {
      let text = this.dataInfo.submissionText.trim();
      if (text == "") {
        return 0;
      }
      text = this.html2text(text);
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
    sortTxt(sortVal) {
      let si = this.sortList.find((si) => {
        return si.value == sortVal;
      });
      if (si) {
        return si.label;
      }
      return "unknow";
    },
    toListPage() {
      this.$router.push("/submission/list");
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
      this.dataInfo.submissionFileUrl = "";
      this.uploadFileObj = null;
    },
    submitSubmission() {
      let sd = this.dataInfo;
      if (!this.checkEmpty("Submission Title", sd.submissionTitle)) {
        return;
      }
      if (!this.checkEmpty("Submission Description", sd.submissionText)) {
        return;
      }
      if (!this.checkEmpty("Email", sd.email)) {
        return;
      }
      if (!this.checkEmail(sd.email)) {
        return;
      }
      if (!this.checkEmpty("Address", sd.address)) {
        return;
      }
      if (!this.checkEmpty("Branch Venue", sd.branchVenue)) {
        return;
      }

      if (sd.authors.length == 0) {
        alert("Authors cannot be empty.");
        return;
      }

      if (sd.affiliations.length == 0) {
        alert("Affiliations cannot be empty.");
        return;
      }

      let sParams = Object.assign({}, sd);

      sParams.authors = sd.authors;
      sParams.affiliations = sd.affiliations;

      sParams.submissionText = this.base64Encode(sParams.submissionText);

      if (this.mode == "edit" && this.dataId) {
        sParams.conferenceSubmissionId = this.dataId;
        this.$api.updateSubmission(sParams).then((resp) => {
          console.log(resp);
          if (resp.code == 200) {
            alert("Update successful");
            this.$router.push("/submission/list");
          } else {
            alert(resp.msg);
          }
        });
      } else {
        this.$api.submitSubmission(sParams).then((resp) => {
          console.log(resp);
          if (resp.code == 200) {
            alert("Submit successful");
            this.$router.push("/submission/list");
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
          this.dataInfo.submissionFileUrl = resp.data.accessLink;
          alert("Upload successful");
        } else {
          alert(resp.msg);
        }
      });
    },
    openAffWin(mode = "add", idx) {
      this.conMode = mode;
      this.conIdx = idx;
      this.conInfo2 = Object.assign(
        {},
        mode == "add" ? this.conInfo2Empty : this.dataInfo.affiliations[idx]
      );
      this.openModal2();
    },
    openModal2() {
      this.conModal2.show();
    },
    closeModal2() {
      this.conModal2.hide();
    },
    addAffData() {
      if (!this.checkConvData2()) {
        return;
      }
      console.log("add:" + JSON.stringify(this.conInfo2));
      this.dataInfo.affiliations.push({
        affiliationName: this.conInfo2.affiliationName,
        sort: this.conInfo2.sort,
      });
      this.conInfo2 = Object.assign({}, this.conInfo2Empty);
      this.closeModal2();
    },
    updateAffData() {
      if (!this.checkConvData2()) {
        return;
      }
      this.dataInfo.affiliations[this.conIdx] = {
        affiliationName: this.conInfo2.affiliationName,
        sort: this.conInfo2.sort,
      };
      this.conInfo2 = Object.assign({}, this.conInfo2Empty);
      this.closeModal2();
    },
    removeAff(idx) {
      this.dataInfo.affiliations.splice(idx, 1);
    },
    openConvenerWin(mode = "add", idx) {
      this.conMode = mode;
      this.conIdx = idx;
      this.conInfo = Object.assign(
        {},
        mode == "add" ? this.conInfoEmpty : this.dataInfo.authors[idx]
      );
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
      if (cd.email == "") {
        alert("Email cannot be empty.");
        return false;
      }
      if (!this.checkEmail(cd.email)) {
        return false;
      }
      if (cd.sort === "") {
        alert("Please select a sort.");
        return false;
      }
      return true;
    },
    checkConvData2() {
      let cd = this.conInfo2;
      if (cd.affiliationName == "") {
        alert("Affiliation name cannot be empty.");
        return false;
      }
      if (cd.sort === "") {
        alert("Please select a sort.");
        return false;
      }
      return true;
    },
    addConvData() {
      if (!this.checkConvData()) {
        return;
      }
      console.log("add:" + JSON.stringify(this.conInfo));
      this.dataInfo.authors.push(Object.assign({}, this.conInfo));
      this.conInfo = Object.assign({}, this.conInfoEmpty);
      this.closeModal();
    },
    updateConvData() {
      if (!this.checkConvData()) {
        return;
      }
      this.dataInfo.authors[this.conIdx] = Object.assign({}, this.conInfo);
      this.conInfo = Object.assign({}, this.conInfoEmpty);
      this.closeModal();
    },
    removeConvener(idx) {
      this.dataInfo.authors.splice(idx, 1);
    },
    importDefaultAuthor() {
      this.$api.getSubmitterInfo().then((resp) => {
        if (resp.data) {
          let currData = resp.data;
          // 检查名字 邮箱
          if (
            currData.firstName.trim() != "" &&
            currData.lastName.trim() != "" &&
            currData.email.trim() != ""
          ) {
            let author = {
              firstName: currData.firstName || "",
              lastName: currData.lastName || "",
              email: currData.email || "",
              isPresent: false,
              isContact: false,
              sort: 1,
            };
            this.dataInfo.authors.push(author);
          }
        }
        // alert("Please complete the basic information first.");
        // this.$router.push("/user/profile");
        // return;
      });
    },
    removeSubmitter() {
      this.dataInfo.submitter.firstName = "";
      this.dataInfo.submitter.middleName = "";
      this.dataInfo.submitter.lastName = "";
      this.dataInfo.submitter.affiliation = "";
      this.dataInfo.submitter.email = "";
    },
    loadThemes() {
      this.$api
        .loadSubmissionThemes(
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
          if (resp.data == null) {
            alert(
              "Please complete the conference registration before submitting the abstract."
            );
            this.$router.back();
            return;
          }
        });
    },
    initData() {
      this.loadThemes();

      if (this.dataId) {
        this.$api
          .getSubmission({
            conferenceSubmissionId: this.dataId,
          })
          .then((resp) => {
            if (resp.data) {
              let pd = resp.data;
              this.dataInfo.submissionTitle = pd.submissionTitle;
              this.dataInfo.submissionText = this.base64Decode(
                pd.submissionText || ""
              );
              this.dataInfo.submissionFileUrl = pd.submissionFileUrl;
              this.dataInfo.attendanceType = pd.attendanceType;
              this.dataInfo.branchVenue = pd.branchVenue;
              this.dataInfo.remark = pd.remark;
              this.dataInfo.email = pd.email;
              this.dataInfo.address = pd.address;
              this.dataInfo.expandField = pd.expandField;
              this.dataInfo.authors = pd.authors || [];
              this.dataInfo.affiliations = pd.affiliations || [];
            }
          });
      } else {
        this.importDefaultAuthor();
        this.getSignupInfo();
      }

      setTimeout(() => {
        this.updateEditor();
      }, 500);
    },
    updateEditor() {
      let ed = this.$refs.editorRef;
      if (this.mode == "view") {
        ed.getEditor().mode.set("readonly");
      } else {
        ed.getEditor().mode.set("design");
      }
    },
    editorChange(content) {
      // console.log(content);
      this.dataInfo.submissionText = content;
      let b64 = this.base64Encode(content);
      let b64C = this.base64Decode(b64);
      console.log("base64:" + b64);
      console.log("conten:" + b64C);
    },
  },
  mounted() {
    this.conModal = new Modal(document.getElementById("convModal"));
    this.conModal2 = new Modal(document.getElementById("convModal2"));
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

.form-check-input {
  margin-right: 10px;
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
