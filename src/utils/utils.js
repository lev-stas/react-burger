export function checkRespose(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка ${res.status}`);
  }
  return res.json();
}

export const setCookie = (name, value, maxAge) => {
  const updateCookie = `${name}=${value}; path=/; max-age=${maxAge}`;
  document.cookie = updateCookie;
};

export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
