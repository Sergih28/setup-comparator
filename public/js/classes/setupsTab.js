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
