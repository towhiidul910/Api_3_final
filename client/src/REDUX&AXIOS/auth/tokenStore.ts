// client\src\REDUX&AXIOS\auth\tokenStore.ts
let accessToken: string | null = null;

export const setAccessToken = {
  get() {
    return accessToken;
  },
  set(token: string) {
    accessToken = token;
  },
  clear() {
    accessToken = null;
  },
};
