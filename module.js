export let variable = 3;
export const constant = 4;

export function setter(value) {
  variable = value;
}

export function getter() {
  return variable;
}
