const url = reqUrl;
const header = {
  headers: {
    ...headers
  },
  body: null,
  method: "GET",
};

module.exports = { url, header };

