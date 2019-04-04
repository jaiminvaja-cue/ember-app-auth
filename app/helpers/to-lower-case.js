import { helper } from '@ember/component/helper';

export function toLowerCase(params/*, hash*/) {
  if (typeof params === "object") {
    return params.map(param => param.toLowerCase());
  } else {
    return params.toLowerCase();
  }
}

export default helper(toLowerCase);
