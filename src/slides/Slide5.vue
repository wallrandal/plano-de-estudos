<template>
    <div>
        <h1>Definindo a escala de Prioridades</h1>
        <br>
        <p>
            <ol>
                <li>Estudos voltados para o que eu trabalho;</li>
                <li>Estudos voltados para o que eu gosto;</li>
                <li>Estudos voltados para o que eu quero trabalhar no futuro.</li>
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