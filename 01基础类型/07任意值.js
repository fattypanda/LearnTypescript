(function () {
    // 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用any类型来标记这些变量：
    var notSure = 4;
    notSure = "maybe a string instead";
    notSure = false;
})();
(function () {
    // 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为Object有相似的作用，就像它在其它语言中那样。 但是Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
    var notSure = 4;
    notSure.ifItExists(); // okay, ifItExists might exist at runtime  ifItExists 可能在运行时存在
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check) toFixed 存在（但编译器不检查）
    var prettySure = 4;
    // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'. 错误：Object 类型上不存在 toFixed 属性
})();
(function () {
    // 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
    var list = [1, true, 'free'];
    list[1] = 100;
})();
