set -e # stop if it fails at any point
CYAN='\033[1;36m'
NO_COLOR='\033[0m'
LABEL="db-drop"
printf "${CYAN}== ${LABEL}${NO_COLOR}\n"
echo "db-drop"

URL=$(sed 's/\/minnadokodb//g' <<< "postgresql://postgres:password@localhost:5432/minnadokodb")
psql $URL -c "DROP DATABASE IF EXISTS minnadokodb WITH(FORCE);"
