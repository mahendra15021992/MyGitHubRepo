#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/softwares | grep -v \\\.\$`; do
  cat app/softwares/$file | python -mjson.tool > tmp.json
  rm app/softwares/$file
  mv tmp.json app/softwares/$file
done
