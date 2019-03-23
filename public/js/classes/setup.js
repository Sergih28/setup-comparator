class Setup {
  constructor(setupData) {
    this._setupData = setupData;
    this._setupsTab = new SetupsTab();
    this._generalTab = new GeneralTab();
    this._suspensionTab = new SuspensionTab();
    this._chassisTab = new ChassisTab();
    this._advancedTab = new AdvancedTab();

    this.bindDataToVariables();
    this.showData();
  }

  removeWeirdChars(string, breakLine = "<br>") {
    var output = "";
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) <= 127) {
        output += string.charAt(i);
      } else output += breakLine;
    }
    return output;
  }

  setValues(tab, prop, line, separator, pitstop = false, notes = false) {
    const _tab = "_" + tab;
    const _prop = "_" + prop;
    if (notes) {
      let val = line.substring(7, line.length - 1);
      val = this.removeWeirdChars(val);

      // val.replace(/[^a-zA-Z0-9]/g, "sssssssss");
      this[_tab][_prop] += val;
      return true;
    }
    if (line.startsWith("//")) line = line.substring(2, line.length);
    if (line.includes("//")) line = line.replace("//", separator);
    let val = line.split(separator);
    pitstop ? (val = val[val.length - 2]) : (val = val[val.length - 1]);
    // notes ? (this[_tab][_prop] += val) : ;
    this[_tab][_prop] = val;
    // $("#list2").append(
    //   "<li><strong>" + dic[prop] + "</strong>: " + this[_tab][_prop] + "</li>"
    // );
  }

  bindDataToVariables() {
    var self = this;
    // $("#list2").append("<li>" + self.fileName + "</li>");
    let splitted = this._setupData.split("\n");
    let FRFLRRRL = "";
    $.each(splitted, function(key, value) {
      if (value.startsWith("[")) {
        FRFLRRRL = value.substring(1, value.length - 2);
      }

      // #region SETUPS TAB
      if (value.includes("FuelSetting")) {
        self.setValues("setupsTab", "FuelSetting", value, "=");
        return true;
      }

      if (value.includes("NumPitstopsSetting")) {
        self.setValues("setupsTab", "NumPitstopsSetting", value, "=");
        return true;
      }

      if (value.includes("Pitstop1Setting")) {
        self.setValues("setupsTab", "Pitstop1Setting", value, "=", true);
        return true;
      }

      if (value.includes("Pitstop2Setting")) {
        self.setValues("setupsTab", "Pitstop2Setting", value, "=", true);
        return true;
      }

      if (value.includes("Pitstop3Setting")) {
        self.setValues("setupsTab", "Pitstop3Setting", value, "=", true);
        return true;
      }

      if (value.startsWith("Notes=")) {
        self.setValues("setupsTab", "Notes", value, "=", false, true);
        return true;
      }
      // #endregion

      // #region GENERAL TAB
      if (value.includes("Gear1Setting")) {
        self.setValues("generalTab", "Gear1Setting", value, "//");
        return true;
      }

      if (value.includes("Gear2Setting")) {
        self.setValues("generalTab", "Gear2Setting", value, "//");
        return true;
      }

      if (value.includes("Gear3Setting")) {
        self.setValues("generalTab", "Gear3Setting", value, "//");
        return true;
      }

      if (value.includes("Gear4Setting")) {
        self.setValues("generalTab", "Gear4Setting", value, "//");
        return true;
      }

      if (value.includes("Gear5Setting")) {
        self.setValues("generalTab", "Gear5Setting", value, "//");
        return true;
      }

      if (value.includes("Gear6Setting")) {
        self.setValues("generalTab", "Gear6Setting", value, "//");
        return true;
      }

      if (value.includes("Gear7Setting")) {
        self.setValues("generalTab", "Gear7Setting", value, "//");
        return true;
      }

      if (value.includes("Gear8Setting")) {
        self.setValues("generalTab", "Gear8Setting", value, "//");
        return true;
      }

      if (value.includes("FinalDriveSetting")) {
        self.setValues("generalTab", "FinalDriveSetting", value, "=");
        return true;
      }

      if (value.includes("ReverseSetting")) {
        self.setValues("generalTab", "ReverseSetting", value, "=");
        return true;
      }

      if (value.includes("SteerLockSetting")) {
        self.setValues("generalTab", "SteerLockSetting", value, "=");
        return true;
      }

      if (value.includes("DiffPumpSetting")) {
        self.setValues("generalTab", "DiffPumpSetting", value, "=");
        return true;
      }

      if (value.includes("DiffPowerSetting")) {
        self.setValues("generalTab", "DiffPowerSetting", value, "=");
        return true;
      }

      if (value.includes("DiffCoastSetting")) {
        self.setValues("generalTab", "DiffCoastSetting", value, "=");
        return true;
      }

      if (value.includes("DiffPreloadSetting")) {
        self.setValues("generalTab", "DiffPreloadSetting", value, "=");
        return true;
      }

      if (value.includes("FWSetting")) {
        self.setValues("generalTab", "FWSetting", value, "=");
        return true;
      }

      if (value.includes("RWSetting")) {
        self.setValues("generalTab", "RWSetting", value, "=");
        return true;
      }

      if (value.includes("RevLimitSetting")) {
        self.setValues("generalTab", "RevLimitSetting", value, "=");
        return true;
      }

      if (value.includes("EngineMixtureSetting")) {
        self.setValues("generalTab", "EngineMixtureSetting", value, "=");
        return true;
      }

      if (value.includes("EngineBoostSetting")) {
        self.setValues("generalTab", "EngineBoostSetting", value, "=");
        return true;
      }

      if (value.includes("EngineBrakingMapSetting")) {
        self.setValues("generalTab", "EngineBrakingMapSetting", value, "=");
        return true;
      }

      if (value.includes("RadiatorSetting")) {
        self.setValues("generalTab", "RadiatorSetting", value, "=");
        return true;
      }
      // #endregion

      // #region SUSPENSION TAB
      if (value.includes("Front3rdPackerSetting")) {
        self.setValues("suspensionTab", "Front3rdPackerSetting", value, "=");
        return true;
      }

      if (value.includes("Front3rdSpringSetting")) {
        self.setValues("suspensionTab", "Front3rdSpringSetting", value, "=");
        return true;
      }

      if (value.includes("Front3rdSlowBumpSetting")) {
        self.setValues("suspensionTab", "Front3rdSlowBumpSetting", value, "=");
        return true;
      }

      if (value.includes("Front3rdFastBumpSetting")) {
        self.setValues("suspensionTab", "Front3rdFastBumpSetting", value, "=");
        return true;
      }

      if (value.includes("Front3rdSlowReboundSetting")) {
        self.setValues(
          "suspensionTab",
          "Front3rdSlowReboundSetting",
          value,
          "="
        );
        return true;
      }

      if (value.includes("Front3rdFastReboundSetting")) {
        self.setValues(
          "suspensionTab",
          "Front3rdFastReboundSetting",
          value,
          "="
        );
        return true;
      }

      if (value.includes("Rear3rdPackerSetting")) {
        self.setValues("suspensionTab", "Rear3rdPackerSetting", value, "=");
        return true;
      }

      if (value.includes("Rear3rdSpringSetting")) {
        self.setValues("suspensionTab", "Rear3rdSpringSetting", value, "=");
        return true;
      }

      if (value.includes("Rear3rdSlowBumpSetting")) {
        self.setValues("suspensionTab", "Rear3rdSlowBumpSetting", value, "=");
        return true;
      }

      if (value.includes("Rear3rdFastBumpSetting")) {
        self.setValues("suspensionTab", "Rear3rdFastBumpSetting", value, "=");
        return true;
      }

      if (value.includes("Rear3rdSlowReboundSetting")) {
        self.setValues(
          "suspensionTab",
          "Rear3rdSlowReboundSetting",
          value,
          "="
        );
        return true;
      }

      if (value.includes("Rear3rdFastReboundSetting")) {
        self.setValues(
          "suspensionTab",
          "Rear3rdFastReboundSetting",
          value,
          "="
        );
        return true;
      }

      if (value.includes("SpringSetting")) {
        self.setValues("suspensionTab", "SpringSetting" + FRFLRRRL, value, "=");
        return true;
      }

      if (value.includes("SlowBumpSetting")) {
        self.setValues(
          "suspensionTab",
          "SlowBumpSetting" + FRFLRRRL,
          value,
          "="
        );
        return true;
      }

      if (value.includes("SlowReboundSetting")) {
        self.setValues(
          "suspensionTab",
          "SlowReboundSetting" + FRFLRRRL,
          value,
          "="
        );
        return true;
      }

      if (value.includes("FastBumpSetting")) {
        self.setValues(
          "suspensionTab",
          "FastBumpSetting" + FRFLRRRL,
          value,
          "="
        );
        return true;
      }

      if (value.includes("FastReboundSetting")) {
        self.setValues(
          "suspensionTab",
          "FastReboundSetting" + FRFLRRRL,
          value,
          "="
        );
        return true;
      }

      if (value.includes("PackerSetting")) {
        self.setValues("suspensionTab", "PackerSetting" + FRFLRRRL, value, "=");
        return true;
      }

      if (value.includes("RideHeightSetting")) {
        self.setValues(
          "suspensionTab",
          "RideHeightSetting" + FRFLRRRL,
          value,
          "="
        );
        return true;
      }

      if (value.includes("FrontAntiSwaySetting")) {
        self.setValues("suspensionTab", "FrontAntiSwaySetting", value, "=");
        return true;
      }

      if (value.includes("RearAntiSwaySetting")) {
        self.setValues("suspensionTab", "RearAntiSwaySetting", value, "=");
        return true;
      }

      if (value.includes("FrontToeInSetting")) {
        self.setValues("suspensionTab", "FrontToeInSetting", value, "=");
        return true;
      }

      if (value.includes("RearToeInSetting")) {
        self.setValues("suspensionTab", "RearToeInSetting", value, "=");
        return true;
      }

      // #endregion

      // #region CHASSIS TAB
      if (value.includes("LeftCasterSetting")) {
        self.setValues("chassisTab", "LeftCasterSetting", value, "=");
        return true;
      }

      if (value.includes("RightCasterSetting")) {
        self.setValues("chassisTab", "RightCasterSetting", value, "=");
        return true;
      }

      if (value.includes("CGRightSetting")) {
        self.setValues("chassisTab", "CGRightSetting", value, "=");
        return true;
      }

      if (value.includes("CGRearSetting")) {
        self.setValues("chassisTab", "CGRearSetting", value, "=");
        return true;
      }
      // #endregion

      // #region ADVANCED TAB
      if (value.includes("Symmetric")) {
        let value2;
        value.includes("0") ? (value2 = "✗") : (value2 = "✓");
        self.setValues("advancedTab", "Symmetric", value2, "=");
        self.setValues("suspensionTab", "Symmetric", value2, "=");
        return true;
      }

      if (value.startsWith("PressureSetting")) {
        self.setValues(
          "advancedTab",
          "PressureSetting" + FRFLRRRL,
          value,
          "//"
        );
        return true;
      }

      if (value.includes("FrontTireCompoundSetting")) {
        self.setValues("advancedTab", "FrontTireCompoundSetting", value, "=");
        return true;
      }

      if (value.includes("RearTireCompoundSetting")) {
        self.setValues("advancedTab", "RearTireCompoundSetting", value, "=");
        return true;
      }

      if (value.includes("CamberSetting")) {
        self.setValues("advancedTab", "CamberSetting" + FRFLRRRL, value, "=");
        return true;
      }

      if (value.includes("RearBrakeSetting")) {
        self.setValues("advancedTab", "RearBrakeSetting", value, "=");
        return true;
      }

      if (value.includes("BrakeDuctSetting")) {
        self.setValues("advancedTab", "BrakeDuctSetting", value, "=");
        return true;
      }

      if (value.includes("BrakePressureSetting")) {
        self.setValues("advancedTab", "BrakePressureSetting", value, "=");
        return true;
      }

      if (value.includes("BrakeDiscSetting")) {
        self.setValues(
          "advancedTab",
          "BrakeDiscSetting" + FRFLRRRL,
          value,
          "="
        );
        return true;
      }

      // #endregion
    });
  }

  showData() {
    // var methods = Object.getOwnPropertyNames(Setup.prototype);
    // const obj = Object.values(Setup);
    // for (const val of Object.values(obj)) {
    //   // use val
    //   console.log(val);
    // }
    // // Object.prototype.hasOwnProperty.call(Setup, key);
    // console.log(methods);
    // $.each(methods, function(key, value) {
    //   if (value.startsWith("get"))
    //     console.log("Method get: " + value.substr(3, value.length));
    // });
    //Alternative solution would be to get this list, and filter only through getters
    //and subst the "get" at the start, and I have a list of the props, as all props
    //will have a getter
  }

  // Adding a method to the constructor
  showSetupOnConsole() {
    // console.log(this.setupData);
  }

  showSetupByTabs() {
    // let keys = Object.keys(this._generalTab);
    // let values = Object.values(this._generalTab);
    // let entries = Object.entries(this._generalTab);
    // // console.log(keys);
    // // console.log(values);
    // // console.log(entries);

    // for (const [prop, val] of entries) {
    //   $("#GENERAL TAB").append(
    //     "<li><strong>" +
    //       dic[prop.substring(1, prop.length)] +
    //       "</strong>: " +
    //       val +
    //       "</li>"
    //   );
    // }
    this.showSetupTab("_setups");
    this.showSetupTab("_general");
    this.showSetupTab("_suspension");
    this.showSetupTab("_chassis");
    this.showSetupTab("_advanced");
  }

  showSetupTab(tabvar) {
    const title = tabvar.substring(1, tabvar.length).toUpperCase();
    tabvar += "Tab";
    let entries = Object.entries(this[tabvar]);
    // console.log(keys);
    // console.log(values);
    // console.log(entries);

    $("#" + title + "_TAB").append(
      "<li><strong style='font-size: 25px;'>" + title + "</strong></li>"
    );

    for (const [prop, val] of entries) {
      $("#" + title + "_TAB").append(
        "<li><strong>" +
          dic[prop.substring(1, prop.length)] +
          "</strong>: " +
          val +
          "</li>"
      );
    }
  }
}

