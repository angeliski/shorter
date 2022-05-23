# Executando

```ruby
ruby ./url-to-short.rb
```

Digite a url que deseja encurtar:
https://meet.google.com/ufw-cqiy-cgm


A sua url curta é: shorter.app/bb740347


```ruby
ruby ./short-to-url.rb
```

Digite a url curta que deseja localizar:

shorter.app/bb740347


A sua url original é: https://meet.google.com/ufw-cqiy-cgm


```ruby
ruby ./short-to-url.rb
```

Qual é a sua URL curta?
helloworld.com/1

Essa url não tem correspondência no nosso banco de dados



## Avançado
Você pode mudar a URL base, passando a env `APP_WEBSITE`

```ruby
APP_WEBSITE=shorter2.app ruby ./url-to-short.rb
```