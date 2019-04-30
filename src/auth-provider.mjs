import keytar from "keytar";

/**
 * @param {Object} options
 *
 */
export class KeyTarAuthProvider {
  constructor(options = {}) {
  }

  /**
   * @param {string} realm
   @ @return {Object} credentials
   */
  async provideCredentials(realm) {
      const [account, service] = realm.split(/\//);
      return { password: keytar.getPassword(account, service) };
    }
}
