(() => {
  //  TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组。
  let list: number[] = [1, 2, 3];
})();
(() => {
  //  第二种方式是使用数组泛型，Array<元素类型>。
  let list: Array<number> = [1,2,3];
  //  指定数组中可能存在的多种类型
  let types: Array<number|string> = [1, '1'];
})();
