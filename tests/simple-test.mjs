import test from "ava";
import { KeyTarAuthProvider } from "../src/auth-provider.mjs";


test("has values", async t => {
  const authProvider = new KeyTarAuthProvider({ realmToUser:  { realmid: { user: "a", service: "b" }}});

  const credentials = await authProvider.provideCredentials("a/realmid");

  //console.log(await credentials.password);
  t.is(credentials.user, "arlac77");
});
