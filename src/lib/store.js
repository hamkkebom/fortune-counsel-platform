// Client-side only — all functions are for client components only

export const STORE_KEYS = {
  IS_LOGGED_IN: "isLoggedIn",
  HAS_LOGGED_IN: "hasLoggedIn",
  USER: "user",
  COIN_BALANCE: "coinBalance",
  FAVORITES: "favorites",
  RECENT_CONSULTANTS: "recentConsultants",
  VISIT_COUNT: "visitCount",
  SEARCH_HISTORY: "searchHistory",
  COIN_HISTORY: "coinHistory",
  CONSULT_HISTORY: "consultHistory",
  QNA_LIST: "qnaList",
  TOOLTIP_HIDE: "toolTipHide",
};

export function getStore(key) {
  if (typeof window === "undefined") return null;
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  } catch {
    return null;
  }
}

export function setStore(key, value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function removeStore(key) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {}
}

export function getUser() {
  return getStore(STORE_KEYS.USER) || { nickname: "게스트", email: "", coinBalance: 0 };
}

export function isLoggedIn() {
  return getStore(STORE_KEYS.IS_LOGGED_IN) === true;
}

export function loginUser(userData) {
  setStore(STORE_KEYS.IS_LOGGED_IN, true);
  setStore(STORE_KEYS.HAS_LOGGED_IN, true);
  setStore(STORE_KEYS.USER, userData);
}

export function logoutUser() {
  removeStore(STORE_KEYS.IS_LOGGED_IN);
  removeStore(STORE_KEYS.USER);
}

export function addCoin(amount) {
  const user = getUser();
  user.coinBalance = (user.coinBalance || 0) + amount;
  setStore(STORE_KEYS.USER, user);
  return user.coinBalance;
}

export function getVisitCount() {
  return getStore(STORE_KEYS.VISIT_COUNT) || 0;
}

export function incrementVisitCount() {
  const count = getVisitCount() + 1;
  setStore(STORE_KEYS.VISIT_COUNT, count);
  return count;
}
