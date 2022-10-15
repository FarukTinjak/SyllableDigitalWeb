import * as moment from "moment";

export function formatDate(input: moment.MomentInput): string {
  return moment(input).format('MMMM DD, Y');
}
