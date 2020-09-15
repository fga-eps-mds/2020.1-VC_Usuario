# Política de Branches

| Data       | Versão | Descrição            | Autor             |
|:----------:|:------:|:--------------------:|:-----------------:|
| 15/09/2020 | 1.0 | Criação do documento com template inicial  | Enzo Gabriel|


### Introdução
* master: Essa é a branch que contém o código em nível de produção, é a parte que tem o código mais consolidado. Tudo de novo produzido eventualmente se junta a branch master.
* develop: contém a versão mais atualizada do código que está sendo desenvolvido, está sempre sincronizada com a master e é base para as branches feature.
* feature*: São as branchs que são desenvolvidos novos recursos ao projeto, elas serão criadas com o nome começando featura/ e a partir da branch develop, e no final juntadas a branch develop; 
* bugfix/: branch utilizada para corrigir bugs de baixa ou média urgências e não estão presentes na master. O nome deve ser a descrição do bug. Ex: "bugfix/ descricao"
* hotfix/*: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop. O nome deve ser a descrição do bug. Ex: "hotfix/ descricao"
* release/*: Branchs com um nível de confiança maior do que a branch develop, e que se encontram em nível de preparação para ser juntada com a branch master e com a branch develop, nessas branches, bugs encontrados durantes os testes das features qeu vão para produção podem ser corrigidos mais tranquilamente antes de irem efetivamente para a produção. Por convenção, essas branchs tem o nome come

###  As braches devem seguir o seguinte padrão:

* O nome da branch deve ser abstraído do nome da história de usuário a qual se refere.

<b>Exemplo:</b>

```
CriarLogin
```

* O nome da branch deve possuir um 'tag' que é o número da história de usuário a qual se refere.

<b>Exemplo:</b>

```
3CriarLogin
```

* A branch deverá possuir o padrão CamelCase ```x-NomeDaBranch ```, em que o 'x' é o número da história de usuário.

<b>Exemplo:</b>

```
3-CriarLogin
```

* Caso a branch não esteja associada a alguma história de usuário, não é necessario a adição da 'tag'.

<b>Exemplo:</b>

```
RefatorarLogin
```