/* eslint-disable no-underscore-dangle */
class GoogleRetailPixel {
  userId;
  visitorId;
  apiKey;
  projectId;
  catalogId;
  locationId;

  constructor({ apiKey, projectId, catalogId, locationId }) {
    this.apiKey = apiKey;
    this.projectId = projectId;
    this.catalogId = catalogId;
    this.locationId = locationId;
    window._gre = window._gre || [];
    window._gre.push(['apiKey', apiKey]);
    window._gre.push(['projectId', projectId]);
    window._gre.push(['locationId', catalogId]);
    window._gre.push(['catalogId', locationId]);
  }

  setUserId(userId) {
    this.userId = userId;
  }

  setVisitorId(visitorId) {
    this.visitorId = visitorId;
  }

  logEvent(eventType, payload = {}, { attributionToken, experimentIds } = {}) {
    if (!this.visitorId) {
      console.warn('Visitor ID is not set. Please set it before logging events');
      return;
    }
    const event = {
      eventType,
      attributionToken,
      experimentIds,
      visitorId: this.visitorId,
      userInfo: this.userId
        ? {
          userId: this.userId,
        }
        : undefined,
      ...payload,
    };
    // HACK: cloud_retail does not replace _gre on init
    // cloud_retail only calls logEvent once on _gre and
    // it does not even clear _gre after that
    if (window.cloud_retail) {
      window.cloud_retail.logEvent([
        ['apiKey', this.apiKey],
        ['projectId', this.projectId],
        ['locationId', this.catalogId],
        ['catalogId', this.locationId],
        ['logEvent', event],
      ]);
    } else {
      window._gre.push(['logEvent', event]);
    }
  }
}

export default (ctx, inject) => {
  const parsedOptions = <%= JSON.stringify(options) %>
  const gre = new GoogleRetailPixel(parsedOptions);
  const d = document;
  const s = d.createElement('script');
  s.src = 'https://www.gstatic.com/retail/v2_event.js';
  s.async = 1;
  d.getElementsByTagName('head')[0].appendChild(s);

  ctx.$gre = gre
  inject('gre', gre)
};
