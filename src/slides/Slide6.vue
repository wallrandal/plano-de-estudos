<template>
    <div>
        <h1>Definindo a rotina de estudos</h1>
        <br>
        <p>
            <ol>
                <li>Prioridade 1: 5 a 7 vezes por semana;</li>
                <li>Prioridade 2: 2 a 3 vezes por semana;</li>
                <li>Prioridade 3: Uma vez por semana;</li>
            </ol>
        </p>
    </div>
</template>
<style lang="scss" scoped>
$breakpoint-tablet: 768px;

    p {
        font-size: 1.5em;
    }

/* Using plain CSS */
@media (max-width: $breakpoint-tablet) {
    p {
        font-size: 1em;
    }
}
</style>