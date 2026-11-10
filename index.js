const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        application: 'Task 7 DevSecOps Application',
        status: 'Running',
        message: 'Welcome to Task 7'
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'Healthy'
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Task 7 application running on port ${PORT}`);
    });
}

module.exports = app;
