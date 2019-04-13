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

  setValues(tab, prop, line, pitstop = false, notes = false) {
    const _tab = "_" + tab;
    const _prop = "_" + prop;
    line = line.trim();
    if (notes) {
      let val = line.substring(7, line.length - 1);
      val = this.removeWeirdChars(val);
      this[_tab][_prop] += val;
      return true;
    }
    if (line.startsWith("//")) line = line.substring(2, line.length);
    if (line.includes("//")) line = line.replace("//", "=");
    let val = line.split("=");
    val = val[val.length - 1];
    this[_tab][_prop] = val;
  }

  bindDataToVariables() {
    var self = this;
    let splitted = this._setupData.split("\n");
    let FRFLRRRL = "";
    $.each(splitted, function(key, value) {
      if (value.startsWith("["))
        FRFLRRRL = value.substring(1, value.length - 2);

      // #region SETUPS TAB
      if (value.includes("FuelSetting")) {
        self.setValues("setupsTab", "FuelSetting", value);
        return true;
      }

      if (value.includes("NumPitstopsSetting")) {
        self.setValues("setupsTab", "NumPitstopsSetting", value);
        return true;
      }

      if (value.includes("Pitstop1Setting")) {
        self.setValues("setupsTab", "Pitstop1Setting", value, true);
        return true;
      }

      if (value.includes("Pitstop2Setting")) {
        self.setValues("setupsTab", "Pitstop2Setting", value, true);
        return true;
      }

      if (value.includes("Pitstop3Setting")) {
        self.setValues("setupsTab", "Pitstop3Setting", value, true);
        return true;
      }

      if (value.startsWith("Notes=") || value.startsWith("//Notes=")) {
        self.setValues("setupsTab", "Notes", value, false, true);
        return true;
      }
      // #endregion

      // #region GENERAL TAB
      for (let i = 1; i <= 8; i++) {
        if (value.includes("Gear" + i + "Setting")) {
          self.setValues("generalTab", "Gear" + i + "Setting", value);
          return true;
        }
      }

      if (value.includes("RatioSetSetting")) {
        self.setValues("generalTab", "RatioSetSetting", value);
        return true;
      }

      if (value.includes("FinalDriveSetting")) {
        self.setValues("generalTab", "FinalDriveSetting", value);
        return true;
      }

      if (value.includes("ReverseSetting")) {
        self.setValues("generalTab", "ReverseSetting", value);
        return true;
      }

      if (value.includes("ReverseSetting")) {
        self.setValues("generalTab", "ReverseSetting", value);
        return true;
      }

      if (value.includes("GearAutoUpShiftSetting")) {
        self.setValues("generalTab", "GearAutoUpShiftSetting", value);
        return true;
      }

      if (value.includes("GearAutoDownShiftSetting")) {
        self.setValues("generalTab", "GearAutoDownShiftSetting", value);
        return true;
      }

      if (value.includes("SteerLockSetting")) {
        self.setValues("generalTab", "SteerLockSetting", value);
        return true;
      }

      if (value.includes("DiffPumpSetting")) {
        self.setValues("generalTab", "DiffPumpSetting", value);
        return true;
      }

      if (value.includes("DiffPowerSetting")) {
        self.setValues("generalTab", "DiffPowerSetting", value);
        return true;
      }

      if (value.includes("DiffCoastSetting")) {
        self.setValues("generalTab", "DiffCoastSetting", value);
        return true;
      }

      if (value.includes("DiffPreloadSetting")) {
        self.setValues("generalTab", "DiffPreloadSetting", value);
        return true;
      }

      if (value.includes("FWSetting")) {
        self.setValues("generalTab", "FWSetting", value);
        return true;
      }

      if (value.includes("RWSetting")) {
        self.setValues("generalTab", "RWSetting", value);
        return true;
      }

      if (value.includes("RevLimitSetting")) {
        self.setValues("generalTab", "RevLimitSetting", value);
        return true;
      }

      if (value.includes("EngineMixtureSetting")) {
        self.setValues("generalTab", "EngineMixtureSetting", value);
        return true;
      }

      if (value.includes("EngineBoostSetting")) {
        self.setValues("generalTab", "EngineBoostSetting", value);
        return true;
      }

      if (value.includes("EngineBrakingMapSetting")) {
        self.setValues("generalTab", "EngineBrakingMapSetting", value);
        return true;
      }

      if (value.includes("RadiatorSetting")) {
        self.setValues("generalTab", "RadiatorSetting", value);
        return true;
      }
      // #endregion

      // #region SUSPENSION TAB
      if (value.includes("Front3rdPackerSetting")) {
        self.setValues("suspensionTab", "Front3rdPackerSetting", value);
        return true;
      }

      if (value.includes("Front3rdSpringSetting")) {
        self.setValues("suspensionTab", "Front3rdSpringSetting", value);
        return true;
      }

      if (value.includes("Front3rdSlowBumpSetting")) {
        self.setValues("suspensionTab", "Front3rdSlowBumpSetting", value);
        return true;
      }

      if (value.includes("Front3rdFastBumpSetting")) {
        self.setValues("suspensionTab", "Front3rdFastBumpSetting", value);
        return true;
      }

      if (value.includes("Front3rdSlowReboundSetting")) {
        self.setValues("suspensionTab", "Front3rdSlowReboundSetting", value);
        return true;
      }

      if (value.includes("Front3rdFastReboundSetting")) {
        self.setValues("suspensionTab", "Front3rdFastReboundSetting", value);
        return true;
      }

      if (value.includes("Rear3rdPackerSetting")) {
        self.setValues("suspensionTab", "Rear3rdPackerSetting", value);
        return true;
      }

      if (value.includes("Rear3rdSpringSetting")) {
        self.setValues("suspensionTab", "Rear3rdSpringSetting", value);
        return true;
      }

      if (value.includes("Rear3rdSlowBumpSetting")) {
        self.setValues("suspensionTab", "Rear3rdSlowBumpSetting", value);
        return true;
      }

      if (value.includes("Rear3rdFastBumpSetting")) {
        self.setValues("suspensionTab", "Rear3rdFastBumpSetting", value);
        return true;
      }

      if (value.includes("Rear3rdSlowReboundSetting")) {
        self.setValues("suspensionTab", "Rear3rdSlowReboundSetting", value);
        return true;
      }

      if (value.includes("Rear3rdFastReboundSetting")) {
        self.setValues("suspensionTab", "Rear3rdFastReboundSetting", value);
        return true;
      }

      if (value.includes("SpringSetting")) {
        self.setValues("suspensionTab", "SpringSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("SlowBumpSetting")) {
        self.setValues("suspensionTab", "SlowBumpSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("SlowReboundSetting")) {
        self.setValues("suspensionTab", "SlowReboundSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("FastBumpSetting")) {
        self.setValues("suspensionTab", "FastBumpSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("FastReboundSetting")) {
        self.setValues("suspensionTab", "FastReboundSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("PackerSetting")) {
        self.setValues("suspensionTab", "PackerSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("RideHeightSetting")) {
        self.setValues("suspensionTab", "RideHeightSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("FrontAntiSwaySetting")) {
        self.setValues("suspensionTab", "FrontAntiSwaySetting", value);
        return true;
      }

      if (value.includes("RearAntiSwaySetting")) {
        self.setValues("suspensionTab", "RearAntiSwaySetting", value);
        return true;
      }

      if (value.includes("FrontToeInSetting")) {
        self.setValues("suspensionTab", "FrontToeInSetting", value);
        return true;
      }

      if (value.includes("RearToeInSetting")) {
        self.setValues("suspensionTab", "RearToeInSetting", value);
        return true;
      }

      if (value.includes("FrontToeOffsetSetting")) {
        self.setValues("suspensionTab", "FrontToeOffsetSetting", value);
        return true;
      }

      if (value.includes("RearToeOffsetSetting")) {
        self.setValues("suspensionTab", "RearToeOffsetSetting", value);
        return true;
      }

      if (value.includes("RearSplitSetting")) {
        self.setValues("suspensionTab", "RearSplitSetting", value);
        return true;
      }
      // #endregion

      // #region CHASSIS TAB
      if (value.includes("FenderFlareSettingLEFTFENDER")) {
        // self.setValues("generalTab", "FenderFlareSettingLEFTFENDER", value);
        self.setValues("chassisTab", "FenderFlareSettingLEFTFENDER", value);
        return true;
      }

      if (value.includes("FenderFlareSettingRIGHTFENDER")) {
        // self.setValues("generalTab", "FenderFlareSettingRIGHTFENDER", value);
        self.setValues("chassisTab", "FenderFlareSettingRIGHTFENDER", value);
        return true;
      }

      if (value.includes("LeftTrackBarSetting")) {
        self.setValues("chassisTab", "LeftTrackBarSetting", value);
        return true;
      }

      if (value.includes("RightTrackBarSetting")) {
        self.setValues("chassisTab", "RightTrackBarSetting", value);
        return true;
      }

      if (value.includes("LeftCasterSetting")) {
        self.setValues("chassisTab", "LeftCasterSetting", value);
        return true;
      }

      if (value.includes("RightCasterSetting")) {
        self.setValues("chassisTab", "RightCasterSetting", value);
        return true;
      }

      for (let i = 0; i <= 11; i++) {
        let i2 = i < 10 ? "0" + i.toString() : i.toString();
        if (value.includes("ChassisAdj" + i2 + "Setting")) {
          self.setValues("chassisTab", "ChassisAdj" + i2 + "Setting", value);
          return true;
        }
      }

      if (value.includes("FrontWheelTrackSetting")) {
        self.setValues("chassisTab", "FrontWheelTrackSetting", value);
        return true;
      }

      if (value.includes("RearWheelTrackSetting")) {
        self.setValues("chassisTab", "RearWheelTrackSetting", value);
        return true;
      }

      if (value.includes("CGRightSetting")) {
        self.setValues("chassisTab", "CGRightSetting", value);
        return true;
      }

      if (value.includes("CGHeightSetting")) {
        self.setValues("chassisTab", "CGHeightSetting", value);
        return true;
      }

      if (value.includes("WedgeSetting")) {
        self.setValues("chassisTab", "WedgeSetting", value);
        return true;
      }

      if (value.includes("CGRearSetting")) {
        self.setValues("chassisTab", "CGRearSetting", value);
        return true;
      }
      // #endregion

      // #region ADVANCED TAB
      if (value.includes("Symmetric")) {
        let value2;
        value.includes("0") ? (value2 = "✗") : (value2 = "✓");
        // self.setValues("advancedTab", "Symmetric", value2);
        self.setValues("suspensionTab", "Symmetric", value2);
        return true;
      }

      if (
        value.startsWith("PressureSetting") ||
        value.startsWith("//PressureSetting")
      ) {
        self.setValues(
          "advancedTab",
          "PressureSetting" + FRFLRRRL,
          value,
          "//"
        );
        return true;
      }

      if (value.includes("FrontTireCompoundSetting")) {
        self.setValues("advancedTab", "FrontTireCompoundSetting", value);
        return true;
      }

      if (value.includes("RearTireCompoundSetting")) {
        self.setValues("advancedTab", "RearTireCompoundSetting", value);
        return true;
      }

      if (value.includes("CamberSetting")) {
        self.setValues("advancedTab", "CamberSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("RearBrakeSetting")) {
        self.setValues("advancedTab", "RearBrakeSetting", value);
        return true;
      }

      if (value.includes("BrakeDuctSetting")) {
        self.setValues("advancedTab", "BrakeDuctSetting", value);
        return true;
      }

      if (value.includes("BrakePressureSetting")) {
        self.setValues("advancedTab", "BrakePressureSetting", value);
        return true;
      }

      if (value.includes("HandbrakePressSetting")) {
        self.setValues("advancedTab", "HandbrakePressSetting", value);
        return true;
      }

      if (value.includes("BrakeDiscSetting")) {
        self.setValues("advancedTab", "BrakeDiscSetting" + FRFLRRRL, value);
        return true;
      }

      if (value.includes("TCSetting")) {
        self.setValues("advancedTab", "TCSetting", value);
        return true;
      }

      if (value.includes("ABSSetting")) {
        self.setValues("advancedTab", "ABSSetting", value);
        return true;
      }

      if (value.includes("TractionControlMapSetting")) {
        self.setValues("advancedTab", "TractionControlMapSetting", value);
        return true;
      }

      if (value.includes("AntilockBrakeSystemMapSetting")) {
        self.setValues("advancedTab", "AntilockBrakeSystemMapSetting", value);
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
