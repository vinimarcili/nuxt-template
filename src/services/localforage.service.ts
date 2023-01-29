import * as localForage from 'localforage'

if (process.env.NODE_ENV !== 'test') {
  localForage.config({
    driver: [localForage.LOCALSTORAGE, localForage.INDEXEDDB, localForage.WEBSQL],
    name: 'mediakit_squid',
    storeName: 'mediakit_squid'
  })
}

export default localForage
