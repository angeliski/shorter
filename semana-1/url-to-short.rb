# Ref https://ruby-doc.org/stdlib-3.1.1/libdoc/digest/rdoc/index.html
require 'digest/sha1'


# Ref https://www.rubydoc.info/stdlib/core/ENV
prefix = ENV.fetch('APP_WEBSITE','shorter.app')

puts "Digite a url que deseja encurtar:"
# Ref https://www.rubyguides.com/2019/10/ruby-chomp-gets/
url = gets.chomp

# Ref https://ruby-doc.org/core-3.1.1/String.html#method-i-5B-5D
hashUrl = Digest::SHA1.hexdigest(url)[0..7]

#Ref https://www.rubyguides.com/2015/05/working-with-files-ruby/
# Ref Open mode: https://www.rubydoc.info/stdlib/core/IO:initialize
File.write("urls.csv", "#{hashUrl},#{url}\n", mode: "a+")

# ref http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html
puts "A sua url curta é: #{prefix}/#{hashUrl}"
