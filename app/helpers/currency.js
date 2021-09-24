import { helper } from '@ember/component/helper';

export default helper(function currency(amount /*, named*/) {
  const num = amount * 40;
  return `Rs${Math.round(num * 100) / 100}`;
});
