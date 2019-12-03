const getPriceProperties = priceString => {
  // Used to see if there are numbers in priceStr including commas
  // And to extract exact amount without currency
  const re = /[0-9,.]+/;

  if (re.test(priceString)) {
    const [amount] = priceString.match(re);
    // eslint-disable-next-line
    const [_, billedPer] = priceString.split("/");

    return {
      isNumeric: true,
      amount,
      billedPer,
      priceString
    };
  } else {
    return {
      isNumeric: false,
      priceString
    };
  }
};

export default getPriceProperties;
