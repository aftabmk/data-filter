const url =
  "https://www.nseindia.com/api/corporates-pit?index=equities&from_date=1-11-2021&to_date=31-12-2021";
const header = {
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua":
      '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    cookie:
    "defaultLang=en; _ga=GA1.1.2009023343.1675525128; nsit=9dRtodV4EmOBIKyfDmA_sINz; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY3Njc0MTg0OCwiZXhwIjoxNjc2NzQ1NDQ4fQ.E72AQUyQ_StzLeLNf2MpMEsGvsuvjgYgLNvdPNyCQd0; AKA_A2=A; RT=\"z=1&dm=nseindia.com&si=0eaa3a39-7e48-400e-8d8f-08bd7e69a0fb&ss=lea3uj4g&sl=0&tt=0&bcn=%2F%2F684d0d44.akstat.io%2F\"; bm_sv=32A7639371C524E3F72D8039E182D0F9~YAAQhDkgF91ZplSGAQAA8DmaZRIFBioA+uImvknDQL7/MulhEhmCWKfeEcD6soxssaZA35Re7LbG840xYLMkojxU5qbsZOe/vLmvo06vM5+Bwnd8CnSS4j8Zak3gkxZw39wmGj67dVPUAlsDYgoBEaJYn+SHHJ3Ab5Ih3cVbO6eMMT6xI9t27OM2ELGAC+/nV6G6uabV0HE9ej1jYP1U7fMoARMA/egBSG/1Q8a6muuDTCR6cicjDkdj2ZoOa6XhxDs=~1; ak_bmsc=30C9375BDAFE8724F0552AE40FBFBAB6~000000000000000000000000000000~YAAQhDkgFwpaplSGAQAA3TuaZRJV5XrrWt5ux3UT7JL2gbvoHlp5jCdQV75jqYhRjUeTsn/Uj5kg1GsYuijcY0ph0mUVzoNxEnoZ7KC3wZKjRlK+dCg4ai4YyZ0dBoEd8aFm9MLGCeSpjQYqeZwb4ikCrAj1/UhPPIisyZTZGs6UCqHBxXXhIkeih75xgDfNNPwDe9emaV2Vi9XpQZKpv3RYt4opW+K4BBujOIwM06j+S7dpLtLWRxBCnJQYhCg69QGw4BZ3yK00tR8FQf/H2mS1CZm1stV43HsWvVZ3ATNjPkbD0a+N6/A5lPPd8Chryp2LKNJ9fkSkvmVZgyKHYeCc+zLXOJK5wcYttBCBS8W6wL3iiYG09STSLTRfFF2l28sj+dCryyBuCbT9oJWV0gNR8YUqTLuHviGt0oDO6DaElpK3dHtIwKVJms9/g7t/WNduHgXvN2RKbjGgNsZx2hqzws+IgOLdvxkj1xVJoyRYFu+bEx8y/QHa0og=; _ga_PJSKY6CFJH=GS1.1.1676741848.4.1.1676741852.56.0.0",
    Referer:
      "https://www.nseindia.com/companies-listing/corporate-filings-insider-trading",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: null,
  method: "GET",
};

module.exports = { url, header };

