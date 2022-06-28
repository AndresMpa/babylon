#!/bin/bash

indentificationRegrex='^[0-9]{10}$'
countryRegrex='^EC|COL|US$'
birthdayRegrex='^19|20[0-8]{2}[1-12][1-31]$'

echo "Expresiones regulares"
read -p "Ingresar una identificacion:" identity
read -p "Ingresar las iniciales de un país [EC, COL, US]:" country
read -p "Ingresar la fecha de nacimiento [yyyyMMDD]:" birthday

# Validación de identidad
if [[ $identity =~ $indentificationRegrex ]]; then
	echo "Identificación $identity válida"
else
	echo "Identificación $identity inválida"
fi

# Validación de país
if [[ $country =~ $countryRegrex ]]; then
	echo "País $country válida"
else
	echo "País $country inválida"
fi

# Validación de cumpleaños
if [[ $birthday =~ $birthdayRegrex ]]; then
	echo "Fecha de nacimiento $birthday válida"
else
	echo "Fecha de nacimiento $birthday inválida"
fi

