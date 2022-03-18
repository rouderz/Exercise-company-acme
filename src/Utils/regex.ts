export const validatorRegexDaysAndHours = /(?<day>\w{2})(?<start>\d{2}:\d{2})-(?<end>\d{2}:\d{2})+/gm;
export const validatorRegexName = /=(\w{2}\d{2}:\d{2}-\d{2}:\d{2},?)+$/;
export const validatorRegexHours = /\d{2}:\d{2}/;
export const validatorRegexDays = /\w{2}/;
export const validatorRegexFormat= /^(?<name>\w+)=(\w{2}\d{2}:\d{2}-\d{2}:\d{2},?)+$/;