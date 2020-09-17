# Documento de Visão

## Histórico de Revisão

| **Data** | **Versão** | **Modificação** | **Autor** |
| --- | --- | --- | --- |
| 20/08/2020 | 0.1 | Abertura do documento                         | Bruno Félix |
| 31/08/2020 | 0.2 | Inserção do template do documento             | Bruno Félix |
| 08/09/2020 | 0.3 | Inserção dos itens 3.5, 3.6 e 3.7             | Daniel Porto |
| 08/09/2020 | 0.4 | Inserção dos itens 1, 1.1 e 1.2               | Emily Dias |
| 08/09/2020 | 0.5 | Inserção dos itens 2.2                        | Bruno Félix |
| 08/09/2020 | 0.6 | Inserção dos itens 3.1, 3.2, 3.3 e 3.4        | Enzo Gabriel |
| 08/09/2020 | 0.7 | Inserção dos itens 2.1 e 2.3                  | Daniel Barcelos |
| 09/09/2020 | 0.8 | Inserção dos itens 1.3 e 1.4                  | Denys Rógeres |
| 12/09/2020 | 1.0 | Formatação do documento: Alinhamento e Recuo  | Bruno Félix |
| 14/09/2020 | 1.1 | Revisão do Tópico 1                           | Bruno Félix |
| 16/09/2020 | 1.2 | Revisão do Tópico 1 e 2                       | Bruno Félix |
| 16/09/2020 | 1.3 | Revisão do Tópico 3                           | Bruno Félix |


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
O Vamos Cuidar é uma PWA responsiva que tem como objetivo auxiliar a UnB na maior agilidade em resolver problemas, sejam eles estruturais, acadêmicos, processuais entre outros, que impactam negativamente o dia a dia da universidade. Com uma plataforma prática e direta, a comunidade universitária pode fazer postagens sobre problemas que enfrentam no cotidiano, e com isto, os gestores podem analizar e tomar medidas para resolver esses problemas reportados.
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
- Recursos do Produto: descrição sintetizada dos recursos do produto.
- Restrições: detalhes sobre as restrições de design, restrições externas, como requisito operacionais ou regulamentares ou outras dependências.
- Outros requisitos do Produto: listagem dos padrões aplicáveis, dos requisitos de hardware ou plataforma, dos requisitos de desempenho e dos requisitos ambientais.
Referências: exposição das referências utilizadas.


## 2. Posicionamento

### 2.1 Oportunidade de negócios

<p style="text-align: justify;">&emsp;&emsp;
Analisando o difícil acesso a canais de comunicação quando e diz respeito a delação de problemas no campus e na universidade, agregado a demora da administração de reconhecer esses mesmos problemas e resolvemos, foi identificado a oportunidade de desenvolver uma aplicação PWA para fornecer um sistema rápido e prático para a comunidade universitária postar seus problemas do dia a dia através computadores e smartphones.
</p>


### 2.2 Descrição do problema

| **Questão** | **Informações do Produto** |
| --- | --- |
| **O problema é**         | O difícil relato de problemas e defeitos encontrados na universidades |
| **Que Afeta**            | A comunidade acadêmica |
| **Cujo impacto é**       | A demora ou ineficácia da resolução desses problemas pro parte da universidade |
| **Uma boa solução seria**| Uma aplicação aonde a comunidade pudesse relatar os problemas encontrados diretamente para universidade. Otimizando o dialogo e a resolução | 


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
| Comunidade Universitária | Estudantes, professores, servidores e outros membros da Universidade de Brasília. |


### 3.3 Principais Necessidades dos Usuários e dos Envolvidos

| **Usuário** | **Necessidade** | **Solução Atual** | **Solução Proposta** |
| --- | --- | --- | --- |
| Estudantes e servidores da UnB| Melhoria ou reforma de alguma problema.| Esperar alguém com maior autoridade na faculdade resolver.| Uma plataforma onde a comunidade possa reportar os problemas que encontrarem, sujeita a pequenos bônus pelos relatos. |

