import { DateTime } from 'luxon';

const FormattedDate = () => {
  const now = DateTime.now();
  return `${now.toFormat('cccc')}, ${now.toFormat('dd')} of ${now.toFormat('MMMM')}`;
}

export default FormattedDate;