class SetupsTab {
  constructor() {
    this._FuelSetting = "";
    this._NumPitstopsSetting = "";
    this._Pitstop1Setting = "";
    this._Pitstop2Setting = "";
    this._Pitstop3Setting = "";
    this._Notes = "";
  }

  get FuelSetting() {
    return this._FuelSetting;
  }

  get NumPitstopsSetting() {
    return this._NumPitstopsSetting;
  }

  get Pitstop1Setting() {
    return this._Pitstop1Setting;
  }

  get Pitstop2Setting() {
    return this._Pitstop2Setting;
  }

  get Pitstop3Setting() {
    return this._Pitstop3Setting;
  }

  get Notes() {
    return this._Notes;
  }

  set FuelSetting(val) {
    this._FuelSetting = val;
  }

  set NumPitstopsSetting(val) {
    this._NumPitstopsSetting = val;
  }

  set Pitstop1Setting(val) {
    this._Pitstop1Setting = val;
  }

  set Pitstop2Setting(val) {
    this._Pitstop2Setting = val;
  }

  set Pitstop3Setting(val) {
    this._Pitstop3Setting = val;
  }

  set Notes(val) {
    this._Notes = val;
  }
}

class GeneralTab {
  constructor() {
    this._Gear1Setting = "";
    this._Gear2Setting = "";
    this._Gear3Setting = "";
    this._Gear4Setting = "";
    this._Gear5Setting = "";
    this._Gear6Setting = "";
    this._Gear7Setting = "";
    this._Gear8Setting = "";
    this._FinalDriveSetting = "";
    this._ReverseSetting = "";
    this._SteerLockSetting = "";
    this._DiffPumpSetting = "";
    this._DiffPowerSetting = "";
    this._DiffCoastSetting = "";
    this._DiffPreloadSetting = "";
    this._FWSetting = "";
    this._RWSetting = "";
    this._RevLimitSetting = "";
    this._EngineMixtureSetting = "";
    this._EngineBoostSetting = "";
    this._EngineBrakingMapSetting = "";
    this._RadiatorSetting = "";
    this._Gear8Setting = "";
    this._Gear8Setting = "";
    this._Gear8Setting = "";
    this._Gear8Setting = "";
    this._Gear8Setting = "";
    this._Gear8Setting = "";
  }

