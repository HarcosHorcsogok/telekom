import random
import os

names = []

with open("names.txt") as fp:
  line = fp.readline()
  while line:
    line2 = line.rstrip()
    name = line2.replace(" ", "").lower()
    names.append(name)
    line = fp.readline()

path = 'c:\\Users\\geri1245\\Desktop\\images\\'

files = []
# r=root, d=directories, f = files
for r, d, f in os.walk(path):
  for file in f:
    files.append(os.path.join(r, file))

counter = 0
for f in files:
  src = f
  path = f.split("\\")
  path[5] = names[counter % (len(names) - 1)] + ".jpg"
  counter += 1
  dst = "\\".join(path)
  os.rename(src, dst)
