import test from "ava";
import { KeyTarAuthProvider } from "../src/auth-provider";


test("has values", async t => {
  const authProvider = new KeyTarAuthProvider({ realmToUser:  { realmid: { user: "a", service: "b" }}});

  const credentials = await authProvider.provideCredentials({
    Basic: { realm: "realmid" }
  });

  t.is(credentials.user, "arlac77");
});
