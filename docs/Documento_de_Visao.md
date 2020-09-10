# Documento de Visão

## Histórico de Revisão

| **Data** | **Versão** | **Modificação** | **Autor** |
| --- | --- | --- | --- |
| 20/08/2020 | 0.1 | Abertura do documento | Bruno Félix |
| 31/08/2020 | 0.2 | Inserção do template do documento | Bruno Félix |
| 08/09/2020 | 0.3 | Inserção dos itens 3.5, 3.6 e 3.7 | Daniel Porto |
| 08/09/2020 | 0.4 | Inserção dos itens 1, 1.1 e 1.2 | Emily Dias |
| 08/09/2020 | 0.5 | Inserção dos itens 2.2 | Bruno Félix |
| 08/09/2020 | 0.6 | Inserção dos itens 3.1, 3.2, 3.3 e 3.4 | Enzo Gabriel |
| 08/09/2020 | 0.7 | Inserção dos itens 2.1 e 2.3 | Daniel Barcelos |
| 09/09/2020 | 0.8 | Inserção e mudança dos itens 1.3 e 1.4 | Denys Rogeres |

## 1. Introdução

Este documento terá o propósito, escopo, definições, acrônimos, abreviações, referências e visão geral de todo o documento, permitindo ter um entendimento maior do escopo do projeto.

Assim, será explicado o problema identificado, a descrição dos principais pontos do projeto, a solução proposta, suas principais funcionalidades e seus requisitos, para assim obter uma melhor compreensão do escopo.


### 1.1 Propósito

Este documento de visão tem por objetivo mostrar os objetivos do projeto, suas características e seu desenvolvimento em questão. Ele também expõe as suas funcionalidades e define os requisitos em termos de necessidade para o objetivo final.


### 1.2 Escopo

Este projeto que será aplicativo/site tem um objetivo de ajudar a UnB, alunos e servidores a fazerem postagens sobre problemas que enfrentam na faculdade, com isto, os gestores podem visualizar e tomar medidas para resolver esses problemas reportados.


### 1.3 Definições, acrônimos e abreviações



| **Sigla/Termo/Acrônimo** | **Definição** |
| --- | --- |
| MDS | Métodos de Desenvolvimento de <i>Software</i> |  
| FGA | Faculdade do Gama | 
| UnB | Universidade de Brasília | 



### 1.4 Visão geral

Este documento contém informações a respeito das características do <i>software</i> que está sendo desenvolvido. O documento é dividido em 8 tópico, sendo:
- Introdução: é apresentado o propósito, escopo e os detalhes em relação a visão do projeto.
- Posicionamento: descrição do problema, do produto e oportunidade de negócios.
- Descrição dos Envolvidos e dos Usuários: detalhamento das partes envolvidas no projeto.
- Visão geral do Produto: síntese das capacidades do produto e suas funcionalidades.
- Recursos do Produto: descrição sintetizada dos recursos do produto.
- Restrições: detalhes sobre as restrições de <i>design</i>, restrições externas, como requisito operacionais ou regulamentares ou outras dependências.
- Outros requisitos do Produto: listagem dos padrões aplicáveis, dos requisitos de <i>hardware</i> ou plataforma, dos requisitos de desempenho e dos requisitos ambientais.
- Referências: exposição das referências utilizadas.



## 2. Posicionamento

### 2.1 Oportunidade de negócios

Reportar de maneira rápida problemas enfrentados pela comunidade da UnB.


### 2.2 Descrição do problema

| **Questão** | **Informações do Produto** |
| --- | --- |
| **O problema é**         | O difícil relato de problemas e defeitos encontrados na universidades |
| **Que Afeta**            | A comunidade acadêmica |
| **Cujo impacto é**       | A demora ou ineficácia da resolução desses problemas pro parte da universidade |
| **Uma boa solução seria**| Uma aplicação aonde a comunidade pudesse relatar os problemas encontrados diretamente para universidade. Otimizando o dialogo e a resolução | 


### 2.3 Descrição da posição do produto

O Vamos Cuidar visa facilitar a solução de problemas enfrentados pela comunidade da UnB através de um aplicativo/site em que será possível realizar postagens sobre os mesmos. Dessa forma, os gestores visualizarão os problemas e buscarão uma solução adequada. 


## 3. Descrição dos Envolvidos e dos Usuários

### 3.1 Resumo dos Envolvidos

| **Nome** | **Descrição** | **Responsabilidade** |
| --- | --- | --- |
|Equipe de Desenvolvimento de _Software_| Estudantes da disciplina Métodos de Desenvolvimento de _Software_, na Universidade de Brasília.| Desenvolvimento e implementação do _Software_ descrito no documento.|
|Equipe de orientação| Porfessora e monitores da disciplina MDS.| Auxiliar e guiar a equipe durante o desenvolvimento do _Software_.|



### 3.2 Resumo dos Usuários

| **Nome** | **Descrição** |
| --- | --- |
|Comunidade da Unb| Alunos e servidores da UnB, que transitam pela universidade.|


### 3.3 Principais Necessidades dos Usuários e dos Envolvidos

