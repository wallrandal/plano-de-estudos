<template>
    <div>
        <h1>Ferramentas de estudos</h1>
        <br>
        <p>
            <ol>
                <li>Hardwares</li>
                <li>Softwares</li>
                <li>Outros</li>
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