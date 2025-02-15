set -e # stop if it fails at any point

CYAN='\033[1;36m'
NO_COLOR='\033[0m'
LABEL="db-setup"
printf "${CYAN}== ${LABEL}${NO_COLOR}\n"

ABS_PATH=$(readlink -f "$0")
BIN_PATH=$(dirname "$ABS_PATH")
echo "$BIN_PATH"

source "$BIN_PATH/drop.sh"
source "$BIN_PATH/create.sh"
source "$BIN_PATH/schema-load.sh"
source "$BIN_PATH/seed.sh"
source "$BIN_PATH/create-role.sh"
