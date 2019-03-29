class Setup {
  constructor(setupData) {
    this._setupData = setupData;
    this._setupsTab = new SetupsTab();
    this._generalTab = new GeneralTab();
    this._suspensionTab = new SuspensionTab();
    this._chassisTab = new ChassisTab();
    this._advancedTab = new AdvancedTab();
    this.bindDataToVariables();
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
      let val = line.substring(7, line.length - 2);
      val = this.removeWeirdChars(val);
      this[_tab][_prop] += val;
      return true;
    }
    if (line.startsWith("//")) line = line.substring(2, line.length);
    if (line.includes("//")) line = line.replace("//", separator);
    let val = line.split(separator);
    pitstop ? (val = val[val.length - 2]) : (val = val[val.length - 1]);
    this[_tab][_prop] = val;
  }

  bindDataToVariables() {
    var self = this;
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
        // self.setValues("advancedTab", "Symmetric", value2, "=");
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

  showSetupByTabs() {
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

    for (const [prop, val] of entries) {
      $("#" + title.toLowerCase() + "Tab").append(
        "<li><strong>" +
          dic[prop.substring(1, prop.length)] +
          "</strong>: " +
          val +
          "</li>"
      );
    }
  }
}
