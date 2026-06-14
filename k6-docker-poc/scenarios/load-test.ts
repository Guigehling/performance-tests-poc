import http from "k6/http";
import { check, sleep } from "k6";

// Configuração do teste: 10 usuários virtuais por 30 segundos.
export const options = {
    vus: 10,
    duration: "30s",
};

// Executado repetidamente por cada usuário virtual.
export default function (): void {
    // Realiza uma requisição GET.
    const response = http.get(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Valida o status da resposta e o tempo de execução.
    check(response, {
        "status é 200": (r) => r.status === 200,
        "tempo menor que 500ms": (r) => r.timings.duration < 500,
    });

    // Aguarda 1 segundo antes da próxima iteração.
    sleep(1);
}

// Gera relatório JSON 
export function handleSummary(data: any) {
    return {
        "/reports/summary.json": JSON.stringify(data, null, 2),
    };
}