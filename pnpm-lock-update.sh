#!/bin/bash
dir="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
bazel run -- @pnpm//:pnpm --dir $dir install --lockfile-only
