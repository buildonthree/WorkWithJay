1. Main Branch (main) Best Practices
Keep main branch always stable and deployable
Never commit directly to main
Protect your main branch on GitHub
Always pull latest changes before creating a new branch:
git pull origin main

git checkout main
git pull origin main

////////////////////////////////////////////////////////////


2. When to Create a New Branch
Create a new branch when:
Starting a new feature
Fixing a bug
Making experimental changes
Working on different versions of the same feature

////////////////////////////////////////////////////////////

3. How to Create and Switch Branches
main

# Create and switch to a new branch
git checkout -b feature/new-login-page

# Alternative way (newer Git versions)
git switch -c feature/new-login-page

# Switch between existing branches
git checkout main
# or
git switch main

////////////////////////////////////////////////////////////

4. Branch Naming Conventions
patch

feature/   - for new features
bugfix/    - for bug fixes
hotfix/    - for emergency fixes
release/   - for release preparations
docs/      - for documentation updates

Examples:
feature/user-authentication
bugfix/login-error
hotfix/security-patch

////////////////////////////////////////////////////////////

5. Basic Workflow

# 1. Start from updated main
git checkout main
git pull origin main

# 1. Start from updated main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/new-feature

# 3. Make changes and commit
git add .
git commit -m "Add new feature"

# 4. Push branch to remote
git push origin feature/new-feature

# 5. When feature is complete, merge main into your branch first
git checkout feature/new-feature
git pull origin main

# 6. Create Pull Request on GitHub

///////////////////////////////////////////////////////////


6. Common Commands for Branch Management
name
7. Best Practices for Commits
Commit often with meaningful messages
Use present tense in commit messages
Keep commits focused and atomic
"
8. Merging Best Practices
Always review code before merging
Test changes in your branch before merging
Resolve conflicts in your feature branch, not in main
Use Pull Requests for code review
Delete branches after merging
9. When to Merge to Main
Merge to main when:
Feature is complete and tested
Code has been reviewed
All tests pass
Documentation is updated
Branch is up to date with main

////////////////////////////////////////////////////////////

7. Best Practices for Commits
Commit often with meaningful messages
Use present tense in commit messages
Keep commits focused and atomic

# Good commit messages:
git commit -m "Add user authentication feature"
git commit -m "Fix login page validation"
git commit -m "Update README with API documentation"

////////////////////////////////////////////////////////////

8. Merging Best Practices
Always review code before merging
Test changes in your branch before merging
Resolve conflicts in your feature branch, not in main
Use Pull Requests for code review
Delete branches after merging

////////////////////////////////////////////////////////////

9. When to Merge to Main
Merge to main when:
Feature is complete and tested
Code has been reviewed
All tests pass
Documentation is updated
Branch is up to date with main

////////////////////////////////////////////////////////////




