# Documento de Arquitetura de Software
## Histórico de Versões

Data|Versão|Descrição|Autor
-|-|-|-
28/08|1.0.0|Abertura do documento|Daniel Porto
31/08|1.0.1|Adição dos itens 4.1 e 4.3|Daniel Porto
15/09|1.0.2|Inserção dos requisitos nos casos de uso | Enzo Gabriel
15/09 | 1.0.3 | Adição das representações de arquitetura de back-end e front-end e das restrições | Enzo Gabriel

## 1. Introdução

### 1.1 Finalidade

 <p align = "justify"> &emsp;&emsp; Este documento tem como finalidade fornecer uma visão geral da arquitetura da platoforma Vamos Cuidar UnB, utilizando-se de diversas visões arquiteturais - tais como a visão lógica e de caso de uso - a fim de facilitar o entendimento dos processos e funcionamento de todo o sistema. Tem também como objetivo transmitir as decisões arquiteturais significativas tomadas em relação ao mesmo.</p>

### 1.2 Escopo

<p align="justify"> &emsp;&emsp; Atráves desse documento, é possível obter um melhor entendimento da arquitetura do
 projeto, permitindo ao leitor a compreensão do funcionamento do sistem e as abordagens utilizadas para o
 seu desenvolvimento.
</p>

### 1.3 Definições, Acrônimos e Abreviações

Abreviação|Significado
|:-:|:-|
|**MDS**| Métodos de Desenvolvimento de Software|
|**UNB**| Universidade de Brasília|


### 1.4 Referências

<p align="left">Como documentar a arquitetura de software. Disponível em: </br>http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx.</p>

<p align="left">Documento de arquitetura ADA. Disponível em: </br>https://fga-eps-mds.github.io/2019.1-ADA/#/docs/project/architecture_doc.</p>

<p align="left">Documento de arquitetura ArBC. Disponível em: </br>https://github.com/fga-eps-mds/2019.2-ArBC/blob/develop/docs/mds/Documento_de_arquitetura.md</p>

<p align="left">Documento de arquitetura C-Registration System. Disponível em: </br>http://mds.cultura.gov.br/extend.formal_resources/guidances/examples/resources/sadoc_v1.htm.</p>

### 1.5 Visão Geral

<p align="justify"> &emsp;&emsp; Este documento é dividido em 7 tópicos, descrevendo os detalhes das características do software proposto.
Sendo dividido em:</p>

* Introdução: Fornece uma visão geral do documento inteiro;
* Representação da arquitetura: Descreve qual é a arquitetura de software do sistema atual e como ela é representada;
* Metas e restrições da arquitetura: Descreve os requisitos e objetivos do software que têm algum impacto sobre a arquitetura;
* Visão de caso de uso: Descreve as partes significativas do ponto de vista da arquitetura do modelo de casos de uso;
* Visão Lógica: Descreve as partes significativas do ponto de vista da arquitetura do modelo de design;
* Tamanho e Desempenho: descreve as principais características de dimensionamento do software que têm um impacto na arquitetura, bem como as restrições do desempenho desejado;
* Qualidade: descreve como a arquitetura do software contribui para todos os recursos (exceto a funcionalidade) do sistema.

## 2. Representação da Arquitetura

### 2.1 Back-end

O framework escolhido para o back-end é o Node.Js, que pode ser definido como um ambiente de execução Javascipt server-side. Através dele, é possível desenvolver pequenas e grandes aplicações. É de código aberto e possui uma ampla comunidade.

Outros pontos fortes do Node são: 
- Ele utiliza JavaScript no back-end, então é possível usar JSON para tudo; 
- É possível rodar projetos abertos e com o sistema operacional que quiser; 
- Não necessidade de dependencias instaladas no seu computador para começar a usar; 
- Oferece muitos pacotes a partir do seu gerenciador de pacotes;
- Comunidade muito ativa.

### 2.2 Front-end

