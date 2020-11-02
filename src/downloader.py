import requests, os

def download(url, save_path):
    r = requests.get(url, allow_redirects=True)
    _, file_name = os.path.split(url)
    if not os.path.exists(save_path):
        os.makedirs(save_path)
    save_file_path = os.path.join(save_path, file_name)
    open(save_file_path, 'wb').write(r.content)
    return save_file_path