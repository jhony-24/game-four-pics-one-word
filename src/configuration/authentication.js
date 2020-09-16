import { firebaseAuth } from "src/configuration/firebaseConfig"


export const providerAuthentication = {
	google : new firebaseAuth.GoogleAuthProvider(),
	facebook : new firebaseAuth.FacebookAuthProvider(),
}
