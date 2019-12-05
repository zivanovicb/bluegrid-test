const getPriceProperties = priceString => {
  // Used to see if there are numbers in priceStr including commas
  // And to extract exact amount without currency
  const re = /[0-9,.]+/;

  if (re.test(priceString)) {
    const [numericValue] = priceString.match(re);
    const [amount, billedPer] = priceString.split("/");
    console.log("IS NUMERIC", numericValue);
    return {
      isNumeric: true,
      numericValue: parseInt(numericValue),
      amount,
      billedPer,
      priceString
    };
  } else {
    console.log("ITS FUCKING NOT", priceString);

    return {
      isNumeric: false,
      priceString
    };
  }
};

export default getPriceProperties;
