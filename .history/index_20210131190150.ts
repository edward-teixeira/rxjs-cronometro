import { interval, fromEvent, pipe } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

let decimoDeSegundo$ = interval(100);
const botaoIniciar = document.querySelector('#botao-iniciar');
const botaoParar = document.querySelector('#botao-parar');
const tempoDisplay = document.querySelector<HTMLElement>('#tempoDisplay');
const cliqueIniciar$ = fromEvent(botaoIniciar, 'click');
const cliqueParar$ = fromEvent(botaoParar, 'click');

cliqueIniciar$.subscribe(() => {
    decimoDeSegundo$
    .pipe(
        map((timer) => timer/10),
        takeUntil(cliqueParar$))
    .subscribe(result => {
        tempoDisplay.innerText = result + 's'
    })
});
