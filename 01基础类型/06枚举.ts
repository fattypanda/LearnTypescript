(() => {
  // enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

  enum Color { Red, Green, Blue }
  let c: Color = Color.Green;

})();
(() => {
  // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从1开始编号：

  enum Color { Red = 1, Green, Blue }
  let c: Color = Color.Red;

})();
(() => {
  //  或者，全部都采用手动赋值：

  enum Color { Red = 1, Green = 2, Blue = 4 }
  let c: Color = Color.Green;

})();
(() => {
  // 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

  enum Color { Red = 1, Green, Blue }
  let colorName: string = Color[2];

  alert(colorName); // 显示'Green'因为上面代码里它的值是2

})();
