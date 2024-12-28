import app from "./app";

const port: number = Number(process.env.PORT) || 3000;

// Start Server
app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
