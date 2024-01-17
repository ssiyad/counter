import d_ from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

d_.extend(localizedFormat);
d_.extend(relativeTime);
export const dayjs = d_;
