import math
from decimal import Decimal


#manejos de valores infinitos

infinito_positivo = float('inf')
print(f"infinito_positivo: {infinito_positivo}")
print(f' Es infinito?: {math.isinf(infinito_positivo)}')


infinito_negativo = float('-inf')
print(f"infinito_negativo: {infinito_negativo}")
print(f' Es infinito?: {math.isinf(infinito_negativo)}')

#Modulo math
infinito_positivo = math.inf
print(f"infinito_positivo: {infinito_positivo}")
print(f' Es infinito?: {math.isinf(infinito_positivo)}')

infinito_negativo = -math.inf
print(f"infinito_negativo: {infinito_negativo}")
print(f' Es infinito?: {math.isinf(infinito_negativo)}')


# Modulo decimal
infinito_negativo = Decimal('infinity')
print(f"infinito_negativo: {infinito_negativo}")
print(f' Es infinito?: {math.isinf(infinito_negativo)}')


infinito_negativo = Decimal('-infinity')
print(f"infinito_negativo: {infinito_negativo}")
print(f' Es infinito?: {math.isinf(infinito_negativo)}')