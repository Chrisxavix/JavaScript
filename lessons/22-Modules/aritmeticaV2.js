/* Dos funciones declaradas que serán exportados a nivel general */
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

export const operaciones = {
    sumar,
    restar,
}
