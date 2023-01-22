const express = require('express');
const cors = require('cors');
require('dotenv').config();
const ratelimit = require('express-rate-limit');

const PORT = process.env.PORT || 5000;

const app = express();

//Rate Limiter
const limiter = ratelimit({windowMs:10*60*1000, //time 10 min
    max: 10, //tries
});

app.use(cors());
app.use(limiter);
app.set('trust proxy', 1);

//Routes
app.use('/api', require('./routes'));

app.listen(PORT, ()=> console.log(`Server running at PORT ${PORT}`));
