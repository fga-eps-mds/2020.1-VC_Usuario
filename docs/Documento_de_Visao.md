# Documento de Visão

## Histórico de Revisão

| **Data** | **Versão** | **Modificação** | **Autor** |
| --- | --- | --- | --- |
| 20/08/2020 | 0.1 | Abertura do documento                                      | Bruno Félix |
| 31/08/2020 | 0.2 | Inserção do template do documento                          | Bruno Félix |
| 08/09/2020 | 0.3 | Inserção dos itens 3.5, 3.6 e 3.7                          | Daniel Porto |
| 08/09/2020 | 0.4 | Inserção dos itens 1, 1.1 e 1.2                            | Emily Dias |
| 08/09/2020 | 0.5 | Inserção dos itens 2.2                                     | Bruno Félix |
| 08/09/2020 | 0.6 | Inserção dos itens 3.1, 3.2, 3.3 e 3.4                     | Enzo Gabriel |
| 08/09/2020 | 0.7 | Inserção dos itens 2.1 e 2.3                               | Daniel Barcelos |
| 09/09/2020 | 0.8 | Inserção dos itens 1.3 e 1.4                               | Denys Rógeres |
| 12/09/2020 | 1.0 | Formatação do documento: Alinhamento e Recuo               | Bruno Félix |
| 14/09/2020 | 1.1 | Revisão do Tópico 1                                        | Bruno Félix |
| 16/09/2020 | 1.2 | Revisão do Tópico 1 e 2                                    | Bruno Félix |
| 16/09/2020 | 1.3 | Revisão do Tópico 3                                        | Bruno Félix |
| 17/09/2020 | 1.4 | Inserção dos itens 4, 5, 6 e 7                             | Bruno Félix |
| 22/09/2020 | 2.0 | Revisão e alinhamento do documento a nova visão de produto | Bruno Félix |

## 1. Introdução

### 1.1 Propósito

<p style="text-align: justify;">&emsp;&emsp; 
Esse documento tem como objetivo apresentar os conceito, ideias e justificativas para o desenvolvimento da aplicação Vamos Cuidar. Fazendo uma análise precisa do problema abordado e como as pessoas são afetadas por ele, podemos desenvolver um produto com funcionalidades e requisitos impactantes e efetivas no auxílio do bem estar da comunidade universitária.
</p>

<p style="text-align: justify;">&emsp;&emsp; 
Passando por questionamentos como escopo, problemática, função do produto e requisitos, podemos levantar a visão da essência do que o produto necessita ser e servir para as pessoas. Assim, norteando todas as ações do desenvolvimento e planejamento para se construir uma aplicação de valor para seus usuários.
</p>


### 1.2 Escopo

<p style="text-align: justify;">&emsp;&emsp; 
O Vamos Cuidar é uma PWA responsiva que tem como objetivo auxiliar a UnB na maior agilidade em resolver problemas, sejam eles estruturais, acadêmicos, processuais entre outros, que impactam negativamente o dia a dia da universidade. Com uma plataforma prática e direta, a comunidade universitária pode fazer postagens sobre problemas que enfrentam no cotidiano, e com isto, os gestores podem analisar e tomar medidas para resolver esses problemas reportados.
</p>

<p style="text-align: justify;">&emsp;&emsp; 
O projeto se baseia numa proposta do evento, ocorrido nos dias 21 e 22 de novembro de 2019, "Hackathon DAF e PCTec/UnB", que tinha como tema "UnB na palma da sua mão". Nesse Hackathon, o objetivo era desenvolver uma aplicação que as pessoas pudessem relatar problemas para os administradores e assims serem rapidamente resolvidos.
</p>

<p style="text-align: justify;">&emsp;&emsp; 
Ao longo de um semestre letivo, é comum se visualizar certos problemas que demoram tempo demais para serem resolvidos por parte da administração. A falta de um meio de comunicação não burocrático e prático para a notificação desses tais problemas ocasiona que eles podem ir se perpetuando, gerando até mesmo outros problemas e prejuízos dos mais diversos.
</p>

