# Política de Pull Requests
 
| Data       | Versão | Descrição            | Autor             |
|:----------:|:------:|:--------------------:|:-----------------:|
| 15/09/2020 | 1.0 | Criação do documento com template inicial                            | Enzo Gabriel|
| 21/09/2020 | 2.0 | Revisão, formatação do documento em geral e inserção do Tópico 2 e 8 | Bruno Félix |   
 
## 1. Nome do Pull Request
Os pull requests devem explicar o que está sendo inserido, e devem indicar o número da issue relacionada. <br>
Caso o Pull Request esteja vinculado com alguma User Story, indicar qual USs é.
 
<b>Exemplo</b>
 
```
#YY USXX Validação do Login
```
<sub> Em que YY representa o número da issue</sub><br>
<sub> Em que XX representa o número da história de usuário</sub>
 
 
## 2. Corpo do Pull Request
 
### 2.1 Descrição
Descrever de forma objetiva, tudo o que foi trabalhado no Pull Request, como commits, alterações, User Storys trabalhadas e etc.
 
### 2.2 _Issue_ Relacionada
Descrever as issues impactadas pelas modificações feitas no Pull Request.
 
### 2.3 Motivação e Contexto
Descrever o motivo que fez ser necessário que essas mudanças tenham sido feitas no Pull Request.
 
### 2.4 Como Isso Foi Testado?
Descrever processo de teste das modificações feitas no Pull Request, caso tenha teste as mesmas.
 
### 2.5 Capturas de Tela (se apropriado)
Inserir captura de tela das modificações feitas, caso seja necessário. Em casos de modificações visuais, como no front end, torna-se bem útil o uso desse ponto do Pull Request.
 
### 2.6 Tipos de Mudanças
Descrever quais os tipos de alterações serão introduzidas pelo Pull Request.
 
### 2.7 Checklist
Descrever o impacto que as modificações terão no projeto, como necessidade de mudanças de documentação, padrão de contribuição e código e etc.
 
## 3. Reviewers
Deve conter dois ou mais ```Reviewers```, que devem revisar as modificações feitas e apontar possíveis melhorias e erros. Só após todos os pontos trabalhados naquele Pull Request serem aprovados, o Pull Request deve ser aceito.
 
## 4. Assignees
Deve conter um ou mais ```Assignees```, que indica os membros da equipe que contribuíram com as modificações realizadas.
 
## 5. Labels
Deve conter ```Labels```, que adiciona as labels relacionadas ao pull request, da mesma forma que na issue correspondente.
 
## 6. Milestone
Deve conter a ```Milestone```, em que é adicionada a sprint correspondente à execução das modificações.
 
## 7. Issue
Deve conter a ```Issue```, em que após a criação do pull request, deve-se conectar ele à sua issue correspondente através da interface do GitHub.
 
 
## 8. Aceitação do Pull Request
- O Pull Request deve ser revisado e aceito por pelo menos duas pessoas;
- As pessoas responsáveis pelas revisões devem comentar seu parecer sobre as modificações feitas;
- Um Pull Request só deve ser aceito caso todos os critérios de aceitação, estipulados nas issues que ele está vinculado, sejam totalmente atendidos;
- Um Pull Request só deve ser aceito caso as modificações rodem sem erros, bugs ou mau funcionamento.