| **Usuário** | **Necessidade** | **Solução Atual** | **Solução Proposta** |
| --- | --- | --- | --- |
|Estudantes e servidores da UnB| Melhoria ou reforma de alguma problema.| Esperar alguém com maior autoridade na faculdade resolver.| Uma plataforma onde a comunidade possa reportar os problemas que encontrarem, sujeita a pequenos bônus pelos relatos.|

### 3.4 Ambiente dos Usuários

Os usuários poderão realizar a interação com o _Software_ Vamos Cuidar através do site ou aplicativo, sempre que encontrarem algum problema na universidade que possa ser resolvido.


### 3.5 Perfis dos Envolvidos

#### 3.5.1 Equipe de Desenvolvimento de <i>Software</i>:

| **Representantes** | Bruno Alves Felix, Daniel Barcelos Moreira, 	Daniel Porto de Souza, Denys Rogeres Leles dos Santos, Emily Dias Sousa e Enzo Gabriel Guedes Queiroz Saraiva.
|:-|:-|
| **Tipo** | Estudantes de Métodos de Desenvolvimento de Software da Universidade de Brasília - UnB/Gama - FGA, curso Engenharia de Software.
|**Responsabilidade** | Desenvolvimento, testes, Documentação e implementação do software.
|**Critério de sucesso** | Finalizar o Software com todas as funcionalidades do escopo no prazo estipulado do ciclo da disciplina.
| **Envolvimento** | Alto
| **Problemas/Comentários** | Inexperiência da equipe com desenvolvimento colaborativo.



#### 3.5.2 Orientadores:

| **Representantes** | Carla Silva Rocha Aguiar
|:-|:-|
| **Tipo** | Orientadora e avaliadora que dará auxílio no desenvolvimento da plataforma Vamos Cuidar.
| **Responsabilidade** | Avaliar a equipe de MDS e ajudá-los em eventuais dúvidas.
| **Envolvimento** |  	Médio.


### 3.6 Perfis dos Usuários

| **Representantes** | Estudantes e Servidores
|:-|:-|
| **Tipo** | Estudantes e Servidores da UnB 
| **Responsabilidade** | Usar a plataforma para tentar solucionar problemas da universidade.
| **Critério de sucesso** | Ter o problema postado solucionado. 
|**Envolvimento** | Alto

### 3.7 Alternativas e Concorrências

Atualmente é possível estar por dentro das notícias da universidade através do portal de notícias encontrado no próprio site da Unb. No âmbito de notificação de problemas à administração, a universidade dispõe de uma ouvidoria, que pode ser contactada por e-mail e telefone. Tanto portal de notícias quanto a ouvidoria são pouco difundidos na universidade.   


## 4. Visão geral do Produto
 
### 4.1 Perspectiva do Produto

Coloca o produto em perspectiva com respeito a outros produtos relacionados e ao ambiente do usuário. Se o produto for independente e totalmente autocontido, indique-o aqui. Se o produto for um componente de um sistema maior, relacione como esses sistemas interagem e identificam as interfaces relevantes entre os sistemas. Uma maneira de exibir os principais componentes do maior sistema, interconexões e interfaces externas é usar um processo de negócios ou diagrama de casos de uso.


### 4.2 Resumo das capacidades
 
| Benefício para o Usuário | Recursos de suporte |
|:------------------------:|:-------------------:|


### 4.3 Funções do Produto
 
 
### 4.4 Suposições e dependências

Lista cada um dos fatores que afeta os recursos que o documento de visão inclui. Lista as suposições que, se modificadas, alterarão o documento de visão. Por exemplo, uma suposição pode indicar que um sistema operacional específico fique disponível para o hardware designado para o produto de software. Se o sistema operacional não estiver disponível, será necessário alterar o documento de visão.


### 4.5 Custo e precificação

Registra os impactos e restrições relevantes de custo e precificação. Por exemplo, os custos de distribuição (o número de CDs e CD principal) ou outras restrições de custo de mercadorias vendidas (manuais e embalagem) podem ser material para o sucesso dos projetos, ou irrelevantes, dependendo da natureza do aplicativo.


### 4.6 Licenciamento e instalação

Os problemas de licenciamento e instalação também podem impactar diretamente o esforço de desenvolvimento. Por exemplo, a necessidade de suportar a serialização, a segurança da senha ou o licenciamento da rede criarão requisitos adicionais do sistema que devem ser considerados no esforço de desenvolvimento. Os requisitos de instalação também podem afetar a codificação ou criar a necessidade de separar o software de instalação.


## 5. Recursos do Produto

Lista e descreve brevemente os recursos do produto. Os recursos são capacidades de alto nível do sistema que são necessários para entregar benefícios aos usuários. Cada recurso é um serviço solicitado que, em geral, requer uma série de entradas para alcançar o resultado desejado. Por exemplo, um recurso de um sistema de rastreamento de problemas pode ser a capacidade de fornecer relatórios de tendências. À medida que o modelo de casos de uso toma forma, atualize a descrição para fazer referência aos casos de uso.


## 6. Restrições

Observe todas as restrições de design, restrições externas, como requisitos operacionais ou regulamentares) ou outras dependências.


## 7. Outros Requisitos do Produto

Em um alto nível, lista os padrões aplicáveis, os requisitos de hardware ou plataforma, os requisitos de desempenho e os requisitos ambientais.


## 8. Referências

-
- 
-
