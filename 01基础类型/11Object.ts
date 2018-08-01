declare function create(o: object | null): void;

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
//
// 使用object类型，就可以更好的表示像Object.create这样的API。例如
(() => {
  create({ prop: 0 }); // Ok
  create(null); // Ok

  // create(42); // Error
  // create('string'); // Error
  // create(false); // Error
  // create(undefined); // Error
})();
