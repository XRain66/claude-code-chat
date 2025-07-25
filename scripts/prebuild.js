#!/usr/bin/env node

const { syncVersion } = require('./sync-version');
const fs = require('fs');
const path = require('path');

function prebuild() {
    console.log('=== 开始预构建流程 ===');
    
    // 1. 同步版本号
    console.log('步骤 1: 同步版本号...');
    syncVersion();
    
    // 2. 验证 TypeScript 编译
    console.log('步骤 2: 验证文件完整性...');
    const packageJsonPath = path.join(__dirname, '../package.json');
    const tsconfigPath = path.join(__dirname, '../tsconfig.json');
    
    if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json 文件不存在');
    }
    
    if (!fs.existsSync(tsconfigPath)) {
        throw new Error('tsconfig.json 文件不存在');
    }
    
    // 3. 检查源文件
    const srcDir = path.join(__dirname, '../src');
    if (!fs.existsSync(srcDir)) {
        throw new Error('src 目录不存在');
    }
    
    console.log('步骤 3: 验证源文件...');
    const tsFiles = fs.readdirSync(srcDir, { recursive: true })
        .filter(file => file.endsWith('.ts'));
    
    if (tsFiles.length === 0) {
        throw new Error('src 目录中没有找到 TypeScript 文件');
    }
    
    console.log(`找到 ${tsFiles.length} 个 TypeScript 文件`);
    
    console.log('=== 预构建检查完成 ===');
}

if (require.main === module) {
    try {
        prebuild();
        process.exit(0);
    } catch (error) {
        console.error('预构建失败:', error.message);
        process.exit(1);
    }
}

module.exports = { prebuild };