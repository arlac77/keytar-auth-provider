
/**
 * @param {Object} options
 *
 * @property {string} realmDirectory
 */
export class KeyTarAuthProvider {
  constructor(options = {}) {
  }

  async provideCredentials(realm) {
      const [account, service] = realm.split(/\//);

      try {
        const { getPassword } = require("keytar");
        return { password: getPassword(account, service); }
      } catch (e) {}
      return undefined;
    }
  }
}
