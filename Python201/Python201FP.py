#Python 201 FP

import requests


#functions

def request(name):
    name=name.lower()
    
    url=f"https://pokeapi.co/api/v2/pokemon/{name}"
    
    req=requests.get(url)
    
    if req.status_code ==200:
        return req

    else:
        print("Pokemon not found")
        return None
    
def toDictionary(info):
    
    data=info.json()
    
    return data


################################################################


#main
while True:
    name_pokemon=input("\nWhat pokemon do you want to find??\n")
    
    if name_pokemon !="":

        info=request(name_pokemon)
        pokemon_data=toDictionary(info)
        
        pname=pokemon_data['name'].capitalize()

        print("\nPokemon info:\n")
        print(f"Name:\t{pname}\n")
        print(f"Abilities:")
        for ab in pokemon_data['abilities']:
            print("\t-",ab["ability"]["name"])
        print("\nTypes:")
        for t in pokemon_data['types']:
            print('\t-',t['type']['name'])
    
    else:
        print("Was nice to see you! Bye!")
        break            
    

