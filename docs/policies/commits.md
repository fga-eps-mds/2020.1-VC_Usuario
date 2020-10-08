# Política de Commits

| Data       | Versão | Descrição            | Autor             |
|:----------:|:------:|:--------------------:|:-----------------:|
| 15/09/2020 | 0.1 | Criação do documento com template inicial | Enzo Gabriel |
| 22/09/2020 | 0.2 | Retirando HOTFIX do documento             | Bruno Félix |
| 07/10/2020 | 0.3 | Atualizando documento | Emily Dias, Enzo Gabriel, Daniel Porto |

Os commits devem ser claros e diretos, descrevendo as alterações feitas.

Regras para escrita das mensagens nos commits:

* Devem ser escritos em português no gerúndio, e conter uma breve descrição.

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
