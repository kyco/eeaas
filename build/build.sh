#!/bin/bash

set -e

# --------------------------------------------------------------------------------------------------
# COLOURS
# --------------------------------------------------------------------------------------------------

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# --------------------------------------------------------------------------------------------------
# RESOLVE PATHS
# --------------------------------------------------------------------------------------------------

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Change to repo root so all commands run relative to it
cd "$REPO_ROOT"

# --------------------------------------------------------------------------------------------------
# ENV FILE LOADING
# --------------------------------------------------------------------------------------------------

printf "${BLUE}🔧 Loading environment variables...${NC}\n"

if [ -z "$CI" ]; then
  ENV_FILE=".env.local"
  printf "${YELLOW}⚙️  Running locally - loading %s${NC}\n" "$ENV_FILE"
else
  ENV_FILE=".env.production"
  printf "${YELLOW}🏭 Running in CI - loading %s${NC}\n" "$ENV_FILE"
fi

if [ -f "$ENV_FILE" ]; then
  printf "${GREEN}✅ Loading variables from %s${NC}\n" "$ENV_FILE"

  # Export all variables from the env file, but do not override existing ones
  set -o allexport
  source <(grep -v '^#' "$ENV_FILE" | sed '/^\s*$/d')
  set +o allexport
else
  printf "${RED}⚠️  Warning: %s not found.${NC}\n" "$ENV_FILE"
fi

# --------------------------------------------------------------------------------------------------
# METHODS
# --------------------------------------------------------------------------------------------------

deploy_docs() {
  printf "${BLUE}${BOLD}🚀 Deploying: docs${NC}\n"

  printf "${YELLOW}📦 Building docs app...${NC}\n"
  nx run docs:build
  nx run docs:gh-pages-404-fix

  DIST_DIR="apps/docs/dist"

  if [ ! -d "$DIST_DIR" ]; then
    printf "${RED}❌ Build output not found at %s${NC}\n" "$DIST_DIR"
    exit 1
  fi

  printf "${YELLOW}🌐 Deploying to GitHub Pages...${NC}\n"
  npx gh-pages -d "$DIST_DIR" -r https://x-access-token:${GITHUB_TOKEN}@github.com/kyco/eeaas.git

  printf "${GREEN}✅ Deployment complete!${NC}\n"
}

# --------------------------------------------------------------------------------------------------
# MAIN
# --------------------------------------------------------------------------------------------------

main() {
  CMD="$1"

  if [ -z "$CMD" ]; then
    printf "${RED}❌ No command specified.${NC}\n"
    printf "${BOLD}Usage:${NC} bash build.sh <command>\n"
    printf "${BOLD}Available commands:${NC}\n"
    printf "  > deploy-docs\n"
    exit 1
  fi

  case "$CMD" in
  deploy-docs)
    deploy_docs
    ;;
  *)
    printf "${RED}❌ Unknown command: %s${NC}\n" "$CMD"
    exit 1
    ;;
  esac
}

main "$@"
