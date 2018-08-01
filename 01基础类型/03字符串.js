(function () {
    // JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用string表示文本数据类型。 和JavaScript一样，可以使用双引号（"）或单引号（'）表示字符串。
    var name = 'bob';
    name = 'smith';
})();
(function () {
    // 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（` ），并且以${ expr }这种形式嵌入表达式
    var name = "Gene";
    var age = 37;
    var sentence = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
    // sentence 与 sentence2 结果相同
    var sentence2 = "Hello,my name is " + name + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
})();
