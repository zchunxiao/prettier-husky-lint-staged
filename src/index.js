function foo(a, b, c, d) {
  a();
  b();
  c();
  d();
}

// 测试用户名
function reallyLongArg() {}
function omgSoManyParameters() {}
function IShouldRefactorThis() {}

function isThereSeriouslyAnotherOne() {}
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
