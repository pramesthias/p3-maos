const { connect } = require("./mongo");

// const products =

connect().then(async (database) => {
  const productDB = database.collection("Products");
  const newProducts = products.map((e) => {
    return e;
  });

  const result = await productDB.insertMany(newProducts);
  console.log(result);
});
