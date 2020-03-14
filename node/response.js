const success = data => {
  return { success: true, ...data };
};

const error = data => {
  return { success: false, ...data };
};

module.exports = {
  success,
  error
};
