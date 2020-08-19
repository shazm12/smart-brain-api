const Clarifai =require('clarifai');

const app = new Clarifai.App({
 apiKey: 'e33d32118c744a68b0e08b6ac090706e'
});

const handleAPIcall= (req,res) => {
	
}

const handleImage = (req, res,db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports= {
   handleImage : handleImage
   handleAPIcall : handleAPIcall
}