  get Gear1Setting() {
    return this._Gear1Setting;
  }

  get Gear2Setting() {
    return this._Gear2Setting;
  }

  get Gear3Setting() {
    return this._Gear3Setting;
  }

  get Gear4Setting() {
    return this._Gear4Setting;
  }

  get Gear5Setting() {
    return this._Gear5Setting;
  }

  get Gear6Setting() {
    return this._Gear6Setting;
  }

  get Gear7Setting() {
    return this._Gear7Setting;
  }

  get Gear8Setting() {
    return this._Gear8Setting;
  }

  get FinalDriveSetting() {
    return this._FinalDriveSetting;
  }

  get ReverseSetting() {
    return this._ReverseSetting;
  }

  get SteerLockSetting() {
    return this._SteerLockSetting;
  }

  get DiffPumpSetting() {
    return this._DiffPumpSetting;
  }

  get DiffPowerSetting() {
    return this._DiffPowerSetting;
  }

  get DiffCoastSetting() {
    return this._DiffCoastSetting;
  }

  get DiffPreloadSetting() {
    return this._DiffPreloadSetting;
  }

  get FWSetting() {
    return this._FWSetting;
  }

  get RWSetting() {
    return this._RWSetting;
  }

  get RevLimitSetting() {
    return this._RevLimitSetting;
  }

