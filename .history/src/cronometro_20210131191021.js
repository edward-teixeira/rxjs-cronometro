"use strict";
export const __esModule = true;
import { interval, fromEvent } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
var decimoDeSegundo$ = interval(100);
var botaoIniciar = document.querySelector('#botao-iniciar');
var botaoParar = document.querySelector('#botao-parar');
var tempoDisplay = document.querySelector('#tempoDisplay');
var cliqueIniciar$ = fromEvent(botaoIniciar, 'click');
var cliqueParar$ = fromEvent(botaoParar, 'click');
cliqueIniciar$.subscribe(function () {
    decimoDeSegundo$
        .pipe(map(function (timer) { return timer / 10; }), takeUntil(cliqueParar$))
        .subscribe(function (result) {
        tempoDisplay.innerText = result + 's';
    });
});
