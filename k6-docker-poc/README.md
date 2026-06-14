# K6 + TypeScript + Docker POC

POC desenvolvida para estudar os principais recursos do K6, ferramenta open source utilizada para criação e execução de testes de performance, utilizando TypeScript para desenvolvimento dos cenários e Docker para padronização do ambiente de execução.

## Conceitos praticados

- K6
- Testes de Performance
- Testes de Carga (Load Testing)
- Virtual Users (VUs)
- Checks
- HTTP Requests
- TypeScript
- esbuild
- Docker
- Docker Compose
- handleSummary

## Objetivos da POC

- Entender como criar cenários de testes de performance utilizando K6.
- Escrever scripts de teste utilizando TypeScript.
- Automatizar a geração do bundle JavaScript utilizando esbuild.
- Executar testes de forma isolada através de containers Docker.
- Validar respostas HTTP utilizando check.
- Configurar usuários virtuais e duração dos testes.
- Gerar um resumo da execução utilizando handleSummary.
- Criar uma base reutilizável para futuros testes de performance.

## Tecnologias

- TypeScript
- Node.js
- K6
- esbuild
- Docker

## Vantagens e Desvantagens

### Vantagens

- Permite criar testes de performance utilizando uma sintaxe simples baseada em JavaScript/TypeScript.
- Possui baixo consumo de recursos mesmo simulando milhares de usuários virtuais.
- Facilita a automação em pipelines de CI/CD.
- A execução via Docker garante maior portabilidade entre ambientes.
- O uso de TypeScript melhora a organização e manutenção dos cenários de teste.
- Possui recursos nativos para coleta de métricas e validações através de check.

### Desvantagens

- Não possui geração nativa de relatórios HTML amigáveis sem utilização de ferramentas adicionais.
- Algumas extensões da comunidade exigem a criação de imagens customizadas do K6.
- O ecossistema de bibliotecas é menor quando comparado a outras ferramentas de testes.
- Para cenários muito complexos pode ser necessário implementar código auxiliar para reutilização e organização dos testes.

## Referências

- https://k6.io/
- https://grafana.com/docs/k6/latest/
- https://grafana.com/open-source/k6/
- https://esbuild.github.io/
- https://docs.docker.com/