const expresss = require('express');
const cors = require('cors');
const contactsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");
const app = expresss();

app.use(cors());
app.use(expresss.json());
app.use("/api/contacts", contactsRouter);

app.get('/', (req, res) => {
    res.json({ messeage: 'Welcome to contact book application.' });
});
app.use("/api/contacts", contactsRouter);
app.use((req, res, next) => {

    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {

    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});
module.exports = app;