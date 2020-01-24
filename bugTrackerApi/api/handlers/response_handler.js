const error = (err, res) =>
  res.status(400).json({
    status: false,
    error: err
  });

const success = (res, rows) =>
  res.status(200).json({
    status: true,
    data: rows,
    message: res.message
  });

module.exports = {
  error,
  success
};
