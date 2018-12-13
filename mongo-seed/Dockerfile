FROM mongo

COPY newdbexport.json /newdbexport.json

CMD mongoimport --host mongo-server --db myprofile --collection works --type json --file /newdbexport.json --jsonArray