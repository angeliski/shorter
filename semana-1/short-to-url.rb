prefix = ENV.fetch('APP_WEBSITE','shorter.app')

puts "Digite a url curta que deseja localizar:"
# Ref https://www.rubyguides.com/2019/10/ruby-chomp-gets/
shortUrl = gets.chomp

File.foreach("urls.csv") do |line|
    # Ref https://ruby-doc.com/core/String.html#method-i-split
    if (shortUrl.split("#{prefix}/")[1] == line.split(',')[0])
        puts "A sua url original é: #{line.split(',')[1]}" 

        # Ref https://www.rubyguides.com/2019/03/ruby-exit/
        exit 0
    end
end


puts "Essa url não tem correspondência no nosso banco de dados"