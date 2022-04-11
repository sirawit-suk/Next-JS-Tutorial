// req = HTTP incoming message
// res = HTTP server response
export default function handler(req, res) {
  // return 200 ok, and json {"text" : "Hello"}
  res.status(200).json({ text: 'Hello' })
}