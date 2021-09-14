export const tabs: string[] = ['Setup', 'General', 'Suspension', 'Chassis', 'Advanced']

interface SetupWithoutValueProps {
  tab: string
  key: string
  name: string
}

export interface SetupProps extends SetupWithoutValueProps {
  value: string
}

export interface SetupKeysToShowProps {
  key: string
  show: boolean
}

export interface DifferencesListProps {
  key: 'Setup' | 'General' | 'Suspension' | 'Chassis' | 'Advanced'
  value: number
}

export interface DifferencesProps {
  total: number
  list: DifferencesListProps[]
}

export const empty_differences: DifferencesProps = {
  total: 0,
  list: [
    {
      key: 'Setup',
      value: 0,
    },
    {
      key: 'General',
      value: 0,
    },
    {
      key: 'Suspension',
      value: 0,
    },
    {
      key: 'Chassis',
      value: 0,
    },
    {
      key: 'Advanced',
      value: 0,
    },
  ],
}

const setup_keys: string[] = [
  'FuelSetting',
  'NumPitstopsSetting',
  'Pitstop1Setting',
  'Pitstop2Setting',
  'Pitstop3Setting',
  'Notes',
  'Gear1Setting',
  'Gear2Setting',
  'Gear3Setting',
  'Gear4Setting',
  'Gear5Setting',
  'Gear6Setting',
  'Gear7Setting',
  'Gear8Setting',
  'RatioSetSetting',
  'FinalDriveSetting',
  'ReverseSetting',
  'GearAutoUpShiftSetting',
  'GearAutoDownShiftSetting',
  'SteerLockSetting',
  'DiffPumpSetting',
  'DiffPowerSetting',
  'DiffCoastSetting',
  'DiffPreloadSetting',
  'FWSetting',
  'RWSetting',
  'FenderFlareSettingLEFTFENDER',
  'FenderFlareSettingRIGHTFENDER',
  'RevLimitSetting',
  'EngineMixtureSetting',
  'EngineBoostSetting',
  'EngineBrakingMapSetting',
  'RadiatorSetting',
  'Symmetric',
  'Front3rdPackerSetting',
  'Front3rdSpringSetting',
  'Front3rdSlowBumpSetting',
  'Front3rdFastBumpSetting',
  'Front3rdSlowReboundSetting',
  'Front3rdFastReboundSetting',
  'Rear3rdPackerSetting',
  'Rear3rdSpringSetting',
  'Rear3rdSlowBumpSetting',
  'Rear3rdFastBumpSetting',
  'Rear3rdSlowReboundSetting',
  'Rear3rdFastReboundSetting',
  'SpringSettingFRONTLEFT',
  'SpringSettingFRONTRIGHT',
  'SpringSettingREARLEFT',
  'SpringSettingREARRIGHT',
  'SlowBumpSettingFRONTLEFT',
  'SlowBumpSettingFRONTRIGHT',
  'SlowBumpSettingREARLEFT',
  'SlowBumpSettingREARRIGHT',
  'SlowReboundSettingFRONTLEFT',
  'SlowReboundSettingFRONTRIGHT',
  'SlowReboundSettingREARLEFT',
  'SlowReboundSettingREARRIGHT',
  'FastBumpSettingFRONTLEFT',
  'FastBumpSettingFRONTRIGHT',
  'FastBumpSettingREARLEFT',
  'FastBumpSettingREARRIGHT',
  'FastReboundSettingFRONTLEFT',
  'FastReboundSettingFRONTRIGHT',
  'FastReboundSettingREARLEFT',
  'FastReboundSettingREARRIGHT',
  'PackerSettingFRONTLEFT',
  'PackerSettingFRONTRIGHT',
  'PackerSettingREARLEFT',
  'PackerSettingREARRIGHT',
  'RideHeightSettingFRONTLEFT',
  'RideHeightSettingFRONTRIGHT',
  'RideHeightSettingREARLEFT',
  'RideHeightSettingREARRIGHT',
  'FrontAntiSwaySetting',
  'RearAntiSwaySetting',
  'FrontToeInSetting',
  'RearToeInSetting',
  'FrontToeOffsetSetting',
  'RearToeOffsetSetting',
  'RearSplitSetting',
  'LeftTrackBarSetting',
  'RightTrackBarSetting',
  'LeftCasterSetting',
  'RightCasterSetting',
  'ChassisAdj00Setting',
  'ChassisAdj01Setting',
  'ChassisAdj02Setting',
  'ChassisAdj03Setting',
  'ChassisAdj04Setting',
  'ChassisAdj05Setting',
  'ChassisAdj06Setting',
  'ChassisAdj07Setting',
  'ChassisAdj08Setting',
  'ChassisAdj09Setting',
  'ChassisAdj10Setting',
  'ChassisAdj11Setting',
  'FrontWheelTrackSetting',
  'RearWheelTrackSetting',
  'CGRightSetting',
  'CGHeightSetting',
  'WedgeSetting',
  'CGRearSetting',
  'PressureSettingFRONTLEFT',
  'PressureSettingFRONTRIGHT',
  'PressureSettingREARLEFT',
  'PressureSettingREARRIGHT',
  'FrontTireCompoundSetting',
  'RearTireCompoundSetting',
  'CamberSettingFRONTLEFT',
  'CamberSettingFRONTRIGHT',
  'CamberSettingREARLEFT',
  'CamberSettingREARRIGHT',
  'RearBrakeSetting',
  'BrakeDuctSetting',
  'BrakePressureSetting',
  'HandbrakePressSetting',
  'BrakeDiscSettingFRONTLEFT',
  'BrakeDiscSettingFRONTRIGHT',
  'BrakeDiscSettingREARLEFT',
  'BrakeDiscSettingREARRIGHT',
  'TCSetting',
  'ABSSetting',
  'TractionControlMapSetting',
  'AntilockBrakeSystemMapSetting',
]