<p style="text-align: justify;">&emsp;&emsp; 
A universidade é um espaço público, que passa de geração a geração de estudantes, professores, servidores e outros. A efetiva aplicando e desenvolvendo de um produto com raiz nesse tema de Hackathon agregado a problemática levantada, pode-se gerar um grande projeto que agregue o cotidiano e beneficie a vida da comunidade universitária, preservando e enriquecendo a Universidade de Brasília do presente e do futuro.
</p>


### 1.3 Definições, acrônimos e abreviações

| **Sigla/Termo/Acrônimo** | **Definição** |
| --- | --- |
| MDS | Métodos de Desenvolvimento de <i>Software</i> |  
| FGA | Faculdade do Gama | 
| UnB | Universidade de Brasília | 
| PWA | Progressive Web App | 


### 1.4 Visão geral

&emsp;&emsp; Este documento contém informações a respeito das características do software que está sendo desenvolvido. O documento é dividido em 8 tópico, sendo:
- Introdução: é apresentado o propósito, escopo e os detalhes em relação a visão do projeto.
- Posicionamento: descrição do problema e do produto e oportunidade de negócios.
- Descrição dos Envolvidos e dos Usuários: Detalhamento das partes envolvidas no projeto.
- Visão geral do Produto: síntese das capacidades do produto e suas funcionalidades.
- Requisitos do Produto: descrição sintetizada dos requisitos do produto.
- Restrições: detalhes sobre as restrições de design, restrições externas, como requisito operacionais ou regulamentares ou outras dependências.
- Outros requisitos do Produto: listagem dos padrões aplicáveis, dos requisitos de hardware ou plataforma, dos requisitos de desempenho e dos requisitos ambientais.
Referências: exposição das referências utilizadas.


## 2. Posicionamento

### 2.1 Oportunidade de negócios

<p style="text-align: justify;">&emsp;&emsp;
Analisando o difícil acesso a canais de comunicação quando e diz respeito a delação de problemas no campus e na universidade, agregado a demora da administração de reconhecer esses mesmos problemas e resolvemos, foi identificado a oportunidade de desenvolver uma aplicação PWA para fornecer um sistema rápido, prático e democrático para a comunidade universitária postar seus problemas do dia a dia através computadores e smartphones.
</p>


### 2.2 Descrição do problema

| **Questão** | **Informações do Produto** |
| --- | --- |
| **O problema é**         | O difícil relato de problemas e defeitos encontrados na universidades |
| **Que Afeta**            | A comunidade acadêmica |
| **Cujo impacto é**       | A demora ou ineficácia da resolução desses problemas por parte da universidade |
| **Uma boa solução seria**| Uma aplicação onde a comunidade pudesse relatar os problemas encontrados diretamente para universidade. Otimizando o diálogo e a solução | 


### 2.3 Descrição da posição do produto

<p style="text-align: justify;">&emsp;&emsp; 
 A aplicação uma vez desenvolvida, poderá se posicionar no mercado como uma plataforma web que pode ser facilmente usada nos navegadores mobile com uma experiência semelhante a de um app nativo. Essa característica proporciona o usuário usar a aplicação em múltiplas plataformas com a mesma experiência de uso, facilitando a praticidade e rapidez de postar um problema e beneficiando a universidade na rápida detecção e resolução do mesmo.
</p>


## 3. Descrição dos Envolvidos e dos Usuários

### 3.1 Resumo dos Envolvidos

| **Nome** | **Descrição** | **Responsabilidade** |
| --- | --- | --- |
| Equipe de Desenvolvimento de _Software_ | Estudantes da disciplina Métodos de Desenvolvimento de _Software_, na Universidade de Brasília.| Documentar, desenvolver e implementar a aplicação elaborada |
| Equipe de orientação | Professora e monitores da disciplina MDS. | Auxiliar e guiar a equipe durante o desenvolvimento da aplicação. |    


### 3.2 Resumo dos Usuários

| **Nome** | **Descrição** |
| --- | --- |
| Comunidade Universitária | Todos os membros pertencentes a Universidade de Brasília. |


### 3.3 Principais Necessidades dos Usuários e dos Envolvidos

