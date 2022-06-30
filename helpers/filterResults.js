const Smartphone = require("../model/Smartphone");

async function filterResults(req) {
  const page = new Number(req.query.page || 1);
  const count = new Number(req.query.count || 10);

  // Sort by price parameter as query parameter

  const sortBy = req.query.sortBy;
  const desc = sortBy && sortBy === "desc" ? -1 : 1;

  // Filters on brand, color, rating, screenSize, price
  const { brand, color, rating, screenSize, startPrice, endPrice, inStock } =
    req.query;

  const queryList = [];

  if (startPrice && endPrice) {
    queryList.push({
      $and: [
        {
          productPrice: {
            $gte: +startPrice,
          },
        },
        {
          productPrice: {
            $lte: +endPrice,
          },
        },
      ],
    });
  }

  if (color) {
    const colorsRequested = color && color.split("--");
    queryList.push({
      colors: { $elemMatch: { $in: colorsRequested } },
    });
  }

  if (brand) {
    const brandsRequested = brand.split("--");
    queryList.push({
      brand: { $in: brandsRequested },
    });
  }

  if (rating) {
    queryList.push({ rating: { $gte: +rating } });
  }

  if (screenSize) {
    const screenSizeRequested = +screenSize;
    queryList.push({ screenSize: { $gte: screenSizeRequested } });
  }

  if (inStock && inStock === "true") {
    queryList.push({ quantity: { $gt: 0 } });
  }

  console.log(queryList);
  let filterQueuries = {};
  if (queryList.length > 0) {
    filterQueuries = { $and: queryList };
  }

  const foundList = await Smartphone.find(filterQueuries)
    .sort({ productPrice: desc })
    .skip((page - 1) * count)
    .limit(count);

  return foundList;
}

module.exports = filterResults;
