import getPriceProperties from "../getPriceProperties";

test("should return numeric value along with billingPeriod if priceString contains certain amount of money", () => {
  const { isNumeric, numericValue, amount, billedPer } = getPriceProperties(
    "$10/month"
  );

  expect(isNumeric).toBe(true);
  expect(numericValue).toBe(10);
  expect(amount).toBe("$10");
  expect(billedPer).toBe("month");
});

test("isNumeric should be false if some description based value is provided", () => {
  const { isNumeric, priceString } = getPriceProperties("Based on usage");

  expect(isNumeric).toBe(false);
  expect(priceString).toBe("Based on usage");
});
