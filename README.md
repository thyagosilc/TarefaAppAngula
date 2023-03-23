# TarefaAppAngula
Como rodar o projeto local.

1 PASSO: 
Executar o NPM Install na pasta TarefaAppAngula-origem\AppAngular:  npm install
![image](https://user-images.githubusercontent.com/9157652/227239092-dc56e1f5-29ea-4b2a-a1c1-4dedac357b4a.png)


2 PASSO: 
Verificar a URL de chamada do serviço: API de tarefas(Back-end) no arquivo
![image](https://user-images.githubusercontent.com/9157652/227239538-ac457789-9615-4817-bf68-8972ac080c3e.png)

..\TarefaAppAngula-origem\AppAngular\src\app\tarefas.service.ts

caso necessário altere o numero da porta da API- url = 'http://localhost:24114/api/v1/tarefas';

atualmente está apontando para a porta{24114}.

3 PASSO: 
Executar o comando: ng serve
![image](https://user-images.githubusercontent.com/9157652/227239848-9bcab4ff-8acc-4a7d-bc25-9e4c40f09bd2.png)


4 PASSO: 
Executar a API do back-end. existe um passo a passo na API no arquivo README.md.


Resultado: 
![image](https://user-images.githubusercontent.com/9157652/227251121-f2fb1bf9-ca4c-4667-ade2-643ceb437f1a.png)
