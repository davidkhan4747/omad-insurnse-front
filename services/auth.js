import { v4 as uuid } from "uuid";

// type SignInRequestData = {
//   email: string;
//   password: string;
// };

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function SignInRequest(data) {
  await delay();
  return {
    token: uuid(),
    user: {
      name: "AAAAAAAA SIGIN_IN",
      email: "AAA@AAA.MAILCOM SIGIN_IN",
    },
  };
}
export async function recoverUserInformation() {
  await delay();
  return {
    user: {
      name: "AAAAAAAA RECOVER",
      email: "AAA@AAA.MAILCOM RECOVER",
    },
  };
}