### 3.4 Ambiente dos Usuários

<p style="text-align: justify;">&emsp;&emsp; 
Os usuários poderão realizar a aplicação Vamos Cuidar, através da PWA em múltiplas plataformas, sempre que encontrarem algum problema na universidade que possa ser resolvido pela administração.
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
Atualmente é possível estar por dentro das notícias da universidade através do portal de notícias encontrado no próprio site da Unb. No âmbito de notificação de problemas à administração, a universidade dispõe de uma ouvidoria, que pode ser contactada por e-mail e telefone. Tanto o portal de notícias quanto a ouvidoria são pouco difundidos e tem baixos níveis de efetividade na universidade. Mesmo existentes, essas ferramentas não conseguem suprir as necessidades do cotidiano da comunidade universitária de relatar problemas e os mesmos serem resolvidos por seus responsáveis de forma competente e ágil.
</p>


## 4. Visão geral do Produto
 
### 4.1 Perspectiva do Produto

<p style="text-align: justify;">&emsp;&emsp; 
Coloca o produto em perspectiva com respeito a outros produtos relacionados e ao ambiente do usuário. Se o produto for independente e totalmente autocontido, indique-o aqui. Se o produto for um componente de um sistema maior, relacione como esses sistemas interagem e identificam as interfaces relevantes entre os sistemas. Uma maneira de exibir os principais componentes do maior sistema, interconexões e interfaces externas é usar um processo de negócios ou diagrama de casos de uso.
</p>


### 4.2 Resumo das capacidades
 
| Benefício para o Usuário | Recursos de suporte |
|:------------------------:|:-------------------:|


### 4.3 Funções do Produto
 
 
### 4.4 Suposições e dependências

<p style="text-align: justify;">&emsp;&emsp; 
Lista cada um dos fatores que afeta os recursos que o documento de visão inclui. Lista as suposições que, se modificadas, alterarão o documento de visão. Por exemplo, uma suposição pode indicar que um sistema operacional específico fique disponível para o hardware designado para o produto de software. Se o sistema operacional não estiver disponível, será necessário alterar o documento de visão.
</p>


### 4.5 Custo e precificação

<p style="text-align: justify;">&emsp;&emsp; 
Registra os impactos e restrições relevantes de custo e precificação. Por exemplo, os custos de distribuição (o número de CDs e CD principal) ou outras restrições de custo de mercadorias vendidas (manuais e embalagem) podem ser material para o sucesso dos projetos, ou irrelevantes, dependendo da natureza do aplicativo.
</p>


### 4.6 Licenciamento e instalação

<p style="text-align: justify;">&emsp;&emsp; 
Os problemas de licenciamento e instalação também podem impactar diretamente o esforço de desenvolvimento. Por exemplo, a necessidade de suportar a serialização, a segurança da senha ou o licenciamento da rede criarão requisitos adicionais do sistema que devem ser considerados no esforço de desenvolvimento. Os requisitos de instalação também podem afetar a codificação ou criar a necessidade de separar o software de instalação.
</p>


## 5. Requisitos do Produto

<p style="text-align: justify;">&emsp;&emsp; 
Lista e descreve brevemente os recursos do produto. Os recursos são capacidades de alto nível do sistema que são necessários para entregar benefícios aos usuários. Cada recurso é um serviço solicitado que, em geral, requer uma série de entradas para alcançar o resultado desejado. Por exemplo, um recurso de um sistema de rastreamento de problemas pode ser a capacidade de fornecer relatórios de tendências. À medida que o modelo de casos de uso toma forma, atualize a descrição para fazer referência aos casos de uso.
</p>


## 6. Restrições

<p style="text-align: justify;">&emsp;&emsp; 
Observe todas as restrições de design, restrições externas, como requisitos operacionais ou regulamentares) ou outras dependências.
</p>


## 8. Referências

-
- 
-