  get EngineBoostSetting() {
    return this._EngineBoostSetting;
  }

  get EngineBrakingMapSetting() {
    return this._EngineBrakingMapSetting;
  }

  get EngineMixtureSetting() {
    return this._EngineMixtureSetting;
  }

  set Gear1Setting(val) {
    this._Gear1Setting = val;
  }

  set Gear2Setting(val) {
    this._Gear2Setting = val;
  }

  set Gear3Setting(val) {
    this._Gear3Setting = val;
  }

  set Gear4Setting(val) {
    this._Gear4Setting = val;
  }

  set Gear5Setting(val) {
    this._Gear5Setting = val;
  }

  set Gear6Setting(val) {
    this._Gear6Setting = val;
  }

  set Gear7Setting(val) {
    this._Gear7Setting = val;
  }

  set Gear8Setting(val) {
    this._Gear8Setting = val;
  }

  set FinalDriveSetting(val) {
    this._FinalDriveSetting = val;
  }

  set ReverseSetting(val) {
    this._ReverseSetting = val;
  }

  set SteerLockSetting(val) {
    this._SteerLockSetting = val;
  }

  set DiffPumpSetting(val) {
    this._DiffPumpSetting = val;
  }

  set DiffPowerSetting(val) {
    this._DiffPowerSetting = val;
  }

