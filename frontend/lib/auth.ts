// Firebase auth removed — no authentication required

export const login = async (email: string, password: string) => {
  return Promise.resolve();
};

export const signup = async (email: string, password: string) => {
  return Promise.resolve();
};

export const logout = async () => {
  return Promise.resolve();
};

export const listenToAuth = (callback: (user: any) => void) => {
  callback(null);
  return () => {};
};