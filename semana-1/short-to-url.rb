
puts "Digite a url curta que deseja localizar:"
# Ref https://www.rubyguides.com/2019/10/ruby-chomp-gets/
shortUrl = gets.chomp

File.foreach("urls.csv") do |line|
    puts line if (shortUrl.split('shorter.app/')[1] == line.split(',')[0])
end