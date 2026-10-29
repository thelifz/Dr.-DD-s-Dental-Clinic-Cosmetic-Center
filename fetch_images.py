import urllib.request
import json
import re

req = urllib.request.Request('https://unsplash.com/napi/search/photos?query=dentistry&per_page=15')
req.add_header('User-Agent', 'Mozilla/5.0')
try:
    response = urllib.request.urlopen(req)
    data = json.loads(response.read())
    urls = [img['urls']['regular'] for img in data['results']]
    for i, url in enumerate(urls[:9]):
        print(f'URL_{i+1}: {url}')
except Exception as e:
    print('Error:', e)
