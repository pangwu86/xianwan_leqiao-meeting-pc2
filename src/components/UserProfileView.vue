<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 账户 -->
            <div class="row g-1">
              <div class="col-4">
                <!-- 邮件 -->
                <div class="mb-3">
                  <label for="signinEmailInput" class="form-label">
                    Account (Email)
                  </label>
                  <div class="row">
                    <div class="col-12">
                      <input
                        type="email"
                        class="form-control"
                        v-model="userInfo.email"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4"></div>
            </div>

            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  :class="'nav-link ' + (tabNo == 0 ? 'active' : '')"
                  @click="tabNo = 0"
                >
                  Profile
                </a>
              </li>
              <!-- <li class="nav-item">
                <a
                  :class="'nav-link ' + (tabNo == 1 ? 'active' : '')"
                  @click="tabNo = 1"
                >
                  Work information
                </a>
              </li> -->
            </ul>

            <!-- 可更新属性 -->
            <div class="row pt-4" v-if="tabNo == 0">
              <!-- 名字 -->
              <div class="mb-3 col-4">
                <label class="form-label"
                  >First Name<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    v-model="userInfo.firstName"
                    placeholder="Please enter your first name."
                  />
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label">Middle Name </label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter your middle name."
                    v-model="userInfo.middleName"
                  />
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label"
                  >Last Name<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter your last name."
                    v-model="userInfo.lastName"
                  />
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label"
                  >Prefix<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <select class="form-select" v-model="userInfo.prefix">
                    <option disabled="" value="">
                      Please select your prefix.
                    </option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Miss</option>
                    <option>Ms.</option>
                    <option>Dr.</option>
                    <option>Prof.</option>
                    <option>Rev.</option>
                    <option>Sir</option>
                    <option>Madam</option>
                  </select>
                </div>
              </div>
              <!-- 性别 -->
              <div class="mb-3 col-4">
                <label class="form-label"
                  >Gender<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <select class="form-select" v-model="userInfo.gender">
                    <option disabled="" value="">
                      Please select your gender.
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Not listed here</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div class="mb-3 col-4">
                <label class="form-label"
                  >Affiliation<span class="text-danger">*</span></label
                >
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your affiliation."
                    class="form-control"
                    oninput="value=value.replace(/[^\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                    v-model="userInfo.affiliation"
                  />
                </div>
              </div>

              <div class="mb-3 col-4">
                <label class="form-label">Phone Number</label>
                <div class="position-relative">
                  <div class="row g-2">
                    <div class="col-4">
                      <select
                        class="form-select"
                        v-model="userInfo.phonePrefix"
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
                        v-model="userInfo.phoneNumber"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-3 col-4">
                <label class="form-label">Work Email</label>
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your work email."
                    class="form-control"
                    oninput="value=value.replace(/[^\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                    v-model="userInfo.workEmail"
                  />
                </div>
              </div>

              <div class="mb-3 col-4">
                <label class="form-label">Personal Website</label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    oninput="value=value.replace(/[^\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                    placeholder="Please enter your personal website."
                    v-model="userInfo.personalWebsite"
                  />
                </div>
              </div>

              <div class="mb-3 col-4">
                <label class="form-label">Academic Title</label>
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please enter your academic title."
                    oninput="value=value.replace(/[^\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                    v-model="userInfo.academicTitle"
                  />
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label">Position</label>
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your position."
                    class="form-control"
                    oninput="value=value.replace(/[^\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                    v-model="userInfo.position"
                  />
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label">Primary Research Focus</label>
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your primary research focus."
                    class="form-control"
                    oninput="value=value.replace(/[^\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g,'')"
                    v-model="userInfo.primaryResearchFocus"
                  />
                </div>
              </div>

              <div class="mb-3 col-4">
                <label class="form-label">Country / Region</label>
                <div class="position-relative">
                  <select class="form-select" v-model="userInfo.country">
                    <option disabled="" value="">
                      Please select a country or region.
                    </option>
                    <option value="AD">Andorra</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AL">Albania</option>
                    <option value="AM">Armenia</option>
                    <option value="AO">Angola</option>
                    <option value="AR">Argentina</option>
                    <option value="AT">Austria</option>
                    <option value="AU">Australia</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BB">Barbados</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BE">Belgium</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BH">Bahrain</option>
                    <option value="BI">Burundi</option>
                    <option value="BJ">Benin</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BO">Bolivia (Plurinational State of)</option>
                    <option value="BR">Brazil</option>
                    <option value="BS">Bahamas</option>
                    <option value="BT">Bhutan</option>
                    <option value="BW">Botswana</option>
                    <option value="BY">Belarus</option>
                    <option value="BZ">Belize</option>
                    <option value="CA">Canada</option>
                    <option value="CF">Central African Republic</option>
                    <option value="CG">Congo</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="CV">Cape Verde</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CM">Cameroon</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CU">Cuba</option>
                    <option value="KM">Comoros</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DE">Germany</option>
                    <option value="DJ">Djibouti</option>
                    <option value="CD">Democratic Republic of the Congo</option>
                    <option value="DK">Denmark</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="DZ">Algeria</option>
                    <option value="EC">Ecuador</option>
                    <option value="EE">Estonia</option>
                    <option value="EG">Egypt</option>
                    <option value="ER">Eritrea</option>
                    <option value="ES">Spain</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FI">Finland</option>
                    <option value="FJ">Fiji</option>
                    <option value="FM">Micronesia (Federated States of)</option>
                    <option value="FR">France</option>
                    <option value="GA">Gabon</option>
                    <option value="GD">Grenada</option>
                    <option value="GE">Georgia</option>
                    <option value="GH">Ghana</option>
                    <option value="GM">Gambia</option>
                    <option value="GN">Guinea</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="GR">Greece</option>
                    <option value="GT">Guatemala</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HR">Croatia</option>
                    <option value="HT">Haiti</option>
                    <option value="HU">Hungary</option>
                    <option value="ID">Indonesia</option>
                    <option value="IE">Ireland</option>
                    <option value="IL">Israel</option>
                    <option value="IN">India</option>
                    <option value="IQ">Iraq</option>
                    <option value="IR">Iran (Islamic Republic of)</option>
                    <option value="IS">Iceland</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JO">Jordan</option>
                    <option value="JP">Japan</option>
                    <option value="KE">Kenya</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="KH">Cambodia</option>
                    <option value="KI">Kiribati</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="KP">
                      Democratic People's Republic of Korea
                    </option>
                    <option value="KR">Republic of Korea</option>
                    <option value="KW">Kuwait</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LB">Lebanon</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="LR">Liberia</option>
                    <option value="LS">Lesotho</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="LV">Latvia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="MA">Morocco</option>
                    <option value="MO">Macao</option>
                    <option value="MC">Monaco</option>
                    <option value="MD">Republic of Moldova</option>
                    <option value="ME">Montenegro</option>
                    <option value="MG">Madagascar</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MK">Republic of North Macedonia</option>
                    <option value="ML">Mali</option>
                    <option value="MM">Myanmar</option>
                    <option value="MN">Mongolia</option>
                    <option value="MR">Mauritania</option>
                    <option value="MT">Malta</option>
                    <option value="MU">Mauritius</option>
                    <option value="MV">Maldives</option>
                    <option value="MW">Malawi</option>
                    <option value="MX">Mexico</option>
                    <option value="MY">Malaysia</option>
                    <option value="MZ">Mozambique</option>
                    <option value="NA">Namibia</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NL">Netherlands</option>
                    <option value="NO">Norway</option>
                    <option value="NP">Nepal</option>
                    <option value="NR">Nauru</option>
                    <option value="NZ">New Zealand</option>
                    <option value="OM">Oman</option>
                    <option value="PA">Panama</option>
                    <option value="PE">Peru</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PH">Philippines</option>
                    <option value="PK">Pakistan</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PW">Palau</option>
                    <option value="PY">Paraguay</option>
                    <option value="QA">Qatar</option>
                    <option value="RO">Romania</option>
                    <option value="RS">Serbia</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SC">Seychelles</option>
                    <option value="SD">Sudan</option>
                    <option value="SE">Sweden</option>
                    <option value="SG">Singapore</option>
                    <option value="SI">Slovenia</option>
                    <option value="SK">Slovakia</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SM">San Marino</option>
                    <option value="SN">Senegal</option>
                    <option value="SO">Somalia</option>
                    <option value="SR">Suriname</option>
                    <option value="ZA">South Africa</option>
                    <option value="SS">South Sudan</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SV">El Salvador</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="SZ">Eswatini</option>
                    <option value="CH">Switzerland</option>
                    <option value="TD">Chad</option>
                    <option value="TG">Togo</option>
                    <option value="TH">Thailand</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TL">Timor - Leste</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TN">Tunisia</option>
                    <option value="TO">Tonga</option>
                    <option value="TR">Turkey</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TV">Tuvalu</option>
                    <option value="TW">Taiwan (Province of China)</option>
                    <option value="UA">Ukraine</option>
                    <option value="UG">Uganda</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">
                      United Kingdom of Great Britain and Northern Ireland
                    </option>
                    <option value="TZ">United Republic of Tanzania</option>
                    <option value="US">United States of America</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="VE">
                      Venezuela (Bolivarian Republic of)
                    </option>
                    <option value="VN">Viet Nam</option>
                    <option value="VU">Vanuatu</option>
                    <option value="WS">Samoa</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label">Province / State</label>
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your province or state."
                    class="form-control"
                    v-model="userInfo.province"
                  />
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label">City</label>
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your city."
                    class="form-control"
                    v-model="userInfo.city"
                  />
                </div>
              </div>
              <div class="mb-3 col-8">
                <label class="form-label">Street Address</label>
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your street address."
                    class="form-control"
                    v-model="userInfo.streetAddress"
                  />
                </div>
              </div>
              <div class="mb-3 col-4">
                <label class="form-label">Postal Code</label>
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="Please enter your postal code."
                    class="form-control"
                    v-model="userInfo.postalCode"
                  />
                </div>
              </div>

              <!-- 公司 -->
              <!-- <div class="mb-3 col-4"></div> -->
            </div>

            <!-- 公司相关属性 -->
            <!-- <div class="row pt-4" v-if="tabNo == 1"></div> -->

            <!-- 更新 -->
            <div class="d-grid mt-5">
              <button
                class="btn btn-primary"
                type="submit"
                title="After verifying that the information is correct, click to submit the updated information."
                @click="updateUserProfile"
                v-if="!submitIng"
              >
                Update Profile
              </button>
              <button class="btn btn-primary" type="button" disabled v-else>
                <span class="spinner-border spinner-border-sm"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clearToken, getToken } from "../api/token.js";
