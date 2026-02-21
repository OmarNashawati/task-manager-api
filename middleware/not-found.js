export const notFound = (req, res) => {
  return res.status(404).send(`
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The route you are looking for does not exist.</p>
      <a href="/">
            Go Back Home
        </a>
    </div>
    `);
};
