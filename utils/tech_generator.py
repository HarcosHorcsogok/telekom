techs = [
"Artificial Intelligence",
"Data Mining",
"Reverse Engineering",
"IT Security",
"Build Systems",
"Network communication",
"Quantum computing",
"Blockchain",
"Augmented Reality",
"Virtual Reality",
"Microservices",
"Platform as a Service",
"Self driving Cars"
"Cloud",
"5G",
"Hardware",
"Serverless",
"Artificial Intelligence",
"Big Data",
]

import random

file = open("skills.txt", "w")

for tech in techs:
  nums = random.sample(range(1, 6), 3)
  for num in nums:
    line = tech + ";" + str(num) + "\n"
    file.write(line)