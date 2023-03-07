from PIL import Image, ExifTags
import operator
import requests
import config
import os
import json
import pprint

#
def rename_photos_with_exif():
    
    # os.remove("photos/.DS_Store")
    file_list = os.listdir("photos")
    file_list.sort()
    for cnt, photo in enumerate(file_list):
        img = Image.open(f"./photos/{photo}")
        img_exif = img.getexif()

        exif_data = {}
        if img_exif is None:
            print('Sorry, image has no exif data.')
        else:
            for key, val in img_exif.items():
                if key in ExifTags.TAGS:
                    exif_data[ExifTags.TAGS[key]] = val # collect all the exif tags

        new_filename = f"{exif_data['DateTime']}@{cnt+1}@{photo.split('@')[2] if len(photo.split('@')) > 2 else photo}"
        print(new_filename)

        os.rename(f"photos/{photo}", f"photos/{new_filename}")

# Photo 폴더의 사진들을 기반으로 React에서 활용할 수 있도록 src/data/Photodata.json 을 생성.
# 실행 하기 전에 rename_photos_with_exif() 가 실행되어있어야 함.
def generate_json_photo_data():
    file_list = os.listdir("photos")
    file_list.sort()
    photo_list = []
    for photo in file_list:
        photo_data = {}
        photo_data["FilePath"] = f"photos/{photo}"
        photo_data["DateTime"] = photo.split("@")[0]
        photo_data["Idx"] = photo.split("@")[1]
        photo_data["Title"] = photo.split("@")[2][:-4]
        photo_data["Description"] = ""
        photo_list.append(photo_data)

    jsonStr = json.dumps(photo_list, ensure_ascii = False, sort_keys=True, indent=4)
    json_file_path = "src/data/PhotoData.json"
    json_file = open(json_file_path, "w", encoding="utf-8")
    json_file.write(jsonStr)
    json_file.close()

def update_marquee_text():
    pass



# graph_url = 'https://graph.facebook.com/v15.0/'
# def post_image(caption='', image_url='',instagram_account_id='',access_token=''):
#     url = graph_url + instagram_account_id + '/media'
#     param = dict()
#     param['access_token'] = access_token
#     param['caption'] = caption
#     param['image_url'] = image_url
#     response = requests.post(url, params=param)
#     response = response.json()
#     return response

# post_image("hello", "../photos/placeholder.png", config.app_id, config.secret_code)