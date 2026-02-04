#!/bin/bash
echo "Running security scan on workspace..."

# Check for common secret patterns
echo "Scanning for potential secrets..."
grep -r "sk-\|AIza\|password.*=\|secret.*=\|api_key.*=" . --exclude-dir=.git --exclude-dir=scripts

# Check for large files
echo "Checking for large files..."
find . -type f -size +1M -not -path "./.git/*" -exec ls -lh {} \;

# Check permissions on sensitive directories
echo "Checking directory permissions..."
ls -la ~/.openclaw/credentials/ 2>/dev/null || echo "Credentials directory not found"

echo "Security scan complete."