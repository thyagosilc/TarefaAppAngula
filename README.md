# TarefaAppAngula
Como rodar o projeto local.

1 PASSO: 
Executar o NPM Install na pasta TarefaAppAngula-origem\AppAngular:  npm install

2 PASSO: 
Verificar a URL de conexão com a API de tarefas(Back-end)
..\TarefaAppAngula-origem\AppAngular\src\app\tarefas.service.ts
caso necessário altere o numero da porta da API- url = 'http://localhost:24114/api/v1/tarefas';
atualmente está apontando para a porta{24114}.

3 PASSO: 
Executar o comando: ng serve
