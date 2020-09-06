# Histórico de Versões

Data|Versão|Descrição|Autor
-|-|-|-
28/08|1.0.0|Abertura do documento|Daniel Porto
31/08|1.0.1|Adição dos itens 4.1 e 4.3|Daniel Porto

# Sumário

 1. [Introdução](#1)
  - 1.1 [Finalidade](#1_1)
  - 1.2 [Escopo](#1_2)
  - 1.3 [Definições, Acrônimos e Abreviações](#1_3)
  - 1.4 [Referências](#1_4)
  - 1.5 [Visão Geral](#1_5)
 2. [Representação da Arquitetura](#2)
  - 2.1 [Front-end](#2_1)
  - 2.2 [Back-end](#2_2)
  - 2.3 [Diagrama de Relações](#2_3)
  - 2.4 [Diagrama de Pacotes do Front](#2_4)
  - 2.5 [Diagrama de Pacotes da Back](#2_5)
 3. [Metas e Restrições de Arquitetura](#3)
  - 3.1 [Metas](#3_1)
  - 3.2 [Restrições](#3_2)
 4. [Visão dos Casos de Uso](#4)
  - 4.1 [Diagrama de Casos de Uso](#4_1)
  - 4.2 [Atores de Casos de Uso](#4_2)
  - 4.3 [Descrições de Casos de Uso](#4_3)
 5. [Visão Lógica](#5)
 6. [Tamanho e Desempenho](#6)
 7. [Qualidade](#7)

# Documento de Arquitetura de Software

### 1. <strong name="1">Introdução</strong>

### 1.1 <strong name="1_1">Finalidade</strong>

 <p align = "justify"> &emsp;&emsp; Este documento tem como finalidade fornecer uma visão geral da arquitetura da platoforma Vamos Cuidar UnB, utilizando-se de diversas visões arquiteturais - tais como a visão lógica e de caso de uso - a fim de facilitar o entendimento dos processos e funcionamento de todo o sistema. Tem também como objetivo transmitir as decisões arquiteturais significativas tomadas em relação ao mesmo.</p>

### 1.2 <strong name="1_2">Escopo</strong>

<p align="justify"> &emsp;&emsp; Atráves desse documento, é possível obter um melhor entendimento da arquitetura do
 projeto, permitindo ao leitor a compreensão do funcionamento do sistem e as abordagens utilizadas para o
 seu desenvolvimento.
</p>

### 1.3 <strong name="1_3">Definições, Acrônimos e Abreviações</strong>

Abreviação|Significado
|:-:|:-|
|**MDS**| Métodos de Desenvolvimento de Software|
|**UNB**| Universidade de Brasília|


### 1.4 <strong name="1_4">Referências</strong>

<p align="left">Como documentar a arquitetura de software. Disponível em: </br>http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx.</p>

<p align="left">Documento de arquitetura ADA. Disponível em: </br>https://fga-eps-mds.github.io/2019.1-ADA/#/docs/project/architecture_doc.</p>

<p align="left">Documento de arquitetura ArBC. Disponível em: </br>https://github.com/fga-eps-mds/2019.2-ArBC/blob/develop/docs/mds/Documento_de_arquitetura.md</p>

<p align="left">Documento de arquitetura C-Registration System. Disponível em: </br>http://mds.cultura.gov.br/extend.formal_resources/guidances/examples/resources/sadoc_v1.htm.</p>

### 1.5 <strong name="1_5">Visão Geral</strong>

<p align="justify"> &emsp;&emsp; Este documento é dividido em 7 tópicos, descrevendo os detalhes das características do software proposto.
Sendo dividido em:</p>

* Introdução: Fornece uma visão geral do documento inteiro;
* Representação da arquitetura: Descreve qual é a arquitetura de software do sistema atual e como ela é representada;
* Metas e restrições da arquitetura: Descreve os requisitos e objetivos do software que têm algum impacto sobre a arquitetura;
* Visão de caso de uso: Descreve as partes significativas do ponto de vista da arquitetura do modelo de casos de uso;
* Visão Lógica: Descreve as partes significativas do ponto de vista da arquitetura do modelo de design;
* Tamanho e Desempenho: descreve as principais características de dimensionamento do software que têm um impacto na arquitetura, bem como as restrições do desempenho desejado;
* Qualidade: descreve como a arquitetura do software contribui para todos os recursos (exceto a funcionalidade) do sistema.

## 2. <strong name="2">Representação da Arquitetura</strong>

### 2.1 <strong name="2_1">Front-end</strong>



### 2.2 <strong name="2_2">Back-end</strong>


### 2.3 <strong name="2_3">Diagrama de Relações</strong>


### 2.4 <strong name="2_4">Diagrama de Pacotes do Front</strong>

### 2.5 <strong name="2_5">Diagrama de Pacotes do Back</strong>

## 3. <strong name="3">Metas e Restrições de Arquitetura</strong>

### 3.1 <strong name="3_1">Metas</strong>

<p align = "justify">&emsp;&emsp; O sistema da plataforma vamos cuidar deve ter acesso a uma câmera e aos arquivos de mídia para up-load de imagens que mostrarão os problemas diversos da universidade às autoridades competentes em resolve-los. O objetivo é melhorar a comunicação dos estudantes com a administração.</p>

### 3.2 <strong name="3_2">Restrições</strong>


## 4. <strong name="4">Visão dos Casos de Uso</strong>

### 4.1 <strong name="4_1">Diagrama de Casos de Uso</strong>

### 4.2 <strong name="4_2">Atores de Casos de Uso</strong>

|**Ator**|**Descrição**
|:-|:-|
|**Usuário**|O usuário poderá, postar, de forma simples e acompanhada de texto, uma imagem que capture o problema relatado. Poderá também se engajar nas postagens para determinar o grau de relevância e acompanhar notícias da universidade.  

### 4.3 <strong name="4_3">Descrições de Casos de Uso</strong>

| Caso de uso | Descrição |
|:-|:-|
|USO01 - Fazer postagem|Criar postagem registrando algum problema.
|USO02 - Engajar postagem|Interagir em uma postagem para definir a relevância da mesma.
|USO03 - Ver notícias|Visualizar notícias da Universidade.

## 5. <strong name="5">Visão Lógica</strong>



## 6. <strong name="6">Tamanho e Desempenho</strong>


## 7. <strong name="7">Qualidade</strong>

