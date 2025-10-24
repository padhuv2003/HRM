// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');

// const authRoutes = require('../src/routes/auth.routes');
// const employeeRoutes = require('../src/routes/employee.routes');
// const attendanceRoutes = require('../routes/attendance.routes');
// const errorMiddleware = require('../src/middlewares/error.middleware');

// const swaggerDocument = YAML.load(__dirname + '/docs/openapi.yaml');

// const app = express();
// app.use(helmet());
// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use('/api/auth', authRoutes);
// app.use('/api/employees', employeeRoutes);
// app.use('/api/attendance', attendanceRoutes);

// app.use(errorMiddleware);

// module.exports = app;
// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

// FIX: Correcting all relative paths assuming app.js is in src/
// All routes files are located in src/routes/
const authRoutes = require('./routes/auth.routes'); 
const employeeRoutes = require('./routes/employee.routes');
const attendanceRoutes = require('./routes/attendance.routes'); // <-- Corrected path
const errorMiddleware = require('./middlewares/error.middleware');

// FIX: Correcting Swagger path assuming docs/openapi.yaml is next to app.js
const swaggerDocument = YAML.load(path.join(__dirname ,"..",'docs', 'openapi.yaml')); 

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/attendance', attendanceRoutes);

app.use(errorMiddleware);

module.exports = app;

