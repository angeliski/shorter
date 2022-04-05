

# shorter
Esse é um repo pra praticar Ruby/Rails/Banco de Dados/JS
### Semana 1

Meta: Construir 2 scripts (diferentes)
1. Recebe uma URL e salvar ela em um arquivo devolvendo a URL fake
2. Recebe uma URL fake, consulta o arquivo e devolve a URL original

### Semana 2
Meta: Evoluir os 2 scripts para um só que roda até ser solicitado parar
1.  A execução começa com `ruby faker-hello-world`
2. Será exibido um menu com três opções:
	- Encurtar URL
	- Descobrir URL original
	- Sair

obs: O comportamento permanece o mesmo da semana passada (salvando os links em arquivo)

### Semana 3
Meta: Refatorar o script para usar Orientação a Objetos
1. Começar com um “review” cruzado (onde cada pessoa revisa 2 PRs) sobre pontos de melhoria
2. Implementar melhorias (previstas no PR ou não)
3. Refazer a revisão com base nos ajustes

### Semana 4
Meta: Adicionar testes nos objetos do script
1. Adicionar cobertura de testes nos objetos do script garantindo as regras
2. Adicionar um teste de integração no script garantindo entradas/saídas do loop

### Semana 5
Meta: Mover o script para uma API Rails
1. A API vai ter 2 endpoints
	- Endpoint A - Onde é possível criar novas urls encurtadas
	- Endpoint B - Onde é possível saber a URL original com base em uma URL encurtada
	
Obs: Neste momento não é necessário criar nenhum tipo de banco de dados

### Semana 6
Meta: Nossa API agora tem um banco de dados
1.  Desenhar o modelo de dados da nossa API em banco
2. Adicionar uma nova entidade: Usuario (responsável por saber quem foi que criou a URL)
3. Criar essa estrutura de banco usando as ferramentas do Rails

### Semana 7
Meta: Termos uma interface para nosso encurtador
1. A nossa interface vai ter 3 rotas
	- Rota 1: Onde eu posso encurtar meu link
	- Rota 2: Onde eu posso ser direcionado para o link original
	- Rota 3: Onde eu posso ver todos os links encurtados disponíveis