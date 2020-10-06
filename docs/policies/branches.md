# Política de Branches

| Data       | Versão | Descrição            | Autor             |
|:----------:|:------:|:--------------------:|:-----------------:|
| 15/09/2020 | 1.0 | Criação do documento com template inicial  | Enzo Gabriel|
| 06/10/2020 | 1.1 | Revisão do documento | Emily Dias |


### Introdução
* master: Essa é a branch que contém o código em nível de produção, é a parte que tem o código mais consolidado. Tudo de novo produzido eventualmente se junta a branch master.
* develop: contém a versão mais atualizada do código que está sendo desenvolvido, está sempre sincronizada com a master e é base para as branches feature.
* feature*: São as branchs que são desenvolvidos novos recursos ao projeto, elas serão criadas começando com o nome feature/ e serão feitas a partir da branch develop, depois disto, serão juntadas a branch develop; 
* bugfix/: branch utilizada para corrigir bugs de baixa ou média urgências e que não estão presentes na master. O nome deve ser a descrição do bug. Ex: "bugfix/ descricao"
* hotfix/*: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop. O nome deve ser a descrição do bug. Ex: "hotfix/ descricao"
* release/*: Branchs com um nível de confiança maior do que a branch develop, e que se encontram em nível de preparação para ser juntada com a branch master e com a branch develop. Nessas branches, os bugs encontrados durantes os testes das features que irão para produção, podem ser corrigidos mais tranquilamente antes de irem efetivamente para a produção. Por convenção, essas branchs tem o nome começando com release/ e terminando com o número da próxima versão do software.

###  As braches devem seguir o seguinte padrão:

* O nome da branch deve ser abstraído do nome da história de usuário a qual se refere.

<b>Exemplo:</b>

```
CriarLogin
```

* O nome da branch deve possuir um 'tag' que é o número da história de usuário a qual se refere.

<b>Exemplo:</b>

```
3-CriarLogin
```

* A branch deverá possuir o padrão CamelCase ```US(x)-NomeDaBranch ```, em que o 'US(x)' é o número da história de usuário.

<b>Exemplo:</b>

```
US(3)-CriarLogin
```

* Caso a branch não esteja associada a alguma história de usuário, não é necessario a adição da 'tag'.

<b>Exemplo:</b>

```
RefatorarLogin
```
