const mongoose = require('mongoose');
const URI = '';

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);




mongoose
    .connect(URI)
    .then(() =>  console.log('Database connected')) 
    .catch(() => console.log(err));