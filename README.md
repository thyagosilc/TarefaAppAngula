# TarefaAppAngula
Como rodar o projeto local.

1 PASSO: 
Executar o NPM Install na pasta TarefaAppAngula-origem\AppAngular:  npm install
![image](https://user-images.githubusercontent.com/9157652/227239092-dc56e1f5-29ea-4b2a-a1c1-4dedac357b4a.png)


2 PASSO: 
Verificar a URL de chamada do serviço: API de tarefas(Back-end) no arquivo

..\TarefaAppAngula-origem\AppAngular\src\app\tarefas.service.ts

caso necessário altere o numero da porta da API- url = 'http://localhost:24114/api/v1/tarefas';

atualmente está apontando para a porta{24114}.

3 PASSO: 
Executar o comando: ng serve


4 PASSO: 
Executar a API do back-end. existe um passo a passo na API no arquivo README.md.
 
