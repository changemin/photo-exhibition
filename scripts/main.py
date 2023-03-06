from PIL import Image, ExifTags

img = Image.open("./../photos/photo (1).jpg")
img_exif = img.getexif()
print(type(img_exif))
# <class 'PIL.Image.Exif'>

if img_exif is None:
    print('Sorry, image has no exif data.')
else:
    for key, val in img_exif.items():
        if key in ExifTags.TAGS:
            print(f'{ExifTags.TAGS[key]}:{val}')