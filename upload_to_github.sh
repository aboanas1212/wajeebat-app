#!/bin/bash

PROJECT_DIR="MuslimDutiesApp"
REPO_NAME="MuslimDutiesApp"

# Check if gh CLI is installed and authenticated
if ! command -v gh &> /dev/null
then
    echo "GitHub CLI (gh) could not be found. Please install it and authenticate: https://cli.github.com/"
    exit 1
fi

if ! gh auth status &> /dev/null
then
    echo "You are not authenticated with GitHub CLI. Please run 'gh auth login' and try again."
    exit 1
fi

# Navigate to project directory
cd $PROJECT_DIR

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

# Add all files and commit
echo "Adding files and committing..."
git add .
git commit -m "Initial project setup with Expo and GitHub Actions"

# Create a private GitHub repository
echo "Creating private GitHub repository: $REPO_NAME..."
if gh repo create $REPO_NAME --private --source . --remote=upstream &> /dev/null
then
    echo "Repository created successfully."
else
    echo "Repository $REPO_NAME might already exist or there was an error creating it. Attempting to set remote and push."
    git remote add origin https://github.com/$(gh api user -q .login)/$REPO_NAME.git 2>/dev/null
fi

# Push to GitHub
echo "Pushing code to GitHub..."
git push -u origin master

echo "Project uploaded to GitHub successfully!"
echo "You can find your repository at: https://github.com/$(gh api user -q .login)/$REPO_NAME"
