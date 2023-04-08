### TO CREATE PB FOLDER
chmod +x ./proto-gen.sh
 ./proto-gen.sh  

### Create migration
yarn db:migrate && yarn db:generate && yarn db:push
