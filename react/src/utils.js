const COCKPIT_URL = process.env.REACT_APP_COCKPIT_URL;
const COCKPIT_READ_TOKEN = process.env.REACT_APP_COCKPIT_READ_TOKEN;
const COCKPIT_SAVE_TOKEN = process.env.REACT_APP_COCKPIT_SAVE_TOKEN;

export const getImageUrl = path => {
  return (path && `${COCKPIT_URL}/${path.replace(/^\//, '')}`) || null;
};

export const getCollectionUrl = collection => {
  return `${COCKPIT_URL}/api/collections/get/${collection}?token=${COCKPIT_READ_TOKEN}`;
};

export const getRegionUrl = region => {
  return `${COCKPIT_URL}/api/regions/data/${region}?token=${COCKPIT_READ_TOKEN}`;
};

export const saveCollectionUrl = collection => {
  return `${COCKPIT_URL}/api/collections/save/${collection}?token=${COCKPIT_SAVE_TOKEN}`;
};
