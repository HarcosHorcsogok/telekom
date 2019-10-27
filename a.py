from PIL import Image
import os

path = 'c:\\Users\\geri1245\\Desktop\\telekom\\src\\img'

files = []
# r=root, d=directories, f = files
for r, d, f in os.walk(path):
  for file in f:
    files.append(os.path.join(r, file))

for f in files:
  path = f.split("\\")
  path[6] = "imgs"
  dst = "\\".join(path)

  basewidth = 300
  img = Image.open(f)
  wpercent = (basewidth/float(img.size[0]))
  hsize = int((float(img.size[1])*float(wpercent)))
  img = img.resize((basewidth,hsize), Image.ANTIALIAS)
  img.save(dst)