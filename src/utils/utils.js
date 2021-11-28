const IS_NUMBER = new RegExp(/^\d*$/);

const clamp = (min, value, max) => value < min
  ? min
  : value > max
    ? max
    : value;

export const within59 = (value) => clamp(0, value, 59);
export const within999 = (value) => clamp(0, value, 999);
export const isNotANumber = (value) => !IS_NUMBER.test(value);