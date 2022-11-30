const axios = require("axios");
const { url, header } = require("./url");
const fun = async () => {
  // const data = await axios(url, header);
  // const res = data.data.data;
  let cr = 10 ** 7;
  
  let datas = [
    {
      symbol: 'CYIENT',
      company: 'Cyient Limited',
      anex: '7(2)',
      acqName: 'Anand Parameswaran',
      date: '31-May-2020 21:00',
      pid: '1072833',
      tkdAcqm: null,
      buyValue: '0',
      sellValue: '0',
      buyQuantity: '0',
      sellquantity: '0',
      secType: 'Equity Shares',
      secAcq: '24900',
      did: '287900',
      tdpTransactionType: 'Buy',
      tdpDerivativeContractType: '-',
      xbrl: 'https://archives.nseindia.com/corporate/xbrl/IT_1072833_262838_31052020090047_WEB.xml',
      personCategory: 'Employees/Designated Employees',
      befAcqSharesNo: '50168',
      befAcqSharesPer: '0.05',
      secVal: '100',
      securitiesTypePost: 'Equity Shares',
      afterAcqSharesNo: '75068',
      afterAcqSharesPer: '0.07',
      acqfromDt: '25-May-2020',
      acqtoDt: '27-May-2020',
      intimDt: '29-May-2020',
      acqMode: 'Market Purchase',
      derivativeType: '-',
      exchange: 'NSE',
      remarks: '-'
    },
    {
      symbol: 'CYIENT',
      company: 'Cyient Limited',
      anex: '7(2)',
      acqName: 'Anand Parameswaran',
      date: '31-May-2020 21:00',
      pid: '1072833',
      tkdAcqm: null,
      buyValue: '0',
      sellValue: '0',
      buyQuantity: '0',
      sellquantity: '0',
      secType: 'Equity Shares',
      secAcq: '24900',
      did: '287900',
      tdpTransactionType: 'Sell',
      tdpDerivativeContractType: '-',
      xbrl: 'https://archives.nseindia.com/corporate/xbrl/IT_1072833_262838_31052020090047_WEB.xml',
      personCategory: 'Employees/Designated Employees',
      befAcqSharesNo: '50168',
      befAcqSharesPer: '0.05',
      secVal: '100',
      securitiesTypePost: 'Equity Shares',
      afterAcqSharesNo: '75068',
      afterAcqSharesPer: '0.07',
      acqfromDt: '25-May-2020',
      acqtoDt: '27-May-2020',
      intimDt: '29-May-2020',
      acqMode: 'Market Sale',
      derivativeType: '-',
      exchange: 'NSE',
      remarks: '-'
    },
  ]
  
  
  const res = datas;
  
  
  const val = res.reduce((acc, cur) => {
    // acc[cur.symbol] = { secValue: 0, plegeValue: 0, pledgeInvoke: 0, ESOP: 0, secAcq: 0 }
    if (!acc[cur.symbol]) {
      acc[cur.symbol] = { secValue :0 , secAcq :0}
      console.log(cur.acqMode)
      if(cur.acqMode == 'Market Purchase' ){
        // acc[cur.symbol].secValue += +cur.secVal
        // acc[cur.symbol].secAcq += +cur.secAcq
        acc[cur.symbol] = {...acc[cur.symbol],secValue:+cur.secVal,secAcq:+cur.secAcq}
      }
    }

    if (acc[cur.symbol]) {
      if(cur.acqMode == 'Market Sale' ){
        // acc[cur.symbol].secValue += -cur.secVal
        // acc[cur.symbol].secAcq += -cur.secAcq
        acc[cur.symbol] = {...acc[cur.symbol],secValue:acc[cur.symbol].secValue -= +cur.secVal,
          secAcq:acc[cur.symbol].secAcq += +cur.secAcq}
      }
    }
      
    return acc;
  }, {});
  // let d = res.map(s=>console.log(s.acqMode))
  // console.log(res)
  console.log(val)
};
fun();
