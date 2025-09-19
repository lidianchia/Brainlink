#!/bin/bash

echo "🔧 Fixing Ubuntu server deployment issues..."

# Navigate to project directory
cd /root/Brainlink

echo "📥 Pulling latest changes..."
git pull origin main

echo "🔍 Checking about.jsx file..."
if grep -q "getServerSideProps" src/pages/about.jsx; then
    echo "❌ Found getServerSideProps in about.jsx, fixing..."
    
    # Replace getServerSideProps with getStaticProps
    sed -i 's/export async function getServerSideProps() {/export function getStaticProps() {/g' src/pages/about.jsx
    sed -i 's/return { notFound: true };/return {\n    notFound: true,\n  };/g' src/pages/about.jsx
    
    echo "✅ Fixed about.jsx"
else
    echo "✅ about.jsx is already correct"
fi

echo "🔍 Checking medical-map.jsx file..."
if grep -q "getServerSideProps" src/pages/medical-map.jsx; then
    echo "❌ Found getServerSideProps in medical-map.jsx, fixing..."
    
    # Replace getServerSideProps with getStaticProps
    sed -i 's/export async function getServerSideProps() {/export function getStaticProps() {/g' src/pages/medical-map.jsx
    sed -i 's/return { notFound: true };/return {\n    notFound: true,\n  };/g' src/pages/medical-map.jsx
    
    echo "✅ Fixed medical-map.jsx"
else
    echo "✅ medical-map.jsx is already correct"
fi

echo "🧹 Cleaning build directory..."
rm -rf dist/

echo "🔨 Building project..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Starting server..."
    pnpm run serve
else
    echo "❌ Build failed!"
    exit 1
fi
