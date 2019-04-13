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

  set FuelSetting(val) {
    this._FuelSetting = val;
  }

  get NumPitstopsSetting() {
    return this._NumPitstopsSetting;
  }

  set NumPitstopsSetting(val) {
    this._NumPitstopsSetting = val;
  }

  get Pitstop1Setting() {
    return this._Pitstop1Setting;
  }

  set Pitstop1Setting(val) {
    this._Pitstop1Setting = val;
  }

  get Pitstop2Setting() {
    return this._Pitstop2Setting;
  }

  set Pitstop2Setting(val) {
    this._Pitstop2Setting = val;
  }

  get Pitstop3Setting() {
    return this._Pitstop3Setting;
  }

  set Pitstop3Setting(val) {
    this._Pitstop3Setting = val;
  }

  get Notes() {
    return this._Notes;
  }

  set Notes(val) {
    this._Notes = val;
  }
}
