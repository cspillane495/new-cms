import { formatISO, isValid, add, isAfter, parseISO } from "date-fns";

export function setToken(token) {
  if (!token) {
    return sessionStorage.clear();
  }
  const tok = token.split(".");
  tok.map((token, i) => {
    sessionStorage.setItem(`tok${i}`, token);
  });
  sessionStorage.setItem("tokeDate", formatISO(new Date()));
}

export function getToken() {
  const ogTokeDate = sessionStorage.getItem("tokeDate");
  const today = parseISO(formatISO(new Date()));
  const ogTokeDateISO = parseISO(ogTokeDate);
  const addHours = add(ogTokeDateISO, { hours: 4 });
  const compare = isAfter(today, addHours);

  if (!compare) {
    const tok1 = sessionStorage.getItem("tok0");
    const tok2 = sessionStorage.getItem("tok1");
    const tok3 = sessionStorage.getItem("tok2");

    const finalTok = `${tok1}.${tok2}.${tok3}`;

    return finalTok;
  } else {
    return sessionStorage.clear();
  }
}
