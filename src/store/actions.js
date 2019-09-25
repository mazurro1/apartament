export const COUNTER_ADD = "COUNTER_ADD";
export const counter_add = number => {
  return {
    type: COUNTER_ADD,
    number: number
  };
};
