# OpenClaw Workspace Organizer

A comprehensive script to organize, secure, and backup any OpenClaw workspace.

## 🚀 Quick Start

### One-line Installation
```bash
# Install organizer to your workspace
curl -sSL https://raw.githubusercontent.com/dazeb/sentinel-workspace/main/scripts/install-organizer.sh | bash
```

### Quick Organization
```bash
# Run quick organizer (minimal setup)
./scripts/quick-organizer.sh

# Or run full organizer
./scripts/organize-workspace.sh
```

## 📋 Features

### 1. **Workspace Organization**
- Creates proper directory structure
- Sets up core bootstrap files
- Organizes memory files
- Creates project directories

### 2. **Security Configuration**
- Comprehensive `.gitignore` with security rules
- Security scan script
- Prevents accidental secret commits
- GitHub repository setup with private visibility

### 3. **Backup System**
- Git repository initialization
- Daily backup script
- Health check script
- Cron job setup for automated backups

### 4. **GitHub Integration**
- Creates private GitHub repository
- Configures git remote
- Pushes initial commit
- Provides repository URLs

## 🛠️ Usage

### Basic Usage
```bash
# Organize default workspace (~/.openclaw/workspace)
./scripts/organize-workspace.sh

# Organize specific workspace
./scripts/organize-workspace.sh /path/to/workspace
```

### With GitHub Setup
```bash
# Set environment variables for GitHub
export GITHUB_USER=yourusername
export GITHUB_TOKEN=your_token
export REPO_NAME=my-openclaw-workspace

# Run organizer
./scripts/organize-workspace.sh
```

### Quick Mode
```bash
# Minimal organization (no GitHub, minimal scripts)
./scripts/quick-organizer.sh
```

## 📁 Created Structure

```
workspace/
├── Core Files/
│   ├── AGENTS.md      # Operating instructions
│   ├── SOUL.md        # Agent persona
│   ├── USER.md        # User information
│   ├── IDENTITY.md    # Agent identity
│   ├── TOOLS.md       # Local tools & conventions
│   ├── HEARTBEAT.md   # Daily checklist
│   └── MEMORY.md      # Long-term memory index
├── memory/            # Daily memory files
│   ├── YYYY-MM-DD.md  # Daily logs
│   └── drafts/        # Drafts and working files
├── projects/          # Project directories
├── scripts/           # Maintenance scripts
│   ├── organize-workspace.sh  # Main organizer
│   ├── quick-organizer.sh     # Quick organizer
│   ├── daily-backup.sh        # Backup script
│   ├── health-check.sh        # Health check
│   └── security-scan.sh       # Security scan
├── archive/           # Archived files
├── .gitignore         # Security rules
└── README.md          # Workspace documentation
```

## 🔧 Maintenance Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `daily-backup.sh` | Daily git backup | `./scripts/daily-backup.sh` |
| `health-check.sh` | Workspace health check | `./scripts/health-check.sh` |
| `security-scan.sh` | Security scan for secrets | `./scripts/security-scan.sh` |
| `quick-check.sh` | Quick status check | `./scripts/quick-check.sh` |

## 🔒 Security Features

### .gitignore Rules
- Blocks common secret patterns (API keys, passwords, tokens)
- Excludes OpenClaw configuration files
- Prevents large binary files
- Excludes temporary and cache files

### Security Scan
```bash
# Run security scan
./scripts/security-scan.sh

# Checks for:
# - API keys (sk-*, AIza*)
# - Passwords in files
# - Secrets in configuration
# - Large files (>1MB)
```

## 📊 Backup Strategy

### Automated Backups
```bash
# Set up cron job for daily backups at 6 PM
(crontab -l 2>/dev/null; echo "0 18 * * * $HOME/.openclaw/workspace/scripts/daily-backup.sh >> $HOME/.openclaw/workspace/backup.log 2>&1") | crontab -
```

### Manual Backups
```bash
# Run backup manually
./scripts/daily-backup.sh

# Or use quick backup
./scripts/quick-backup.sh
```

## 🌐 GitHub Setup

### Automatic Setup
The organizer can automatically:
1. Create a private GitHub repository
2. Configure git remote
3. Push initial commit
4. Provide repository URLs

### Manual Setup
If automatic setup fails:
```bash
# Create repository on GitHub.com
# Then run:
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### Environment Variables
```bash
# Configure before running
export GITHUB_USER=yourusername
export GITHUB_TOKEN=ghp_yourtokenhere
export REPO_NAME=openclaw-workspace
export REPO_VISIBILITY=private  # or "public"
```

## 🆘 Troubleshooting

### Common Issues

1. **GitHub API rate limit**
   ```bash
   # Use GitHub CLI if available
   gh auth login
   export GITHUB_CLI_AVAILABLE=true
   ```

2. **Permission denied**
   ```bash
   # Make scripts executable
   chmod +x scripts/*.sh
   ```

3. **Workspace not found**
   ```bash
   # Specify workspace path
   ./scripts/organize-workspace.sh /path/to/workspace
   ```

4. **Git push fails**
   ```bash
   # Check network and credentials
   git remote -v
   git push --verbose
   ```

### Debug Mode
```bash
# Run with debug output
bash -x ./scripts/organize-workspace.sh
```

## 🔄 Reorganization

### Update Existing Workspace
```bash
# Run organizer on existing workspace
./scripts/organize-workspace.sh

# It will:
# 1. Backup existing files
# 2. Update directory structure
# 3. Add missing core files
# 4. Update .gitignore
# 5. Create maintenance scripts
```

### Reset Workspace
```bash
# Backup first
cp -r ~/.openclaw/workspace ~/.openclaw/workspace-backup-$(date +%Y%m%d)

# Reorganize
./scripts/organize-workspace.sh
```

## 📚 Integration with OpenClaw

### AGENTS.md Integration
The organizer creates an `AGENTS.md` that includes:
- Memory system instructions
- Safety guidelines
- Tool usage conventions
- Session startup routine

### Daily Routine
Add to `HEARTBEAT.md`:
```markdown
## Daily Checks
- [ ] Run backup: `./scripts/daily-backup.sh`
- [ ] Health check: `./scripts/health-check.sh`
- [ ] Security scan (weekly): `./scripts/security-scan.sh`
```

## 🎯 Best Practices

### 1. **Regular Backups**
- Set up cron job for daily backups
- Monitor backup logs
- Test recovery periodically

### 2. **Security Maintenance**
- Run security scan weekly
- Review .gitignore rules
- Never commit secrets

### 3. **Workspace Health**
- Run health check weekly
- Monitor workspace size
- Archive old memory files

### 4. **Version Control**
- Commit daily changes
- Use meaningful commit messages
- Keep repository private

## 📞 Support

### Issues
- Check troubleshooting section
- Run health check script
- Review script output

### Contributions
The organizer is open for improvements:
1. Fork the repository
2. Make changes
3. Submit pull request

### Documentation
- [OpenClaw Docs](https://docs.openclaw.ai)
- [Workspace Guide](https://docs.openclaw.ai/workspace)
- [GitHub Repository](https://github.com/dazeb/sentinel-workspace)

## 📄 License

MIT License - See LICENSE file

## 🏷️ Version

Current version: 1.0.0
Last updated: $(date +%Y-%m-%d)

---

*Created with ❤️ for the OpenClaw community*