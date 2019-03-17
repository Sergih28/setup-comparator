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
    this.bindDataToVariables();
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

  // #endregion

  setGearsSetting(num, line) {
    let val = line.split("//");
    this["Gear" + num + "Setting"] = val[val.length - 1];
    $("#list2").append(
      "<li>GEAR " + num + ": " + this["Gear" + num + "Setting"] + "</li>"
    );
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
      gear8Found = false;
    $.each(splitted, function(key, value) {
      // console.log("splitted2: " + value);

      // #region setGears

      if (!gear1Found) {
        if (value.includes("Gear1Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(1, value);
          gear1Found = true;
        }
      }

      if (!gear2Found) {
        if (value.includes("Gear2Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(2, value);
          gear2Found = true;
        }
      }

      if (!gear3Found) {
        if (value.includes("Gear3Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(3, value);
          gear3Found = true;
        }
      }

      if (!gear4Found) {
        if (value.includes("Gear4Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(4, value);
          gear4Found = true;
        }
      }

      if (!gear5Found) {
        if (value.includes("Gear5Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(5, value);
          gear5Found = true;
        }
      }

      if (!gear6Found) {
        if (value.includes("Gear6Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(6, value);
          gear6Found = true;
        }
      }

      if (!gear7Found) {
        if (value.includes("Gear7Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(7, value);
          gear7Found = true;
        }
      }

      if (!gear8Found) {
        if (value.includes("Gear8Setting")) {
          // var aux = value.split("//");
          // console.log(aux);
          // aux = aux[aux.length - 1];
          // console.log(aux);
          self.setGearsSetting(8, value);
          gear8Found = true;
        }
      }

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

  // Adding a method to the constructor
  showSetupOnConsole() {
    console.log(this.setupData);
  }
}
