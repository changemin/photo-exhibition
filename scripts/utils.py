from PIL import Image, ExifTags
import os

def rename_files_with_exif():
    file_list = os.listdir("../photos")
    for photo in file_list:
        print("@"*10)
        img = Image.open(f"./../photos/{photo}")
        img_exif = img.getexif()

        exif_data = {}
        if img_exif is None:
            print('Sorry, image has no exif data.')
        else:
            for key, val in img_exif.items():
                if key in ExifTags.TAGS:
                    print(f'{ExifTags.TAGS[key]}:{val}')