const convertObject = (configuration) => (data) =>
  Object.entries(data).reduce((acc, [k, v]) => {
    if (k in configuration.columns) {
      if (!acc[configuration.name]) {
        acc[configuration.name] = {};
      }
      acc[configuration.name][k] = v;
    } else {
      acc[k] = v;
    }

    return acc;
  }, {});

module.exports = convertObject;
