import { helper } from '@ember/component/helper';
import { format } from 'date-fns';

export function dateFormate(params/*, hash*/) {
  return format(new Date(params), "MMM do YYYY");
}

export default helper(dateFormate);
