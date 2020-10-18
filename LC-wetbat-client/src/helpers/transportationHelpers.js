
export default function transportationHelper(transData) {

  let result = {};
  for (let trans of transData) {
    if (!result[trans.quote_id]) {
      result[trans.quote_id] = [trans.name];
    } else {
      result[trans.quote_id].push(trans.name);
    }
  }

  return result;
}