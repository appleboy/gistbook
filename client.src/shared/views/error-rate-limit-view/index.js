//
// Error Rate Limit View
// When you've run into the rate limit, you will
// see this view
//

import * as mn from 'marionette';

export default mn.ItemView.extend({
  template: 'errorRateLimitView',
  className: 'error-rate-limit'
});
