// const db = require("../config/database");
const {products} = require(`../config/database`)
// ==> Método responsável por criar um novo 'Product':
module.exports.index = async (req, res) => {
    const product = await products.findAll();
    return res.json(product);
};


exports.apagar = async (req, res)=> {
  const { id } = req.params
  const product = await products.findOne({ where: { id } })
  if (!products) {
    res.status(401).json({ message: 'Usuario não encontrado' })
  } else {
    await products.destroy({ where: { id } })
    res.status(200).json({ ok: true })
  }
};

exports.createProduct = async (req, res) => {
  const { nome_time, cidade, classificacao, pontos } = req.body;
    console.log('req',  req.body)

  const body = { nome_time, cidade, classificacao, pontos };
    console.log('body', body)

  const response = await products.create(body)
  products
  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product:response
    },
  });
};
