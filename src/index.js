function foo(a, b, c, d) {
  a();
  b();
  c();
  d();
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
