class Setup {
  constructor(setupData) {
    this._setupData = setupData;
    this._setupsTab;
    this._generalTab = new GeneralTab();
    this._suspensionTab;
    this._chassisTab;
    this._advancedTab = new AdvancedTab();

    this.bindDataToVariables();
    this.showData();
  }

  setValues(tab, prop, line, separator) {
    const _tab = "_" + tab;
    const _prop = "_" + prop;
    if (line.startsWith("//")) line = line.substring(2, line.length);
    if (line.includes("//")) line = line.replace("//", separator);
    let val = line.split(separator);
    this[_tab][_prop] = val[val.length - 1];
    $("#list2").append(
      "<li><strong>" + dic[prop] + "</strong>: " + this[_tab][_prop] + "</li>"
    );
  }

  bindDataToVariables() {
    var self = this;
    // $("#list2").append("<li>" + self.fileName + "</li>");
    let splitted = this._setupData.split("\n");
    let FRFLRRRL = "";
    $.each(splitted, function(key, value) {
      if (value.startsWith("Notes=")) {
        // fill notes

        return true;
      } else if (value.startsWith("[")) {
        FRFLRRRL = value.substring(1, value.length - 2);
      }

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

      // #region ADVANCED TAB
      if (value.includes("Symmetric")) {
        let value2;
        value.includes("0") ? (value2 = "✗") : (value2 = "✓");
        self.setValues("generalTab", "Symmetric", value2, "=");
        self.setValues("advancedTab", "Symmetric", value2, "=");
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

      // #region SUSPENSION TAB

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

class SuspensionTab {
  constructor() {
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
  }

  get _Front3rdPackerSetting() {
    return this._Front3rdPackerSetting;
  }

  get _Front3rdSpringSetting() {
    return this._Front3rdSpringSetting;
  }

  get _Front3rdSlowBumpSetting() {
    return this._Front3rdSlowBumpSetting;
  }

  get _Front3rdFastBumpSetting() {
    return this._Front3rdFastBumpSetting;
  }

  get _Front3rdSlowReboundSetting() {
    return this._Front3rdSlowReboundSetting;
  }

  get _Front3rdFastReboundSetting() {
    return this._Front3rdFastReboundSetting;
  }

  get _Rear3rdPackerSetting() {
    return this._Rear3rdPackerSetting;
  }

  get _Rear3rdSpringSetting() {
    return this._Rear3rdSpringSetting;
  }

  get _Rear3rdSlowBumpSetting() {
    return this._Rear3rdSlowBumpSetting;
  }

  get _Rear3rdFastBumpSetting() {
    return this._Rear3rdFastBumpSetting;
  }

  get _Rear3rdSlowReboundSetting() {
    return this._Rear3rdSlowReboundSetting;
  }

  get _Rear3rdFastReboundSetting() {
    return this._Rear3rdFastReboundSetting;
  }

  set _Front3rdPackerSetting(val) {
    this.__Front3rdPackerSetting = val;
  }

  set _Front3rdSpringSetting(val) {
    this.__Front3rdSpringSetting = val;
  }

  set _Front3rdSlowBumpSetting(val) {
    this.__Front3rdSlowBumpSetting = val;
  }

  set _Front3rdFastBumpSetting(val) {
    this.__Front3rdFastBumpSetting = val;
  }

  set _Front3rdSlowReboundSetting(val) {
    this.__Front3rdSlowReboundSetting = val;
  }

  set _Front3rdFastReboundSetting(val) {
    this.__Front3rdFastReboundSetting = val;
  }

  set _Rear3rdPackerSetting(val) {
    this.__Rear3rdPackerSetting = val;
  }

  set _Rear3rdSpringSetting(val) {
    this.__Rear3rdSpringSetting = val;
  }

  set _Rear3rdSlowBumpSetting(val) {
    this.__Rear3rdSlowBumpSetting = val;
  }

  set _Rear3rdFastBumpSetting(val) {
    this.__Rear3rdFastBumpSetting = val;
  }

  set _Rear3rdSlowReboundSetting(val) {
    this.__Rear3rdSlowReboundSetting = val;
  }

  set _Rear3rdFastReboundSetting(val) {
    this._Rear3rdFastReboundSetting = val;
  }
}
