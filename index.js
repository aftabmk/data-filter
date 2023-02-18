const axios = require("axios");
const { url, header } = require("./url");
const fun = async () => {
  const data = await axios(url, header);
  const res = data.data.data;
  let cr = 10 ** 7;


  const val = res.reduce((acc, cur) => {
    // acc[cur.symbol] = { secValue: 0, plegeValue: 0, plegeValue: 0, ESOP: 0, secAcq: 0 }
    if (acc[cur.symbol]) {
      switch (cur.acqMode) {
        case 'Market Purchase':
          acc[cur.symbol] = {
            ...acc[cur.symbol], secValue: acc[cur.symbol].secValue += +cur.secVal / cr,
            secAcq: acc[cur.symbol].secAcq += +cur.secAcq
          }
          break;
        case 'Market Sale':
          acc[cur.symbol] = {
            ...acc[cur.symbol], secValue: acc[cur.symbol].secValue += -cur.secVal / cr,
            secAcq: acc[cur.symbol].secAcq += +cur.secAcq
          }
          break;
        case "Pledge Creation":
          acc[cur.symbol] = {
            ...acc[cur.symbol], plegeValue: acc[cur.symbol].plegeValue += +cur.secVal / cr,
            secAcq: acc[cur.symbol].secAcq += +cur.secAcq
          }
          break;
        case "Revokation of Pledge":
          acc[cur.symbol] = {
            ...acc[cur.symbol], plegeValue: acc[cur.symbol].plegeValue += -cur.secVal / cr,
            secAcq: acc[cur.symbol].secAcq += +cur.secAcq
          }
          break;
        case "Invocation of pledge":
          acc[cur.symbol] = {
            ...acc[cur.symbol], pledgeInvoke: acc[cur.symbol].pledgeInvoke += +cur.secVal / cr,
            secAcq: acc[cur.symbol].secAcq += +cur.secAcq
          }
        case "ESOP": switch (cur.tdpTransactionType) {
          case 'Buy':
            acc[cur.symbol] = {
              ...acc[cur.symbol], ESOP: acc[cur.symbol].pledgeInvoke += +cur.secVal / cr,
              secAcq: acc[cur.symbol].secAcq += +cur.secAcq
            }
            break;
          case 'Sell':
            acc[cur.symbol] = {
              ...acc[cur.symbol], ESOP: acc[cur.symbol].pledgeInvoke += -cur.secVal / cr,
              secAcq: acc[cur.symbol].secAcq += +cur.secAcq
            }
            break;
        }

      }
    }
    if (!acc[cur.symbol]) {
      // acc[cur.symbol] = { secValue: 0, secAcq: 0 }
      acc[cur.symbol] = { secValue: 0, plegeValue: 0, pledgeInvoke: 0, ESOP: 0, secAcq: 0 }
      switch (cur.acqMode) {
        case 'Market Purchase':
          acc[cur.symbol] = { ...acc[cur.symbol], secValue: +cur.secVal / cr, secAcq: +cur.secAcq }
          break;
        case 'Market Sale':
          acc[cur.symbol] = { ...acc[cur.symbol], secValue: -cur.secVal / cr, secAcq: +cur.secAcq }
          break;
        case "Pledge Creation":
          acc[cur.symbol] = { ...acc[cur.symbol], plegeValue: +cur.secVal / cr, secAcq: +cur.secAcq }
          break;
        case "Revokation of Pledge":
          acc[cur.symbol] = { ...acc[cur.symbol], plegeValue: -cur.secVal / cr, secAcq: +cur.secAcq }
          break;
        case "Invocation of pledge":
          acc[cur.symbol] = { ...acc[cur.symbol], pledgeInvoke: +cur.secVal / cr, secAcq: +cur.secAcq }
        case "ESOP": switch (cur.tdpTransactionType) {
          case 'Buy': 
          acc[cur.symbol] = { ...acc[cur.symbol], ESOP: +cur.secVal / cr, secAcq: +cur.secAcq }
          }
            break;
          case 'Sell': 
          acc[cur.symbol] = { ...acc[cur.symbol], ESOP: -cur.secVal / cr, secAcq: +cur.secAcq }
          break;
        }
      }

    return acc;
  }, {});
  // let d = res.map(s=>console.log(s.acqMode))
  // console.log(res)
  console.log(val)
};
fun();
