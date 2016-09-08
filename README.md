# grunt
My worflow Grunt

### Taferas
- Limpar todos arquivos deixados pelo processo da distribuição anterior;
- verificar a qualidade;
- concatenar os arquivos js;
- minificar todos os arquivos js já concatenados em um arquivo único;
- minifica os arquivos css;
- minifica os arquivos html;
- copia recursos necessários;
- limpa arquivos intermediários;


#### Plugins
- contrib-jshint
- contrib-concat
- contrib-uglify
- contrib-cssmin
- contrib-htmlmin
- contrib-clean
- contrib-copy

## Dependências

### Na raiz do Projeto rode o Bower globalmente

```sh
npm install -g bower
```
### Instale um pacote

```sh
bower install bootstrap#v4.0.0-alpha.4
```


## Como usar

### Passo 1: Clone o respositório para seu computador

```sh
git clone https://github.com/DaniloAgostinho/grunt.git
```

### Passo 2 : Entre no Diretório

```sh
cd grunt
```

### Passo 3 : Instale as Dependências do projeto

```sh
npm install
```

###Passo 4 : Rode a Task de produção

```sh
grunt prod
```

###Passo 5 : Browser Sync live em diversos dispositivos, instale globalmente para você ter em sua pasta

```sh
npm install -g browser-sync
```

###Passo 6 : Certifique-se que você esta na pasta raiz do projeto e rode o comando

```sh
browser-sync start --server --files "index.html", "dist/css/*style.min.css", "dist/js/scripts.js" --tunnel
```

> OBS: Fiquem a vontade para usar este workflow, dúvidas, melhorias na estrutura? Submeta um PullRequest, ficarei bastante feliz. :D

