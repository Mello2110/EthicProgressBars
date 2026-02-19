import json
import urllib.request
import random

# Mapping Country Codes (ISO 3166-1 alpha-2 mostly) to Groups
COUNTRY_TO_GROUP = {
    # Europa
    'AT': 'europa', 'BE': 'europa', 'BG': 'europa', 'CH': 'europa', 'CY': 'europa', 'CZ': 'europa', 
    'DE': 'europa', 'DK': 'europa', 'EE': 'europa', 'ES': 'europa', 'FI': 'europa', 'FR': 'europa', 
    'GB': 'europa', 'GR': 'europa', 'HR': 'europa', 'HU': 'europa', 'IE': 'europa', 'IS': 'europa', 
    'IT': 'europa', 'LT': 'europa', 'LU': 'europa', 'LV': 'europa', 'NL': 'europa', 'NO': 'europa', 
    'PL': 'europa', 'PT': 'europa', 'RO': 'europa', 'SE': 'europa', 'SI': 'europa', 'SK': 'europa', 
    'UA': 'europa', 'RU': 'europa', 'BY': 'europa', 'BA': 'europa', 'MK': 'europa', 'MD': 'europa',
    'RS': 'europa', 'ME': 'europa', 'AL': 'europa', 'XK': 'europa',
    # Americas
    'US': 'amerika', 'CA': 'amerika', 'MX': 'amerika', 'GT': 'amerika', 'CR': 'amerika', 
    'CO': 'amerika', 'VE': 'amerika', 'PE': 'amerika', 'BR': 'amerika', 'AR': 'amerika', 
    'CL': 'amerika', 'LC': 'amerika', 'TC': 'amerika', 'JM': 'amerika', 'BB': 'amerika',
    'TT': 'amerika', 'GP': 'amerika',
    # Asia (East/South/SE)
    'CN': 'ostasien', 'JP': 'ostasien', 'KR': 'ostasien', 'KP': 'ostasien', 'TW': 'ostasien', 
    'VN': 'ostasien',
    'IN': 'suedasien', 'PK': 'suedasien', 'BD': 'suedasien', 'LK': 'suedasien', 'MM': 'suedasien',
    'ID': 'suedasien', 'PH': 'suedasien', 'TH': 'suedasien', 'MY': 'suedasien', 'SG': 'suedasien',
    'TL': 'suedasien',
    # Middle East / MENA
    'IL': 'nahost', 'TR': 'nahost', 'EG': 'nahost', 'IR': 'nahost', 'IQ': 'nahost', 
    'SA': 'nahost', 'YE': 'nahost', 'SY': 'nahost', 'JO': 'nahost', 'LB': 'nahost', 
    'PS': 'nahost', 'DZ': 'nahost', 'MA': 'nahost', 'TN': 'nahost', 'LY': 'nahost',
    'KW': 'nahost', 'QA': 'nahost', 'AE': 'nahost',
    # Africa (Sub-Saharan mostly)
    'ZA': 'afrika', 'NG': 'afrika', 'KE': 'afrika', 'GH': 'afrika', 'ET': 'afrika', 
    'LR': 'afrika', 'ZW': 'afrika', 'CD': 'afrika', 'TZ': 'afrika', 'CM': 'afrika',
    'SN': 'afrika', 'SS': 'afrika',
    # Oceania
    'AU': 'ozeanien', 'NZ': 'ozeanien', 'PG': 'ozeanien',
}

CAT_MAP = {
    'physics': 'Physik',
    'chemistry': 'Chemie',
    'medicine': 'Medizin',
    'peace': 'Frieden',
    'literature': 'Literatur',
    'economics': 'Wirtschaft'
}

def get_group(cc):
    return COUNTRY_TO_GROUP.get(cc, 'europa') # Default to europa if unknown, or handle otherwise

def fetch_data():
    url = "http://api.nobelprize.org/v1/laureate.json"
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    )
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
    return data

def generate_js(data):
    js_entries = []
    
    for person in data.get('laureates', []):
        # Basic Info
        pid = person.get('id')
        firstname = person.get('firstname', '')
        surname = person.get('surname', '')
        fullname = f"{firstname} {surname}".strip()
        
        born_cc = person.get('bornCountryCode', 'SE') # Default to Sweden if unknown (rare)
        # Fix some historical codes or edge cases manually if preferred, but dict handles most.
        # Note: bornCountryCode can be 'US', 'DE', etc.
        # Some are empty or non-standard? API is usually good.
        if not born_cc: born_cc = 'SE' 

        group = get_group(born_cc)
        
        # Gender context if needed, mostly formatting prizes
        
        for prize in person.get('prizes', []):
            year = int(prize.get('year', 0))
            category = prize.get('category', 'physics')
            cat_de = CAT_MAP.get(category, 'Physik')
            
            motivation = prize.get('motivation', '').replace('"', "'")
            
            # Heuristic Scoring (Randomized for variety but bounded)
            # Reach: Nobel prizes are usually global (22-25)
            reach = random.randint(18, 25) 
            # Durability: Most are lasting (20-25)
            dur = random.randint(15, 25)
            # Multiplier: Varies
            mult = random.randint(10, 30)
            # Quality of Life: Varies greatly by category
            qual = random.randint(10, 20)
            
            # Score B (Revolutionary)
            cbrk = random.randint(20, 40)
            imm = random.randint(10, 30)
            shk = random.randint(15, 30)
            
            # Construct Entry
            entry = {
                'g': group,
                'n': fullname, # Using Name as Title for now, maybe short description? No, Name is cleaner.
                'y': year,
                'c': cat_de,
                'reach': reach, 'dur': dur, 'mult': mult, 'qual': qual,
                'cbrk': cbrk, 'imm': imm, 'shk': shk,
                'inv': fullname, # Inventor name is same as Laureate
                'org': person.get('bornCountry', ''), # Origin text
                'dsc': f"Nobelpreis für {cat_de}",
                'imp': "Anerkennung herausragender Leistungen für die Menschheit.",
                'ctx': motivation
            }
            js_entries.append(entry)

    # Sort by year
    js_entries.sort(key=lambda x: x['y'])
    
    print(f"Generated {len(js_entries)} entries.")
    
    # Write to JS file
    with open('nobel_data.js', 'w', encoding='utf-8') as f:
        f.write("const NOBEL = " + json.dumps(js_entries, indent=2, ensure_ascii=False) + ";")

if __name__ == "__main__":
    data = fetch_data()
    generate_js(data)
