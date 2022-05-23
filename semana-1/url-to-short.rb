
puts "Digite a url que deseja encurtar:"
# Ref https://www.rubyguides.com/2019/10/ruby-chomp-gets/
url = gets.chomp

hashUrl = ""
#Ref https://www.rubyguides.com/2015/05/working-with-files-ruby/
# Ref Open mode: https://www.rubydoc.info/stdlib/core/IO:initialize
File.open("urls.csv", "a+") do |f|
    # Ref https://ruby-doc.org/stdlib-3.1.1/libdoc/digest/rdoc/index.html
    
    require 'digest/sha1'

    # Ref https://ruby-doc.org/core-3.1.1/String.html#method-i-5B-5D
    hashUrl = Digest::SHA1.hexdigest(url)[0..7]
    f.write("#{hashUrl},#{url}\n")
end

puts "A sua url curta é: shorter.app/#{hashUrl}"

