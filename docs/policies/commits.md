# Política de Commits

| Data       | Versão | Descrição            | Autor             |
|:----------:|:------:|:--------------------:|:-----------------:|
| 15/09/2020 | 1.0 | Criação do documento com template inicial  | Enzo Gabriel|

Os commits devem ser claros e diretos, descrevendo as alterações feitas.

Regras para escrita das mensagens nos commits:

* Devem ser escritos em inglês na forma infinitiva, e ainda conter uma breve decrição.

<b>Exemplo: <b>

``` 
Criando novo documento.
```

* A issue em questão deve ser citada no commit, para isso, basta adicionar 
``` #<numero_da_issue>. ```

<b>Exemplo: <b>

```
#5 Criando novo documento.
```
<b>Observação: </b> Por padrão, o caracter # define uma linha de comentário no arquivo da mensagem do commit. Para resolver este problema, use o commando:

```
git config --local core.commentChar '!'
```
* Caso 2 pessoas tenham feito o trabalho, para que ambos envolvidos no commit sejam incluidos como contribuintes no gráfico de commits do GitHub, basta incluir a instrução ```Co-authored-by:``` na mensagem:

<b>Exemplo: <b>

```
#5 Criando novo documento.

Co-authored-by: Enzo gabriel <eggqsaraiva@gmail.com>
Co-authored-by: Daniel Barcelos <danielbm897@gmail.com>
```
* Para commits que incluem uma pequena mudança em uma issue que já teve sua resolução encerrada, deve-se iniciar a mensagem do commit com HOTFIX ```#<numero_da_issue> <mensagem>```

<b>Exemplo: <b>

```
HOTFIX #5 Adicionando nova mudança.
```