export const show_keys: SetupKeysToShowProps[] = setup_keys.map(
  (key: string): SetupKeysToShowProps => ({ key: key, show: false }),
)

const empty_setup_without_value: SetupWithoutValueProps[] = [
  {
    tab: 'Setup',
    key: 'FuelSetting',
    name: 'Starting Fuel',
  },
  {
    tab: 'Setup',
    key: 'NumPitstopsSetting',
    name: 'Number of Stop',
  },
  {
    tab: 'Setup',
    key: 'Pitstop1Setting',
    name: 'Stop 1',
  },
  {
    tab: 'Setup',
    key: 'Pitstop2Setting',
    name: 'Stop 2',
  },
  {
    tab: 'Setup',
    key: 'Pitstop3Setting',
    name: 'Stop 3',
  },
  {
    tab: 'Setup',
    key: 'Notes',
    name: 'Notes',
  },
  {
    tab: 'General',
    key: 'Gear1Setting',
    name: 'Gear 1',
  },
  {
    tab: 'General',
    key: 'Gear2Setting',
    name: 'Gear 2',
  },
  {
    tab: 'General',
    key: 'Gear3Setting',
    name: 'Gear 3',
  },
  {
    tab: 'General',
    key: 'Gear4Setting',
    name: 'Gear 4',
  },
  {
    tab: 'General',
    key: 'Gear5Setting',
    name: 'Gear 5',
  },
  {
    tab: 'General',
    key: 'Gear6Setting',
    name: 'Gear 6',
  },
  {
    tab: 'General',
    key: 'Gear7Setting',
    name: 'Gear 7',
  },
  {
    tab: 'General',
    key: 'Gear8Setting',
    name: 'Gear 8',
  },
  {
    tab: 'General',
    key: 'RatioSetSetting',
    name: 'Ratio Set',
  },
  {
    tab: 'General',
    key: 'FinalDriveSetting',
    name: 'Gear Final',
  },
  {
    tab: 'General',
    key: 'ReverseSetting',
    name: 'Gear Reverse',
  },
  {
    tab: 'General',
    key: 'GearAutoUpShiftSetting',
    name: 'Gear Auto Upshift',
  },
  {
    tab: 'General',
    key: 'GearAutoDownShiftSetting',
    name: 'Gear Auto Downshift',
  },
  {
    tab: 'General',
    key: 'SteerLockSetting',
    name: 'Wheel Range (Lock)',
  },
  {
    tab: 'General',
    key: 'DiffPumpSetting',
    name: 'Pump',
  },
  {
    tab: 'General',
    key: 'DiffPowerSetting',
    name: 'Power',
  },
  {
    tab: 'General',
    key: 'DiffCoastSetting',
    name: 'Coast',
  },
  {
    tab: 'General',
    key: 'DiffPreloadSetting',
    name: 'Preload',
  },
  {
    tab: 'General',
    key: 'FWSetting',
    name: 'Front Wing',
  },
  {
    tab: 'General',
    key: 'RWSetting',
    name: 'Rear Wing',
  },
  {
    tab: 'General',
    key: 'FenderFlareSettingLEFTFENDER',
    name: 'Fender Flare Left',
  },
  {
    tab: 'General',
    key: 'FenderFlareSettingRIGHTFENDER',
    name: 'Fender Flare Right',
  },
  {
    tab: 'General',
    key: 'RevLimitSetting',
    name: 'Rev Limiter',
  },
  {
    tab: 'General',
    key: 'EngineMixtureSetting',
    name: 'Engine Mixture',
  },
  {
    tab: 'General',
    key: 'EngineBoostSetting',
    name: 'Boost Mapping',
  },
  {
    tab: 'General',
    key: 'EngineBrakingMapSetting',
    name: 'Brake Map',
  },
  {
    tab: 'General',
    key: 'RadiatorSetting',
    name: 'Radiator',
  },
  {
    tab: 'Suspension',
    key: 'Symmetric',
    name: 'Symmetrical',
  },
  {
    tab: 'Suspension',
    key: 'Front3rdPackerSetting',
    name: 'Third Packers Front',
  },
  {
    tab: 'Suspension',
    key: 'Front3rdSpringSetting',
    name: 'Third Spring Front',
  },
  {
    tab: 'Suspension',
    key: 'Front3rdSlowBumpSetting',
    name: 'Third Slow Bymp Front',
  },
  {
    tab: 'Suspension',
    key: 'Front3rdFastBumpSetting',
    name: 'Third Fast Bump Front',
  },
  {
    tab: 'Suspension',
    key: 'Front3rdSlowReboundSetting',
    name: 'Third Slow Rebound Front',
  },
  {
    tab: 'Suspension',
    key: 'Front3rdFastReboundSetting',
    name: 'Third Fast Rebound Front',
  },
  {
    tab: 'Suspension',
    key: 'Rear3rdPackerSetting',
    name: 'Third Packers Rear',
  },
  {
    tab: 'Suspension',
    key: 'Rear3rdSpringSetting',
    name: 'Third Spring Rear',
  },
  {
    tab: 'Suspension',
    key: 'Rear3rdSlowBumpSetting',
    name: 'Third Slow Bump Rear',
  },
  {
    tab: 'Suspension',
    key: 'Rear3rdFastBumpSetting',
    name: 'Third Fast Bump Rear',
  },
  {
    tab: 'Suspension',
    key: 'Rear3rdSlowReboundSetting',
    name: 'Third Slow Rebound Rear',
  },
  {
    tab: 'Suspension',
    key: 'Rear3rdFastReboundSetting',
    name: 'Third Fast Rebound Rear',
  },
  {
    tab: 'Suspension',
    key: 'SpringSettingFRONTLEFT',
    name: 'Spring Rate Front Left',
  },
  {
    tab: 'Suspension',
    key: 'SpringSettingFRONTRIGHT',
    name: 'Spring Rate Front Right',
  },
  {
    tab: 'Suspension',
    key: 'SpringSettingREARLEFT',
    name: 'Spring Rate Rear Left',
  },
  {
    tab: 'Suspension',
    key: 'SpringSettingREARRIGHT',
    name: 'Spring Rate Rear Right',
  },
  {
    tab: 'Suspension',
    key: 'SlowBumpSettingFRONTLEFT',
    name: 'Slow Bump Front Left',
  },
  {
    tab: 'Suspension',
    key: 'SlowBumpSettingFRONTRIGHT',
    name: 'Slow Bump Front Right',
  },
  {
    tab: 'Suspension',
    key: 'SlowBumpSettingREARLEFT',
    name: 'Slow Bump Rear Left',
  },
  {
    tab: 'Suspension',
    key: 'SlowBumpSettingREARRIGHT',
    name: 'Slow Bump Rear Right',
  },
  {
    tab: 'Suspension',
    key: 'SlowReboundSettingFRONTLEFT',
    name: 'Slow Rebound Front Left',
  },
  {
    tab: 'Suspension',
    key: 'SlowReboundSettingFRONTRIGHT',
    name: 'Slow Rebound Front Right',
  },
  {
    tab: 'Suspension',
    key: 'SlowReboundSettingREARLEFT',
    name: 'Slow Rebound Rear Left',
  },
  {
    tab: 'Suspension',
    key: 'SlowReboundSettingREARRIGHT',
    name: 'Slow Rebound Rear Right',
  },
  {
    tab: 'Suspension',
    key: 'FastBumpSettingFRONTLEFT',
    name: 'Fast Bump Front Left',
  },
  {
    tab: 'Suspension',
    key: 'FastBumpSettingFRONTRIGHT',
    name: 'Fast Bump Front Right',
  },
  {
    tab: 'Suspension',
    key: 'FastBumpSettingREARLEFT',
    name: 'Fast Bump Rear Left',
  },
  {
    tab: 'Suspension',
    key: 'FastBumpSettingREARRIGHT',
    name: 'Fast Bump Rear Right',
  },
  {
    tab: 'Suspension',
    key: 'FastReboundSettingFRONTLEFT',
    name: 'Fast Rebound Fron Left',
  },
  {
    tab: 'Suspension',
    key: 'FastReboundSettingFRONTRIGHT',
    name: 'Fast Rebound Front Right',
  },
  {
    tab: 'Suspension',
    key: 'FastReboundSettingREARLEFT',
    name: 'Fast Rebound Rear Left',
  },
  {
    tab: 'Suspension',
    key: 'FastReboundSettingREARRIGHT',
    name: 'Fast Rebound Rear Right',
  },
  {
    tab: 'Suspension',
    key: 'PackerSettingFRONTLEFT',
    name: 'Packers Front Left',
  },
  {
    tab: 'Suspension',
    key: 'PackerSettingFRONTRIGHT',
    name: 'Packers Front Right',
  },
  {
    tab: 'Suspension',
    key: 'PackerSettingREARLEFT',
    name: 'Packers Rear Left',
  },
  {
    tab: 'Suspension',
    key: 'PackerSettingREARRIGHT',
    name: 'Packers Rear Right',
  },
  {
    tab: 'Suspension',
    key: 'RideHeightSettingFRONTLEFT',
    name: 'Ride Height Front Left',
  },
  {
    tab: 'Suspension',
    key: 'RideHeightSettingFRONTRIGHT',
    name: 'Ride Height Front Right',
  },
  {
    tab: 'Suspension',
    key: 'RideHeightSettingREARLEFT',
    name: 'Ride Height Rear Left',
  },
  {
    tab: 'Suspension',
    key: 'RideHeightSettingREARRIGHT',
    name: 'Ride Height Rear Right',
  },
  {
    tab: 'Suspension',
    key: 'FrontAntiSwaySetting',
    name: 'Anti-Roll Bar Front',
  },
  {
    tab: 'Suspension',
    key: 'RearAntiSwaySetting',
    name: 'Anti-Roll Bar Rear',
  },
  {
    tab: 'Suspension',
    key: 'FrontToeInSetting',
    name: 'Toe In Front',
  },
  {
    tab: 'Suspension',
    key: 'RearToeInSetting',
    name: 'Toe In Rear',
  },
  {
    tab: 'Suspension',
    key: 'FrontToeOffsetSetting',
    name: 'Front Toe Offset',
  },
  {
    tab: 'Suspension',
    key: 'RearToeOffsetSetting',
    name: 'Rear Toe Offset',
  },
  {
    tab: 'Suspension',
    key: 'RearSplitSetting',
    name: 'Torque Split',
  },
  {
    tab: 'Chassis',
    key: 'FenderFlareSettingLEFTFENDER',
    name: 'Fender Flare Left',
  },
  {
    tab: 'Chassis',
    key: 'FenderFlareSettingRIGHTFENDER',
    name: 'Fender Flare Right',
  },
  {
    tab: 'Chassis',
    key: 'LeftTrackBarSetting',
    name: 'Track Bar Left',
  },
  {
    tab: 'Chassis',
    key: 'RightTrackBarSetting',
    name: 'Track Bar Right',
  },
  {
    tab: 'Chassis',
    key: 'LeftCasterSetting',
    name: 'Caster Left',
  },
  {
    tab: 'Chassis',
    key: 'RightCasterSetting',
    name: 'Caster Right',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj00Setting',
    name: 'Chassis Adjustment 1',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj01Setting',
    name: 'Chassis Adjustment 2',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj02Setting',
    name: 'Chassis Adjustment 3',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj03Setting',
    name: 'Chassis Adjustment 4',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj04Setting',
    name: 'Chassis Adjustment 5',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj05Setting',
    name: 'Chassis Adjustment 6',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj06Setting',
    name: 'Chassis Adjustment 7',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj07Setting',
    name: 'Chassis Adjustment 8',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj08Setting',
    name: 'Chassis Adjustment 9',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj09Setting',
    name: 'Chassis Adjustment 10',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj10Setting',
    name: 'Chassis Adjustment 11',
  },
  {
    tab: 'Chassis',
    key: 'ChassisAdj11Setting',
    name: 'Chassis Adjustment 12',
  },
  {
    tab: 'Chassis',
    key: 'FrontWheelTrackSetting',
    name: 'Front Wheel Track',
  },
  {
    tab: 'Chassis',
    key: 'RearWheelTrackSetting',
    name: 'Rear Wheel Track',
  },
  {
    tab: 'Chassis',
    key: 'CGRightSetting',
    name: 'Lateral',
  },
  {
    tab: 'Chassis',
    key: 'CGHeightSetting',
    name: 'Vertical',
  },
  {
    tab: 'Chassis',
    key: 'WedgeSetting',
    name: 'Wedge',
  },
  {
    tab: 'Chassis',
    key: 'CGRearSetting',
    name: 'Weight Dist',
  },
  {
    tab: 'Advanced',
    key: 'Symmetric',
    name: 'Symmetrical',
  },
  {
    tab: 'Advanced',
    key: 'PressureSettingFRONTLEFT',
    name: 'Tyre Pressure Front Left',
  },
  {
    tab: 'Advanced',
    key: 'PressureSettingFRONTRIGHT',
    name: 'Tyre Pressure Front Right',
  },
  {
    tab: 'Advanced',
    key: 'PressureSettingREARLEFT',
    name: 'Tyre Pressure Rear Left',
  },
  {
    tab: 'Advanced',
    key: 'PressureSettingREARRIGHT',
    name: 'Tyre Pressure Rear Right',
  },
  {
    tab: 'Advanced',
    key: 'FrontTireCompoundSetting',
    name: 'Front Tire Compound',
  },
  {
    tab: 'Advanced',
    key: 'RearTireCompoundSetting',
    name: 'Rear Tire Compound',
  },
  {
    tab: 'Advanced',
    key: 'CamberSettingFRONTLEFT',
    name: 'Camber Front Left Tire',
  },
  {
    tab: 'Advanced',
    key: 'CamberSettingFRONTRIGHT',
    name: 'Camber Front Right Tire',
  },
  {
    tab: 'Advanced',
    key: 'CamberSettingREARLEFT',
    name: 'Camber Rear Left Tire',
  },
  {
    tab: 'Advanced',
    key: 'CamberSettingREARRIGHT',
    name: 'Camber Rear Right Tire',
  },
  {
    tab: 'Advanced',
    key: 'RearBrakeSetting',
    name: 'Brake Bias',
  },
  {
    tab: 'Advanced',
    key: 'BrakeDuctSetting',
    name: 'Brake Duct Blanking',
  },
  {
    tab: 'Advanced',
    key: 'BrakePressureSetting',
    name: 'Max Pedal Force',
  },
  {
    tab: 'Advanced',
    key: 'HandbrakePressSetting',
    name: 'Handbrake Pressure',
  },
  {
    tab: 'Advanced',
    key: 'BrakeDiscSettingFRONTLEFT',
    name: 'Brake Disc Front Left',
  },
  {
    tab: 'Advanced',
    key: 'BrakeDiscSettingFRONTRIGHT',
    name: 'Brake Disc Front Right',
  },
  {
    tab: 'Advanced',
    key: 'BrakeDiscSettingREARLEFT',
    name: 'Brake Disc Rear Left',
  },
  {
    tab: 'Advanced',
    key: 'BrakeDiscSettingREARRIGHT',
    name: 'Brake Disc Rear Right',
  },
  {
    tab: 'Advanced',
    key: 'TCSetting',
    name: 'Traction Control',
  },
  {
    tab: 'Advanced',
    key: 'ABSSetting',
    name: 'Anti-Lock Brakes',
  },
  {
    tab: 'Advanced',
    key: 'TractionControlMapSetting',
    name: 'Traction Control Map',
  },
  {
    tab: 'Advanced',
    key: 'AntilockBrakeSystemMapSetting',
    name: 'Antilock Brake System Map',
  },
]

export const empty_setup: SetupProps[] = empty_setup_without_value.map(
  (content: SetupWithoutValueProps) => ({ ...content, value: '' }),
)
