var dic = new Object();

dic = {
  FuelSetting: "",
  NumPitstopsSetting: "",
  Pitstop1Setting: "",
  Pitstop2Setting: "",
  Pitstop3Setting: "",
  Notes: "",
  Gear1Setting: "",
  Gear2Setting: "",
  Gear3Setting: "",
  Gear4Setting: "",
  Gear5Setting: "",
  Gear6Setting: "",
  Gear7Setting: "",
  Gear8Setting: "",
  FinalDriveSetting: "",
  ReverseSetting: "",
  SteerLockSetting: "",
  DiffPumpSetting: "",
  DiffPowerSetting: "",
  DiffCoastSetting: "",
  DiffPreloadSetting: "",
  FWSetting: "",
  RWSetting: "",
  RevLimitSetting: "",
  RadiatorSetting: "",
  EngineMixtureSetting: "",
  EngineBoostSetting: "",
  EngineBrakingMapSetting: "",

  Symmetric: "",
  PressureSettingFL: "",
  PressureSettingFR: "",
  PressureSettingRL: "",
  PressureSettingRR: "",
  FrontTireCompoundSetting: "",
  RearTireCompoundSetting: "",
  CamberSettingFL: "",
  CamberSettingFR: "",
  CamberSettingRL: "",
  CamberSettingRR: "",
  RearBrakeSetting: "",
  BrakeDuctSetting: "",
  BrakePressureSetting: "",
  BrakeDiscSettingFL: "",
  BrakeDiscSettingFR: "",
  BrakeDiscSettingRL: "",
  BrakeDiscSettingRR: ""
};

//--FUEL AND PIT STRATEGY--
dic.FuelSetting = "Starting Fuel";
dic.NumPitstopsSetting = "Number of Stops";
dic.Pitstop1Setting = "Stop 1";
dic.Pitstop2Setting = "Stop 2";
dic.Pitstop3Setting = "Stop 3";

// NOTES
dic.Notes = "Notes";

// --------------------------------------------------

//--GENERAL--
dic.Gear1Setting = "Gear 1";
dic.Gear2Setting = "Gear 2";
dic.Gear3Setting = "Gear 3";
dic.Gear4Setting = "Gear 4";
dic.Gear5Setting = "Gear 5";
dic.Gear6Setting = "Gear 6";
dic.Gear7Setting = "Gear 7";
dic.Gear8Setting = "Gear 8";
dic.FinalDriveSetting = "Gear Final";
dic.ReverseSetting = "Gear Reverse";
dic.SteerLockSetting = "Wheel Range (Lock)";
dic.DiffPumpSetting = "Pump";
dic.DiffPowerSetting = "Power";
dic.DiffCoastSetting = "Coast";
dic.DiffPreloadSetting = "Preload";
dic.FWSetting = "Front Wing";
dic.RWSetting = "Rear Wing";
dic.RevLimitSetting = "Rev Limiter";
dic.RadiatorSetting = "Radiator";
dic.EngineMixtureSetting = "Engine Mixture";
dic.EngineBoostSetting = "Boost Mapping";
dic.EngineBrakingMapSetting = "Brake Map";

// --------------------------------------------------

//--ADVANCED--
dic.Symmetric = "Symmetrical";
dic.PressureSettingFL = "Tyre Pressure Front Left";
dic.PressureSettingFR = "Tyre Pressure Front Right";
dic.PressureSettingRL = "Tyre Pressure Rear Left";
dic.PressureSettingRR = "Tyre Pressure Rear Right";
dic.FrontTireCompoundSetting = "Front Tire Compound";
dic.RearTireCompoundSetting = "Rear Tire Compound";
dic.CamberSettingFL = "Camber Front Left Tire";
dic.CamberSettingFR = "Camber Front Right Tire";
dic.CamberSettingRL = "Camber Rear Left Tire";
dic.CamberSettingRR = "Camber Rear Right Tire";
dic.RearBrakeSetting = "Brake Bias";
dic.BrakeDuctSetting = "Brake Duct Blanking";
dic.BrakePressureSetting = "Max Pedal Force";
dic.BrakeDiscSettingFL = "Front Left Brake Disc";
dic.BrakeDiscSettingFR = "Front Right Brake Disc";
dic.BrakeDiscSettingRL = "Rear Left Brake Disc";
dic.BrakeDiscSettingRR = "Rear Right Brake Disc";

//Start jquery
$(function() {
  $.each(dic, function(key, value) {
    // console.log(key);
    console.log(value);
  });
});
