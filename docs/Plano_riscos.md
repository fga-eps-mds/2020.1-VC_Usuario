# Registro dos Riscos 
## Histórico de Revisão

|    Data    | Versão |                             Alteração                             |                    Autor                    |
|:----------:|:------:|:-----------------------------------------------------------------:|:-------------------------------------------:|
|12/09/2020|0.1|Criação do Documento|Emily Dias|
|13/09/20020|0.2|Tabela de riscos|Emily Dias|
|06/10/2020|0.3|Revisão da Tabela|Emily Dias e Daniel Barcelos|
|09/10/2020|0.4|Adicionando tabela de ações corretiva|Emily Dias| 


## 1. Introdução

O Plano de Gerenciamento de Riscos tem por objetivo a identificação, análise e planejamento de medidas para os possíveis riscos que o projeto pode enfrentar. Isso porque, ao identificar problemas passíveis de ocorrer, atividades de tratamento de riscos podem ser planejadas e executadas sempre que necessário.


## 2. Estrutura Analítica de Riscos (EAR)

É uma ferramenta pela qual você agrupa riscos e organiza-os em categorias, serve como um guia para análise do contexto, da documentação, e também para questionamento das partes interessadas. Abaixo terá as categorias do EAR:

* **Técnico**: Esses são os riscos associados à tecnologia, complexidade, requisitos e qualidade.
* **Externo**: Esses são os riscos relativos ao cliente, mercado ou ambiente.
* **Organizacional**: Esses são relacionados à priorização, dependências e recursos do projeto.
* **Gerência**: Esses são relativos à estimativa, controle, planejamento e comunicação.


## 3. Análise Quantitativa

Tem por objetivo priorizar e categorizar os riscos.


### 3.1. Probabilidade

|Probabilidade|Intervalo|Peso|
|:----:|:-----:|:------:|
|**Muito Baixa**|0 a 10|1|
|**Baixa**| 11 a 30|2|
|**Média**| 31 a 50|3|
|**Alta**| 51 a 65|4|
|**Muito Alta**| 65 a 100| 5|


### 3.2. Impacto

|Impacto|Descrição|Peso|
|:----:|:-----:|:------:|
|**Muito Baixo**|Impacto pouco expressivo no desenvolvimento do projeto|1|
|**Baixo**| Pouco impacto no desenvolvimento do projeto|2|
|**Médio**| Possui certo impacto porém é facilmente recuperado|3|
|**Alto**| Há grande impacto no desenvolvimento do projeto|4|
|**Muito Alto**| Impacto impede o procedimento do projeto| 5|


### 3.3. Prioridade

Se baseando com os valores de impacto e de probabilidade, é feito um cálculo Probabilidade/Impacto para determinar a urgência e prioridade do risco.

|Probabilidade/Impacto|Muito Baixa|Baixo|Média|Alta|Muito Alta|
|:----:|:-----:|:------:|:------:|:------:|:------:|
|**Muito Baixa**|1|2|	3|	4|	5|
|**Baixa**| 2|4	|6	|8	|10|
|**Média**| 3|6|	9	|12|	15|
|**Alta**| 4| 8	|12	|16|	20|
|**Muito Alta**| 5| 	10|	15	|20	|25|

Sendo que:

- Prioridade de 21 a 25: Muito Alto
- Prioridade de 16 a 20: Alto
- Prioridade de 11 a 15: Médio
- Prioridade de 6 a 10: Baixo
- Prioridade de 1 a 5: Muito Baixo


## 4. Identificação dos Riscos

É feito um levantamento dos riscos para poderem ser categorizados, e esse levantamento é feito através de comparações e se utiliza de elementos anteriores e similares para ter uma concepção maior do projeto.


## Riscos levantados

|Risco| Descrição| Ação Preventiva|Ação Corretiva|Categoria|Probabilidade|Impacto|	Prioridade|
|:----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|**R01**| Dificuldade com as tecnologias do projeto | Estudo e pareamentos efetivos| Técnico| 3| 5| 22|
|**R02**| Entregas atrasadas| Definir novas datas e caso precise um novo pareamento| Gerência| 4| 4| 13|
|**R03**| Qualidade do projeto não atender às expectativas do cliente| Ter reuniões frequentes com o cliente para obter validação do projeto| Externo| 3| 4| 20|
|**R04**| Alguns dos membros ficarem doentes| Seguir as dicas do ministério da saúde| Externo| 3| 4| 10|
|**R05**| Indisponibilidade de membros da equipe| Ter uma maior organização de tempo e redistribuição de tarefas| Externo| 2| 4| 10|
|**R06**| Baixa produtividade dos integrantes do grupo| Motivação dos membros, e uma maior integração com reuniões constantes| Gerência| 3| 5| 15|
|**R07**| Presença dos membros durante Daily e reunião de planejamento| Definir datas, horários e locais que sejam acessíveis a todos| Gerência| 4| 5| 13|
|**R08**| Alteração do escopo| Planejar corretamente a sprint, documentar e aprimorar os requisitos| Gerência| 5| 4| 20|
|**R09**| Desistência da disciplina| Estimular a máxima participação dos membros da equipe| Gerência| 2| 5| 10|
|**R10**| Falta de comunicação| Elaborar e seguir plano de comunicações| Organizacional| 4| 3| 13|
|**R11**| Conflito entre entregas da sprint e de tarefas de outras disciplinas| Diminuir o escopo da sprint e redistribuir tarefas| Externo| 5| 4| 12|
|**R12**| Falta de um grupo de EPS para gerenciar o grupo e não ter uma gestão boa| Ir atrás de pessoas mais experientes em casos de dúvidas e aprender metodologias de gerência| Organizacional| 3| 4| 20|
|**R13**| Alteração nas datas da disciplina| Redefinir datas das entregas| Externo| 2| 4| 8|
|**R14**| Greve na UNB| Não há nenhuma ação a ser feita| Externo| 2| 5| 1|


## 5. Bibliografia

* RODRIGUES, Eli. EAR para projetos de software. Disponível em <https://www.elirodrigues.com/2013/09/21/gerenciamento-de-riscos-ear-para-projetos-de-software/>. Acesso em 12 set 2020.

* JOÃO, Lucas. Plano de Gerenciamento de Riscos do grupo ArBC. Disponível em: <https://github.com/fga-eps-mds/2019.2-ArBC/blob/develop/docs/Plano-Gerenciamento-Riscos.md>. Acesso em 12 set 2020.

* FREITAS, Renata. Aplique o Plano de Gerenciamento de Riscos no seu negócio. Disponível em: <https://www.glicfas.com.br/plano-de-gerenciamento-de-riscos/>. Acesso em 12 set 2020

* FREITAS, Renata. Aplique o Plano de Gerenciamento de Riscos no seu negócio. Disponível em: <https://www.glicfas.com.br/estrutura-analitica-de-riscos-2/>. Acesso em 12 set 2020

* VITOR, Lucas. Plano de Gerenciamento de Riscos do grupo Aix. Disponível em: <https://fga-eps-mds.github.io/2019.1-Aix/gerencia/2019/04/06/plano-de-gerenciamento-de-riscos/>. Acesso em 12 set 2020.

* SIQUEIRA, Lucas; OLIVEIRA, Caio. Plano de Gerenciamento de Riscos do grupo +Monitoria. Disponível em: <https://fga-eps-mds.github.io/2019.1-MaisMonitoria/docs/plano-riscos>. Acesso em 12 set 2020.
