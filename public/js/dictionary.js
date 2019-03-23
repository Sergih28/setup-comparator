var dic = new Object();

dic = {};

//--SETUPS--
dic.FuelSetting = "Starting Fuel";
dic.NumPitstopsSetting = "Number of Stops";
dic.Pitstop1Setting = "Stop 1";
dic.Pitstop2Setting = "Stop 2";
dic.Pitstop3Setting = "Stop 3";
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

//--SUSPENSION--
dic.Symmetric = "Symmetrical";
dic.Front3rdPackerSetting = "Third Packers Front";
dic.Front3rdSpringSetting = "Third Spring Front";
dic.Front3rdSlowBumpSetting = "Third Slow Bump Front";
dic.Front3rdFastBumpSetting = "Third Fast Bump Front";
dic.Front3rdSlowReboundSetting = "Third Slow Rebound Front";
dic.Front3rdFastReboundSetting = "Third Fast Rebound Front";
dic.Rear3rdPackerSetting = "Third Packers Rear";
dic.Rear3rdSpringSetting = "Third Spring Rear";
dic.Rear3rdSlowBumpSetting = "Third Slow Bump Rear";
dic.Rear3rdFastBumpSetting = "Third Fast Bump Rear";
dic.Rear3rdSlowReboundSetting = "Third Slow Rebound Rear";
dic.Rear3rdFastReboundSetting = "Third Fast Rebound Rear";
dic.SpringSettingFRONTLEFT = "Spring Rate Front Left";
dic.SpringSettingFRONTRIGHT = "Spring Rate Front Right";
dic.SpringSettingREARLEFT = "Spring Rate Rear Left";
dic.SpringSettingREARRIGHT = "Spring Rate Rear Right";
dic.SlowBumpSettingFRONTLEFT = "Slow Bump Front Left";
dic.SlowBumpSettingFRONTRIGHT = "Slow Bump Front Right";
dic.SlowBumpSettingREARLEFT = "Slow Bump Rear Left";
dic.SlowBumpSettingREARRIGHT = "Slow Bump Rear Right";
dic.SlowReboundSettingFRONTLEFT = "Slow Rebound Front Left";
dic.SlowReboundSettingFRONTRIGHT = "Slow Rebound Front Right";
dic.SlowReboundSettingREARLEFT = "Slow Rebound Rear Left";
dic.SlowReboundSettingREARRIGHT = "Slow Rebound Rear Right";
dic.FastBumpSettingFRONTLEFT = "Fast Bump Front Left";
dic.FastBumpSettingFRONTRIGHT = "Fast Bump Front Right";
dic.FastBumpSettingREARLEFT = "Fast Bump Rear Left";
dic.FastBumpSettingREARRIGHT = "Fast Bump Rear Right";
dic.FastReboundSettingFRONTLEFT = "Fast Rebound Front Left";
dic.FastReboundSettingFRONTRIGHT = "Fast Rebound Front Right";
dic.FastReboundSettingREARLEFT = "Fast Rebound Rear Left";
dic.FastReboundSettingREARRIGHT = "Fast Rebound Rear Right";
dic.PackerSettingFRONTLEFT = "Packers Front Left";
dic.PackerSettingFRONTRIGHT = "Packers Front Right";
dic.PackerSettingREARLEFT = "Packers Rear Left";
dic.PackerSettingREARRIGHT = "Packers Rear Right";
dic.RideHeightSettingFRONTLEFT = "Ride Height Front Left";
dic.RideHeightSettingFRONTRIGHT = "Ride Height Front Right";
dic.RideHeightSettingREARLEFT = "Ride Height Rear Left";
dic.RideHeightSettingREARRIGHT = "Ride Height Rear Right";
dic.FrontAntiSwaySetting = "Anti-Roll Bar Front";
dic.RearAntiSwaySetting = "Anti-Roll Bar Rear";
dic.FrontToeInSetting = "Toe In Front";
dic.RearToeInSetting = "Toe In Rear";

// --------------------------------------------------

//--CHASSIS--
dic.LeftCasterSetting = "Caster Left";
dic.RightCasterSetting = "Caster Right";
dic.CGRightSetting = "Lateral";
dic.CGRearSetting = "Weight Dist";

// --------------------------------------------------

//--ADVANCED--
dic.Symmetric = "Symmetrical";
dic.PressureSettingFRONTLEFT = "Tyre Pressure Front Left";
dic.PressureSettingFRONTRIGHT = "Tyre Pressure Front Right";
dic.PressureSettingREARLEFT = "Tyre Pressure Rear Left";
dic.PressureSettingREARRIGHT = "Tyre Pressure Rear Right";
dic.FrontTireCompoundSetting = "Front Tire Compound";
dic.RearTireCompoundSetting = "Rear Tire Compound";
dic.CamberSettingFRONTLEFT = "Camber Front Left Tire";
dic.CamberSettingFRONTRIGHT = "Camber Front Right Tire";
dic.CamberSettingREARLEFT = "Camber Rear Left Tire";
dic.CamberSettingREARRIGHT = "Camber Rear Right Tire";
dic.RearBrakeSetting = "Brake Bias";
dic.BrakeDuctSetting = "Brake Duct Blanking";
dic.BrakePressureSetting = "Max Pedal Force";
dic.BrakeDiscSettingFRONTLEFT = "Brake Disc Front Left";
dic.BrakeDiscSettingFRONTRIGHT = "Brake Disc Front Right";
dic.BrakeDiscSettingREARLEFT = "Brake Disc Rear Left";
dic.BrakeDiscSettingREARRIGHT = "Brake Disc Rear Right";

//Start jquery
$(function() {
  $.each(dic, function(key, value) {
    // console.log(key);
    // console.log(value);
  });
});
