prefix = ENV.fetch('APP_WEBSITE','shorter.app')

SHORT_URL_KEY_POSITION = 0
ORIGINAL_URL_POSITION = 1

puts "Digite a url curta que deseja localizar:"
# Ref https://www.rubyguides.com/2019/10/ruby-chomp-gets/
shortUrl = gets.chomp



File.foreach("urls.csv") do |line|    
    #Ref https://ruby-doc.com/core/String.html#method-i-delete_prefix
    keyFromUser = shortUrl.delete_prefix("#{prefix}/")
    # Ref https://ruby-doc.com/core/String.html#method-i-split
    breakedLine = line.split(',')
    keyFromFile = breakedLine[SHORT_URL_KEY_POSITION]

    if ( keyFromUser == keyFromFile)
        puts "A sua url original é: #{breakedLine[ORIGINAL_URL_POSITION]}" 
        # Ref https://www.rubyguides.com/2019/03/ruby-exit/
        exit 0
    end
end if File.file?("urls.csv")

puts "Essa url não tem correspondência no nosso banco de dados"
exit 1