export default {
  data() {
    return {
      tabNo: 0,
      userInfo: {
        email: "",
        cellphone: "",
        phonePrefix: "",
        phoneNumber: "",
        prefix: "",
        gender: "",
        city: "",
        country: "",
        province: "",
        firstName: "",
        middleName: "",
        lastName: "",
        postalCode: "",
        streetAddress: "",
        affiliation: "",
        academicTitle: "",
        position: "",
        primaryResearchFocus: "",
        workEmail: "",
        personalWebsite: "",
      },
      submitIng: false,
    };
  },
  watch: {
    "userInfo.country"(nval) {
      this.userInfo.province = "";
    },
  },
  methods: {
    doLogout() {
      clearToken();
      this.removeStorage("user_profile");
      this.tokenNotice();
      this.$router.push("/login");
    },
    getUserProfile() {
      let token = getToken();
      console.log("token: " + token);
      this.$api.getBizUserInfo().then((resp) => {
        console.log(resp);
        if (resp.code == 200) {
          let ui = resp.data;
          let bui = ui.userExpand;
          this.userInfo.cellphone = ui.cellphone || "";
          if (this.userInfo.cellphone.indexOf("\.") != -1) {
            let cp = this.userInfo.cellphone.split("\.");
            console.log(cp);
            this.userInfo.phonePrefix = cp[0] + ".";
            this.userInfo.phoneNumber = cp[1];
          }
          this.userInfo.email = ui.email || "";
          this.userInfo.prefix = bui.prefix || "";
          this.userInfo.gender = bui.gender || "";
          this.userInfo.city = bui.city || "";
          this.userInfo.country = bui.country || "";
          this.userInfo.firstName = bui.firstName || "";
          this.userInfo.middleName = bui.middleName || "";
          this.userInfo.lastName = bui.lastName || "";
          this.userInfo.postalCode = bui.postalCode || "";
          this.userInfo.streetAddress = bui.streetAddress || "";
          this.userInfo.affiliation = bui.affiliation || "";
          this.userInfo.academicTitle = bui.academicTitle || "";
          this.userInfo.primaryResearchFocus = bui.primaryResearchFocus || "";
          this.userInfo.position = bui.position || "";
          this.userInfo.workEmail = bui.workEmail || "";
          this.userInfo.personalWebsite = bui.personalWebsite || "";

          setTimeout(() => {
            this.userInfo.province = bui.province || "";
            this.setStorage("user_profile", this.userInfo);
          }, 10);
        }
      });
    },
    updateUserProfile() {
      if (this.userInfo.firstName.trim() == "") {
        alert("First name cannot be empty");
        return;
      }
      if (this.userInfo.lastName.trim() == "") {
        alert("Last Name cannot be empty");
        return;
      }
      if (this.userInfo.prefix.trim() == "") {
        alert("Prefix cannot be empty");
        return;
      }
      if (this.userInfo.gender.trim() == "") {
        alert("Gender cannot be empty");
        return;
      }
      if (this.userInfo.affiliation.trim() == "") {
        alert("Affiliation cannot be empty");
        return;
      }
      let ppre = this.userInfo.phonePrefix.trim();
      let pnum = this.userInfo.phoneNumber.trim();
      if (ppre != "" && pnum == "") {
        alert("Please insert phone number");
        return;
      }
      if (ppre == "" && pnum != "") {
        alert("Please select phone IDD code");
        return;
      }
      let cellphone = ppre + pnum;
      this.userInfo.cellphone = cellphone;
      this.submitIng = true;
      this.$api.updateBizUserInfo(this.userInfo).then((resp) => {
        if (resp.code == 200) {
          alert("Update Successful");
          this.setStorage("user_profile", this.userInfo);
        } else {
          alert(resp.msg);
        }
        this.submitIng = false;
      });
    },
  },
  mounted() {
    this.getUserProfile();
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
</style>
