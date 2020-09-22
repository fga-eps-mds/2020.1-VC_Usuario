# Política de Branches

| Data       | Versão | Descrição            | Autor             |
|:----------:|:------:|:--------------------:|:-----------------:|
| 15/09/2020 | 1.0 | Criação do documento com template inicial              | Enzo Gabriel |
| 22/09/2020 | 2.0 | Revisão e Inserção do Gitflow do projeto               | Bruno Félix |


## Introdução
Esse documento é destinado a apresentação da política de Branches usada nesse projeto. É crucial o acesso as [issues](https://github.com/fga-eps-mds/2020.1-Vamos_Cuidar-Usuario/issues) do projeto para o uso efetivo da Política de Branches.

- **Toda** nova branch criada e desenvolvida deve estar linkada a alguma issue;
- O produto inicia na versão **v0.0.0**.


## Fluxo de trabalho

### 1. Develop
É a branch que contém a versão mais atualizada do código que está sendo desenvolvido, integrando as novas funcionalidades finalizadas:
- Existe apenas uma branch **develop**;
- Deve ser derivada da **master** como ponto zero do desenvolvimento;
- Deve estar sempre sincronizada com tudo que é desenvolvido no projeto, ou seja, todas as branches pode mesclar a ela.


### 2. Feature
É a branch destinada ao desenvolvimento de uma nova funcionalidade do produto: 
- Deve ser derivada da branch **develop**;
- Deve ser mesclado de volta a branch **develop** após a funcionalidade ser desenvolvida;
- Após ser a funcionalidade ser devidamente desenvolvidada, a branch deve ser excluída do projeto.

#### 2.1 O nome de uma nova Feacture
```
feature/USXXX_issueID-Nome_da_Funcionalidade
```
<sub>Em que USXXX representa o número da User Story;</sub><br>
<sub>Em que issueID representa o número da issue;</sub><br>
<sub>Teve ter feacture/ no nome da branch;</sub>
<sub>Caso a branch não esteja associada a uma User Story, não é necessario a adição da mesma ao nome.</sub>

<b>Exemplo:</b>
```
feature/US999_#000-Criar_Login
```

<b>Exemplo:</b>
```
feature/#999-Criar_Login
```


### 3. Release
É a branch que representa um conjunto de funcionalidades, já desenvolvidas, prontas para serem inseridas ao ambiente de produção, a **master**:
- Deve ser derivada da branch **develop**;
- Deve ser mesclada a branch **master** e a **develop** após a **release** ser concluída;
- Nenhuma funcionalidade pode ser inserida ao ambiente de produção fora de uma **release**;
- Deve aceita apenas mesclagens de branches do tipo **bugfix**;
- Deve indicar o fim de uma fase de desenvolvimento e o início de uma outra;
- A cada nova **release**, a versão do produto deve modificada, acrescentando 1 ao numero central;
- Deve ser macada por uma 'tag' que representa o Número da Versão da **release**.

#### 3.1 O nome de uma nova Release
```
release/vNúmero_da_versão
```
<sub> Teve ter release/ no nome da branch;</sub>

<b>Exemplo:</b>
```
release/v5.5.5
```

<b>Exemplo:</b>
```
Versão atual: v5.5.5
Nova release: release/v5.6.5
Nova versão: v5.6.5
```


### 4. Master
Essa é a branch que contém o código em nível de produção, ou seja, que o usuário consome. É a branch que contém o código mais estável da aplicação:
- Branch raiz do projeto;
- Existe apenas uma branch **master**;
- Não é permitidos commits feitos diretamente na **master**.
- Deve aceita apenas mesclagens de branches do tipo **hotfix** e **releases**;


### 5. Bugfix
É a branch destinada a implementação de soluções para bugs e erros encontrados numa **release**:
- Deve ser derivada da branch **release**;
- Deve ser mesclada a branch **release** após o ponto abordado pela branch ser resolvido.

#### 5.1 O nome de um novo Bugfix
```
bugfix/issueID-Nome_do_Bugfix
```
<sub>Em que issueID representa o número da issue;</sub><br>
<sub>Teve ter bugfix/ no nome da branch.</sub>

<b>Exemplo:</b>
```
bugfix/#999-Resolver_Login
```


### 6. Hotfix
É a branch destinada a implementação de soluções para bugs e erros emergentes encontrados no ambiente de produção, a **master**:
- Deve ser derivada da branch **master**;
- Deve ser mesclada a branch **master** e a **develop** após o ponto abordado pela branch ser resolvido;
- A cada novo **hotfix**, a versão do produto deve modificada, acrescentando 1 ao numero extremo.

#### 6.1 O nome de um novo Hotfix
```
hotfix//vNúmero_da_versão
```
<sub>Em que issueID representa o número da issue;</sub><br>
<sub>Teve ter hotfix/ no nome da branch.</sub>

<b>Exemplo:</b>
```
hotfix/v5.5.5
```

<b>Exemplo:</b>
```
Versão atual: v5.5.5
Novo hotfix: hotfix/v5.5.6
Nova versão: v5.5.6
```