Já no front-end, o framework adotado foi o Vue.js, que é um framework Javascript ***open source***. É utilizado para desenvolver vários tipos de interfaces, que posuem necessidades de maior interação e experiência mais valorosa para o usuário. Lembrando que é  de fácil aprendizagem, o que facilita sua aplicação para uma equipe.

Aplicações que usam Vue são constituídas de componentes com a sintaxe HTML, CSS e Javascript e um único arquivo .vue, o que facilita o isolamento e a manutenção de funcionalidades. Cada componente constituíndo um escopo isolado dos demais, tanto em lógica quantos nos estilos.


## 3. Metas e Restrições de Arquitetura

### 3.1 Metas

<p align = "justify">&emsp;&emsp; O sistema da plataforma vamos cuidar deve ter acesso a uma câmera e aos arquivos de mídia para up-load de imagens que mostrarão os problemas diversos da universidade às autoridades competentes em resolve-los. O objetivo é melhorar a comunicação dos estudantes com a administração.</p>

### 3.2 Restrições

#### 3.2.1 **Suportabilidade**

Por ser uma aplicação com foco no PWA, ela deve poder ser acessada sem problemas nos principais navegadores na atualidade, tanto nas suas versões desktop quanto na mobile.

#### 3.2.2 **Usabilidade**

É um sistema de fácil uso, onde o usuário não deve sofrer de dificuldades para a utilização da aplicação.

#### 3.2.3 **Ferramentas de Desenvolvimento**

Tanto no back-end quanto no front-end serão utilizados frameworks Javascript. 

No banco de dados será utilizado o software MongoDB, que é um software escrito em C++.

Também será utilizado o Docker, para facilitar a portabilidade do projeto.

#### 3.2.4 **Confiabilidade**

Ao longo de cada etapa, serão feitos inúmeros testes, no intuito de proporcionar a melhor experiência para o usuário.

## 4. Visão dos Casos de Uso

### 4.1 Diagrama de Casos de Uso<


### 4.2 Atores de Casos de Uso

|**Ator**|**Descrição**
|:-|:-|
|**Usuário**|O usuário poderá, postar, de forma simples e acompanhada de texto, uma imagem que capture o problema relatado. Poderá também se engajar nas postagens para determinar o grau de relevância e acompanhar notícias da universidade.

### 4.3 Prioridade dos casos de uso

Esse diagrama expõe os seguintes requisitos: 

**Identificador** | **Requisito**
-- | --
**RF01** | Permitir que usuários da comunidade acadêmica realize postagens sobre problemas da universidade
**RF02** | Permitir o usuário editar e excluir suas postagens
**RF03** | Permitir que o usuário crie, edite e apaga sua conta
**RF04** | Permitir o usuário fazer e desfazer login de sua conta
**RF05**| Exibir a listagem de todas as postagens feitas
**RF06** | Permitir a visualização de todas informações de uma postagem
**RF07** | Permitir que o usuário visualize suas postagens feitas
**RF08** | Permitir a visualização do estágio de resolução da postagem
**RF09** | Permitir que a listagem das postagens seja feita por filtros
**RF10** | Permitir os usuários engajarem com uma postagem, através de comentários e apoio(positivo ou negativo)
**RF11** | Permitir o usuário compartilhar uma postagem
**RF12** | Permitir o reporte de uma postagem
**RF13** | Exibir ao usuário uma notificação caso uma postagem sua tenha sido resolvida com sucesso
**RF14** | Exibir uma página direcionada às notificações e atualizações da universidade sobre as postagens
**RF15** | Exibir uma aba de ajuda de uso da aplicação
**RNF16** | A aplicação deve fazer a verificação de conta com dados da universidade
**RNF17** | O sistema deve se tratar de uma PWA (Progressive web app)
**RNF18** | A aplicação deve ter uma experiencia de uso simples e familiar, de linguagem fácil e intuitiva
**RNF19** | Assegurar a segurança de dados dos usuários
**RNF20**| Pode ter suporte para gamificação

## 5. Tamanho e Desempenho


