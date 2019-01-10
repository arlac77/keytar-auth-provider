import keytar from "keytar";

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
      return { password: keytar.getPassword(account, service) };
    }
}
