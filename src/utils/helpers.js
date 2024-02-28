import { v4 as uuidv4 } from "uuid";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { async } from "@firebase/util";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider).then((userCred) => {
    window.location.reload();
  });
};

export const signInWithGitHub = async () => {
  await signInWithRedirect(auth, gitHubProvider).then((userCred) => {
    window.location.reload();
  });
};

export const logOutAction = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  });
};

export const Menu = [
  {
    id: uuidv4(),
    name: "Project",
    uri: "/home/projects",
  },
  {
    id: uuidv4(),
    name: "Collections",
    uri: "/home/collection",
  },
  {
    id: uuidv4(),
    name: "Profile",
    uri: "/home/profile",
  },
];
