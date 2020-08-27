# Como contribuir?

## Reportando um Bug

* Siga o padrão de [_Issues_](https://github.com/fga-eps-mds/2020.1-Vamos_Cuidar/blob/develop/.github/ISSUE_TEMPLATE/bug_report.md) do projeto.

* Caso o bug não esteja em nenhuma das _Issues_, abra uma [Nova _Issue_](https://github.com/fga-eps-mds/2020.1-Vamos_Cuidar/issues/new/choose).

## Adicionando e/ou alterando alguma funcionalidade

* Verifique se não há nenhuma [_Issue_](https://github.com/fga-eps-mds/2020.1-Vamos_Cuidar/issues) relacionada a essa modificação.

* Caso não haja, crie uma [Nova _Issue_](https://github.com/fga-eps-mds/2020.1-Vamos_Cuidar/issues/new/choose).

* Submeta um [Pull Request](https://github.com/fga-eps-mds/2020.1-Vamos_Cuidar/compare) seguindo o padrão do projeto.

* Aguarde até que o seu Pull Request seja aceito.

# Padrão de _Commits_

* Seja coeso e conciso.
* Relacione o commit com o número da issue.
* Digite em língua portuguesa utilizando o gerúndio.
* Verifique se sua alteração está sendo feita na branch correta, seguindo o design de fluxo do Gitflow.

# Política de Branches

* master: representa uma versão estável do produto contendo código já testado e versionado. Essa branch parte da branch develop através de pull requests aprovados no fim de cada release.
* develop: contém a versão mais atualizada do código que está sendo desenvolvido, está sempre sincronizada com a master e é base para as branches feature.
* feature/*: são branches para o desenvolvimento de uma funcionalidade específica, por convenção elas tem o nome iniciado por feature/, por exemplo: feature/cadastro-usuarios. Importante ressaltar que essas branches são criadas sempre à partir da branch develop.
* bugfix/ - branch utilizada para corrigir bugs de baixa ou média urgências e não estão presentes na master. O nome deve ser a descrição do bug. Ex: "bugfix/ descricao"
* hotfix/*: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop. O nome deve ser a descrição do bug. Ex: "hotfix/ descricao"
* release/*: onde será feito os ajustes finais antes da entrega de uma versão do produto de software. Por convenção, essas branches tem o nome começando com release/ e terminando com o número da próxima versão do software.