| **Usuário** | **Necessidade** | **Solução Atual** | **Solução Proposta** |
| --- | --- | --- | --- |
| Estudantes e servidores da UnB| Melhoria e/ou solução de alguma problema.| Real dificuldade de relatar os problemas da universidade.| Uma plataforma democrática onde a comunidade possa relatar os problemas que encontrarem. |

### 3.4 Ambiente dos Usuários

<p style="text-align: justify;">&emsp;&emsp;
Somente dentro das dependências universidade os usuários poderão utilizar a aplicação Vamos Cuidar, através da PWA em múltiplas plataformas, sempre que encontrarem algum problema no campus para que possam ser resolvido pela administração.
</p>


### 3.5 Perfis dos Envolvidos

#### 3.5.1 Equipe de Desenvolvimento de <i>Software</i>:

| **Representantes** | **Bruno Alves Félix, Daniel Barcelos Moreira, Daniel Porto de Souza, Denys Rogeres Leles dos Santos, Emily Dias Sousa e Enzo Gabriel Guedes Queiroz Saraiva** |
|:-|:-|
| **Tipo** | Estudantes de Métodos de Desenvolvimento de Software da Universidade de Brasília - UnB/Gama - FGA, curso Engenharia de Software. |
| **Responsabilidade** | Desenvolvimento, testes, Documentação e implementação do software. |
| **Critério de sucesso** | Finalizar o Software com todas as funcionalidades do escopo no prazo estipulado do ciclo da disciplina. |
| **Envolvimento** | Alto
| **Problemas/Comentários** | Inexperiência da equipe com desenvolvimento colaborativo. |


#### 3.5.2 Orientadores:

| **Representantes** | **Carla Silva Rocha Aguiar** |
|:-|:-|
| **Tipo** | Orientadora e avaliadora que dará auxílio no desenvolvimento da plataforma Vamos Cuidar. |
| **Responsabilidade** | Avaliar a equipe de MDS e ajudá-los em eventuais dúvidas. |
| **Envolvimento** | Médio. |


### 3.6 Perfis dos Usuários

| **Representantes** | **Estudantes e Servidores** |
|:-|:-|
| **Tipo** | Estudantes, Professores e Servidores da UnB |
| **Responsabilidade** | Usar a plataforma para tentar solucionar problemas da universidade. |
| **Critério de sucesso** | Ter o problema postado solucionado. |
| **Envolvimento** | Alto |


### 3.7 Alternativas e Concorrências

<p style="text-align: justify;">&emsp;&emsp; 
Atualmente é possível estar por dentro das notícias da universidade através do portal de notícias encontrado no próprio site da Unb. No âmbito de notificação de problemas à administração, a universidade dispõe de uma ouvidoria, que pode ser contactada por e-mail e telefone. Tanto o portal de notícias quanto a ouvidoria são pouco difundidos e têm baixos níveis de efetividade na universidade. Mesmo existentes, essas ferramentas não conseguem suprir as necessidades do cotidiano da comunidade universitária de relatar problemas e os mesmos serem resolvidos por seus responsáveis de forma competente e ágil.
</p>


## 4. Visão geral do Produto
 
### 4.1 Perspectiva do Produto

<p style="text-align: justify;">&emsp;&emsp; 
O produto desenvolvido neste documento faz parte de sistema maior, onde ele fica responsável pela aplicação voltada usuário, na postagem e visualização de problemas que se encontra na universidade. O sistema é dividido em 2 aplicações, uma aplicação voltada aos administradores e gestores, e a outra voltada aos os usuários da comunidade universitária.
</p>

<p style="text-align: justify;">&emsp;&emsp; 
Essas duas aplicações interagem através de APIs, onde a focada nos usuários encaminha informações como as postagens geradas, que serão resolvidas como se achar necessário. Já a focada nos administradores e gestores encaminha informações como o status de solução da postagem e as notícias e relatórios, que serão disponibilizadas como se achar necessário.
</p>


### 4.2 Funções do Produto

