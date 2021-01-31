"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var decimoDeSegundo$ = rxjs_1.interval(100);
var botaoIniciar = document.querySelector('#botao-iniciar');
var botaoParar = document.querySelector('#botao-parar');
var tempoDisplay = document.querySelector('#tempoDisplay');
var cliqueIniciar$ = rxjs_1.fromEvent(botaoIniciar, 'click');
var cliqueParar$ = rxjs_1.fromEvent(botaoParar, 'click');
cliqueIniciar$.subscribe(function () {
    decimoDeSegundo$
        .pipe(operators_1.map(function (timer) { return timer / 10; }), operators_1.takeUntil(cliqueParar$))
        .subscribe(function (result) {
        tempoDisplay.innerText = result + 's';
    });
});