  set DiffCoastSetting(val) {
    this._DiffCoastSetting = val;
  }

  set DiffPreloadSetting(val) {
    this._DiffPreloadSetting = val;
  }

  set FWSetting(val) {
    this._FWSetting = val;
  }

  set RWSetting(val) {
    this._RWSetting = val;
  }

  set RevLimitSetting(val) {
    this._RevLimitSetting = val;
  }

  set EngineMixtureSetting(val) {
    this._EngineMixtureSetting = val;
  }

  set EngineBoostSetting(val) {
    this._EngineBoostSetting = val;
  }

  set EngineBrakingMapSetting(val) {
    this._EngineBrakingMapSetting = val;
  }

  get RadiatorSetting() {
    return this._RadiatorSetting;
  }

  set RadiatorSetting(val) {
    this._RadiatorSetting = val;
  }
}

class SuspensionTab {
  constructor() {
    this._Symmetric = "";
    this._Front3rdPackerSetting = "";
    this._Front3rdSpringSetting = "";
    this._Front3rdSlowBumpSetting = "";
    this._Front3rdFastBumpSetting = "";
    this._Front3rdSlowReboundSetting = "";
    this._Front3rdFastReboundSetting = "";
    this._Rear3rdPackerSetting = "";
    this._Rear3rdSpringSetting = "";
    this._Rear3rdSlowBumpSetting = "";
    this._Rear3rdFastBumpSetting = "";
    this._Rear3rdSlowReboundSetting = "";
    this._Rear3rdFastReboundSetting = "";
    this._SpringSettingFRONTLEFT = "";
    this._SpringSettingFRONTRIGHT = "";
    this._SpringSettingREARLEFT = "";
    this._SpringSettingREARRIGHT = "";
    this._SlowBumpSettingFRONTLEFT = "";
    this._SlowBumpSettingFRONTRIGHT = "";
    this._SlowBumpSettingREARLEFT = "";
    this._SlowBumpSettingREARRIGHT = "";
    this._SlowReboundSettingFRONTLEFT = "";
    this._SlowReboundSettingFRONTRIGHT = "";
    this._SlowReboundSettingREARLEFT = "";
    this._SlowReboundSettingREARRIGHT = "";
    this._FastBumpSettingFRONTLEFT = "";
    this._FastBumpSettingFRONTRIGHT = "";
    this._FastBumpSettingREARLEFT = "";
    this._FastBumpSettingREARRIGHT = "";
    this._FastReboundSettingFRONTLEFT = "";
    this._FastReboundSettingFRONTRIGHT = "";
    this._FastReboundSettingREARLEFT = "";
    this._FastReboundSettingREARRIGHT = "";
    this._PackerSettingFRONTLEFT = "";
    this._PackerSettingFRONTRIGHT = "";
    this._PackerSettingREARLEFT = "";
    this._PackerSettingREARRIGHT = "";
    this._RideHeightSettingFRONTLEFT = "";
    this._RideHeightSettingFRONTRIGHT = "";
    this._RideHeightSettingREARLEFT = "";
    this._RideHeightSettingREARRIGHT = "";
    this._FrontAntiSwaySetting = "";
    this._RearAntiSwaySetting = "";
    this._FrontToeInSetting = "";
    this._RearToeInSetting = "";
  }

  get Symmetric() {
    return this._Symmetric;
  }

  get Front3rdPackerSetting() {
    return this._Front3rdPackerSetting;
  }

  get Front3rdSpringSetting() {
    return this._Front3rdSpringSetting;
  }

  get Front3rdSlowBumpSetting() {
    return this._Front3rdSlowBumpSetting;
  }

  get Front3rdFastBumpSetting() {
    return this._Front3rdFastBumpSetting;
  }

  get Front3rdSlowReboundSetting() {
    return this._Front3rdSlowReboundSetting;
  }

  get Front3rdFastReboundSetting() {
    return this._Front3rdFastReboundSetting;
  }

  get Rear3rdPackerSetting() {
    return this._Rear3rdPackerSetting;
  }

  get Rear3rdSpringSetting() {
    return this._Rear3rdSpringSetting;
  }

  get Rear3rdSlowBumpSetting() {
    return this._Rear3rdSlowBumpSetting;
  }

