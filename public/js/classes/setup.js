class Setup {
  constructor(setupData) {
    this.setupData = setupData;
    this.generalTab = new Object();
    this.Gear1Setting = "";
    this.Gear2Setting = "";
    this.Gear3Setting = "";
    this.Gear4Setting = "";
    this.Gear5Setting = "";
    this.Gear6Setting = "";
    this.Gear7Setting = "";
    this.Gear8Setting = "";

    // #region ADVANCED
    this.Symmetric = "";
    this.PressureSettingFL = "";
    this.PressureSettingFR = "";
    this.PressureSettingRL = "";
    this.PressureSettingRR = "";
    this.FrontTireCompoundSetting = "";
    this.RearTireCompoundSetting = "";
    this.CamberSettingFL = "";
    this.CamberSettingFR = "";
    this.CamberSettingRL = "";
    this.CamberSettingRR = "";
    this.RearBrakeSetting = "";
    this.BrakeDuctSetting = "";
    this.BrakePressureSetting = "";
    this.BrakeDiscSettingFL = "";
    this.BrakeDiscSettingFR = "";
    this.BrakeDiscSettingRL = "";
    this.BrakeDiscSettingRR = "";
    // #endregion
    this.bindDataToVariables();
    this.showData();
  }

  // #region getters
  getGear1Setting() {
    return this.Gear1Setting;
  }

  getGear2Setting() {
    return this.Gear2Setting;
  }

  getGear3Setting() {
    return this.Gear3Setting;
  }

  getGear4Setting() {
    return this.Gear4Setting;
  }

  getGear5Setting() {
    return this.Gear5Setting;
  }

  getGear6Setting() {
    return this.Gear6Setting;
  }

  getGear7Setting() {
    return this.Gear7Setting;
  }

  getGear8Setting() {
    return this.Gear8Setting;
  }

  getSymmetric() {
    return this.Symmetric;
  }

  getPressureSettingFL() {
    return this.PressureSettingFL;
  }

  getPressureSettingFR() {
    return this.PressureSettingFR;
  }

  getPressureSettingRL() {
    return this.PressureSettingRL;
  }

  getPressureSettingRR() {
    return this.PressureSettingRR;
  }

  getFrontTireCompoundSetting() {
    return this.FrontTireCompoundSetting;
  }

  getRearTireCompoundSetting() {
    return this.RearTireCompoundSetting;
  }

  getCamberSettingFL() {
    return this.CamberSettingFL;
  }

  getCamberSettingFR() {
    return this.CamberSettingFR;
  }

  getCamberSettingRL() {
    return this.CamberSettingRL;
  }

  getCamberSettingRR() {
    return this.CamberSettingRR;
  }

  getRearBrakeSetting() {
    return this.RearBrakeSetting;
  }

  getBrakeDuctSetting() {
    return this.BrakeDuctSetting;
  }

  getBrakePressureSetting() {
    return this.BrakePressureSetting;
  }

  getBrakeDiscSettingFL() {
    return this.BrakeDiscSettingFL;
  }

  getBrakeDiscSettingFR() {
    return this.BrakeDiscSettingFR;
  }

  getBrakeDiscSettingRL() {
    return this.BrakeDiscSettingRL;
  }

  getBrakeDiscSettingRR() {
    return this.BrakeDiscSettingRR;
  }

  // #endregion

  setByDoubleSlash(prop, line) {
    let val = line.split("//");
    this[prop] = val[val.length - 1];
    $("#list2").append("<li>" + dic[prop] + ": " + this[prop] + "</li>");
  }

  setByEquals(prop, line) {
    let val = line.split("=");
    this[prop] = val[val.length - 1];

    //Special for YES/NO
    // symmetricFound;
  }

  bindDataToVariables() {
    var self = this;
    // $("#list2").append("<li>" + self.fileName + "</li>");
    let splitted = this.setupData.split("\n");
    let gear1Found = false,
      gear2Found = false,
      gear3Found = false,
      gear4Found = false,
      gear5Found = false,
      gear6Found = false,
      gear7Found = false,
      gear8Found = false,
      symmetricFound = false;
    $.each(splitted, function(key, value) {
      // console.log("splitted2: " + value);

      // #region setGears
      if (!gear1Found) {
        if (value.includes("Gear1Setting")) {
          self.setByDoubleSlash("Gear1Setting", value);
          gear1Found = true;
        }
      }

      if (!gear2Found) {
        if (value.includes("Gear2Setting")) {
          self.setByDoubleSlash("Gear2Setting", value);
          gear2Found = true;
        }
      }

      if (!gear3Found) {
        if (value.includes("Gear3Setting")) {
          self.setByDoubleSlash("Gear3Setting", value);
          gear3Found = true;
        }
      }

      if (!gear4Found) {
        if (value.includes("Gear4Setting")) {
          self.setByDoubleSlash("Gear4Setting", value);
          gear4Found = true;
        }
      }

      if (!gear5Found) {
        if (value.includes("Gear5Setting")) {
          self.setByDoubleSlash("Gear5Setting", value);
          gear5Found = true;
        }
      }

      if (!gear6Found) {
        if (value.includes("Gear6Setting")) {
          self.setByDoubleSlash("Gear6Setting", value);
          gear6Found = true;
        }
      }

      if (!gear7Found) {
        if (value.includes("Gear7Setting")) {
          self.setByDoubleSlash("Gear7Setting", value);
          gear7Found = true;
        }
      }

      if (!gear8Found) {
        if (value.includes("Gear8Setting")) {
          self.setByDoubleSlash("Gear8Setting", value);
          gear8Found = true;
        }
      }
      // #endregion

      // #region ADVANCED
      // if (!symmetricFound) {
      //   if (value.includes("Symmetric")) {
      //     // var aux = value.split("//");
      //     // console.log(aux);
      //     // aux = aux[aux.length - 1];
      //     // console.log(aux);
      //     self.setGearsSetting(1, value);
      //     gear1Found = true;
      //   }
      // }
      // #endregion
    });

    // this.Gear1Setting = "Gear 1";
    // this.Gear2Setting = "Gear 2";
    // this.Gear3Setting = "Gear 3";
    // this.Gear4Setting = "Gear 4";
    // this.Gear5Setting = "Gear 5";
    // this.Gear6Setting = "Gear 6";
    // this.Gear7Setting = "Gear 7";
    // this.Gear8Setting = "Gear 8";
    // this.FinalDriveSetting = "Gear Final";
    // this.ReverseSetting = "Gear Reverse";
    // this.SteerLockSetting = "Wheel Range (Lock)";
    // this.DiffPumpSetting = "Pump";
    // this.DiffPowerSetting = "Power";
    // this.DiffCoastSetting = "Coast";
    // this.DiffPreloadSetting = "Preload";
    // this.FWSetting = "Front Wing";
    // this.RWSetting = "Rear Wing";
    // this.RevLimitSetting = "Rev Limiter";
    // this.RadiatorSetting = "Radiator";
    // this.EngineMixtureSetting = "Engine Mixture";
    // this.EngineBoostSetting = "Boost Mapping";
    // this.EngineBrakingMapSetting = "Brake Map";
  }

  showData() {
    var methods = Object.getOwnPropertyNames(Setup.prototype);
    console.log(methods);
    //Alternative solution would be to get this list, and filter only through getters
    //and subst the "get" at the start, and I have a list of the props, as all props
    //will have a getter
  }

  // Adding a method to the constructor
  showSetupOnConsole() {
    console.log(this.setupData);
  }
}
