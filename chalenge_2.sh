#!/bin/bash

nameRegrex='^[A-Z]{1}[a-z]*$'
ageRegrex='^[1-9]{1,2}$'
addressRegrex='^([A-Z]*)$'
phoneRegrex='^[0-9]{10}$'

read -p "Write your name: " name
read -p "Write your last name: " last
read -p "How old are you? " age
read -p "Where do you live? " address
read -p "Write you phone number: " phone

if [[ $name =~ $nameRegrex ]] && [[ $last =~ $nameRegrex ]]; then
	echo "Hi $name $last"
else
	echo "$name $last sounds weird... Hi..."
fi

echo -e "\n"

if [[ $age =~ $ageRegrex ]] && [[ $address =~ $addressRegrex ]]; then
	echo "How is livig at $address with $age years old?"
elif [[ $age =~ $ageRegrex ]]; then
	echo "My grandpa talk a lot about his life when he was $age..."
	echo -n "But I don't know where is $address"
elif [[ $address =~ $addressRegrex ]]; then
	echo "I went with my mother to $address once"
	echo -n "Maybe I was $age"
else
	echo "Wait, are you $age years old? I don't know where's $address"
fi

echo -e "\n"

if [[ $phone =~ $phoneRegrex ]]; then
	echo "We will call you to $phone"
else
	echo "$phone doesn't look like a phone number in this country"
fi
