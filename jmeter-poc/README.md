# JMeter POC

POC desenvolvida para estudar os principais recursos do Apache JMeter, ferramenta amplamente utilizada para criação e execução de testes de performance em aplicações e APIs.

## Conceitos praticados

- Apache JMeter
- Thread Group
- HTTP Request
- Response Assertion
- Listeners
- Summary Report
- HTML Dashboard
- Load Testing
- Performance Testing

## Objetivos da POC

- Entender como criar cenários de testes de performance utilizando JMeter.
- Configurar usuários virtuais através do Thread Group.
- Realizar chamadas HTTP para APIs REST.
- Validar respostas utilizando Assertions.
- Gerar relatórios HTML automaticamente.
- Conhecer os principais componentes do Test Plan.

## Principais conceitos aprendidos

- O Thread Group define a quantidade de usuários e comportamento do teste.
- O HTTP Request é responsável por executar chamadas para APIs ou aplicações.
- As Assertions permitem validar respostas durante a execução.
- Os Listeners apresentam estatísticas e resultados da execução.
- O Dashboard HTML fornece uma visão completa das métricas de performance.
- O JMeter pode ser executado tanto via interface gráfica quanto por linha de comando.

## Tecnologias

- Apache JMeter
- Java

## Vantagens e Desvantagens

### Vantagens

- Interface gráfica intuitiva.
- Geração nativa de relatórios HTML.
- Grande quantidade de plugins disponíveis.
- Amplo suporte da comunidade.
- Permite testar diversos protocolos além de HTTP.

### Desvantagens

- Arquivos `.jmx` podem ser difíceis de versionar por serem XML.
- Cenários complexos podem ficar difíceis de manter pela interface gráfica.
- Consome mais memória que ferramentas como K6.
- Testes grandes podem ficar visualmente poluídos.

## Referências

- https://jmeter.apache.org/
- https://jmeter.apache.org/usermanual/index.html
- https://jmeter.apache.org/usermanual/component_reference.html