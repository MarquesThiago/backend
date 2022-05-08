# backend-APS
 
## Routes

All routes bellow receive POST method and return status 200 with a JSON

### /find-cad
- required params controller in body
- variant controller params : "name", "document",'id"
- exemplo
- curl --request POST \
  --url http://localhost/find-cad \
  --header 'Content-Type: application/json' \
  --data '{
	"controller" : "name",
	"id": 15,
	"name": "Victor",
	"document": 45678912345
	
}'

### /find-course
- required params controller in body
- variant controller params : "name", "material",'jours"
-  curl --request POST \
  --url http://localhost/create-courses \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "desenvolvimento Prototipos 3D",
	"material": "Artes Visuais",
	"hours": 320
}'

### /create-register
-  curl --request POST \
  --url http://localhost/create-register \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Victor Antunes Souza",
	"numDocument": 45678912345,
	"dataNasc": "21-05-1998",
	"phone": 125658986,
	"address": "Av Luiz Marcos de Camargo, 45",
	"status": 1,
	"city": "São Paulo",
	"state": "SP",
	"listClasses": [
		{
			"idTeam": 2
		},
		{
			"idTeam": 5
		}
	]
}'

### /create-employee
- routes create new empployee
- estruture
 - curl --request POST \
  --url http://localhost/create-employee \
  --header 'Content-Type: application/json' \
  --data '{
	"office": "Professor",
	"depth": "Marketing",
	"spec": "Brading",
	"idRegister": 5,
	"listClasses": [
		{
			"idTeam": 6,
			"atuation": "coordenador"
		},
		{
			"idTeam": 5,
			"atuation": "Professor"
		}
	]
}'

### /create-classes
- toutes of creation of new classes 
- esturtura
- curl --request POST \
  --url http://localhost/create-classes \
  --header 'Content-Type: application/json' \
  --data '{
	"room": "254H",
	"dateStart": "2022-02-20",
	"idCourse": 1
}'

### /create-course
- exemple
- curl --request POST \
  --url http://localhost/create-courses \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "desenvolvimento Prototipos 3D",
	"material": "Artes Visuais",
	"hours": 320
}'

### /find-employee
- required params controller in body
   - variant controller params : "name", "document",'id","depth" and "office"
- exemple;
- curl --request POST \
  --url http://localhost/find-employee \
  --header 'Content-Type: application/json' \
  --data '{
	"controller" : "depth",
	"id": 15,
	"name": "Victor",
	"numDocument": 45678912345,
	"depth": "Marketing",
	"office": "Professor"
	
}'

### /find-classes
-  required params controller in body
- variant controller params : "course", "room",'date"
- exemplo
- curl --request POST \
  --url http://localhost/find-classes \
  --header 'Content-Type: application/json' \
  --data '{
	"controller" : "date",
	"nameCourse": "web",
	"room": "254H",
	"dateStart": "2022-02-20"
	
}'