  get Rear3rdFastBumpSetting() {
    return this._Rear3rdFastBumpSetting;
  }

  get Rear3rdSlowReboundSetting() {
    return this._Rear3rdSlowReboundSetting;
  }

  get Rear3rdFastReboundSetting() {
    return this._Rear3rdFastReboundSetting;
  }

  get SpringSettingFRONTLEFT() {
    return this._SpringSettingFRONTLEFT;
  }

  get SpringSettingFRONTRIGHT() {
    return this._SpringSettingFRONTRIGHT;
  }

  get SpringSettingREARLEFT() {
    return this._SpringSettingREARLEFT;
  }

  get SpringSettingREARRIGHT() {
    return this._SpringSettingREARRIGHT;
  }

  get SlowBumpSettingFRONTLEFT() {
    return this._SlowBumpSettingFRONTLEFT;
  }

  get SlowBumpSettingFRONTRIGHT() {
    return this._SlowBumpSettingFRONTRIGHT;
  }

  get SlowBumpSettingREARLEFT() {
    return this._SlowBumpSettingREARLEFT;
  }

  get SlowBumpSettingREARRIGHT() {
    return this._SlowBumpSettingREARRIGHT;
  }

  get SlowReboundSettingFRONTLEFT() {
    return this._SlowReboundSettingFRONTLEFT;
  }

  get SlowReboundSettingFRONTRIGHT() {
    return this._SlowReboundSettingFRONTRIGHT;
  }

  get SlowReboundSettingREARLEFT() {
    return this._SlowReboundSettingREARLEFT;
  }

  get SlowReboundSettingREARRIGHT() {
    return this._SlowReboundSettingREARRIGHT;
  }

  get FastBumpSettingFRONTLEFT() {
    return this._FastBumpSettingFRONTLEFT;
  }

  get FastBumpSettingFRONTRIGHT() {
    return this._FastBumpSettingFRONTRIGHT;
  }

  get FastBumpSettingREARLEFT() {
    return this._FastBumpSettingREARLEFT;
  }

  get FastBumpSettingREARRIGHT() {
    return this._FastBumpSettingREARRIGHT;
  }

  get FastReboundSettingFRONTLEFT() {
    return this._FastReboundSettingFRONTLEFT;
  }

  get FastReboundSettingFRONTRIGHT() {
    return this._FastReboundSettingFRONTRIGHT;
  }

  get FastReboundSettingREARLEFT() {
    return this._FastReboundSettingREARLEFT;
  }

  get FastReboundSettingREARRIGHT() {
    return this._FastReboundSettingREARRIGHT;
  }

  get PackerSettingFRONTLEFT() {
    return this._PackerSettingFRONTLEFT;
  }

  get PackerSettingFRONTRIGHT() {
    return this._PackerSettingFRONTRIGHT;
  }

  get PackerSettingREARLEFT() {
    return this._PackerSettingREARLEFT;
  }

  get PackerSettingREARRIGHT() {
    return this._PackerSettingREARRIGHT;
  }

  get RideHeightSettingFRONTLEFT() {
    return this._RideHeightSettingFRONTLEFT;
  }

  get RideHeightSettingFRONTRIGHT() {
    return this._RideHeightSettingFRONTRIGHT;
  }

  get RideHeightSettingREARLEFT() {
    return this._RideHeightSettingREARLEFT;
  }

  get RideHeightSettingREARRIGHT() {
    return this._RideHeightSettingREARRIGHT;
  }

  get FrontAntiSwaySetting() {
    return this._FrontAntiSwaySetting;
  }

  get RearAntiSwaySetting() {
    return this._RearAntiSwaySetting;
  }

  get FrontToeInSetting() {
    return this._FrontToeInSetting;
  }

  get RearToeInSetting() {
    return this._RearToeInSetting;
  }

  set Symmetric(val) {
    this._Symmetric = val;
  }

  set Front3rdPackerSetting(val) {
    this._Front3rdPackerSetting = val;
  }

  set Front3rdSpringSetting(val) {
    this._Front3rdSpringSetting = val;
  }

  set Front3rdSlowBumpSetting(val) {
    this._Front3rdSlowBumpSetting = val;
  }

  set Front3rdFastBumpSetting(val) {
    this._Front3rdFastBumpSetting = val;
  }

  set Front3rdSlowReboundSetting(val) {
    this._Front3rdSlowReboundSetting = val;
  }

  set Front3rdFastReboundSetting(val) {
    this._Front3rdFastReboundSetting = val;
  }

  set Rear3rdPackerSetting(val) {
    this._Rear3rdPackerSetting = val;
  }

  set Rear3rdSpringSetting(val) {
    this._Rear3rdSpringSetting = val;
  }

