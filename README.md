# precorsia-frontend

![workflow-ci-pass-notpass](https://github.com/PRECORSIA/precorsia-frontend/actions/workflows/ci-cd.yml/badge.svg)

### Para instalar e executar este projeto

1. **Instale as dependências**: O projeto tem algumas dependências que precisam ser instaladas antes que você possa executar o projeto. Você pode instalar essas dependências usando o comando `npm install`.

```bash
npm install
```

2. **Execute o projeto**: Agora que todas as dependências estão instaladas, você pode executar o projeto usando o comando `npm start`.

```bash
npm start
```

Isso iniciará o servidor e você poderá acessar o projeto em seu navegador na URL fornecida no console (geralmente `http://localhost:80` ou similar).

Para testar o projeto, você pode usar o comando `npm test` que está definido no arquivo `package.json`. Este comando irá executar os testes usando o Mocha, que é um framework de testes para Node.js.

### Para executar os testes

**Execute os testes**: Você pode executar os testes usando o comando `npm test`.

```bash
npm test
```

Além disso, você pode gerar um relatório de testes usando o comando `npm run test:report`. Este comando irá gerar um relatório de testes usando o Mochawesome, que é um reporter para o Mocha que gera relatórios de testes em HTML.

```bash
npm run test:report
```

Após a execução, um relatório em HTML será gerado no diretório `mochawesome-report`.

## Link do vídeo no Youtube

[![Precorsia - Frontend](https://img.youtube.com/vi/pMoZsPV3SKs/0.jpg)](https://youtu.be/pMoZsPV3SKs)