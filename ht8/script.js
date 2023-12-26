const loggingDecorator = (originalFunction) => {
  return function (...args) {
    console.log(`${originalFunction.name}, args: ${args.join(", ")}`);
    const result = originalFunction.apply(this, args);
    return result;
  };
};

const someFn = (param1, param2, ...params) => {
  console.log("Executing someFn");
  return params.join(", ");
};

// Приклад:
const loggedFn = loggingDecorator(someFn);

loggedFn(1, 2, 3);
loggedFn("test");
