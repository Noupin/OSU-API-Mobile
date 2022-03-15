export const TAttendanceTypeArray = ['local', 'global'] as const
export type TAttendanceType = typeof TAttendanceTypeArray[number]
