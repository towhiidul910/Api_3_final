// This file lives as long as the JS app is running
//! no being use
let accessToken: string | null = null;

export const tokenStore = {
  get() {
    return accessToken;
  },
  set(token: string) {
    accessToken = token; // what does it mean
  },
  clear() {
    accessToken = null;
  },
};
