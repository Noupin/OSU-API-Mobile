export const TDeviceTypeArray = ['Full Arm', 'Half Arm', 'Hand', 'Finger'] as const
export type TDeviceType = typeof TDeviceTypeArray[number]
