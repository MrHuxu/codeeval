def pallindrome? n
  n.to_s == n.to_s.reverse
end

def iterations n
  iterations = 0
  while not pallindrome?(n)
    n = n + n.to_s.reverse.to_i
    iterations += 1
    puts n, iterations
  end
  [iterations, n]
end

File.open(ARGV[0]).each_line do |line|
  n = line.to_i
  puts iterations(n).join(' ')
end
