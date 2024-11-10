import requests

def get_razas():
    r = requests.get('https://dog.ceo/api/breeds/list/all')
    print(r.text)
    print(r.status_code)
    print(type(r.text))
    
    razas = r.json()
    for raza in razas.values():
        print(f"Raza de perritos: {raza[5]}")