export default function handler(req, res) {
  const { uid } = req.query
  const cookies = req.cookies
  // res.status(200).json({ name: `Sarah Ra ${uid} ${JSON.stringify(cookies)}` })
  // res.status(500).send({ error: `error` })
  res.redirect(307, `/api/user`)
}