  set Rear3rdSlowBumpSetting(val) {
    this._Rear3rdSlowBumpSetting = val;
  }

  set Rear3rdFastBumpSetting(val) {
    this._Rear3rdFastBumpSetting = val;
  }

  set Rear3rdSlowReboundSetting(val) {
    this._Rear3rdSlowReboundSetting = val;
  }

  set Rear3rdFastReboundSetting(val) {
    this._Rear3rdFastReboundSetting = val;
  }

  set SpringSettingFRONTLEFT(val) {
    this._SpringSettingFRONTLEFT = val;
  }

  set SpringSettingFRONTRIGHT(val) {
    this._SpringSettingFRONTRIGHT = val;
  }

  set SpringSettingREARLEFT(val) {
    this._SpringSettingREARLEFT = val;
  }

  set SpringSettingREARRIGHT(val) {
    this._SpringSettingREARRIGHT = val;
  }

  set SlowBumpSettingFRONTLEFT(val) {
    this._SlowBumpSettingFRONTLEFT = val;
  }

  set SlowBumpSettingFRONTRIGHT(val) {
    this._SlowBumpSettingFRONTRIGHT = val;
  }

  set SlowBumpSettingREARLEFT(val) {
    this._SlowBumpSettingREARLEFT = val;
  }

  set SlowBumpSettingREARRIGHT(val) {
    this._SlowBumpSettingREARRIGHT = val;
  }

  set SlowReboundSettingFRONTLEFT(val) {
    this._SlowReboundSettingFRONTLEFT = val;
  }

  set SlowReboundSettingFRONTRIGHT(val) {
    this._SlowReboundSettingFRONTRIGHT = val;
  }

  set SlowReboundSettingREARLEFT(val) {
    this._SlowReboundSettingREARLEFT = val;
  }

  set SlowReboundSettingREARRIGHT(val) {
    this._SlowReboundSettingREARRIGHT = val;
  }

  set FastBumpSettingFRONTLEFT(val) {
    this._FastBumpSettingFRONTLEFT = val;
  }

  set FastBumpSettingFRONTRIGHT(val) {
    this._FastBumpSettingFRONTRIGHT = val;
  }

  set FastBumpSettingREARLEFT(val) {
    this._FastBumpSettingREARLEFT = val;
  }

  set FastBumpSettingREARRIGHT(val) {
    this._FastBumpSettingREARRIGHT = val;
  }

  set FastReboundSettingFRONTLEFT(val) {
    this._FastReboundSettingFRONTLEFT = val;
  }

  set FastReboundSettingFRONTRIGHT(val) {
    this._FastReboundSettingFRONTRIGHT = val;
  }

  set FastReboundSettingREARLEFT(val) {
    this._FastReboundSettingREARLEFT = val;
  }

  set FastReboundSettingREARRIGHT(val) {
    this._FastReboundSettingREARRIGHT = val;
  }

  set PackerSettingFRONTLEFT(val) {
    this._PackerSettingFRONTLEFT = val;
  }

  set PackerSettingFRONTRIGHT(val) {
    this._PackerSettingFRONTRIGHT = val;
  }

  set PackerSettingREARLEFT(val) {
    this._PackerSettingREARLEFT = val;
  }

  set PackerSettingREARRIGHT(val) {
    this._PackerSettingREARRIGHT = val;
  }

  set RideHeightSettingFRONTLEFT(val) {
    this._RideHeightSettingFRONTLEFT = val;
  }

  set RideHeightSettingFRONTRIGHT(val) {
    this._RideHeightSettingFRONTRIGHT = val;
  }

  set RideHeightSettingREARLEFT(val) {
    this._RideHeightSettingREARLEFT = val;
  }

  set RideHeightSettingREARRIGHT(val) {
    this._RideHeightSettingREARRIGHT = val;
  }

  set FrontAntiSwaySetting(val) {
    this._FrontAntiSwaySetting = val;
  }

  set RearAntiSwaySetting(val) {
    this._RearAntiSwaySetting = val;
  }

  set FrontToeInSetting(val) {
    this._FrontToeInSetting = val;
  }

  set RearToeInSetting(val) {
    this._RearToeInSetting = val;
  }
}

class ChassisTab {
  constructor() {
    this._LeftCasterSetting = "";
    this._RightCasterSetting = "";
    this._CGRightSetting = "";
    this._CGRearSetting = "";
  }

  get LeftCasterSetting() {
    return this._LeftCasterSetting;
  }

  get RightCasterSetting() {
    return this._RightCasterSetting;
  }

  get CGRightSetting() {
    return this._CGRightSetting;
  }

  get CGRearSetting() {
    return this._CGRearSetting;
  }

  set LeftCasterSetting(val) {
    this._LeftCasterSetting = val;
  }