<p style="text-align: justify;">&emsp;&emsp; 
A PWA Vamos Cuidar visa otimizar a comunicação de problemas e da agilização de suas soluções na Universidade de Brasília. A comunidade relata um problema que atrapalha o seu dia a dia e, assim, a administração e as pessoas responsáveis poderão tomar as medidas necessárias para resolver esses relatos.
</p>

<p style="text-align: justify;">&emsp;&emsp; 
Outro ponto em que a aplicação visa é de ser um catalisador de coleta de dados dos problemas existentes na universidade. Assim alinhar as reais necessidades da comunidade acadêmica e os esforços e ações da administração.
</p>
 

### 4.3 Suposições e dependências

- O usuário deverá ter acesso a uma plataforma, como desktop ou mobile, com algum navegador web;
- O usuário deverá ter acesso a internet;
- O usuário deverá estar dentro das dependências da universidade;
- A aplicação deverá facilitar a comunicação entre os usuários e os gestores, para uma efetiva e rápida solução do problema postado;


### 4.4 Licenciamento e instalação

<p style="text-align: justify;">&emsp;&emsp; 
A PWA Vamos Cuidar é desenvolvida sob a licença GPL 3.0.
</p>


## 5. Requisitos do Produto

### 5.1 Comunidade acadêmica realize postagens
<p style="text-align: justify;">&emsp;&emsp; 
Permitir que usuários da comunidade acadêmica realize postagens sobre problemas da universidade;
</p>


### 5.2 Estágio de solução da postagem

<p style="text-align: justify;">&emsp;&emsp; 
Permitir a visualização do estágio de solução da postagem;
</p>


### 5.3 Usuários engajarem e compartilhem uma postagem

<p style="text-align: justify;">&emsp;&emsp; 
Permitir os usuários engajarem e compartilhem uma postagem, através de comentários e apoio(positivo ou negativo);
</p>


### 5.4 Espaço de notificações e relatórios

<p style="text-align: justify;">&emsp;&emsp;
Exibir uma página direcionada às notificações, relatórios e atualizações da universidade sobre as postagens.
</p>


## 6. Restrições

- Ter um computador ou aparelho celular;
- Estar nas dependências da universidade;
- Conexão com a internet.
 

## 7. Outros Requisitos do Produto

Identificador | Requisito
-- | --
RF01 | Permitir que usuários da comunidade acadêmica realize postagens sobre problemas da universidade
RF02 | Permitir o usuário editar e excluir suas postagens
RF03 | Permitir que o usuário crie, edite e apaga sua conta
RF04 | Permitir o usuário fazer e desfazer login de sua conta
RF05 | Exibir a listagem de todas as postagens feitas
RF06 | Permitir a visualização de todas informações de uma postagem
RF07 | Permitir que o usuário visualize suas postagens feitas
RF08 | Permitir a visualização do estágio de resolução da postagem
RF09 | Permitir que a listagem das postagens seja feita por filtros
RF10 | Permitir os usuários engajarem com uma postagem, através de comentários e apoio(positivo ou negativo)
RF11 | Permitir o usuário compartilhar uma postagem
RF12 | Permitir a postagem de uma postagem
RF13 | Exibir ao usuário uma notificação caso uma postagem sua tenha sido resolvida com sucesso
RF14 | Exibir uma página direcionada às notificações e atualizações da universidade sobre as postagens
RF15 | Exibir uma aba de ajuda de uso da aplicação
RNF16 | A aplicação deve fazer a verificação de conta com dados da universidade
RNF17 | O sistema deve se tratar de uma PWA (Progressive web app)
RNF18 | A aplicação deve ter uma experiência de uso simples e familiar, de linguagem fácil e intuitiva
RNF19 | Assegurar a segurança de dados dos usuários
RNF20 | Pode ter suporte para gamificação


## 8. Referências

- IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html. Acesso em 31 de agosto de 2020;
- Disponível em: https://github.com/fga-eps-mds/2019.2-Acacia/blob/develop/docs/vision_document.md. Acesso em 20 de agosto de 2020;

- Disponível em: https://github.com/fga-eps-mds/2019.1-ADA/blob/gh-pages/docs/product/vision_document.md. Acesso em 20 de agosto de 2020.