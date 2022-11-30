if (cur.acqMode == "Market Purchase") {
    acc[cur.symbol] = {
      ...acc[cur.symbol], securityValue: +cur.secVal / cr,
      secAcq: +cur.secAcq,
    };
  }
  if (cur.acqMode == "Market Sale") {
    acc[cur.symbol] = {
      ...acc[cur.symbol], securityValue: -+cur.secVal / cr,
      secAcq: +cur.secAcq,
    };
  }
  if (cur.acqMode == "Pledge Creation") {
    acc[cur.symbol] = {
      ...acc[cur.symbol], plegeValue: +cur.secVal / cr
    };
  }
  if (cur.acqMode == "Revokation of Pledge") {
    acc[cur.symbol] = {
      ...acc[cur.symbol], plegeValue: -cur.secVal / cr
    };
  }
  if (cur.acqMode == "Invocation of pledge") {
    acc[cur.symbol] = {
      ...acc[cur.symbol], pledgeInvoke: +cur.secVal / cr
    };
  }
  if (cur.acqMode == "ESOP") {
    if (cur.tdpTransactionType == 'Buy') {
      acc[cur.symbol] = {
        ...acc[cur.symbol], ESOP: +cur.secVal / cr
      }
    }
    if (cur.tdpTransactionType == 'Sell') {
      acc[cur.symbol] = {
        ...acc[cur.symbol], ESOP: +cur.secVal / cr
      }
    }
  }


  switch(cur.acqMode){
    case "Market Purchase":  
    acc[cur.symbol].securityValue += +cur.secVal
    acc[cur.symbol].secAcq += +cur.secAcq
    break;
    case "Market Sale" : 
    acc[cur.symbol].securityValue -= +cur.secVal
    acc[cur.symbol].secAcq -= +cur.secAcq
    break;
    case "Pledge Creation" : acc[cur.symbol] = {
      ...acc[cur.symbol], plegeValue: +cur.secVal / cr
    }
    break;
    case "Revokation of Pledge" : acc[cur.symbol] = {
      ...acc[cur.symbol], plegeValue: -cur.secVal / cr
    }
    break;
    case "Invocation of pledge": acc[cur.symbol] = {
      ...acc[cur.symbol], pledgeInvoke: +cur.secVal / cr
    }
    break;
    case "ESOP" : switch(cur.tdpTransactionType){
      case 'Buy' : acc[cur.symbol] = {
        ...acc[cur.symbol], ESOP: +cur.secVal / cr
      }
      break;
      case 'Sell' : acc[cur.symbol] = {
        ...acc[cur.symbol], ESOP: -cur.secVal / cr
      }
      break;
    }
  }