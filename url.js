const url =
  "https://www.nseindia.com/api/corporates-pit?index=equities&from_date=1-3-2020&to_date=31-5-2020";
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
      "defaultLang=en; _ga=GA1.1.2009023343.1675525128; ak_bmsc=6588843C10425817BEE24D6A1A90536E~000000000000000000000000000000~YAAQhDkgF6SkmlSGAQAAJFTeZBL/YxXVPhmGGuc9q1vbSJqERCfV9YL+OGpid4WDh896MFWKQw1JUor/+zQqn7p63yJ92RfsDD6EZ4XLOuTnQaz4Bf45jJF8mfeKVqD0x4yPAJwhFS3Lrp2+iyC5zP8eqOdsQeSIjHD+omb/c6E2Wi87Qsg5nOcyRuryMEThY6eTVJ9XHatpDGDUp0RSC8pPHfu/L1KOdzJb7D82uHMVzLvWOQ+Ckih2ztC8MsluHGI6FrKEnG9h71kzvaZVpMUyDfllY7R/wUrP/NAtDCuVmmY90zEuQYr0Msr7ETaOGA6hSxc7I4grFF749iNegv5sG8FSrsWCH5IvC212G8wBnbsEquE2TCtkU7dw0E9g9VRG98uh2Q+vIi54utJ0nEBOd4eQ9rD1w1eoFyIOjYghcVQjVJ0h/BKRLOX14+GPj18gJlBNVx4EIlkM75jgx4giNfKL66KPBH/ktHw/jEaAI5tqeX3vl6zLXWI=; nsit=uoADt8a44p67es2YCEBke9cu; AKA_A2=A; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY3NjczMzUyMywiZXhwIjoxNjc2NzM3MTIzfQ.hfiONqWmOny9Tx5tCQ_7X4n7f8hTCcADeuC9h1O9bcI; bm_sv=766D761D67B07E4BEF623A62B86E7EAA~YAAQlzkgF7Ft7WOGAQAAuykbZRK65A/KuO5NZ79uwKDXvCxJZ+yb6F1ovocePGuE8rbSQIZpxr8TjpiBp5++fAZCbDmvDVuA0HOh0KLLb11Schr91YIkZp+MHhaAQWNu2sp47Agl4keHpnUe7sGx11mEuPcMRsbt7jsAdJrfsCLafeQnXlQRDXthSqC/E2KHbM/B27kf4n/ygaN8l91OCtsmn9iPX+c7niEEHBH4dZR4/UanlDJgjH1fTf0Sxvzc4moE~1; RT=\"z=1&dm=nseindia.com&si=0eaa3a39-7e48-400e-8d8f-08bd7e69a0fb&ss=lea3u8e0&sl=1&tt=1kp&bcn=%2F%2F684d0d41.akstat.io%2F\"; _ga_PJSKY6CFJH=GS1.1.1676733511.3.1.1676733525.46.0.0",
    Referer:
      "https://www.nseindia.com/companies-listing/corporate-filings-insider-trading",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: null,
  method: "GET",
};

module.exports = { url, header };