  set RightCasterSetting(val) {
    this._RightCasterSetting = val;
  }

  set CGRightSetting(val) {
    this._CGRightSetting = val;
  }

  set CGRearSetting(val) {
    this._CGRearSetting = val;
  }
}

class AdvancedTab {
  constructor() {
    this._Symmetric = "";
    this._PressureSettingFRONTLEFT = "";
    this._PressureSettingFRONTRIGHT = "";
    this._PressureSettingREARLEFT = "";
    this._PressureSettingREARRIGHT = "";
    this._FrontTireCompoundSetting = "";
    this._RearTireCompoundSetting = "";
    this._CamberSettingFRONTLEFT = "";
    this._CamberSettingFRONTRIGHT = "";
    this._CamberSettingREARLEFT = "";
    this._CamberSettingREARRIGHT = "";
    this._RearBrakeSetting = "";
    this._BrakeDuctSetting = "";
    this._BrakePressureSetting = "";
    this._BrakeDiscSettingFRONTLEFT = "";
    this._BrakeDiscSettingFRONTRIGHT = "";
    this._BrakeDiscSettingREARLEFT = "";
    this._BrakeDiscSettingREARRIGHT = "";
  }

  get Symmetric() {
    return this._Symmetric;
  }

  get PressureSettingFRONTLEFT() {
    return this._PressureSettingFRONTLEFT;
  }

  get PressureSettingFRONTRIGHT() {
    return this._PressureSettingFRONTRIGHT;
  }

  get PressureSettingREARLEFT() {
    return this._PressureSettingREARLEFT;
  }

  get PressureSettingREARRIGHT() {
    return this._PressureSettingREARRIGHT;
  }

  get FrontTireCompoundSetting() {
    return this._FrontTireCompoundSetting;
  }

  get RearTireCompoundSetting() {
    return this._RearTireCompoundSetting;
  }

  get CamberSettingFRONTLEFT() {
    return this._CamberSettingFL;
  }

  get CamberSettingFRONTRIGHT() {
    return this._CamberSettingFR;
  }

  get CamberSettingREARLEFT() {
    return this._CamberSettingRL;
  }

  get CamberSettingREARRIGHT() {
    return this._CamberSettingRR;
  }

  get RearBrakeSetting() {
    return this._RearBrakeSetting;
  }

  get BrakeDuctSetting() {
    return this._BrakeDuctSetting;
  }

  get BrakePressureSetting() {
    return this._BrakePressureSetting;
  }

  get BrakeDiscSettingFL() {
    return this._BrakeDiscSettingFRONTLEFT;
  }

  get BrakeDiscSettingFR() {
    return this._BrakeDiscSettingFRONTRIGHT;
  }

  get BrakeDiscSettingRL() {
    return this._BrakeDiscSettingREARLEFT;
  }

  get BrakeDiscSettingRR() {
    return this._BrakeDiscSettingREARRIGHT;
  }

  set Symmetric(val) {
    this._Symmetric = val;
  }

  set PressureSettingFRONTLEFT(val) {
    this._PressureSettingFRONTLEFT = val;
  }

  set PressureSettingFRONTRIGHT(val) {
    this._PressureSettingFRONTRIGHT = val;
  }

  set PressureSettingREARLEFT(val) {
    this._PressureSettingREARLEFT = val;
  }

  set PressureSettingREARRIGHT(val) {
    this._PressureSettingREARRIGHT = val;
  }

  set FrontTireCompoundSetting(val) {
    this._FrontTireCompoundSetting = val;
  }

  set RearTireCompoundSetting(val) {
    this._RearTireCompoundSetting = val;
  }

  set CamberSettingFRONTLEFT(val) {
    this._CamberSettingFL = val;
  }

  set CamberSettingFRONTRIGHT(val) {
    this._CamberSettingFR = val;
  }

  set CamberSettingREARLEFT(val) {
    this._CamberSettingRL = val;
  }

  set CamberSettingREARRIGHT(val) {
    this._CamberSettingRR = val;
  }

  set RearBrakeSetting(val) {
    this._RearBrakeSetting = val;
  }

  set BrakeDuctSetting(val) {
    this._BrakeDuctSetting = val;
  }

  set BrakePressureSetting(val) {
    this._BrakePressureSetting = val;
  }

  set BrakeDiscSettingFRONTLEFT(val) {
    this._BrakeDiscSettingFL = val;
  }

  set BrakeDiscSettingFRONTRIGHT(val) {
    this._BrakeDiscSettingFR = val;
  }

  set BrakeDiscSettingREARLEFT(val) {
    this._BrakeDiscSettingRL = val;
  }

  set BrakeDiscSettingREARRIGHT(val) {
    this._BrakeDiscSettingRR = val;
  }
}
