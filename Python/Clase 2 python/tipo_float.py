#profundizandoe n el tipop float

a= 3.0
print(f"a: {a:.2f}")

#constructor float  puede recibir enteros y strings
a = float(10)
a = float('10')
print(f"a: {a}")



#notacion exponencial (notacion cientifica)
a = 3e5
print(f"a: {a:.2f}")

a= 3e-5
print(f"a: {a:.5f}")

#cualquier calculo que incluya un float dara como resultado un float
a = 4.0 + 5
print(f"a: {a}")
print(type(a))


