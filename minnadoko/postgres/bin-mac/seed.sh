
set -e # stop if it fails at any point

CYAN='\033[1;36m'
NO_COLOR='\033[0m'
LABEL="db-seed-load"
printf "${CYAN}== ${LABEL}${NO_COLOR}\n"

ABS_PATH=$(readlink -f "$0")
BIN_PATH=$(dirname "$ABS_PATH")
POSTGRES_PATH=$(dirname "$BIN_PATH")

echo "db-seed-load"
seed_path="$POSTGRES_PATH/sql/seed.sql"
echo "$seed_path"

URL=$(sed 's/\/minnadokodb//g' <<< "postgresql://postgres:password@localhost:5432/minnadokodb")

psql $URL/minnadokodb < "$seed_path"