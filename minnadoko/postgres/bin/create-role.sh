CYAN='\033[1;36m'
NO_COLOR='\033[0m'
LABEL="db-create-role"
printf "${CYAN}== ${LABEL}${NO_COLOR}\n"

ABS_PATH=$(readlink -f "$0")
BIN_PATH=$(dirname "$ABS_PATH")
POSTGRES_PATH=$(dirname "$BIN_PATH")

echo "db-create-role"
create_role_path="$POSTGRES_PATH/sql/role.sql"
echo "$create_role_path"

URL=$(sed 's/\/minnadokodb//g' <<< "postgresql://postgres:password@localhost:5432/minnadokodb")

psql $URL/minnadokodb < "$create_role_path"