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
