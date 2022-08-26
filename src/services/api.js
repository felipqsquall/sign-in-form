export async function signIn({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "felipe" && password === "rosa") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
