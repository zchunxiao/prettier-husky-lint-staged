function foo(a, b, c, d, e, f) {
  a();
  b();
  c();
  d();
  e();
  f();
}
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
